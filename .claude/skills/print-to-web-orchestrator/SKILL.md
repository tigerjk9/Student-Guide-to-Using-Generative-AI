---
name: print-to-web-orchestrator
description: 인쇄용 PDF/문서 교육자료를 네오브루탈리즘 단일 index.html 지도자료 웹페이지로 변환하는 전체 파이프라인을 조율한다. "PDF를 웹페이지로", "안내서를 index.html로", "지도자료 웹페이지 만들어줘", "인쇄물 웹 변환", "이 자료를 네오브루탈리즘으로" 등의 요청 시 사용. 초안 작성뿐 아니라 재실행·업데이트·수정·보완·부분 재실행(콘텐츠만/디자인만/특정 탭만 다시)·이전 결과 기반 개선 모두 처리한다. content-mapper → page-architect → web-builder → fidelity-reviewer 4단계 파이프라인을 운영한다.
---

# print-to-web 오케스트레이터

인쇄물(PDF)을 **네오브루탈리즘 단일 HTML 지도자료**로 바꾸는 파이프라인의 리더. 4개 전문 에이전트를 순서대로 운영하고 결과를 종합한다.

## 실행 모드
**서브 에이전트 파이프라인 + 생성-검증 루프.** 각 단계가 파일 산출물을 다음 단계로 넘기는 순차 의존 구조라 팀 실시간 통신이 불필요하다. 모든 Agent 호출은 `model: "opus"`. 대용량 산출물은 `_workspace/` 파일 기반 전달.

```
[오케스트레이터]
  Phase 0  컨텍스트 확인 (초기 / 후속 / 부분 재실행)
  Phase 1  content-mapper   → _workspace/01_content-map.md
  Phase 2  page-architect   → _workspace/02_build-spec.md
  Phase 3  web-builder      → index.html
  Phase 4  fidelity-reviewer→ _workspace/04_review.md
           └ REVISE/REWRITE면 web-builder 재호출(P0/P1만) → 재검수 (최대 2회)
  종합 보고 + 진화 피드백 요청
```

## Phase 0 — 컨텍스트 확인 (먼저 수행)
- `_workspace/` 없음 → **초기 실행**: Phase 1부터 전체.
- `_workspace/` 있음 + 부분 수정 요청("디자인만/콘텐츠만/○○ 탭만 다시") → **부분 재실행**: 해당 단계 에이전트만 재호출, 나머지 산출물 재사용.
  - 콘텐츠 변경 → Phase 1부터. 배치/디자인 변경 → Phase 2부터. 구현 버그/스타일 → Phase 3(+4). 검수만 → Phase 4.
- `_workspace/` 있음 + 새 입력(다른 PDF) → **새 실행**: 기존 `_workspace/`를 `_workspace_prev/`로 이동 후 Phase 1부터.

## 단계별 운영
| Phase | 에이전트 | 스킬 | 입력 → 출력 |
|------|---------|------|------------|
| 1 | content-mapper | pdf-content-map | PDF → `01_content-map.md` |
| 2 | page-architect | neobrutalist-design-system | `01` → `02_build-spec.md` |
| 3 | web-builder | neobrutalist-web-build (+ design-system) | `02` → `index.html` |
| 4 | fidelity-reviewer | fidelity-review | `index.html`+`01`+`02` → `04_review.md` |

Agent 호출 예: `Agent(subagent_type 또는 prompt에 에이전트 정의 참조, model:"opus")`. 빌트인이 아닌 커스텀 에이전트는 정의 파일(`.claude/agents/*.md`)의 역할·프로토콜을 prompt에 주입하고, 입력/출력 파일 경로를 명시한다.

## 데이터 전달
파일 기반(`_workspace/{phase}_{agent}_{artifact}`) + 반환값(요약). 최종 산출물 `index.html`만 루트에 출력, 중간 파일은 `_workspace/`에 보존(감사 추적).

## 에러 핸들링
- 한 단계 실패 시 1회 재시도. 재실패면 그 단계 산출물 없이 진행하지 않고(파이프라인 의존성), 사용자에게 차단 사유 보고.
- 리뷰 P0가 2회 루프 후에도 남으면, 남은 항목을 보고서에 명시하고 사용자 판단을 구한다(임의 삭제 금지).
- 상충/모호 콘텐츠는 삭제하지 않고 출처 병기.

## 테스트 시나리오
- **정상 흐름**: "이 PDF를 index.html 지도자료로 만들어줘" → Phase 1~4, 리뷰 PASS, `index.html` 생성, 자가진단 80점 만점·결과밴드 정확.
- **부분 재실행**: "자가진단 탭 디자인만 더 또렷하게" → Phase 0이 부분 재실행 판정 → Phase 3만 재호출(해당 탭) → Phase 4 재검수.
- **에러 흐름**: PDF 텍스트 추출 실패 → content-mapper가 이미지 렌더링 폴백 → 그래도 실패 시 사용자에게 원문 형식 확인 요청.

## 종합 후 (진화)
완료 보고 후 "결과에서 바꾸고 싶은 점/팀 구성에 대한 의견"을 1회 묻는다. 피드백은 유형별로 스킬/에이전트/오케스트레이터에 반영하고 CLAUDE.md 변경 이력에 기록한다.
