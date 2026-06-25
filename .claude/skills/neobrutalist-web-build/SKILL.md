---
name: neobrutalist-web-build
description: 빌드 명세를 단일 index.html(Tailwind CDN + Pretendard, 무빌드)로 구현하는 방법. 데이터-뷰 분리, 탭 전환, 점수형 퀴즈, 저장형 체크리스트, 복사형 프롬프트 스니펫, 모달·토스트 등 인터랙션 구현 레시피를 제공. 네오브루탈리즘 단일 HTML 지도자료/교육 웹페이지를 만들 때 사용.
---

# 네오브루탈리즘 단일 HTML 빌드

`neobrutalist-design-system` 스킬의 디자인 토큰을 전제로, **명세 → 단일 `index.html`** 구현 절차를 정의한다.

## 골격
```
<head> 메타 + Tailwind CDN + Pretendard + tailwind.config + <style>(코어 유틸 CSS)
<body>
  <header> sticky 노랑 + 데스크톱 탭 + 모바일 햄버거 메뉴
  <main> 탭별 <section data-panel="…" class="panel [hidden]">
  <footer> 검정 카드 + 크레딧(원작/편집)
  <div id="toast">  (+ 필요시 동적 #modal)
  <script> ① 데이터 배열 → ② 렌더 → ③ 인터랙션
```

## 구현 원칙 (왜)
- **단일 파일·무빌드**: 복사·배포·공유가 가장 쉬워야 교사가 실제로 쓴다. 외부 이미지 없이 이모지 아이콘.
- **데이터-뷰 분리**: 내용 교체로 재사용 가능해야 한다. 모든 가변 콘텐츠는 배열 → 렌더 함수.
- **정확성 보존**: 점검 문항·점수밴드·약속 항목·전화번호처럼 정확성이 중요한 텍스트는 원문 그대로. 의역·축약 금지.
- **점진적 인터랙션**: 기능을 한 번에 다 넣지 말고 탭→데이터→렌더→인터랙션 순으로 쌓고 각 단계 동작 확인.

## 탭 전환 코어
```js
function switchTab(name){
  document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('hidden', p.dataset.panel!==name));
  document.querySelectorAll('.tab-btn,.mtab').forEach(b=>b.classList.toggle('active', b.dataset.tab===name));
  document.getElementById('mobileMenu').classList.add('hidden');
  window.scrollTo({top:0,behavior:'smooth'}); history.replaceState(null,'','#'+name);
}
// 해시 초기 진입 복원: location.hash 로 초기 탭 결정
```

## 인터랙션 레시피
점수형 퀴즈(설문→점수밴드), 저장형 체크리스트(다짐/약속 + localStorage + 진행률 + 텍스트 입력칸), 복사형 스니펫(클립보드 + 토스트), 모달은 분량이 크므로 별도 파일에 둔다.

> **반드시 참조**: `references/interactive-recipes.md` — 위 4개 인터랙션의 검증된 구현 코드와 함정(점수 합산식·밴드 경계 off-by-one, localStorage JSON 파싱, 라디오 그룹 name 충돌)을 담고 있다. 인터랙티브 컴포넌트를 구현하기 전에 읽는다.

## 마무리 체크
- 데이터 배열 위에 한국어 주석 "여기를 바꾸면 됩니다" 표기
- 모바일/전자칠판 폭에서 표·그리드가 깨지지 않는지(가로 스크롤 래퍼)
- 모든 버튼 `aria-label`/포커스, 충분한 대비
- 콘솔 에러 0 (정적 점검: `node --check` 불가하므로 브라우저/구문 검토)
