(function(){
const KEY="agamaReader.v1";
const $=s=>document.querySelector(s);
const today=()=>new Date().toLocaleDateString("sv-SE"); // YYYY-MM-DD
let S=JSON.parse(localStorage.getItem(KEY)||"null")||{days:[],done:{},notes:{},scores:{},cur:null};
const save=()=>localStorage.setItem(KEY,JSON.stringify(S));
if(!S.days.includes(today())){S.days.push(today());save();}

// ── 語言 ──
const TRX=(typeof TR!=="undefined")?TR:{};
function pickLang(){
  const saved=S.lang;
  if(saved&&UI[saved])return saved;
  const n=(navigator.language||"zh").toLowerCase();
  if(n.startsWith("nl"))return "nl";
  if(n.startsWith("en"))return "en";
  return "zh";
}
let lang=pickLang();
const T=()=>UI[lang];

// 取得目前語言的課程。原文與正解索引一律取自中文原檔；
// 譯文依「索引」逐項對應（標題、出處、解釋、字詞義、題目與選項）。
function view(i){
  const z=LESSONS[i];
  const t=lang!=="zh"&&TRX[lang]&&TRX[lang][i];
  if(!t)return z;
  return {
    title:t.title, source:t.source, explain:t.explain, original:z.original,
    vocab:z.vocab.map((v,k)=>[v[0],t.vocab[k]]),
    quiz:z.quiz.map((q,k)=>({q:t.quiz[k].q,o:t.quiz[k].o,a:q.a}))
  };
}

function applyUI(){
  document.documentElement.lang=lang==="zh"?"zh-Hant":lang;
  document.title=T().doc;
  document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=T()[e.dataset.i18n]);
  $("#note").placeholder=T().notePh;
  $("#foot").textContent=T().foot;
  $("#prevBtn").textContent=T().prev;$("#nextBtn").textContent=T().next;
  $("#lang").innerHTML=LANGS.map(l=>`<option value="${l[0]}" ${l[0]===lang?"selected":""}>${l[1]}</option>`).join("");
  document.body.classList.toggle("lang-zh",lang==="zh");
}

function streak(){
  const set=new Set(S.days);let n=0;const d=new Date();
  if(!set.has(d.toLocaleDateString("sv-SE")))return 0;
  while(set.has(d.toLocaleDateString("sv-SE"))){n++;d.setDate(d.getDate()-1);}
  return n;
}
function firstUndone(){const i=LESSONS.findIndex((_,k)=>!S.done[k]);return i<0?0:i;}
let idx=S.cur!=null?Math.min(S.cur,LESSONS.length-1):firstUndone();

function stats(){
  $("#stUsers").textContent=S.users||1;
  $("#stDays").textContent=S.days.length;
  $("#stStreak").textContent=streak();
  $("#stDone").textContent=Object.keys(S.done).length+"/"+LESSONS.length;
}
(function loadUserCount(){
  const op=S.counted?"get":"hit";
  fetch(`https://abacus.jasoncameron.dev/${op}/abel54575457-agama-reader/users`)
    .then(r=>r.json())
    .then(d=>{if(d&&typeof d.value==="number"){S.users=d.value;S.counted=true;save();$("#stUsers").textContent=d.value;}})
    .catch(()=>{});
})();
function toc(){
  $("#toc").innerHTML=LESSONS.map((_,i)=>
    `<a data-i="${i}" class="${i===idx?"cur":""} ${S.done[i]?"done":""}"><span>${String(i+1).padStart(2,"0")}</span>${view(i).title}</a>`).join("");
  $("#toc").querySelectorAll("a").forEach(a=>a.onclick=()=>{go(+a.dataset.i);$("#toc").classList.remove("open");});
  const c=$("#toc a.cur");if(c&&c.scrollIntoView)c.scrollIntoView({block:"nearest"});
}
function showTab(t){
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===t));
  document.querySelectorAll(".pane").forEach(p=>p.classList.toggle("active",p.id==="pane-"+t));
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>showTab(b.dataset.tab));

function render(keepTab){
  const L=view(idx);
  applyUI();
  $("#dayLabel").textContent=T().dayLabel(idx+1,LESSONS.length);
  $("#title").textContent=L.title;
  $("#source").textContent=L.source;
  $("#original").innerHTML=L.original.map(t=>`<p>${t}</p>`).join("");
  $("#originalNote").textContent=T().originalNote;
  $("#explain").textContent=L.explain;
  $("#vocab").innerHTML=L.vocab.map(v=>`<dt>${v[0]}</dt><dd>${v[1]}</dd>`).join("");
  if(!keepTab)showTab("original");
  // 測驗：選項順序依「則別+題號」固定洗牌；各語言使用相同順序，value 一律是原始索引
  $("#quiz").innerHTML=L.quiz.map((q,qi)=>{
    const order=q.o.map((_,i)=>i).sort((a,b)=>Math.sin((a+1)*(idx+3)*(qi+7))-Math.sin((b+1)*(idx+3)*(qi+7)));
    return `<div class="q" data-qi="${qi}"><p>${qi+1}. ${q.q}</p>`+
    order.map(oi=>`<label><input type="radio" name="q${qi}" value="${oi}"> ${q.o[oi]}</label>`).join("")+`</div>`;}).join("");
  $("#score").textContent=S.scores[idx]!=null?T().lastScore(S.scores[idx],L.quiz.length):"";
  $("#note").value=S.notes[idx]||"";
  $("#saved").textContent="";
  const d=$("#doneBtn");d.classList.toggle("is-done",!!S.done[idx]);
  d.textContent=S.done[idx]?T().done:T().markDone;
  $("#prevBtn").disabled=idx===0;$("#nextBtn").disabled=idx===LESSONS.length-1;
  toc();stats();
}
function go(i){idx=Math.max(0,Math.min(LESSONS.length-1,i));S.cur=idx;save();render();window.scrollTo({top:0,behavior:"smooth"});}

$("#lang").onchange=e=>{lang=e.target.value;S.lang=lang;save();render(true);};
$("#prevBtn").onclick=()=>go(idx-1);
$("#nextBtn").onclick=()=>go(idx+1);
$("#menuBtn").onclick=()=>$("#toc").classList.toggle("open");
$("#doneBtn").onclick=()=>{S.done[idx]?delete S.done[idx]:S.done[idx]=today();save();render(true);};

$("#checkBtn").onclick=()=>{
  const L=view(idx);let sc=0;
  L.quiz.forEach((q,qi)=>{
    const box=document.querySelector(`.q[data-qi="${qi}"]`);
    const sel=box.querySelector("input:checked");
    box.classList.remove("ok","bad");box.querySelectorAll(".ans").forEach(e=>e.remove());
    if(sel){box.querySelectorAll("label").forEach(l=>l.classList.remove("sel"));sel.parentElement.classList.add("sel");}
    if(sel&&+sel.value===q.a){sc++;box.classList.add("ok");}
    else{box.classList.add("bad");box.insertAdjacentHTML("beforeend",`<span class="ans">${T().answer}${q.o[q.a]}</span>`);}
  });
  S.scores[idx]=sc;save();
  $("#score").textContent=T().score(sc,L.quiz.length,sc===L.quiz.length);
};

let t;
$("#note").oninput=e=>{
  S.notes[idx]=e.target.value;save();
  $("#saved").textContent=T().saved;clearTimeout(t);t=setTimeout(()=>$("#saved").textContent="",1500);
};
$("#exportBtn").onclick=()=>{
  const txt=LESSONS.map((_,i)=>S.notes[i]?`${T().noteHead(i+1,view(i).title)}\n${S.notes[i]}\n`:"").filter(Boolean).join("\n")||T().noNotes;
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([txt],{type:"text/plain;charset=utf-8"}));
  a.download=T().fileName;a.click();
};
render();
})();
