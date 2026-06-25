# 충실성 리뷰 v2 — i18n/다크모드/글자크기/인쇄/공유 개편 검증

대상: `index.html` (1158줄, 97.9KB) · 기준: `_workspace/01_content-map.md`(KO 보존 데이터), `_workspace/i18n-en.js`(EN 기준)
검증 방식: 파일 코드 레벨 정독 + 정적 스크립트 검사(`node --check`, KO/EN 키·길이 대조, data-i18n 커버리지, 밴드 경계 시뮬레이션, 원문 문구 byte 대조)

## 판정: **PASS**

P0(콘텐츠/로직)·P1(i18n 누락/접근성) 결함 **없음**. 아래는 P2/P3 참고 항목뿐이며 빌더가 굳이 수정하지 않아도 출시 가능.

---

## 통과 확인 목록 (대조 완료 — 객관 근거)

### 1. 콘텐츠 충실성 (KO)
- **SURVEY_Q 20문항**: content-map 라인 54–73과 index `KO_DATA.SURVEY_Q`(505–526) **20/20 완전 일치**(따옴표 ‘’↔' 표기 차이만, 의미 동일). 스크립트로 byte 대조.
- **PLEDGE 10항목**: content-map 94–104와 index(538–548) **10/10 일치**. 5번 "사용시간을 정하고 사용하겠습니다" 보존 + 사용시간 입력칸은 코드(`i===4`, 1037–1041)에서 부착.
- **BANDS 3구간**: 20–35/36–55/56–80 경계·색·이모지·제목·본문 모두 일치(530–537). help 플래그(56–80만 true)로 109/1388 칩 표출(1000–1003).
- **STOP 4단계**(486–491), **LIMITS 5**(417–423), **DANGERS 5**(464–480), **COMPARE 4쌍**(450–463), **FACES 3×3**(481–485), **STOP_DEP 5/HALLU 4**(492–504) 모두 content-map 원문과 별명·문구·실천수칙까지 일치.
- 전화번호 109·1388: 홈 SOS, STOP 도움 라벨, 56–80 밴드 3곳 모두 존재.
- 정적 KO 텍스트(data-i18n 기본 innerHTML): 히어로·콜아웃·배너 의미 보존 확인.

### 2. i18n 정합성 (핵심 — 개편 영역)
- **(a) KO_DATA ↔ EN_DATA 배열 구조**: 키 **19/19 동일**, 이름·순서·길이 전부 일치. 배열 길이 mismatch 0건. 객체 원소 키 셋 mismatch 0건. SURVEY_Q 20·PLEDGE 10·BANDS 3·SCALE 4·FACES items 각 3 **모두 충족**.
- **(b) data-i18n 커버리지**: HTML 내 고유 data-i18n 키 **83개 전부** `EN_STR`에 대응 엔트리 존재 → EN 토글 시 undefined/빈칸 **없음**. 역방향(미사용 EN_STR) 0건. (중복 7개는 nav 키의 헤더/모바일 이중 배치로, KO innerHTML·EN 오버라이드 동일 → 캐시 공유 무해.)
- **(c) T.ko ↔ T.en**: 키 **18/18 동일 집합**.
- **(d) applyStatic**: 로드 시점(스크립트가 body 끝) KO innerHTML을 `KO_CACHE`에 1회 캡처 → EN은 `EN_STR[k]`, KO 복귀는 캐시 복원. 로직 정확.
- **(e) D(name) lang 스위칭**: 모든 19개 배열을 `D()`로만 접근(`KO_DATA.`/`EN_DATA.` 직접 멤버 참조 0건). 하드코딩 KO 배열 잔존 없음. 렌더된 버튼/결과 텍스트도 `tr()`로 lang 대응.

### 3. 인터랙션 로직
- **퀴즈 합산**: `totalScore`=Σ(라디오 값 1~4), 만점 80. `bandFor`가 점수 20~80 전 구간에서 **정확히 1개 밴드** 매칭(구멍·겹침 0 — 스크립트 시뮬레이션). 미응답 시(`done < Q.length`) 결과 잠금 + "N문항 남음" 표시.
- **라디오 name**: `sq0`..`sq19` 문항별 고유. 변경 핸들러 `+name.slice(2)`로 인덱스 파싱 정확.
- **peer 패턴**: `<input class="sr-only peer">` → 형제 `<span class="peer-checked:...">` 순서 정확.
- **localStorage 키**: `genai_survey/genai_pledge/genai_lang/genai_theme/genai_font` 읽기·쓰기 키 일치, 모두 `|| '{}'`/`|| 'ko'` null 방어. survey/pledge 모두 round-trip 정상(숫자 키 문자열화돼도 값 비교 number===number로 동작).
- **복사/공유 대상 정확성**: `copyPrompt(i)`→`D('PROMPTS')[i].body`, `copyResult/shareResult(score)`→`resultSummary`(밴드 제목·본문), `copyLink`→`SHARE_URL`. 각 토스트 lang 대응.
- **약속 체크/사용시간**: 체크 저장·복원(`pledgeState.checks`), 사용시간 입력 저장(`pledgeState.time`), 초기화 시 `{checks:{},time:''}` 재설정 + 진행률 바·% 갱신 정상.

### 4. 새 기능 정합성
- **다크모드**: `themeBtn`→`body.dark` 토글 + 아이콘(🌙/☀️) + aria-label 갱신(1094–1098). `genai_theme` 저장.
- **글자크기**: `fontIdx` 0~2 클램프(로드 시 `Math.min(2,Math.max(0,...))`, 버튼도 클램프), `FONT_SIZES[idx]`를 `documentElement.fontSize`에 적용. `genai_font` 저장.
- **인쇄 @media print**: header/메뉴/컨트롤/toast/skip/.no-print 숨김, `.panel{display:block}`로 전 탭 표시 + 페이지 분리, `details > div/p/ol` 펼침, 하드섀도우 제거. 공유 카드·결과 액션 버튼에 `.no-print` 적용됨.
- **QR**: 정적 SVG가 `#qrBox`에 삽입(1089), `role="img"`+aria-label 보유.
- **탭 전환**: 패널 hidden 토글 + 탭 active/`aria-current` 갱신, 모바일 메뉴 닫힘 + `aria-expanded` 갱신.

### 5. 접근성
- skip-link(본문 바로가기), `focus-visible` 또렷한 아웃라인, 아이콘 버튼 aria-label(EN/한·글자크기·테마·메뉴), 라디오 `aria-label="N. 라벨 (값)"`, 체크박스 `aria-label`(약속문), 각 패널 `aria-label`, lang 토글 시 `documentElement.lang` 갱신. 장식 이모지 `aria-hidden`.

### 6. 회귀
- `<script>` 추출 후 `node --check` → **SYNTAX_OK**.
- `$('id')` 35개 참조 전부 HTML `id=` 또는 동적 생성(`useTime`)과 매칭 — 없는 id 참조 0건.

---

## P2 (디자인/디테일 — 선택 수정)
- **P2-1 `#modal` 죽은 CSS**: 라인 98 `body.dark #modal > div{...}` 셀렉터가 있으나 페이지에 `#modal` 요소 없음(QR은 푸터 인라인). 콘솔 오류·시각 영향 없음. 제거하면 깔끔.
- **P2-2 56–80 밴드 본문 끝문장**: content-map 78번은 "…주변에 도움받을 곳이 없다면, 109나 1388로 전화하세요."로 끝나나 `BANDS[2].body`(536)는 "…상담이 필요합니다."까지만. 단, 109/1388은 `help:true` 칩으로 바로 아래 표출되므로 정보 손실 아님(표현 전환). 의미 보존됨.

## P3 (개선 제안)
- **P3-1 EN 문구 축약**: `EN_STR['check.disclaimer']`는 척도를 "Never 1 · Sometimes 2…"로, 참조 `i18n-en.js`는 "Never 1 pt · Sometimes 2 pts…"로 표기. ABOUT EN "making slides and ideas"(581) vs 참조 "presentation slides and ideas". 모두 의미 동일한 경미한 워딩 차이 — 수정 불필요.
- **P3-2 `aria-current="false"`**: 비활성 탭에 속성을 제거하지 않고 문자열 'false' 설정(1134). ARIA 허용 토큰이라 무해하나, 비활성은 속성 제거가 더 관용적.

---

### 결론
대규모 i18n/다크모드/글자크기/인쇄/공유/접근성 개편이 콘텐츠 충실성과 인터랙션 로직을 **손상 없이** 통합. KO↔EN 구조 완전 대칭, 모든 data-i18n 키 EN 대응, 점수·밴드·저장 로직 정확. **PASS** — 빌더 재수정 불요(P2/P3는 선택).
