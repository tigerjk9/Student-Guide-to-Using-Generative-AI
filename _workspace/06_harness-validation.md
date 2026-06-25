# 하네스 검증 보고서 — print-to-web

**대상:** `print-to-web` 하네스 (인쇄물 PDF → 네오브루탈리즘 단일 index.html 지도자료 변환)
**기준:** harness 스킬 Phase 6 (6-1 구조 / 6-2 실행모드 / 6-4 트리거 / 6-5 드라이런)
**검증일:** 2026-06-25
**검증 방식:** 정적 대조 (에이전트·스킬 파일 전수 읽기 + 상호 참조 추적 + 실제 산출물(`_workspace/`, `index.html`) 데이터 경로 실측)

---

## 종합 판정: **PASS** (P0 없음 / P1 없음 / P2 4건 개선 제안)

하네스 구조·실행모드·트리거·데이터 경로가 Phase 6 기준을 충족한다. 구조 결함(P0)·트리거 누락/충돌(P1)은 발견되지 않았다. 개선 여지는 모두 P2(품질 향상 제안) 수준이다.

| 검증 항목 | 판정 | 최고 심각도 |
|----------|------|------------|
| 6-1 구조 검증 | PASS | P2 (2건) |
| 6-2 실행 모드 검증 | PASS | — |
| 6-4 트리거 검증 | PASS | P2 (1건) |
| 6-5 드라이런 | PASS | P2 (1건) |

---

## 6-1. 구조 검증 — PASS

### 에이전트 파일 (4/4 정상)
| 파일 | 위치 | frontmatter | name 일치 | model |
|------|------|------------|----------|-------|
| `content-mapper.md` | `.claude/agents/` | OK | ✅ | opus |
| `page-architect.md` | `.claude/agents/` | OK | ✅ | opus |
| `web-builder.md` | `.claude/agents/` | OK | ✅ | opus |
| `fidelity-reviewer.md` | `.claude/agents/` | OK | ✅ | opus |

- 4개 모두 `name` + `description` + `model: opus` frontmatter 완비. 파일명 == frontmatter `name` 일치.
- 각 정의에 필수 섹션(핵심 역할·작업 원칙·입력/출력·재호출 지침·협업) 존재. 파이프라인 모드이므로 `## 팀 통신 프로토콜` 미포함은 정상(서브 에이전트 패턴).
- **재호출 지침 전원 포함** — 4개 에이전트 모두 "이전 산출물 존재 시 행동"을 명시(Phase 5-5 요구 충족).

### 스킬 파일 (5/5 정상)
| 스킬 | SKILL.md | name | description | 본문 길이 |
|------|----------|------|------------|----------|
| `pdf-content-map` | OK | ✅ | ✅ | 36줄 |
| `neobrutalist-design-system` | OK | ✅ | ✅ | 74줄 |
| `neobrutalist-web-build` | OK | ✅ | ✅ | 47줄 (+ `references/interactive-recipes.md`) |
| `fidelity-review` | OK | ✅ | ✅ | 30줄 |
| `print-to-web-orchestrator` | OK | ✅ | ✅ | 54줄 |

- 5개 모두 `name` + `description` frontmatter 유효. 본문 전부 500줄 이내(가장 무거운 인터랙션 레시피는 `references/`로 분리 — Progressive Disclosure 준수).
- `neobrutalist-web-build` → `references/interactive-recipes.md` 포인터가 실제 파일로 존재함을 확인(목차 + 4개 인터랙션 레시피).

### 커맨드 미생성 확인
- `.claude/commands/` **부재 확인** (Glob 결과 없음). Phase 6-1 "커맨드 미생성" 기준 충족.

### 에이전트 ↔ 스킬 상호 참조 일관성
- 오케스트레이터 단계별 매핑표(Phase별 에이전트↔스킬)가 실제 파일과 1:1 정합:
  - content-mapper ↔ pdf-content-map
  - page-architect ↔ neobrutalist-design-system
  - web-builder ↔ neobrutalist-web-build(+design-system)
  - fidelity-reviewer ↔ fidelity-review
- 교차 포인터 정합: `neobrutalist-design-system` §6 → `neobrutalist-web-build`의 `interactive-recipes.md` 참조(실존), `neobrutalist-web-build` → `design-system` 토큰 전제(실존), 에이전트 정의가 각 스킬의 핵심 규칙(3px·하드섀도우·데이터-뷰 분리·정확성 보존)을 일관되게 반복.
- CLAUDE.md 하네스 포인터의 구성 설명(에이전트 4 + 스킬 5 + 산출물 경로)이 실제 파일 구조와 일치.

### P2 (구조 개선 제안)
- **[P2-1] 에이전트 정의에 사용 스킬 명시 부재.** 4개 에이전트 `.md` 어디에도 "이 에이전트는 `{skill}` 스킬을 사용한다"는 명시가 없다. 매핑은 오케스트레이터 표에만 존재한다. 에이전트 단독 재사용 시 어떤 스킬을 로드할지 self-contained하지 않다. (수정 제안: 각 에이전트 정의에 `## 사용 스킬` 한 줄 추가.)
- **[P2-2] CLAUDE.md/오케스트레이터에 `model: opus` 표기는 있으나 Agent 호출 시 강제 메커니즘은 문서 의존.** 구조 결함은 아니나, 오케스트레이터가 호출 예시에서 `model:"opus"`를 명시(Phase 5 체크리스트 충족)하므로 현 상태로 PASS. 단 실제 호출 시 누락 방지는 오케스트레이터 실행자 책임으로 남음.

---

## 6-2. 실행 모드 검증 — PASS

**선언된 모드:** 서브 에이전트 파이프라인 + 생성-검증 루프 (오케스트레이터 §실행 모드에 명시).

### 입출력 연결 (파일 경로 기반, dead link 없음)
```
content-mapper   PDF              → _workspace/01_content-map.md
page-architect   01_content-map   → _workspace/02_build-spec.md
web-builder      02_build-spec    → index.html (루트)
fidelity-reviewer index.html+01+02 → _workspace/04_review.md
                 └ REVISE/REWRITE → web-builder(P0/P1만) → 재검수 (최대 2회)
```

- **각 단계 입력 = 직전 단계 출력**으로 끊김 없이 체인됨. 에이전트 정의의 `## 입력`/`## 출력` 경로가 오케스트레이터 매핑표와 글자 단위로 일치(`01_content-map.md`, `02_build-spec.md`, `04_review.md`, `index.html`).
- **생성-검증 루프 폐쇄성 확인:** fidelity-reviewer 정의(§협업)와 fidelity-review 스킬(§출력) 모두 "REVISE/REWRITE → web-builder에 P0/P1 전달 → PASS까지 최대 2회"로 일관 서술. web-builder 정의(§재호출 지침)는 "`04_review.md` 있으면 지적 항목만 정밀 수정, 통과 항목 불변(회귀 방지)"로 루프 수신 측을 명시 → 루프가 양방향으로 닫힘.
- 데이터 전달 전략(파일 기반 + 반환값 기반)이 서브 에이전트 모드 권장 조합과 일치(Phase 5-1 표). `_workspace/{phase}_{artifact}` 네이밍 컨벤션 준수.
- 모든 Agent 호출 `model:"opus"` 명시(오케스트레이터 §실행 모드 + 호출 예).

### 실측 검증 (산출물 존재)
- `_workspace/01_content-map.md`, `02_build-spec.md`, `04_review.md`, 루트 `index.html` 전부 실존 → 파이프라인이 실제로 1회 완주했고 산출물 경로가 살아있음을 확인.
- `04_review.md` 판정 = PASS(조건부 P2 1건). 루프가 실제로 수렴했음을 입증.

---

## 6-4. 트리거 검증 — PASS

**대상 description:** `print-to-web-orchestrator` — "인쇄용 PDF/문서 교육자료를 네오브루탈리즘 단일 index.html 지도자료 웹페이지로 변환하는 전체 파이프라인을 조율한다. … 초안 작성뿐 아니라 재실행·업데이트·수정·보완·부분 재실행(콘텐츠만/디자인만/특정 탭만 다시)·이전 결과 기반 개선 모두 처리한다. content-mapper → page-architect → web-builder → fidelity-reviewer 4단계 파이프라인을 운영한다."

### Should-trigger 쿼리 (10개) — 전부 트리거 판정 ✅
| # | 쿼리 | 판정 | 근거 |
|---|------|------|------|
| 1 | "이 안내서 PDF를 학생용 index.html 지도자료로 만들어줘" | ✅ | "PDF…index.html 지도자료" 핵심 키워드 직격 |
| 2 | "인쇄용 교육자료를 네오브루탈리즘 웹페이지로 변환해줘" | ✅ | "인쇄물 웹 변환"+"네오브루탈리즘" 명시 |
| 3 | "자가진단 탭 디자인만 더 또렷하게 다시 해줘" | ✅ | 부분 재실행("디자인만/특정 탭만") 후속 키워드 |
| 4 | "기존 결과물 콘텐츠만 최신 안내서로 업데이트" | ✅ | "콘텐츠만"+"업데이트" 후속 키워드 |
| 5 | "이 교육 책자를 한 파일짜리 웹 지도자료로 바꿔줘" | ✅ | 암시적("책자→웹 지도자료") — 도메인 의도 명확 |
| 6 | "충남교육청 생성형AI 안내서를 인터랙티브 웹으로" | ✅ | 변환 의도 + 인터랙티브(자가진단/체크리스트 함의) |
| 7 | "지난번에 만든 index.html 푸터 크레딧만 수정" | ✅ | "이전 결과 기반"+"수정" 부분 재실행 |
| 8 | "PDF 안내서를 체크리스트·자가진단 살려서 웹으로" | ✅ | 인터랙션 보존형 변환 = 하네스 고유 목적 |
| 9 | "이 인쇄물 자료 다시 빌드해서 모바일도 되게" | ✅ | "다시 빌드"(재실행)+반응형 = 파이프라인 범위 |
| 10 | "안내서 웹버전 자가진단 점수밴드 경계 잘못됐어 고쳐줘" | ✅ | 인터랙션 로직 수정 → Phase 3(+4) 부분 재실행 |

### Should-NOT-trigger 쿼리 (10개, near-miss) — 전부 비트리거 판정 ✅
| # | 쿼리 | 판정 | 근거 (왜 다른 도구인가) |
|---|------|------|------------------------|
| 1 | "이 PDF에서 텍스트만 추출해서 txt로 저장해줘" | ❌ | 변환 산출물이 web/index.html 아님. 단순 추출 — pdf-content-map조차 "콘텐츠 맵" 아닌 raw 추출. |
| 2 | "리액트 앱을 Vercel에 배포해줘" | ❌ | 입력이 PDF/인쇄물 아니고 산출물이 단일 무빌드 HTML 아님. vercel:deploy 영역. |
| 3 | "이 안내서를 PPT 슬라이드로 만들어줘" | ❌ | 산출물 형식이 웹/HTML 아님(PPTX). 변환 대상 일치하나 타깃 불일치. |
| 4 | "PDF 두 개를 하나로 병합해줘" | ❌ | PDF→PDF 조작. 웹 변환 아님. |
| 5 | "이 HTML 페이지를 PDF로 인쇄용 출력해줘" | ❌ | **방향 역전**(웹→인쇄). 하네스는 인쇄→웹 단방향. |
| 6 | "네오브루탈리즘 색 팔레트 추천해줘" | ❌ | 디자인 자문만 — 변환 파이프라인 불필요. neobrutalist-design-system 스킬 직접 참조로 충분. |
| 7 | "이 한글 보고서를 HWPX로 작성해줘" | ❌ | 산출물 .hwpx, 교육 인쇄물 웹변환 아님. hwpx-skill 영역. |
| 8 | "안내서 내용이 맞는지 사실관계만 검토해줘" | ❌ | 콘텐츠 팩트체크 ≠ index.html 충실성 대조. 변환물이 없으면 fidelity-review도 비대상. |
| 9 | "이 PDF 교육자료를 영어로 번역해줘" | ❌ | 번역 작업 — 형식 변환·웹화 아님. |
| 10 | "유튜브 영상을 블로그 포스트로 변환해줘" | ❌ | 입력(영상)·출력(블로그 포스트) 모두 불일치. `video` 스킬 영역. |

### 기존 스킬 트리거 충돌 점검 — 충돌 없음
- 동일 프로젝트 `.claude/skills/` 내 5개 스킬 중 트리거 description을 가진 것은 오케스트레이터 1개뿐. 나머지 4개(pdf-content-map, design-system, web-build, fidelity-review)는 "방법론" 스킬로, 에이전트가 내부에서 로드하는 용도이며 사용자 발화 트리거를 두고 경쟁하지 않음(역할 분리 명확).
- 전역 스킬 풀과의 경계: `hwpx-skill`(HWPX 산출), `video`(영상→블로그), `vercel:deploy`(앱 배포), `frontend-design`(범용 컴포넌트)와 입력·출력 형식이 모두 구별됨 → near-miss 1~10이 전역 스킬로 새지 않음.
- **잠재적 경계:** pdf-content-map의 description은 "PDF를 웹/HTML로 바꾸거나 인쇄물 내용을 구조화할 때 사용"으로 끝나 오케스트레이터와 키워드가 겹친다. 단 pdf-content-map은 사용자가 직접 부르기보다 content-mapper가 로드하는 하위 방법론이므로 실제 충돌 위험은 낮음.

### P2 (트리거 개선 제안)
- **[P2-3] pdf-content-map description의 "PDF를 웹/HTML로 바꾸…때 사용" 문구가 오케스트레이터와 의미 중복.** "전체 변환은 print-to-web-orchestrator가 담당하며, 본 스킬은 그 1단계 콘텐츠 추출 방법론" 정도의 경계 문구를 추가하면 더 또렷. (현재도 PASS — 하위 방법론이라 실사용 충돌 미미.)

---

## 6-5. 드라이런 — PASS

### Phase 순서 논리성
- Phase 0(컨텍스트 확인) → 1(맵핑) → 2(설계) → 3(빌드) → 4(검증·루프) 순서가 의존성과 정합. 설계 전 콘텐츠 확정, 빌드 전 명세 확정, 검증 전 산출물 존재 — 역전 없음.
- **Phase 0 분기 3종 모두 정의됨:** 초기실행(`_workspace/` 없음) / 부분재실행(있음+부분수정) / 새실행(있음+새PDF, 기존→`_workspace_prev/` 이동). Phase 5-5 "컨텍스트 확인 단계" 요구 충족.
- 부분 재실행 진입점 매핑이 데이터 의존성과 일치: 콘텐츠 변경→Phase1, 배치/디자인→Phase2, 구현버그/스타일→Phase3(+4), 검수만→Phase4. (상류 변경이 하류 재실행을 포함하는 방향성 정확.)

### 데이터 전달 경로 dead link 점검 — 없음
- 4개 파일 경로가 생산자-소비자 양쪽에서 동일 문자열로 참조됨(6-2에서 실측). 끊긴 구간·고아 산출물 없음.
- 실제 `_workspace/` 산출물로 경로 생존 확인. 콘텐츠 맵의 보존 데이터(20문항·밴드 20–35/36–55/56–80·109/1388·STOP)가 review의 대조 항목과, 다시 index.html 데이터 배열과 정합함을 실측(review PASS가 이를 입증). 즉 명세상 경로뿐 아니라 **실데이터가 끝까지 흐른 증거** 확보.

### 부분 재실행 / 에러 폴백 실행 가능성
- **부분 재실행:** Phase 0 분기 + 각 에이전트 재호출 지침(이전 산출물 읽고 피드백분만 수정)이 양쪽에 갖춰져 실행 가능. web-builder는 "통과 항목 불변(회귀 방지)"까지 명시.
- **에러 폴백 3종 정의:** (a) 단계 실패→1회 재시도→재실패 시 차단 보고(임의 진행 금지), (b) 리뷰 P0가 2회 루프 후 잔존→보고 후 사용자 판단(임의 삭제 금지), (c) PDF 텍스트 추출 실패→content-mapper 이미지 렌더링 폴백→그래도 실패 시 원문 형식 확인 요청. 3종 모두 실행 경로가 구체적이고, pdf-content-map 스킬에 이미지 렌더링(PyMuPDF/pdf2image) 폴백 코드가 실제로 존재하여 (c)가 공허하지 않음.
- 테스트 시나리오 섹션(정상/부분재실행/에러 흐름)이 오케스트레이터에 존재(Phase 6-6 요구 충족).

### P2 (드라이런 개선 제안)
- **[P2-4] "최대 2회 루프" 후 P0 잔존 시 사용자 게이트는 정의됐으나, 루프 카운터 추적 주체가 암묵적.** 오케스트레이터가 카운트한다는 전제는 합리적이나, "2회"의 경계(2회째 검수 후 멈춤인지 2회 재빌드 후인지)가 미세하게 모호. 실패 위험은 낮으나 명문화 시 더 견고. (현 상태 PASS.)

---

## P0 / P1 요약

- **P0 (구조 결함): 0건.** 에이전트·스킬 frontmatter 유효, 커맨드 미생성, 상호 참조 정합, 데이터 경로 dead link 없음.
- **P1 (트리거 누락·충돌): 0건.** should-trigger 10/10, should-NOT-trigger 10/10 올바른 판정, 기존 스킬 충돌 없음.
- **P2 (개선 제안): 4건** — [P2-1] 에이전트 정의에 사용 스킬 명시 추가, [P2-2] Agent 호출 시 opus 강제(문서 의존), [P2-3] pdf-content-map 경계 문구, [P2-4] 루프 카운터 명문화. 모두 선택적 품질 향상이며 하네스 동작을 차단하지 않음.

**결론:** print-to-web 하네스는 harness 스킬 Phase 6(6-1/6-2/6-4/6-5) 전 항목 PASS. 즉시 운영 가능하며, 실제 1회 완주 산출물(`index.html` + `_workspace/` 3종, 리뷰 PASS)로 파이프라인 생존이 실증됨.
