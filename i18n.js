// 介面文字與導讀說明（三語）。課程內容的翻譯在 translations.js。
const LANGS=[["zh","中文"],["en","English"],["nl","Nederlands"]];
const UI={
 zh:{
  doc:"阿含日課 · 每日一則", brand:"阿含日課", toc:"目錄",
  aboutBtn:"導讀說明", aboutActive:"返回日課", backToLesson:"返回日課閱讀",
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
  langLabel:"語言",
  aboutHTML:`
    <p class="day">導讀與使用指南</p>
    <h2>《阿含經》核心精華與「阿含日課」要義</h2>
    <p class="source">回歸佛陀本懷 · 每日一則如實修習</p>

    <div class="about-sec">
      <h3>一、《阿含經》是什麼？</h3>
      <p>「阿含」（梵語 Āgama）意為「傳承之教、法歸」。漢譯四部阿含（《雜阿含經》、《中阿含經》、《長阿含經》、《增壹阿含經》）與南傳巴利《尼柯耶》（Nikāya）同源，是佛教史上最貼近釋迦牟尼佛親口教示的根本聖典。</p>
      <p>《阿含經》不談玄虛神話與形上臆測（如「毒箭之喻」），而是如大醫王般直指人類生命苦惱的成因與止息之道——<strong>以「緣起」為核心，以「四聖諦」為綱領，以「三十七道品、八正道」為實踐方法，導向貪瞋癡永盡的「涅槃」解脫</strong>。</p>
    </div>

    <div class="about-sec">
      <h3>二、本站在百則日課中鋪陳的五大核心體系</h3>
      <dl class="about-list">
        <dt>第 01–20 則｜總綱與關鍵法義</dt>
        <dd>先立根本知見：緣起法則、五蘊無常苦非我之「真實正觀」、自洲法洲、涅槃本義、中道不二、法住智與涅槃智，以及「身受與心受（第二支箭）」等日常最實用的觀照核心。</dd>
        <dt>第 21–30 則｜佛陀的態度與人間精神</dt>
        <dd>諸佛皆出人間、不與世間諍、只說如手中所握樹葉般導向離苦之法、重「教誡示現」而不炫神通，並確立「依法不依人、依義不依語、依智不依識、依了義不依不了義」的修學準則。</dd>
        <dt>第 31–42 則｜緣起法與十二因緣</dt>
        <dd>深入「此有故彼有，此無故彼無」的條件法則，解析無明、行、識、名色、六入處、觸、受、愛、取、有、生、老死十二支的流轉與還滅，掌握在「受」與「愛」之間以正念截斷苦鏈的關鍵樞紐。</dd>
        <dt>第 43–62 則｜四聖諦與苦諦（五蘊、六入處）</dt>
        <dd>從三轉十二行、八苦、三苦，進入三法印、五受陰非我、世間空、四識住，以及守護六根門頭（如龜藏六），於每一次眼耳鼻舌身意接觸外境時，如實知其「集、滅、味、患、離」。</dd>
        <dt>第 63–100 則｜集諦、滅諦、道諦與實修次第</dt>
        <dd>剖析三毒、三結、五下分結與五上分結（集諦）；明辨四沙門果、有餘與無餘涅槃、心解脫與慧解脫（滅諦）；最後完整展開<strong>八正道、戒定慧三增上學、七覺支、五根五力、對治五蓋、孝養布施與止觀雙運</strong>（道諦）。</dd>
      </dl>
    </div>

    <div class="about-sec">
      <h3>三、「阿含日課」網站要義與使用方式</h3>
      <p>佛法不在高談闊論，而在日用常行中的覺察。本網站以日本禪風書頁設計，將浩瀚經藏化為<strong>每日一則、循序漸進的百日修學日課</strong>：</p>
      <ul class="about-ul">
        <li><strong>三大閱讀視角</strong>：每則皆設「<strong>原文</strong>」（直讀經典核心短句）、「<strong>解釋</strong>」（白話闡明法義與生活應用）、「<strong>字詞說明</strong>」（逐字拆解古漢語與佛學名相），層層深入。</li>
        <li><strong>字詞小測驗</strong>：讀完後透過 2–3 題互動測驗，檢視是否真正讀懂經中關鍵字詞（如「行、受陰、無漏、法住」等），避免望文生義。</li>
        <li><strong>修習筆記與匯出</strong>：於下方筆記欄寫下當日觀照心得或生活練習，內容自動儲存在您的瀏覽器中，並可隨時按「匯出全部筆記」下載保存。</li>
        <li><strong>修行軌跡與三語對照</strong>：頂部自動統計<strong>使用人數、已讀天數、連續天數與完成進度</strong>；並支援<strong>繁體中文、英文（English）、荷蘭文（Nederlands）</strong>三語切換，方便跨語對讀與海外分享。</li>
      </ul>
    </div>
  `
 },
 en:{
  doc:"Āgama Daily · One lesson a day", brand:"Āgama Daily", toc:"Contents",
  aboutBtn:"Guide", aboutActive:"Lessons", backToLesson:"Back to Daily Lessons",
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
  langLabel:"Language",
  aboutHTML:`
    <p class="day">GUIDE & ESSENTIALS</p>
    <h2>Core Essentials of the Āgamas & Purpose of Āgama Daily</h2>
    <p class="source">Returning to the Buddha's Original Teachings · One Contemplation a Day</p>

    <div class="about-sec">
      <h3>1. What Are the Āgama Sūtras?</h3>
      <p><em>Āgama</em> (Sanskrit: "handed-down teaching") refers to the four foundational collections of early Buddhist discourses preserved in the Chinese canon—the <em>Saṃyukta Āgama</em>, <em>Madhyama Āgama</em>, <em>Dīrgha Āgama</em>, and <em>Ekottarika Āgama</em>. Together with the Pāli <em>Nikāyas</em>, they represent the earliest strata of discourses closest to the historical Buddha's own words.</p>
      <p>Setting aside metaphysical speculation and superstition (as in the Parable of the Poisoned Arrow), the Āgamas diagnose the human predicament like a skilled physician: <strong>taking Dependent Origination as the core principle, the Four Noble Truths as the framework, and the Noble Eightfold Path & Thirty-Seven Factors of Awakening as the practical path leading to Nirvana—the complete cessation of greed, hatred, and delusion</strong>.</p>
    </div>

    <div class="about-sec">
      <h3>2. Five Pillars of the 100 Daily Lessons</h3>
      <dl class="about-list">
        <dt>Lessons 01–20 ｜ Foundational Principles</dt>
        <dd>Establishes right view: Dependent Origination, true right contemplation of the five aggregates (impermanent, suffering, not-self), being an island unto oneself and taking the Dharma as one's island, the Middle Way, knowledge of the regularity of the Dharma prior to Nirvana, and the "Two Darts" of bodily vs. mental pain.</dd>
        <dt>Lessons 21–30 ｜ The Buddha's Human-Centered Spirit</dt>
        <dd>Buddhas awaken in the human world, do not quarrel with the world, teach what is essential for ending suffering (like the handful of leaves), value instruction over miracles, and establish the Four Reliances (relying on the Dharma, meaning, wisdom, and definitive teaching).</dd>
        <dt>Lessons 31–42 ｜ Dependent Origination & the Twelve Links</dt>
        <dd>Explores conditionality ("When this is, that is; when this ceases, that ceases") across the twelve links from ignorance to aging-and-death, highlighting the crucial turning point between <em>feeling</em> (vedanā) and <em>craving</em> (taṇhā) where mindfulness breaks the chain of suffering.</dd>
        <dt>Lessons 43–62 ｜ The Four Noble Truths & the Truth of Suffering (Aggregates & Sense Bases)</dt>
        <dd>Covers the three turnings of the Four Truths, the eight and three kinds of suffering, the Three Seals of the Dharma, emptiness of the world, the five aggregates of clinging, and guarding the six sense doors (like a tortoise withdrawing its six limbs) by knowing arising, cessation, gratification, danger, and escape.</dd>
        <dt>Lessons 63–100 ｜ Origin, Cessation, and the Path of Practice</dt>
        <dd>Examines the three poisons and the lower/higher fetters (Origin); clarifies the four fruits of the recluse, nirvana with and without remainder, and liberation by wisdom (Cessation); and unfolds the full practice of the <strong>Noble Eightfold Path, Three Higher Trainings (ethics, concentration, wisdom), Seven Factors of Awakening, Five Faculties & Powers, overcoming the Five Hindrances, and Calm & Insight (śamatha-vipaśyanā) in tandem</strong>.</dd>
      </dl>
    </div>

    <div class="about-sec">
      <h3>3. Purpose & How to Use Āgama Daily</h3>
      <p>The Dharma is meant to be lived and observed in daily life. Designed in a serene Japanese Zen book aesthetic, this site distills the vast Āgama canon into <strong>100 structured daily lessons</strong>:</p>
      <ul class="about-ul">
        <li><strong>Three Reading Tabs</strong>: Each lesson offers <strong>Original</strong> (classical Chinese sūtra excerpt), <strong>Explanation</strong> (clear doctrinal & practical commentary), and <strong>Vocabulary</strong> (key Chinese Buddhist terms explained precisely).</li>
        <li><strong>Quick Vocabulary Quiz</strong>: Each lesson includes 2–3 multiple-choice questions to verify that you accurately grasp the technical terms in context rather than guessing by modern everyday meanings.</li>
        <li><strong>Practice Notes & Export</strong>: Record your daily reflections and observations in the notes box (saved automatically in your browser) and export all notes as a text file anytime.</li>
        <li><strong>Progress Tracking & Trilingual Support</strong>: Tracks total users, days read, day streak, and completed lessons, with full item-by-item support in <strong>Traditional Chinese, English, and Dutch (Nederlands)</strong>.</li>
      </ul>
    </div>
  `
 },
 nl:{
  doc:"Āgama Dagelijks · Eén les per dag", brand:"Āgama Dagelijks", toc:"Inhoud",
  aboutBtn:"Uitleg", aboutActive:"Lessen", backToLesson:"Terug naar dagelijkse lessen",
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
  langLabel:"Taal",
  aboutHTML:`
    <p class="day">INLEIDING & HANDLEIDING</p>
    <h2>De kern van de Āgama-soetra's & de opzet van Āgama Dagelijks</h2>
    <p class="source">Terug naar het oorspronkelijke onderricht van de Boeddha · Eén les per dag</p>

    <div class="about-sec">
      <h3>1. Wat zijn de Āgama-soetra's?</h3>
      <p><em>Āgama</em> (Sanskriet voor "overgeleverde leer") verwijst naar de vier fundamentele verzamelingen van vroege boeddhistische leerredes in de Chinese canon: de <em>Saṃyukta Āgama</em>, <em>Madhyama Āgama</em>, <em>Dīrgha Āgama</em> en <em>Ekottarika Āgama</em>. Samen met de Pāli-<em>Nikāya's</em> vormen zij de oudste laag van geschriften die het dichtst bij de woorden van de historische Boeddha staan.</p>
      <p>De Āgama's laten metafysische speculatie rusten (zoals in de gelijkenis van de gifpijl) en richten zich als een ervaren arts rechtstreeks op de oorzaak en het einde van menselijk lijden: <strong>met Afhankelijk Ontstaan als kernprincipe, de Vier Edele Waarheden als raamwerk, en het Edele Achtvoudige Pad als praktische weg naar Nirwana—het volledig uitdoven van hebzucht, haat en verblinding</strong>.</p>
    </div>

    <div class="about-sec">
      <h3>2. De vijf pijlers van de 100 dagelijkse lessen</h3>
      <dl class="about-list">
        <dt>Les 01–20 ｜ Hoofdlijnen en kerninzichten</dt>
        <dd>Legt het fundament van juist inzicht: Afhankelijk Ontstaan, ware juiste beschouwing van de vijf aggregaten (vergankelijk, lijden, niet-zelf), jezelf en de Dharma tot eiland nemen, de Middenweg, kennis van de wetmatigheid van de Dharma, en het onderscheid tussen lichamelijke en geestelijke pijn (de 'tweede pijl').</dd>
        <dt>Les 21–30 ｜ De mensgerichte geest van de Boeddha</dt>
        <dd>Boeddha's ontwaken in de mensenwereld, twisten niet met de wereld, onderwijzen alleen wat leidt tot het einde van lijden (zoals een handvol bladeren), hechten waarde aan onderricht boven wonderen, en reiken de Vier Steunpunten aan (steunen op de Dharma, de betekenis, wijsheid en de definitieve leer).</dd>
        <dt>Les 31–42 ｜ Afhankelijk Ontstaan & de Twaalf Schakels</dt>
        <dd>Onderzoekt de voorwaardelijkheid ("Als dit er is, is dat er; als dit ophoudt, houdt dat op") langs de twaalf schakels van onwetendheid tot ouderdom en dood, met bijzondere aandacht voor het beslissende keerpunt tussen <em>gevoel</em> en <em>begeerte</em>.</dd>
        <dt>Les 43–62 ｜ De Vier Edele Waarheden & de Waarheid van Lijden (Aggregaten en Zintuigbases)</dt>
        <dd>Behandelt de drie wendingen van de Vier Waarheden, de acht en drie vormen van lijden, de Drie Zegels van de Dharma, leegte van de wereld, de vijf aggregaten van vastklampen en het bewaken van de zes zintuigpoorten (zoals een schildpad die haar zes delen intrekt).</dd>
        <dt>Les 63–100 ｜ Oorsprong, Opheffing en het Pad van Beoefening</dt>
        <dd>Analyseert de drie gifstoffen en de lagere en hogere boeien (Oorsprong); verheldert de vier vruchten van het ascetenleven en nirwana met en zonder rest (Opheffing); en ontvouwt het volledige oefenpad van het <strong>Edele Achtvoudige Pad, de Drie Hogere Trainingen (ethiek, concentratie, wijsheid), de Zeven Factoren van Ontwaken, de Vijf Vermogens en Krachten, het overwinnen van de Vijf Belemmeringen, en Kalmte & Inzicht (śamatha-vipaśyanā) in balans</strong>.</dd>
      </dl>
    </div>

    <div class="about-sec">
      <h3>3. Doel en gebruik van deze website</h3>
      <p>De Dharma is bedoeld om in het dagelijks leven te worden beoefend en geschouwd. In een rustige Japanse zen-boekstijl brengt deze website de Āgama-canon terug tot <strong>100 overzichtelijke dagelijkse lessen</strong>:</p>
      <ul class="about-ul">
        <li><strong>Drie leesperspectieven</strong>: Elke les biedt <strong>Origineel</strong> (het klassieke Chinese soetra-fragment), <strong>Uitleg</strong> (heldere toelichting op betekenis en praktijk) en <strong>Woordenlijst</strong> (precieze uitleg van de boeddhistische kernbegrippen).</li>
        <li><strong>Korte woordenquiz</strong>: Toets na het lezen met 2–3 meerkeuzevragen of je de begrippen in hun boeddhistische betekenis hebt begrepen.</li>
        <li><strong>Oefennotities & export</strong>: Schrijf je dagelijkse observaties en inzichten op (automatisch bewaard in je browser) en exporteer al je notities op elk moment als tekstbestand.</li>
        <li><strong>Voortgang & drietalige weergave</strong>: Houdt het aantal gebruikers, gelezen dagen, reeks dagen en voltooide lessen bij, en biedt volledige ondersteuning in het <strong>Traditioneel Chinees, Engels en Nederlands</strong>.</li>
      </ul>
    </div>
  `
 }
};
