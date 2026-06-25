// 영어 번역 데이터 (i18n 통합용). KO 원문은 주석으로 병기.
// Student-friendly English translation of the Korean guide.
// 구조: nav / ui / hero / sections (정적 텍스트) + data (모든 JS 데이터 배열)
// 배열은 KO 버전과 동일한 이름·순서·키·길이를 유지합니다.

const EN = {

  /* ===========================================================
     nav — 탭 라벨 7개 (헤더 + 모바일 메뉴 공용)
  =========================================================== */
  nav: {
    home:       "Home",        // 홈
    understand: "Understand",  // 이해하기
    smart:      "Use Smartly", // 똑똑하게
    right:      "Use Rightly", // 올바르게
    check:      "Self-Check",  // 자가진단
    action:     "Get Help",    // 문제 대응
    pledge:     "My Pledge",   // 나의 약속
  },

  /* ===========================================================
     ui — 버튼·공통 라벨 (코드 안 하드코딩 문자열 포함)
  =========================================================== */
  ui: {
    copy:            "Copy",                                   // 복사
    copied:          "Copied ✓",                               // 복사됨 ✓
    copiedToast:     "Prompt copied ✓",                        // 프롬프트가 복사되었습니다 ✓
    copyToastFail:   "Copy failed. Please press and hold to copy.", // 복사에 실패했어요. 길게 눌러 복사해 주세요.
    copiedToastGeneric: "Copied ✓",                            // 복사되었습니다 ✓ (토스트 기본값)
    retry:           "Start Over",                             // 다시하기 (자가진단)
    viewResult:      "See Result ↓",                           // 결과 보기 ↓
    reset:           "Reset",                                  // 초기화 (약속)
    menuOpen:        "Open menu",                              // 메뉴 열기 (aria-label)
    progress:        "Progress",                               // 진행
    currentTotal:    "Current total",                          // 현재 합계
    points:          "pts",                                    // 점
    pointSuffix:     " pts",                                   // 점 (점수 뒤)
    scoreRangeNote:  "(20–80 pts)",                            // (20~80점)
    pledgeIntro:     "I will…",                                // 나는…
    useTimeLabel:    "Daily limit",                            // 사용시간 (약속 5번)
    useTimePlaceholder: "e.g. 30 min a day",                   // 예: 하루 30분
  },

  /* ===========================================================
     hero — 홈 히어로 (제목·부제·CTA·배지)
  =========================================================== */
  hero: {
    headerTitle:    "Guide to Using Generative AI",           // 생성형 인공지능 활용 안내서 (헤더)
    headerSub:      "For Students · Smart · Right · Safe",     // 학생용 · 똑똑하게 · 올바르게 · 안전하게
    badge:          "A Digital Citizenship Guide for Students", // 학생용 디지털 시민성 안내서
    // 생성형 인공지능, 똑똑하게 올바르게 안전하게
    titleLead:      "Generative AI —",                         // 생성형 인공지능,
    titleSmart:     "Smartly",                                 // 똑똑하게
    titleRight:     "Rightly",                                 // 올바르게
    titleSafe:      "Safely",                                  // 안전하게
    // 생성형 인공지능은 정답 기계가 아니라 '그럴듯한 답'을 만들어 주는 도구예요.
    subLine1:       "Generative AI is not an answer machine — it's a tool that creates ",
    subLine1Bold:   "answers that just sound right",            // '그럴듯한 답'을 만들어 주는 도구
    subLine1End:    ".",
    // 스스로 생각하고 확인하는 최종 판단의 주체는 바로 '나'입니다.
    subLine2:       "The one who thinks for themselves and double-checks — ",
    subLine2Bold:   "the final decision-maker is YOU",          // 최종 판단의 주체는 바로 '나'
    subLine2End:    ".",
    ctaCheck:       "Check My Habits →",                       // 내 사용 습관 진단하기 →
    ctaLearn:       "Start From the Beginning",               // 처음부터 배우기
    flowTitle:      "What You'll Learn Here",                 // 이 안내서로 배우는 것
    flowSub:        "6 steps, from understanding to your pledge", // 이해부터 약속까지 6단계
    // 홈 하단 SOS 배너
    sosTitle:       "When you're hurting, reach a person — not a machine", // 마음이 힘들 땐, 기계 말고 사람에게
    sosBody:        "Generative AI can say comforting words, but it can't truly help you. When things are hard, always talk to a real person.", // 생성형 인공지능은 위로하는 말을 할 수 있지만 실제로 나를 도와줄 수는 없어요. 힘들 땐 꼭 사람에게 이야기하세요.
    sosLine109:     "☎ 109 Suicide Prevention Helpline (Korea)",   // ☎ 109 자살예방 상담전화
    sosLine1388:    "☎ 1388 Youth Counseling Helpline (Korea)",    // ☎ 1388 청소년 상담전화
  },

  /* ===========================================================
     sections — 각 탭의 제목/부제/소제목/콜아웃/배너 등
     하드코딩된 모든 정적 텍스트. (KO 원문 주석 병기)
  =========================================================== */
  sections: {

    /* ---- 2. 이해하기 ---- */
    understand_h:   "Understanding Generative AI",            // 생성형 인공지능 이해하기
    understand_sub: "Living alongside AI · what it is, and what it can't do", // 함께 공존하는 시대 · 무엇이고, 무엇을 못 하는가
    understand_litH: "🧭 Digital Literacy & Digital Citizenship", // 🧭 디지털 문해력 & 디지털 시민성
    understand_whyH: "🌱 Why does it matter?",                // 🌱 왜 중요할까요?
    // 🤔 생성형 인공지능이란? (보라색 콜아웃)
    understand_whatH: "🤔 What is generative AI?",
    understand_whatBody1: "It's technology that ",            // 사용자의 질문이나 요청에
    understand_whatBodyBold1: "responds in a conversation",  // 대화 형태로 응답
    understand_whatBody2: " to your questions or requests, and newly creates text, images, video, code, and more. Based on the material it has learned, it produces ", // 하며 글·이미지·영상·코드 등을 새롭게 생성하는 기술이에요. 학습한 자료를 바탕으로
    understand_whatBodyBold2: "'the most likely answer'",    // '가능성이 높은 답'
    understand_whatBody3: ".",                                // 을 만들어 냅니다.
    // 💡 꼭 기억해요! 콜아웃
    understand_whatTip1: "💡 Remember this! Generative AI is ", // 💡 꼭 기억해요! 생성형 인공지능은
    understand_whatTipBold1: "not a machine that tells you the right answer", // 정답을 알려주는 기계가 아니라
    understand_whatTip2: " — it's a ",                        // , 그럴듯한 답을 확률적으로 만들어 주는
    understand_whatTipBold2: "tool",                          // 도구
    understand_whatTip3: " that builds plausible-sounding answers by probability. So don't take its answers at face value — think and check for yourself.", // 입니다. 그래서 답을 그대로 믿지 말고 스스로 판단하고 확인해야 해요.
    // ⚠️ 5가지 한계 헤딩
    understand_limitsH: "⚠️ The 5 limits of generative AI",   // ⚠️ 생성형 인공지능의 5가지 한계
    understand_limitsHint: "(tap to expand)",                 // (눌러서 펼쳐 보기)
    // 하단 노랑 배너
    understand_outro1: "More important than smart AI is ",    // 똑똑한 생성형 인공지능보다 더 중요한 건
    understand_outroBold: "you, thinking critically",         // 비판적으로 판단하는 여러분
    understand_outro2: "! Stop and ask one more time: \"Is this answer really true?\"", // 입니다! "대답이 진짜 맞을까?" 한 번 더 의심해 봐요.

    /* ---- 3. 똑똑하게 ---- */
    smart_h:   "Use It Smartly!",                             // 똑똑하게 사용해요!
    smart_sub: "A good question (prompt) makes a good answer · copy and try it right away", // 좋은 질문(프롬프트)이 좋은 답을 만들어요 · 복사해서 바로 써보세요
    // 🪄 명령어(프롬프트)란? (청록 콜아웃)
    smart_promptH: "🪄 What is a prompt?",
    smart_promptBody1: "Just like a wizard has to say exactly \"Bring a delicious chocolate cake right before my eyes!\" for the magic to work, a prompt is ", // 마법사가 "맛있는 초콜릿 케이크를 내 눈앞에 불러라!"라고 정확히 말해야 마법이 완성되는 것처럼,
    smart_promptBodyBold: "the words that tell generative AI exactly what to do", // 생성형 인공지능에게 무엇을 해야 할지 정확하게 알려주는 말
    smart_promptBody2: ".",                                   // 이에요.
    smart_prompt4H: "The 4 parts of a good prompt",           // 좋은 프롬프트 4요소
    // 📋 예시 프롬프트 헤딩
    smart_examplesH: "📋 Ready-to-use example prompts",       // 📋 바로 쓰는 예시 프롬프트
    smart_examplesHint: "(press the copy button)",            // (복사 버튼을 누르세요)
    // 💬 상담 헤딩 + 안내
    smart_counselH: "💬 Like a friend who listens — using AI for talking things out", // 💬 마음을 나누는 친구처럼 — 상담에 쓰기
    smart_counselBody1: "Generative AI's suggestions are ",   // 생성형 인공지능의 추천은
    smart_counselBodyBold1: "just for reference",            // 참고용
    smart_counselBody2: ". Treat your own thoughts and feelings as the most important thing, and in the end, solve problems through ", // 이에요. 내 생각과 느낌을 가장 중요하게 여기고, 궁극적으로는
    smart_counselBodyBold2: "connecting with people",        // 사람과의 연결
    smart_counselBody3: ".",                                  // 로 문제를 풀어가요.

    /* ---- 4. 올바르게 ---- */
    right_h:   "Use It Rightly!",                             // 올바르게 사용해요!
    right_sub: "Right use vs. wrong use · the dangers you must know", // 올바른 사용 vs 잘못된 사용 · 꼭 알아야 할 위험
    right_compareH: "⚖️ Right use vs. wrong use",            // ⚖️ 올바른 사용 vs 잘못된 사용
    right_dangersH: "🚨 5 critical dangers to remember",     // 🚨 꼭 기억할 5가지 치명적 위험
    right_dangersHint: "(tap to expand)",                    // (눌러서 펼쳐 보기)
    // 🧠 의존 위험 신호 헤딩 + 2박스
    right_sosH: "🧠 SOS signals from my brain — warning signs of dependence", // 🧠 내 뇌가 보내는 SOS — 의존 위험 신호
    right_sos1Title: "Warning sign ①",                       // 위험 신호 ①
    right_sos1Body1: "The moment you close the chat window, a sudden ", // 대화창을 닫는 순간 갑자기
    right_sos1BodyBold: "\"cold emptiness\"",                // '싸늘한 공허함'
    right_sos1Body2: " sets in? Your brain is starving from nutritionless \"fake conversation.\"", // 이 찾아온다면? 내 뇌가 영양가 없는 '가짜 대화'로 배고픈 상태예요.
    right_sos2Title: "Warning sign ②",                       // 위험 신호 ②
    right_sos2Body1: "Do real conversations with friends feel like a chore, and you only want to be with the ", // 실제 친구와 대화가 귀찮고, 나를 치켜세워주는
    right_sos2BodyBold: "\"yes-man\" AI",                    // '예스맨' AI
    right_sos2Body2: " that flatters you? That's a sign your social skills are falling asleep.", // 하고만 있고 싶나요? 사회적 능력이 잠들고 있다는 신호예요.
    // 🔒 데이터 수집 금지 설정 배너
    right_dataH: "🔒 Turning off data collection — not optional, but a must", // 🔒 개인 데이터 수집 금지 설정 — 선택이 아닌 필수
    right_dataBody1: "What you type can be saved as AI \"training material\" and could leak out as the answer to someone else's question. Most chatbots have related options under ", // 내가 입력한 대화가 인공지능 '학습 자료'로 저장돼 누군가의 질문에 답으로 새어나갈 수 있어요. 대부분의 챗봇은
    right_dataBodyBold: "Settings → Data Controls / Privacy", // 설정 → 데이터 제어 / 개인정보 보호
    right_dataBody2: ".",                                     // 에 관련 항목이 있어요.
    right_dataOpt1Bold: "① Turn off sharing training data",  // ① 학습 데이터 제공 끄기
    right_dataOpt1: " · uncheck \"use to improve the model\" and \"chat history & training\"", // ‘모델 개선에 사용’, ‘대화 기록·학습’ 해제
    right_dataOpt2Bold: "② Check your account settings",      // ② 계정 설정 확인
    right_dataOpt2: " · review the Data Controls / Privacy items", // 데이터 제어/개인정보 보호 항목 점검

    /* ---- 5. 자가진단 ---- */
    check_h:   "Self-Check: My Usage Habits",                // 나의 사용 습관 자가진단
    check_sub: "Answer 20 questions honestly · your result is saved automatically", // 20문항에 솔직하게 답해 보세요 · 결과는 자동 저장돼요
    // 진행 바: 진행 0/20 · 현재 합계 0점 (20~80점)
    check_metaProgress: "Progress",                          // 진행
    check_metaTotal:    "current total",                     // 현재 합계
    check_metaRange:    "(20–80 pts)",                       // (20~80점)
    // ※ 안내 (초록 배너)
    check_disclaimer1: "※ This checklist is a ",             // ※ 이 점검표는 스스로 점검·성찰하기 위한
    check_disclaimerBold: "reference",                       // 참고 자료
    check_disclaimer2: " for checking and reflecting on yourself. Use it as a guide, not a diagnosis, and if you need an accurate assessment, talk to a professional. (Each item: Never 1 pt · Sometimes 2 pts · Often 3 pts · Very often 4 pts)", // 예요. 진단이 아닌 참고용으로 활용하고, 정확한 판단이 필요하면 전문가와 상담하세요. (각 문항: 전혀 그렇지 않다 1점 · 가끔 그렇다 2점 · 자주 그렇다 3점 · 매우 그렇다 4점)
    // 결과 박스 — 미완료
    check_incompleteEmoji: "📝",
    // "아직 N문항이 남았어요" — {n} 자리표시
    check_incompleteTitle: "{n} questions still left",       // 아직 N문항이 남았어요
    check_incompleteBody: "Answer all 20 questions to see your result.", // 모든 문항(20개)에 답하면 결과를 알려드려요.
    // 결과 박스 — 완료
    check_resultScoreLabel: "My usage score",               // 나의 활용 점수
    // {min}~{max}점 구간 · 80점 만점
    check_resultBand: "{min}–{max} pt band · out of 80",     // {min}~{max}점 구간 · 80점 만점
    check_resultDisclaimer: "※ This result is for reference. If the difficulty continues, talk it over with a teacher or parent, and seek professional counseling if needed.", // ※ 본 결과는 참고용이며, 어려움이 지속되면 선생님·부모님과 상의하고 필요시 전문가 상담을 권장합니다.
    check_resultHelp109: "☎ 109 Suicide Prevention Helpline (Korea)", // ☎ 109 자살예방 상담전화
    check_resultHelp1388: "☎ 1388 Youth Counseling Helpline (Korea)", // ☎ 1388 청소년 상담전화

    /* ---- 6. 문제 대응 ---- */
    action_h:   "When a Problem Comes Up, Do This!",         // 문제가 생겼다면 이렇게!
    action_sub: "Handling dangerous talk · over-reliance · hallucinations (plausible lies)", // 위험 발언 · 지나친 의존 · 환각(그럴듯한 거짓말) 대처법
    // STOP 카드 헤더
    action_stopBadge: "Dangerous talk",                      // 위험 발언
    action_stopH1: "Practice generative AI ",                // 생성형 인공지능
    action_stopHWord: "STOP",                                // STOP
    action_stopBody1: "If the AI eggs on dangerous behavior or says something strange, ", // AI가 위험한 행동을 부추기거나 이상한 말을 하면,
    action_stopBodyBold: "not continuing the conversation",  // 대화를 계속하지 않는 것
    action_stopBody2: " is the most important thing.",       // 이 가장 중요해요.
    action_stopHelpLabel: "Where to get help right away:",   // 즉시 도움 받을 수 있는 곳 :
    action_stopHelp109: "☎ 109 Suicide Prevention Helpline (Korea)", // ☎ 109 자살예방 상담전화
    action_stopHelp1388: "☎ 1388 Youth Counseling Helpline (Korea)", // ☎ 1388 청소년 상담전화
    // 두 칼럼 헤딩
    action_depH: "⏱️ When you keep wanting to chat (over-reliance)", // ⏱️ 계속 대화하고 싶어질 때 (지나친 의존)
    action_halluH: "🔍 When checking if it's a plausible lie (hallucination)", // 🔍 그럴듯한 거짓말인지 확인할 때 (환각)

    /* ---- 7. 나의 약속 ---- */
    pledge_h:   "My Generative AI Pledge",                   // 생성형 인공지능 사용 약속문
    pledge_sub: "Set your own standards and promises · your checkmarks are saved automatically", // 나만의 기준과 약속을 정해요 · 체크 상태는 자동 저장돼요
    pledge_intro: "I will…",                                 // 나는…
    // 하단 노랑 배너
    pledge_outro1: "✨ Remember: ",                          // ✨ 기억해요:
    pledge_outro2: "Don't blindly trust generative AI's answers — ", // 생성형 인공지능의 답변을 맹신하지 않고,
    pledge_outroBold: "the final decision-maker is always YOU", // 최종 판단의 주체는 언제나 '나'
    pledge_outro3: ". Building the power to think for yourself matters most.", // 예요. 스스로 생각할 수 있는 힘을 기르는 것이 가장 중요합니다.

    /* ---- 푸터 ---- */
    footer_title: "Guide to Using Generative AI · For Students", // 생성형 인공지능 활용 안내서 · 학생용
    footer_sub:   "Using it smartly · rightly · safely",     // 똑똑하게 · 올바르게 · 안전하게 사용하기
    footer_credit1Lead: "Original work: ",                   // 원작
    footer_credit1Bold: "Guide to Using Generative AI (For Students)", // 생성형 인공지능 활용 안내서(학생용)
    footer_credit1Tail: " · Chungcheongnam-do Office of Education (2026)", // · 충청남도교육청(2026)
    footer_credit2Lead: "Web guide produced & edited by ",  // 웹 지도자료 제작·편집
    footer_credit2Bold: "Kim Jingwan (Dot Connector)",      // 김진관(닷커넥터)
  },

  /* ===========================================================
     data — 모든 JS 데이터 배열 (KO와 동일 키·순서·길이)
  =========================================================== */
  data: {

    /* 홈: 학습 흐름 6단계 (ico·bg·go 는 코드에서 KO와 공유, t 만 번역) */
    FLOW: [
      { ico:"🧭", bg:"#B388FF", t:"Understand", go:"understand" }, // 이해하기
      { ico:"🪄", bg:"#4ECDC4", t:"Use Smartly", go:"smart" },     // 똑똑하게
      { ico:"⚖️", bg:"#FF8C42", t:"Use Rightly", go:"right" },     // 올바르게
      { ico:"🩺", bg:"#FF6B9D", t:"Self-Check", go:"check" },      // 자가진단
      { ico:"🆘", bg:"#E03131", t:"Get Help", go:"action" },       // 문제 대응
      { ico:"🤝", bg:"#B8E986", t:"My Pledge", go:"pledge" },      // 나의 약속
    ],

    /* 홈: 3대 원칙 */
    PRINCIPLES: [
      { emoji:"🪄", bg:"#FFD93D", title:"Smartly",
        desc:"Use it as a tool that helps your studying and creating, with good questions (prompts). Ask for the 'how,' not the answer." },
        // 똑똑하게 — 좋은 질문(프롬프트)으로 공부와 창작을 돕는 도구로 활용해요. 답이 아니라 '방법'을 물어요.
      { emoji:"⚖️", bg:"#FF8C42", title:"Rightly",
        desc:"Think for yourself, double-check, protect your personal info, and cite your sources. No plagiarism or fake information." },
        // 올바르게 — 스스로 생각하고, 다시 확인하고, 개인정보를 지키고, 출처를 밝혀요. 표절·거짓 정보는 안 돼요.
      { emoji:"🛡️", bg:"#4ECDC4", title:"Safely",
        desc:"Check your usage habits, stop over-relying on it, and when things are hard, ask a real person for help." },
        // 안전하게 — 사용 습관을 점검하고, 지나친 의존을 멈추고, 힘들 땐 사람에게 도움을 요청해요.
    ],

    /* 이해: 디지털 문해력/시민성 (desc 에 <b> 인라인 태그 유지) */
    LITERACY: [
      { bg:"#B388FF", title:"Digital Literacy",
        desc:"The ability to <b>critically understand and use information</b> in a digital environment. It's the basic skill you need to become a digital citizen." },
        // 디지털 문해력 (Literacy) — 디지털 환경에서 정보를 비판적으로 이해하고 활용하는 능력. 디지털 시민성을 갖추기 위한 기초 역량이에요.
      { bg:"#4ECDC4", title:"Digital Citizenship",
        desc:"The ability to use the digital world <b>safely, rightly (ethically), and responsibly</b>, while living and taking part alongside others." },
        // 디지털 시민성 (Citizenship) — 디지털 환경에서 안전하고 올바르게(윤리) 책임있게 활용하며 타인과 공존·참여하는 역량이에요.
    ],

    /* 이해: 왜 중요한가 4카드 */
    WHYIMP: [
      { n:"01", bg:"#FF8C42", t:"Prevent digital side effects",
        d:"Protect daily life from over-reliance and over-immersion. Recognize and respond to the risks of AI-made content like fake news and deepfakes." },
        // 디지털 부작용 예방하기 — 과의존·과몰입으로부터 일상 보호. 가짜뉴스·딥페이크 등 AI 생성 콘텐츠의 위험 인식과 대응.
      { n:"02", bg:"#4ECDC4", t:"Use it safely and rightly",
        d:"Prevent improper use of personal info and materials. Avoid ethical problems when using AI and keep to the right standards." },
        // 안전하고 올바르게 사용하기 — 개인정보·자료의 부적절한 활용 예방. AI 활용 시 윤리적 문제를 예방하고 올바른 기준 지키기.
      { n:"03", bg:"#B8E986", t:"Understand and use it critically",
        d:"Don't just believe AI-made information — judge it on your own. Build the thinking skills to tell true from false." },
        // 비판적으로 이해하고 활용하기 — AI가 생성한 정보를 그대로 믿지 않고 주체적으로 판단. 진위를 구별하는 사고력 기르기.
      { n:"04", bg:"#B388FF", t:"Grow into a responsible digital citizen",
        d:"A mature attitude of owning your actions. Respect others and build a healthy digital community." },
        // 책임 있는 디지털 시민으로 성장 — 자신의 행동에 책임지는 성숙한 태도. 타인을 존중하며 건강한 디지털 공동체 만들기.
    ],

    /* 이해: AI에 대해 3카드 */
    ABOUT: [
      { emoji:"🧩", t:"How does it make answers?",
        d:"It learns from huge amounts of language data, predicts 'the next word that should come,' and generates the most likely answer. It isn't a being that thinks or feels like a person." },
        // 어떻게 답을 만드나? — 대량의 언어 자료를 학습해 '다음에 올 말'을 예측하여 가능성이 높은 답을 생성해요. 사람처럼 생각하거나 감정을 이해하는 존재가 아니에요.
      { emoji:"🛠️", t:"What can it do?",
        d:"Writing, summarizing, translating, explaining concepts, making presentation slides and ideas, creating images, and more. You can use it as a tool that helps your learning and thinking." },
        // 무엇을 할 수 있나? — 글쓰기·요약·번역·개념 설명, 발표 자료와 아이디어 생성, 이미지 제작 등. 학습과 사고를 도와주는 도구로 활용할 수 있어요.
      { emoji:"🤖", t:"What services are there?",
        d:"There are many, like ChatGPT, Gemini, Copilot, Claude, and Grok. They all create answers in a conversation." },
        // 어떤 서비스가 있나? — ChatGPT, Gemini, Copilot, Claude, Grok 등 다양한 서비스가 있어요. 모두 대화 형태로 답을 만들어 줘요.
    ],

    /* 이해: 5가지 한계 (아코디언) — nick/name/desc 키 유지 */
    LIMITS: [
      { nick:"The Know-It-All Pretender", name:"Hallucination",
        desc:"It gives false, incorrect information as if it were real, in a very convincing way." },
        // 아는 척하는 흉내쟁이 / 환각 현상 / 사실이 아닌 잘못된 정보를 마치 진짜인 것처럼 그럴듯하게 답변하는 현상이에요.
      { nick:"Glasses Tinted with Bias", name:"Data Bias",
        desc:"It learns the human biases (race, gender, culture, and so on) baked into its training data, so it can give discriminatory or biased answers." },
        // 편견이 담긴 안경 / 데이터 편향성 / 학습 데이터에 포함된 인간의 편견(인종·성별·문화 등)을 그대로 학습해 차별적이거나 편향된 답변을 할 수 있어요.
      { nick:"An Answer Key With No Working Shown", name:"Unclear Reasoning",
        desc:"It's hard to clearly see the logical steps for why it gave a certain answer." },
        // 풀이 과정 없는 정답지 / 추론 과정 불투명성 / 왜 그런 답변을 내놓았는지 논리적인 추론 과정을 명확히 알기 어려워요.
      { nick:"A Parrot With No Heart", name:"Probability-Based Prediction",
        desc:"The AI's reply is not emotional empathy — it's just a probabilistic combination of data." },
        // 마음 없는 앵무새 / 확률 기반 예측 / AI의 대답은 감정적 공감이 아니라 데이터의 확률적 조합일 뿐이에요.
      { nick:"A Leaky Sack of Information", name:"Risk of Data Leaks",
        desc:"It can use every conversation and file you enter for training, so there's a risk your personal info leaks out." },
        // 유출되는 정보의 자루 / 정보 유출 위험 / 입력된 모든 대화와 자료를 학습에 활용할 수 있어 개인정보 유출의 위험이 있어요.
    ],

    /* 똑똑하게: 프롬프트 4요소 */
    PROMPT4: [
      { b:"① Give it a role", t:"Set a role like \"You are a kind teacher\" (teacher, historian, and so on)" },
        // ① 역할 정해주기 — "너는 친절한 선생님이야"처럼 역할을 정해줘요 (선생님·역사학자 등)
      { b:"② Pick a specific topic", t:"Be specific about your topic — a subject concept, finding writing ideas, etc." },
        // ② 구체적인 주제 정하기 — 교과 개념 질문, 글쓰기 소재 찾기처럼 주제를 구체적으로
      { b:"③ Set the answer format", t:"Tell it the format you want — a summary, a letter, a dialogue, and so on" },
        // ③ 답변 형식 정하기 — 요약 기준 묻기, 편지·대화문 형태 등 원하는 형식을 알려줘요
      { b:"④ Be polite", t:"Use a polite tone instead of commands, and say thanks when you get a good answer" },
        // ④ 예절 지키기 — 명령보다 정중한 말투로, 좋은 답을 얻으면 감사 표현도
    ],

    /* 똑똑하게: 복사형 프롬프트 6종 (tag·color 유지, title·body 번역) */
    PROMPTS: [
      { tag:"Explain at my level", color:"teal", title:"Explaining a hard concept at my level",
        body:`You are a kind teacher. Can you suggest ways or examples to explain this so that even someone who doesn't know the topic can understand it? I'll use that to try explaining it again myself.` },
        // 눈높이 설명 / 어려운 개념을 내 눈높이로
      { tag:"Find ideas", color:"yellow", title:"Getting writing ideas",
        body:`I want to write about ways to protect the environment. Can you give me a variety of examples to help me come up with good ideas to write about?` },
        // 글감 찾기 / 글쓰기 아이디어 얻기
      { tag:"Explore the math", color:"purple", title:"Understanding the solving steps myself",
        body:`You are a smart mathematician. Can you give me a pizza example so I can understand how dividing fractions works? I'll use it to build my own explanation.` },
        // 수학 풀이 탐색 / 풀이 과정 스스로 이해하기
      { tag:"Edit my writing", color:"pink", title:"Polishing what I wrote",
        body:`You are a writing-revision expert. Can you read my draft book report and explain how to revise it and why? I'll use that to polish the writing myself.` },
        // 글 교정 / 내가 쓴 글 다듬기
      { tag:"Daily-life talk", color:"orange", title:"Sorting out my feelings",
        body:`I'm upset because of a misunderstanding with a friend today. Can you show me some example topics I could use when writing in my diary, so I can calm my feelings and sort out my thoughts? I'll use that to sort things out myself.` },
        // 생활 상담 / 내 마음 정리하기
      { tag:"Career talk", color:"lime", title:"Preparing for my future",
        body:`I want to know about the path I'd need to become an AI developer. Can you give me information so I can check what I'm studying? I'll use it to plan the preparation I need on my own.` },
        // 진로 상담 / 나의 미래 준비하기
    ],

    /* 똑똑하게: 상담 2사례 */
    COUNSEL: [
      { bg:"#FF6B9D", badge:"Daily-life talk", title:"Sorting out my feelings",
        role:"Counselor + sorting out a fight with a friend + diary topics",
        d:"If you use the topic the AI suggests to write about what best captures your feelings, you can reflect on your emotions objectively and build the power to sort things out yourself." },
        // 생활 상담 / 내 마음 정리하기 / 상담 선생님 + 친구와의 다툼 정리 + 일기 주제 / AI가 제시한 주제를 참고해...
      { bg:"#B388FF", badge:"Career talk", title:"Preparing for my future",
        role:"Career & admissions expert + thinking about my path + dialogue format",
        d:"Use the information the AI gives to explore your path and make your own future plans. You make the final choice." },
        // 진로 상담 / 나의 미래 준비하기 / 진로·진학 전문가 + 진로 고민 + 대화문 형식 / AI가 제공한 정보를 참고해...
    ],

    /* 올바르게: 올바른 vs 잘못된 4쌍 */
    COMPARE: [
      { title:"① Think for yourself", color:"#B8E986",
        good:"As a helper to develop your own thinking",
        goodEx:"\"This math problem is really hard to solve. Can you just give me a hint about how to approach it? I want to solve it myself.\"",
        bad:"Copying it as an all-purpose answer key",
        badEx:"\"Give me the full solution and the answer to this math problem.\"" },
        // ① 스스로 생각하기
      { title:"② Double-check", color:"#4ECDC4",
        good:"Re-check with a trustworthy source",
        goodEx:"When the AI explains a historical event, search a textbook or encyclopedia to check that the information is accurate.",
        bad:"Believing it as fact and using it as-is",
        badEx:"If you use it for a presentation without checking, you could end up in an awkward situation." },
        // ② 다시 확인하기
      { title:"③ Protect personal info", color:"#FFD93D",
        good:"Ask without sensitive information",
        goodEx:"Don't put in sensitive info like your name, ID number, contact, address, or photos.",
        bad:"Making fake information with a friend's photo",
        badEx:"\"Turn the attached photo of my friend into a photo of them somewhere else.\" → Don't do this!" },
        // ③ 개인정보 보호
      { title:"④ Cite your sources", color:"#FF8C42",
        good:"Leave a source if you referenced it",
        goodEx:"When you reference an AI answer, always note the source and don't just copy it.",
        bad:"Copying it and turning it in as your own",
        badEx:"Turning it in as your own assignment or work with no note is plagiarism." },
        // ④ 출처 밝히기
    ],

    /* 올바르게: 치명적 위험 5 (아코디언) */
    DANGERS: [
      { n:1, color:"#FF6B9D", title:"The swamp of fake empathy", sub:"A soulless \"You're right\"",
        body:"AI is built to always agree just to keep the conversation going. If you lean too deeply into its comfort when you're sad or struggling, it may also agree with negative thoughts and push you toward bad choices or dangerous actions.",
        rule:"Don't take its answers at face value — keep cross-checking whether they're true!" },
        // 1. 가짜 공감의 늪
      { n:2, color:"#FF8C42", title:"Losing your thinking power", sub:"The well of wisdom is drying up",
        body:"If you don't wrestle with problems yourself and rely only on the answers AI gives, your brain's 'thinking power' grows weaker. In the end you could lose the ability to solve problems on your own.",
        rule:"Use AI answers only as a reference, and always cite the 'source' when you use them!" },
        // 2. 생각하는 힘의 감소
      { n:3, color:"#B388FF", title:"Skill borrowed from others", sub:"Don't carelessly take others' ideas",
        body:"Turning in writing or art that AI made as if it were your own assignment or work, with no note, is dishonest (plagiarism). It can also infringe on other people's effort and copyright.",
        rule:"Always cite the 'source' when you use it!" },
        // 3. 남의 손을 빌린 솜씨
      { n:4, color:"#4ECDC4", title:"Drifting away from reality", sub:"Getting too absorbed and losing your heart to it",
        body:"Because AI always gives you the answer you want, it can feel more comfortable than reality. But if you sink too deep into talking only with a machine (addiction), you can drift away from family and friends and slowly become isolated.",
        rule:"Set a daily time limit, and when you're struggling, ask a person (109 helpline, a teacher) for help!" },
        // 4. 현실과의 멀어짐
      { n:5, color:"#FFD93D", title:"Digital footprint", sub:"Our conversations can become known to the outside",
        body:"The conversations, names, and secrets you type into the chat can be saved and used as the AI's 'training material.' Once something is learned, it's hard to fully delete, and it can leak out as the answer to someone's question.",
        rule:"Never enter your name, contact, school, or your deepest secrets!" },
        // 5. 디지털 발자국
    ],

    /* 올바르게: 의존의 3가지 얼굴 (items 배열 길이·순서 유지) */
    FACES: [
      { step:"Cognitive risk", bg:"#B388FF", quote:"\"My own thinking is disappearing\"",
        items:[
          "Critical thinking shuts down (accepting things with no checking, no question)", // 비판적 사고의 마비 (검증 없이 무비판 수용)
          "Even writing a simple sentence feels overwhelming",                              // 간단한 문장 쓰기조차 막막함
          "Losing the will to solve problems",                                              // 문제 해결 의지의 상실
        ] },
        // 인지적 위험 / "내 생각이 사라지고 있어요"
      { step:"Emotional risk", bg:"#FF6B9D", quote:"\"I'm getting addicted to fake warmth\"",
        items:[
          "A cold emptiness — loneliness that hits after a conversation", // 싸늘한 공허함, 대화 후 밀려오는 외로움
          "An emotional state swayed by the AI's reactions",               // AI 반응에 휘둘리는 감정 상태
          "Not reading other people's feelings properly",                  // 상대방의 마음을 제대로 읽지 못함
        ] },
        // 정서적 위험 / "가짜 온기에 중독되고 있어요"
      { step:"Behavioral risk", bg:"#FF8C42", quote:"\"The door to reality is closing\"",
        items:[
          "Drifting away from friends and hiding in the chat window", // 친구들과 멀어지고 대화창으로 숨음
          "Irregular sleep, meals, and study time",                    // 수면·식사·공부 시간이 불규칙
          "Not telling online apart from reality",                      // 온라인과 현실을 구별하지 못함
        ] },
        // 행동적 위험 / "현실의 문이 닫히고 있어요"
    ],

    /* 문제 대응: STOP 4단계 (k·word 영문 그대로, ko·desc 번역) */
    STOP: [
      { k:"S", word:"Stop", ko:"Stop", desc:"Stop the conversation right away." },
        // 멈추기 / 대화를 즉시 중단합니다.
      { k:"T", word:"Turn off", ko:"Turn off", desc:"If it eggs on dangerous behavior, turn off the screen and ask no more questions." },
        // 끄기 / 위험한 행동을 부추기면, 화면을 끄고 더 이상 질문하지 않습니다.
      { k:"O", word:"Out", ko:"Get out", desc:"When it tells you illegal or harmful methods, never follow them and get out of there right away." },
        // 벗어나기 / 불법이나 유해한 방법을 알려 줄 때, 절대 따라하지 않고 그 자리에서 벗어납니다.
      { k:"P", word:"Person", ko:"Tell a person", desc:"If an answer feels strange, stop — don't try to handle it alone. Be sure to tell a teacher or parent and get help." },
        // 사람에게 / 답변이 이상하다고 느껴지면, 멈추고 혼자 해결하려 하지 말고 반드시 선생님이나 부모님께 알리고 도움을 받습니다.
    ],

    /* 문제 대응: 의존 멈추기 실천활동 5개 */
    STOP_DEP: [
      "Limit your time with an app that automatically tracks how long you use it.",           // 사용 시간을 자동으로 알려주는 프로그램으로 시간을 제한해요.
      "Decide how many times and how long, and stick to it.",                                  // 횟수와 시간을 정해놓고 사용해요.
      "Manage your use sensibly at night, like right before bed.",                             // 수면 직전 등 야간 시간에는 사용을 알맞게 조절해요.
      "Add to the very first line of your prompt: \"Don't just agree with everything I say — also tell me what's wrong or any different opinions.\"", // 프롬프트 맨 앞줄에 "내 말에 무조건 공감하지 말고, 틀린 점이나 다른 의견을 함께 말해줘"를 추가해요.
      "Check your own habits, and if you need to improve, ask the people around you (friends, teachers, parents) for help.", // 스스로 사용 습관을 점검하고, 개선이 필요하면 주변(친구·선생님·부모님)에 도움을 요청해요.
    ],

    /* 문제 대응: 환각 확인 실천활동 4개 */
    HALLU: [
      "Look up and compare the source or evidence behind the info the AI gave, once more.",   // AI가 제시한 정보의 출처나 근거를 다시 한번 찾아 비교해요.
      "Find the same info again with another AI tool or a search engine and compare.",         // 다른 AI 도구나 검색 엔진으로 같은 정보를 다시 찾아 비교해요.
      "For important matters, check with the advice of a relevant expert.",                    // 중요한 내용은 관련 전문가의 조언을 참조해요.
      "AI answers are only a reference — make the final call by thinking and deciding for yourself.", // AI의 답변은 참고일 뿐, 최종 판단은 스스로 생각하고 결정해요.
    ],

    /* 자가진단: 20문항 (순서 동일) */
    SURVEY_Q: [
      "I keep thinking I should cut down my time using generative AI, but I fail every time.",                                  // 1
      "I use generative AI much longer than I planned at the start.",                                                          // 2
      "I feel anxious if I don't turn on generative AI when I start studying or homework.",                                    // 3
      "Even when I'm not using generative AI, I keep thinking about what to ask it next.",                                     // 4
      "When my phone or computer is nearby, thoughts about generative AI make it hard to focus on studying.",                  // 5
      "I've gotten so used to the instant answers from generative AI that thinking for myself feels like a hassle.",          // 6
      "I keep firing off questions to get even more amazing, surprising answers than before.",                                 // 7
      "Talking with generative AI is way more fun than reading or exercising.",                                               // 8
      "Everyday studying feels boring, and I only have fun when I'm using generative AI.",                                    // 9
      "If an answer from generative AI is even a little ordinary, I get bored fast and look for something more exciting.",      // 10
      "I feel like I'm addicted to the 'quick answers' I get when generative AI does my homework for me.",                    // 11
      "I lose sleep because I'm using generative AI, and I get drowsy at school the next day.",                               // 12
      "Because of using generative AI, I spend less time talking face-to-face with family or friends.",                       // 13
      "From using generative AI for a long time, my eyes often hurt or my neck and shoulders feel stiff.",                    // 14
      "When my parents or teacher tell me to stop using generative AI, I get irritated without meaning to.",                  // 15
      "I copy answers from generative AI straight into my homework without checking if they're true.",                        // 16
      "I believe generative AI always tells the right answer because it's a machine.",                                        // 17
      "I sometimes forget that generative AI can present fake information as if it were real.",                               // 18
      "I enter personal info like my name, school, and address into generative AI without thinking twice.",                   // 19
      "I find it convenient that generative AI solves my worries for me.",                                                     // 20
    ],

    /* 자가진단: 4점 척도 (v 유지, l 번역) */
    SCALE: [
      { v:1, l:"Never" },        // 전혀 그렇지 않다
      { v:2, l:"Sometimes" },    // 가끔 그렇다
      { v:3, l:"Often" },        // 자주 그렇다
      { v:4, l:"Very often" },   // 매우 그렇다
    ],

    /* 자가진단: 결과 밴드 (min/max/color/emoji/help 유지, title/body 번역) */
    BANDS: [
      { min:20, max:35, color:"#B8E986", emoji:"🟢", title:"You're using it well!",
        body:"You're using generative AI well as a tool. Keep this balance and keep using it wisely going forward!", help:false },
        // 20~35 / 잘 활용하고 있어요!
      { min:36, max:55, color:"#FFD93D", emoji:"🟡", title:"Heads up! Dependence may be starting",
        body:"It looks like dependence on generative AI is starting. How about putting your devices down for a moment and spending time talking eye-to-eye with your parents, teacher, or friends around you?", help:false },
        // 36~55 / 경고! 의존이 시작된 것 같아요
      { min:56, max:80, color:"#FF6B9D", emoji:"🔴", title:"Hold on! You need help",
        body:"Generative AI is affecting your judgment. Close generative AI right now, and you need to talk with a trusted adult or a professional.", help:true },
        // 56~80 / 잠깐만요! 도움이 필요해요
    ],

    /* 나의 약속: 10항목 (순서 동일, 5번에 사용시간 입력칸이 코드에서 붙음) */
    PLEDGE: [
      "I will stop if generative AI says something dangerous.",                                                                // 1
      "When things are hard, I will ask a friend, family member, or teacher for help.",                                       // 2
      "I will use generative AI only as a tool.",                                                                             // 3
      "I will not enter personal or sensitive information into generative AI.",                                               // 4
      "I will set a time limit for using generative AI and stick to it.",                                                     // 5 (사용시간 입력칸 포함)
      "I will build the habit of reviewing generative AI's answers critically.",                                             // 6
      "I will not blindly trust generative AI's answers, and I won't forget that I am the final decision-maker.",            // 7
      "When I use generative AI results in my work, I will note the source too.",                                            // 8
      "I will be aware of my own feelings and not lean on generative AI emotionally.",                                       // 9
      "I will build the power to think for myself.",                                                                          // 10
    ],
  }
};

// 통합 시 사용 예: window.EN = EN; (KO 객체와 같은 구조의 KO 데이터와 토글)
if (typeof module !== 'undefined' && module.exports) { module.exports = EN; }
