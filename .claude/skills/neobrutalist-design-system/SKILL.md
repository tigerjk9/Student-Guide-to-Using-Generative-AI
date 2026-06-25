---
name: neobrutalist-design-system
description: 네오브루탈리즘(Neo-brutalism) 단일 HTML 페이지의 디자인 시스템 레퍼런스. Tailwind CDN + Pretendard 기반의 색 팔레트, 하드 섀도우/굵은 테두리 유틸 CSS, 탭·아코디언·카드·배지·버튼·토스트·모달 컴포넌트 패턴을 제공. 네오브루탈리즘 웹페이지를 만들거나 디자인을 그 스타일로 맞출 때 반드시 사용.
---

# 네오브루탈리즘 디자인 시스템

손으로 오려 붙인 포스터처럼 **두꺼운 검정 테두리 + 흐림 없는 하드 섀도우 + 단색 강조**로 또렷하게 만드는 스타일. 한국 교육자료 톤에 맞춰 밝고 친근하게.

## 왜 이 규칙인가
하드 섀도우와 굵은 테두리는 요소를 종이 카드처럼 분리해 위계를 즉각 읽히게 한다. 흐림(blur) 그림자는 이 효과를 무너뜨리므로 쓰지 않는다. 강조색을 섹션당 1색으로 제한해야 정보가 시끄러워지지 않는다.

## 1. 셋업 (head)
```html
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" as="style" crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
<script>
  tailwind.config = { theme:{ extend:{ fontFamily:{ sans:['Pretendard','system-ui','-apple-system','sans-serif'] } } } };
</script>
```

## 2. 팔레트 (단색 강조)
| 이름 | HEX | 용도 |
|------|-----|------|
| 배경 크림 | `#FFFBEB` | body 배경(+점 패턴) |
| 노랑 | `#FFD93D` | 헤더/주의/핵심 |
| 핑크 | `#FF6B9D` | 강조/위험 |
| 민트 | `#4ECDC4` | 안전/정보 |
| 보라 | `#B388FF` | 보조 강조 |
| 연두 | `#B8E986` | 긍정/성공 |
| 주황 | `#FF8C42` | 경고/액션 |
| 먹 | `#000` | 테두리·텍스트 |

`섹션당 주조색 1개` 원칙. 위험=핑크/주황, 안전·긍정=민트/연두, 정보·이해=보라/노랑로 매핑하면 의미가 색으로 읽힌다.

## 3. 코어 유틸 CSS
```css
html { scroll-behavior:smooth; }
body{ -webkit-font-smoothing:antialiased; background-color:#FFFBEB;
  background-image:radial-gradient(#0000001a 1.2px, transparent 1.2px); background-size:20px 20px; }
.nb    { border:3px solid #000; box-shadow:5px 5px 0 #000; }
.nb-lg { border:3px solid #000; box-shadow:8px 8px 0 #000; }
.nb-sm { border:2px solid #000; box-shadow:3px 3px 0 #000; }
.nb-press{ transition:transform .08s ease, box-shadow .08s ease; }
.nb-press:hover { transform:translate(2px,2px); box-shadow:3px 3px 0 #000; }
.nb-press:active{ transform:translate(5px,5px); box-shadow:0 0 0 #000; }
.fade-in{ animation:fadeIn .3s ease; }
@keyframes fadeIn{ from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
details>summary{ list-style:none; cursor:pointer; }
details>summary::-webkit-details-marker{ display:none; }
details[open] .acc-arrow{ transform:rotate(180deg); }
.code-scroll::-webkit-scrollbar{ height:8px; width:8px; }
.code-scroll::-webkit-scrollbar-thumb{ background:#000; }
```

## 4. 컴포넌트 패턴
- **헤더/내비**: `sticky top-0` + 노랑 배경 + `border-b-[3px]`. 데스크톱 탭 버튼(`.tab-btn`, active=노랑+하드섀도우), 모바일 햄버거 → 그리드 메뉴(`.mtab`).
- **배지**: `inline-block 단색 + border-[3px] + px-2`, `-rotate-1`/`rotate-1`로 살짝 기울임.
- **카드**: `bg-white nb rounded-lg p-5`. 강조 카드는 배경을 팔레트 단색으로.
- **아코디언**: `<details><summary>` + `.acc-arrow ▾`. 번호 뱃지(좌)+제목+화살표(우).
- **비교표**: `border-collapse`, `th` 검정/단색, `td` `border-2 border-black`. 모바일 `overflow-x-auto code-scroll min-w-[…]`.
- **버튼**: 단색 배경 + `border-[3px]` + `.nb-press`, `box-shadow:5px 5px 0 #000`.
- **토스트**: 화면 하단 고정, 검정 배경+노랑 테두리, opacity 토글.
- **모달**: `fixed inset-0 bg-black/40 grid place-items-center`, 내부 `.nb-lg` 카드 + 닫기 버튼.
- **플로우 스텝**: 아이콘 박스(`54px`, border+하드섀도우) + 굵은 라벨, 2~6열 반응형 그리드.

## 5. 타이포
제목 `font-black`(800~900), 본문 `font-semibold`/`font-bold`. 강조 문구는 단색 배경 배지로 감싸 `-rotate-1`.

## 6. 인터랙티브 데이터-뷰 분리 (필수)
가변 콘텐츠는 `<script>` 상단 배열(`const WORKFLOW=[…]`)로 두고 `el.innerHTML = ARR.map(…).join('')`로 렌더. 상태(점수·체크)는 `localStorage`. 한국어 주석으로 "여기를 바꾸면 됩니다" 표시 → 비개발자도 내용 교체 가능.

> 점수형 퀴즈·저장형 체크리스트·복사형 스니펫의 구현 레시피는 `neobrutalist-web-build` 스킬의 `references/interactive-recipes.md` 참조.
