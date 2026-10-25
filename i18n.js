// 介面文字（三語）。課程內容的翻譯在 translations.js（由 tr/ 合併產生）。
const LANGS=[["zh","中文"],["en","English"],["nl","Nederlands"]];
const UI={
 zh:{
  doc:"阿含日課 · 每日一則", brand:"阿含日課", toc:"目錄",
  stUsers:"使用人數", stDays:"已讀天數", stStreak:"連續天數", stDone:"已完成",
  tabOriginal:"原文", tabExplain:"解釋", tabVocab:"字詞說明",
  originalNote:"",
  quiz:"小測驗", quizSub:"字詞是否讀懂？", check:"交卷",
  notes:"修習筆記", notesSub:"自動儲存於此瀏覽器",
  notePh:"今日有何體會？可寫下觀察、疑問、生活中的練習…",
  export:"匯出全部筆記", saved:"已儲存", prev:"‹ 前一則", next:"下一則 ›",
  markDone:"今日已讀完", done:"已讀完 ✓",
  dayLabel:(i,n)=>`第 ${i} 則 ／ 共 ${n} 則`,
  lastScore:(s,n)=>`上次成績：${s}／${n}`, score:(s,n,p)=>`本次成績：${s}／${n}${p?"　全對 🌸":""}`,
  answer:"正解：", foot:"原文為經典常見段落之摘引，經號與字句請以 CBETA 原典核對。",
  noteHead:(i,t)=>`【第${i}則 ${t}】`, noNotes:"（尚無筆記）", fileName:"阿含日課筆記.txt",
  langLabel:"語言"
 },
 en:{
  doc:"Āgama Daily · One lesson a day", brand:"Āgama Daily", toc:"Contents",
  stUsers:"Users", stDays:"Days read", stStreak:"Day streak", stDone:"Completed",
  tabOriginal:"Original", tabExplain:"Explanation", tabVocab:"Vocabulary",
  originalNote:"Original Chinese text of the Āgama (Chinese canon). Use the other tabs for English.",
  quiz:"Quick quiz", quizSub:"Do you understand the key words?", check:"Submit",
  notes:"Practice notes", notesSub:"Saved automatically in this browser",
  notePh:"What did you notice today? Write observations, questions, or how you practiced…",
  export:"Export all notes", saved:"Saved", prev:"‹ Previous", next:"Next ›",
  markDone:"Mark as read", done:"Read ✓",
  dayLabel:(i,n)=>`Lesson ${i} of ${n}`,
  lastScore:(s,n)=>`Last score: ${s}/${n}`, score:(s,n,p)=>`Score: ${s}/${n}${p?"  Perfect 🌸":""}`,
  answer:"Correct answer: ", foot:"The original passages are selected excerpts from the Chinese Āgamas; please verify wording and sutra numbers against CBETA.",
  noteHead:(i,t)=>`[Lesson ${i} – ${t}]`, noNotes:"(No notes yet)", fileName:"agama-daily-notes.txt",
  langLabel:"Language"
 },
 nl:{
  doc:"Āgama Dagelijks · Eén les per dag", brand:"Āgama Dagelijks", toc:"Inhoud",
  stUsers:"Gebruikers", stDays:"Dagen gelezen", stStreak:"Dagen achtereen", stDone:"Voltooid",
  tabOriginal:"Origineel", tabExplain:"Uitleg", tabVocab:"Woordenlijst",
  originalNote:"Oorspronkelijke Chinese tekst van de Āgama (Chinese canon). Gebruik de andere tabbladen voor het Nederlands.",
  quiz:"Korte quiz", quizSub:"Begrijp je de kernwoorden?", check:"Inleveren",
  notes:"Oefennotities", notesSub:"Automatisch opgeslagen in deze browser",
  notePh:"Wat is je vandaag opgevallen? Schrijf waarnemingen, vragen of hoe je geoefend hebt…",
  export:"Alle notities exporteren", saved:"Opgeslagen", prev:"‹ Vorige", next:"Volgende ›",
  markDone:"Markeer als gelezen", done:"Gelezen ✓",
  dayLabel:(i,n)=>`Les ${i} van ${n}`,
  lastScore:(s,n)=>`Vorige score: ${s}/${n}`, score:(s,n,p)=>`Score: ${s}/${n}${p?"  Alles goed 🌸":""}`,
  answer:"Juiste antwoord: ", foot:"De oorspronkelijke teksten zijn geselecteerde fragmenten uit de Chinese Āgama's; controleer formulering en soetranummers aan de hand van CBETA.",
  noteHead:(i,t)=>`[Les ${i} – ${t}]`, noNotes:"(Nog geen notities)", fileName:"agama-dagelijks-notities.txt",
  langLabel:"Taal"
 }
};
