
// 簡寫輔助：mk(標題, 出處, "句1|句2", 解釋, "詞＝義｜詞＝義", [[題, "選項1|選項2|選項3|選項4", 正解索引], ...])
function mk(title, source, original, explain, vocab, quiz){
  return {
    title, source, explain,
    original: original.split("|"),
    vocab: vocab.split("｜").map(s=>s.split("＝")),
    quiz: quiz.map(q=>({q:q[0], o:q[1].split("|"), a:q[2]}))
  };
}
