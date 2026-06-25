# 인터랙션 구현 레시피 (검증된 패턴)

단일 HTML 지도자료에서 반복되는 4가지 인터랙션의 구현 코드와 흔한 함정. 데이터는 모두 `<script>` 상단 배열로 분리한다.

## 목차
1. 점수형 자가진단 퀴즈 (설문 → 점수 밴드)
2. 저장형 체크리스트 / 약속문 (체크 + 진행률 + localStorage + 입력칸)
3. 복사형 프롬프트 스니펫 (클립보드 + 토스트)
4. 모달 (프롬프트 전문 보기 등)

---

## 1. 점수형 자가진단 퀴즈

원문의 "사용 습관 점검표(N문항, 각 1~k점)" + "점수 구간별 결과"를 그대로 디지털화한다.

**데이터 분리**
```js
// 여기를 바꾸면 됩니다 — 문항만 교체하면 다른 진단으로 재사용
const SURVEY_Q = [ "문항1 …", "문항2 …", /* … */ ];   // N개
const SCALE = [               // 선택지(점수)
  {v:1,l:"전혀 그렇지 않다"}, {v:2,l:"가끔 그렇다"},
  {v:3,l:"자주 그렇다"},     {v:4,l:"매우 그렇다"},
];
// 결과 밴드: min/max는 원문 경계 그대로. 경계 포함 관계 주의(이상/이하).
const BANDS = [
  {min:0,  max:35, color:'#B8E986', title:'…', body:'…'},
  {min:36, max:55, color:'#FFD93D', title:'…', body:'…'},
  {min:56, max:999,color:'#FF6B9D', title:'…', body:'…'},
];
```

**렌더 + 채점**
```js
const ans = {};   // {문항index: 점수}
function renderSurvey(){
  surveyEl.innerHTML = SURVEY_Q.map((q,i)=>`
    <div class="bg-white nb rounded-lg p-4">
      <p class="font-bold mb-2"><span class="font-black">${i+1}.</span> ${q}</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
        ${SCALE.map(s=>`
          <label class="cursor-pointer">
            <input type="radio" name="q${i}" value="${s.v}" class="sr-only peer" ${ans[i]===s.v?'checked':''}>
            <span class="block text-center text-xs sm:text-sm font-bold py-2 rounded-md border-2 border-black
              peer-checked:bg-[#FFD93D] peer-checked:shadow-[3px_3px_0_#000]">${s.l}<br>(${s.v}점)</span>
          </label>`).join('')}
      </div></div>`).join('');
}
surveyEl.addEventListener('change', e=>{
  if(e.target.name?.startsWith('q')){ ans[+e.target.name.slice(1)] = +e.target.value; updateScore(); }
});
function totalScore(){ return Object.values(ans).reduce((a,b)=>a+b,0); }
function bandFor(score){ return BANDS.find(b=>score>=b.min && score<=b.max); }
```
**함정**
- 라디오 `name`은 문항마다 고유(`q0,q1,…`). 공유하면 한 문항만 선택된다.
- 결과는 **모든 문항 응답 완료** 후에만 확정(미응답 개수 안내). 부분 점수로 밴드를 보여주면 오해를 부른다.
- 밴드 경계는 원문 그대로(예: 20–35 / 36–55 / 56–80). max를 35로 두면 35.x 없음(정수)이라 안전하지만, 마지막 밴드 max는 (문항수×최대점)으로.
- `peer` 패턴이 동작하려면 `<input>`이 `<span>`보다 **앞**에 있어야 한다.

---

## 2. 저장형 체크리스트 / 약속문

원문의 "다짐/약속 목록"을 체크 상태 저장 + 진행률로. 빈칸(예: 사용시간)은 텍스트 입력으로 저장.

```js
// 여기를 바꾸면 됩니다 — 약속 항목
const PLEDGE = [ "항목1 …", "항목2 …", /* … */ ];
const KEY = 'genai_pledge';
const st = JSON.parse(localStorage.getItem(KEY) || '{}');   // {checks:{}, time:''}
st.checks = st.checks || {};
function renderPledge(){
  pledgeEl.innerHTML = PLEDGE.map((t,i)=>`
    <li><label class="flex items-start gap-2.5 cursor-pointer">
      <input type="checkbox" data-i="${i}" ${st.checks[i]?'checked':''}
        class="mt-0.5 w-5 h-5 accent-black shrink-0">
      <span class="font-semibold ${st.checks[i]?'line-through text-black/40':''}">${t}</span>
    </label></li>`).join('');
  const done = Object.values(st.checks).filter(Boolean).length;
  bar.style.width = Math.round(done/PLEDGE.length*100)+'%';
}
pledgeEl.addEventListener('change', e=>{
  if(e.target.type==='checkbox'){ st.checks[e.target.dataset.i]=e.target.checked;
    localStorage.setItem(KEY, JSON.stringify(st)); renderPledge(); }
});
// 사용시간 입력칸
timeInput.value = st.time||'';
timeInput.addEventListener('input', e=>{ st.time=e.target.value; localStorage.setItem(KEY, JSON.stringify(st)); });
```
**함정**: `JSON.parse(localStorage… || '{}')`로 첫 진입 null 방어. 객체를 통째로 한 키에 저장하면 입력칸·체크가 함께 보존된다. 렌더 후 진행률 즉시 갱신.

---

## 3. 복사형 프롬프트 스니펫
```js
const SNIPPETS = [ {tag:'…',color:'purple',title:'…',body:`…여러 줄…`} ];
function escapeHtml(s){ return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
function copyText(btn,i){
  navigator.clipboard.writeText(SNIPPETS[i].body).then(()=>{ toast('복사되었습니다 ✓');
    const o=btn.textContent; btn.textContent='복사됨 ✓'; setTimeout(()=>btn.textContent=o,1400); });
}
function toast(m){ const t=document.getElementById('toast'); t.textContent=m; t.style.opacity=1; setTimeout(()=>t.style.opacity=0,1600); }
```
**함정**: `<pre>`에 본문을 넣을 때 반드시 `escapeHtml`. `navigator.clipboard`는 https/localhost에서만 동작 → file:// 대비 `.catch()`로 조용히 실패 처리.

---

## 4. 모달 (전문 보기)
```js
function openModal(html){
  let m=document.getElementById('modal');
  if(!m){ m=document.createElement('div'); m.id='modal';
    m.className='fixed inset-0 z-50 bg-black/40 grid place-items-center p-4';
    m.addEventListener('click',e=>{ if(e.target===m) m.remove(); }); document.body.appendChild(m); }
  m.innerHTML=`<div class="bg-white nb-lg rounded-lg p-5 sm:p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto fade-in relative">
    <button onclick="document.getElementById('modal').remove()"
      class="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-md bg-[#FF6B9D] border-2 border-black font-black nb-press">✕</button>
    ${html}</div>`;
}
```
**함정**: 배경 클릭 닫기는 `e.target===m`로 카드 내부 클릭과 구분. ESC 키 닫기를 추가하면 접근성↑.
