# 프로젝트 안내

생성형 인공지능 활용 안내서(학생용) 인쇄물을 네오브루탈리즘 단일 `index.html` 지도자료로 변환·운영하는 저장소.

## 하네스: 인쇄물 → 웹 지도자료 변환 (print-to-web)

**목표:** 인쇄용 PDF/문서 교육자료를 네오브루탈리즘 단일 `index.html` 지도자료 웹페이지로, 콘텐츠 충실성과 인터랙션(자가진단·체크리스트·복사형 프롬프트)을 살려 변환한다.

**트리거:** PDF/안내서/인쇄물을 웹페이지·index.html·지도자료로 변환하거나, 기존 결과물을 재실행·수정·보완(콘텐츠만/디자인만/특정 탭만 포함)하라는 요청 시 `print-to-web-orchestrator` 스킬을 사용하라. 단순 질문은 직접 응답 가능.

**구성:** 에이전트 `content-mapper → page-architect → web-builder → fidelity-reviewer`(서브 에이전트 파이프라인 + 생성-검증 루프, 모두 `model: opus`). 스킬: `pdf-content-map`, `neobrutalist-design-system`, `neobrutalist-web-build`, `fidelity-review`, 오케스트레이터 `print-to-web-orchestrator`. 상세는 각 `.claude/agents/*.md`, `.claude/skills/*/SKILL.md` 참조.

**산출물:** 최종 `index.html`(루트). 중간 산출물은 `_workspace/`(01_content-map · 02_build-spec · 04_review)에 보존.

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-06-25 | 초기 구성 | 전체 | 생성형 AI 안내서 PDF → 단일 HTML 지도자료 변환 하네스 신규 구축 |
| 2026-06-25 | 초기 실행(index.html 생성) + 크레딧 확정·푸터 정리 | index.html, _workspace | 첫 변환 실행, 충실성 리뷰 PASS, 원작 출처(충청남도교육청 2026)·편집(김진관/닷커넥터) 표기 |
| 2026-06-25 | GitHub Pages 배포 | (운영) | 저장소 public 전환 후 main/root Pages 활성화 |
| 2026-06-25 | color-scheme 라이트 고정(모바일 자동 다크모드 차단) | index.html | PC/모바일 색상 불일치 수정 |
