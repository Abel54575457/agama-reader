(function(){
const KEY="agamaReader.v1";
const $=s=>document.querySelector(s);
const today=()=>new Date().toLocaleDateString("sv-SE"); // YYYY-MM-DD
let S=JSON.parse(localStorage.getItem(KEY)||"null")||{days:[],done:{},notes:{},scores:{},cur:null};
const save=()=>localStorage.setItem(KEY,JSON.stringify(S));

if(!S.days.includes(today())){S.days.push(today());save();}

function streak(){
  const set=new Set(S.days);let n=0;const d=new Date();
  if(!set.has(d.toLocaleDateString("sv-SE")))return 0;
  while(set.has(d.toLocaleDateString("sv-SE"))){n++;d.setDate(d.getDate()-1);}
  return n;
}
function firstUndone(){const i=LESSONS.findIndex((_,k)=>!S.done[k]);return i<0?0:i;}
let idx=S.cur!=null?S.cur:firstUndone();

function stats(){
  $("#stDays").textContent=S.days.length;
  $("#stStreak").textContent=streak();
  $("#stDone").textContent=Object.keys(S.done).length+"/"+LESSONS.length;
}
function toc(){
  $("#toc").innerHTML=LESSONS.map((l,i)=>
    `<a data-i="${i}" class="${i===idx?"cur":""} ${S.done[i]?"done":""}"><span>${String(i+1).padStart(2,"0")}</span>${l.title}</a>`).join("");
  $("#toc").querySelectorAll("a").forEach(a=>a.onclick=()=>{go(+a.dataset.i);$("#toc").classList.remove("open");});
}
function showTab(t){
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===t));
  document.querySelectorAll(".pane").forEach(p=>p.classList.toggle("active",p.id==="pane-"+t));
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>showTab(b.dataset.tab));

function render(){
  const L=LESSONS[idx];
  $("#dayLabel").textContent=`第 ${idx+1} 則 ／ 共 ${LESSONS.length} 則`;
  $("#title").textContent=L.title;
  $("#source").textContent=L.source;
  // 原文：直書，每句一欄，由右至左
  $("#original").innerHTML=L.original.map(t=>`<p>${t}</p>`).join("");
  $("#explain").textContent=L.explain;
  $("#vocab").innerHTML=L.vocab.map(v=>`<dt>${v[0]}</dt><dd>${v[1]}</dd>`).join("");
  showTab("original");
  // 測驗
  $("#quiz").innerHTML=L.quiz.map((q,qi)=>`<div class="q" data-qi="${qi}"><p>${qi+1}. ${q.q}</p>`+
    q.o.map((o,oi)=>`<label><input type="radio" name="q${qi}" value="${oi}"> ${o}</label>`).join("")+`</div>`).join("");
  $("#score").textContent=S.scores[idx]!=null?`上次成績：${S.scores[idx]}／${L.quiz.length}`:"";
  // 筆記
  $("#note").value=S.notes[idx]||"";
  $("#saved").textContent="";
  const d=$("#doneBtn");d.classList.toggle("is-done",!!S.done[idx]);
  d.textContent=S.done[idx]?"已讀完 ✓":"今日已讀完";
  $("#prevBtn").disabled=idx===0;$("#nextBtn").disabled=idx===LESSONS.length-1;
  toc();stats();
}
function go(i){idx=Math.max(0,Math.min(LESSONS.length-1,i));S.cur=idx;save();render();window.scrollTo({top:0,behavior:"smooth"});}

$("#prevBtn").onclick=()=>go(idx-1);
$("#nextBtn").onclick=()=>go(idx+1);
$("#menuBtn").onclick=()=>$("#toc").classList.toggle("open");
$("#doneBtn").onclick=()=>{S.done[idx]?delete S.done[idx]:S.done[idx]=today();save();render();};

$("#checkBtn").onclick=()=>{
  const L=LESSONS[idx];let sc=0;
  L.quiz.forEach((q,qi)=>{
    const box=document.querySelector(`.q[data-qi="${qi}"]`);
    const sel=box.querySelector("input:checked");
    box.classList.remove("ok","bad");box.querySelectorAll(".ans").forEach(e=>e.remove());
    if(sel){box.querySelectorAll("label").forEach(l=>l.classList.remove("sel"));sel.parentElement.classList.add("sel");}
    if(sel&&+sel.value===q.a){sc++;box.classList.add("ok");}
    else{box.classList.add("bad");box.insertAdjacentHTML("beforeend",`<span class="ans">正解：${q.o[q.a]}</span>`);}
  });
  S.scores[idx]=sc;save();
  $("#score").textContent=`本次成績：${sc}／${L.quiz.length}${sc===L.quiz.length?"　全對 🌸":""}`;
};

let t;
$("#note").oninput=e=>{
  S.notes[idx]=e.target.value;save();
  $("#saved").textContent="已儲存";clearTimeout(t);t=setTimeout(()=>$("#saved").textContent="",1500);
};
$("#exportBtn").onclick=()=>{
  const txt=LESSONS.map((l,i)=>S.notes[i]?`【第${i+1}則 ${l.title}】\n${S.notes[i]}\n`:"").filter(Boolean).join("\n")||"（尚無筆記）";
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([txt],{type:"text/plain;charset=utf-8"}));
  a.download="阿含日課筆記.txt";a.click();
};
render();
})();
