"use strict";

//英単語と日本語の名詞リスト
const noun_E_words = ["time","person","year","way","day",
"thing","man","world","life","hand",
"part","child","eye","woman","place",
"work","week","case","point","government",
"company","number","group","problem","fact",
"home","water","room","school","story",
"side","country","power","hour","game",
"line","parent","face","idea","question",
"money","name","night","air","door",
"teacher","student","minute","language","job",
"animal","friend","boy","girl","sound",
"food","family","music","car","map",
"letter","paper","book","word","page",
"sentence","art","city","mountain","sea",
"river","tree","flower","plant","bird",
"computer","phone","internet","message","dress",
"picture","photo","color","movie","holiday",
"season","morning","evening","news","activity",
"sport","team","train","bus","station",
"question","answer","dream","truth","hope"];

const noun_J_words = ["時間","人","年","方法・道","日",
"物・こと","男","世界","人生","手",
"部分","子ども","目","女性","場所",
"仕事","週","場合","点","政府",
"会社","数","集団","問題","事実",
"家庭・家","水","部屋","学校","物語",
"側","国","力","時間（〜時間）","試合・ゲーム",
"線","親","顔","考え","質問",
"お金","名前","夜","空気","ドア",
"先生","生徒","分","言語","仕事",
"動物","友達","男の子","女の子","音",
"食べ物","家族","音楽","車","地図",
"手紙","紙","本","単語","ページ",
"文","芸術","都市","山","海",
"川","木","花","植物","鳥",
"コンピュータ","電話","インターネット","メッセージ","ドレス・服",
"絵","写真","色","映画","休日",
"季節","朝","夕方","ニュース","活動",
"スポーツ","チーム","電車","バス","駅",
"質問","答え","夢","真実","希望"
];

//動詞
const verb_E_words = ["be","have","do","say","get","make","go","know","take","see",
"come","think","look","want","give","use","find","tell","ask","work",
"seem","feel","try","leave","call","put","keep","let","begin","help",
"talk","turn","start","show","hear","play","run","move","live","believe",
"bring","happen","write","sit","stand","lose","pay","meet","include","continue",
"set","learn","change","lead","understand","watch","follow","stop","create","speak",
"read","allow","add","spend","grow","open","walk","win","offer","remember",
"love","consider","appear","buy","wait","serve","die","send","expect","build",
"stay","fall","cut","reach","kill","remain","explain","hope","develop","carry",
"break","receive","decide","return","support","agree","choose","forget","raise","pass"
];

const verb_J_words = ["である","持っている","する","言う","得る","作る","行く","知る","取る","見る",
"来る","思う","見る","欲しい","与える","使う","見つける","伝える","尋ねる","働く",
"〜のように見える","感じる","試す","去る","呼ぶ","置く","保つ","〜させる","始める","助ける",
"話す","向きを変える","始める","見せる","聞く","遊ぶ","走る","動く","住む","信じる",
"持ってくる","起こる","書く","座る","立つ","失う","払う","会う","含む","続ける",
"置く","学ぶ","変える","導く","理解する","見る","従う","止める","創造する","話す",
"読む","許す","加える","費やす","成長する","開ける","歩く","勝つ","申し出る","思い出す",
"愛する","考慮する","現れる","買う","待つ","仕える","死ぬ","送る","予期する","築く",
"とどまる","落ちる","切る","届く","殺す","残る","説明する","望む","発展させる","運ぶ",
"壊す","受け取る","決める","戻る","支援する","同意する","選ぶ","忘れる","上げる","通る"
]

//形容詞

const adjective_E_words = ["time","new","good","high","old","great","big","small","large","young",
"long","different","important","early","late","strong","right","bad","same","able",
"free","hard","clear","certain","sure","true","full","short","easy","difficult",
"simple","happy","sad","kind","nice","cool","warm","hot","cold","rich",
"poor","famous","popular","beautiful","interesting","funny","wonderful","clean","dirty","busy",
"quiet","loud","dark","bright","light","deep","shallow","heavy","soft","sharp",
"slow","fast","safe","dangerous","local","national","international","modern","traditional","natural",
"artificial","friendly","unfriendly","helpful","useless","necessary","unnecessary","basic","common","rare",
"usual","unusual","important","unimportant","true","false","correct","incorrect","strong","weak",
"tall","short","wide","narrow","open","closed","empty","full","available","familiar"
];

const adjective_J_words = ["時間の","新しい","良い","高い","古い",
"偉大な","大きい","小さい","大きな","若い",
"長い","異なる","重要な","早い","遅い",
"強い","正しい","悪い","同じ","〜できる",
"自由な","難しい／固い","はっきりした","確かな","確信している",
"本当の","いっぱいの","短い","簡単な","難しい",
"単純な","幸せな","悲しい","親切な","素敵な",
"かっこいい／涼しい","暖かい","暑い","寒い","裕福な",
"貧しい","有名な","人気のある","美しい","面白い",
"おかしい","素晴らしい","きれいな","汚れた","忙しい",
"静かな","うるさい","暗い","明るい","軽い／明るい",
"深い","浅い","重い","柔らかい","鋭い",
"遅い","速い","安全な","危険な","地元の",
"国家の","国際的な","現代的な","伝統的な","自然な",
"人工的な","親しみやすい","不親切な","役立つ","役に立たない",
"必要な","不必要な","基本的な","一般的な","珍しい",
"通常の","普通でない","重要な","重要でない","本当の",
"間違った","正しい","正しくない","強い","弱い",
"背が高い","背が低い","広い","狭い","開いている",
"閉じている","空の","満杯の","利用できる","よく知られている"
];

//副詞

const adverb_E_words = ["quickly","slowly","easily","difficultly","quietly",
"loudly","well","badly","early","late",
"together","separately","immediately","now","later",
"yesterday","today","tomorrow","already","yet",
"usually","always","often","sometimes","rarely",
"never","just","already","again","perhaps",
"surely","certainly","really","clearly","definitely",
"fortunately","unfortunately","accidentally","intentionally","naturally",
"carefully","cautiously","accurately","probably","gradually",
"suddenly","especially","fairly","very","extremely",
"somewhat","slightly","almost","completely","entirely",
"mainly","partially","generally","normally","first",
"finally","next","eventually","most","at least",
"sufficiently","insufficiently","widely","narrowly","highly",
"lowly","far","near","inwardly","outwardly",
"upward","downward","forward","backward","there",
"here","somewhere","anywhere","never","because",
"by chance","coincidentally","straight","seriously","hard",
"hastily","gently","strongly","frequently","occasionally",
"automatically","manually","personally","officially","unofficially",
"logically","emotionally","briefly","lengthily","successfully"
];

const adverb_J_words = ["速く","ゆっくり","簡単に","難しく","静かに",
"大声で","よく","悪く","早く","遅く",
"一緒に","別々に","すぐに","今","後で",
"昨日","今日","明日","もう","まだ",
"たいてい","いつも","よく","時々","まれに",
"決して","ちょうど","すでに","再び","たぶん",
"確かに","もちろん","本当に","明らかに","間違いなく",
"幸運にも","不幸にも","偶然に","故意に","自然に",
"慎重に","注意深く","正確に","おそらく","徐々に",
"急に","特に","かなり","非常に","とても",
"多少","わずかに","ほとんど","完全に","まったく",
"主に","部分的に","一般的に","普通は","最初に",
"最後に","次に","最終的に","最も","少なくとも",
"十分に","不十分に","広く","狭く","高く",
"低く","遠く","近く","内側に","外側に",
"上へ","下へ","前に","後ろに","そこに",
"ここに","どこかに","どこでも","決して～ない","なぜなら",
"たまたま","偶然に","まっすぐに","真剣に","一生懸命に",
"急いで","優しく","強く","頻繁に","たまに",
"自動的に","手動で","個人的に","公式に","非公式に",
"論理的に","感情的に","短く","長く","うまく"];

//代名詞

const pronoun_E_words = ["I","you","he","she","it",
"we","they","me","him","her",
"us","them","my","your","his",
"her","its","our","their","mine",
"yours","hers","ours","theirs","this",
"that","these","those","anyone","someone",
"everyone","no one","somebody","anybody","nobody",
"each","either","neither","one","ones",
"who","whom","whose","which","what",
"myself","yourself","himself","herself","itself",
"ourselves","yourselves","themselves","another","others",
"any","some","none","all","both",
"most","much","many","few","several",
"everything","anything","nothing","something","such",
"one another","each other","whoever","whomever","whatever",
"whichever","none other","many a one","most of us","the one",
"the other","the same","someone else","anyone else","no one else",
"this one","that one","something else","anything else","everything else",
"little","more","less","plenty","enough",
"any number","either one","neither one","a few","a little"
];

const pronoun_J_words = ["私","あなた","彼","彼女","それ",
"私たち","彼ら","私を","彼を","彼女を",
"私たちを","彼らを","私の","あなたの","彼の",
"彼女の","それの","私たちの","彼らの","私のもの",
"あなたのもの","彼女のもの","私たちのもの","彼らのもの","これ",
"それ","これら","それら","誰か","誰か",
"みんな","誰もいない","誰か","誰でも","誰も",
"それぞれ","どちらか","どちらでもない","一人","複数の人",
"誰","誰を","誰の","どれ","何",
"私自身","あなた自身","彼自身","彼女自身","それ自身",
"私たち自身","あなたたち自身","彼ら自身","もう一人","他の人々",
"いくらかの人","いくらか","だれも～ない","すべて","両方",
"ほとんど","たくさんの","多くの","少しの","いくつかの",
"すべてのこと","何でも","何も～ない","何か","そのような",
"お互いに","お互い","～する人は誰でも","～される人は誰でも","何でも",
"どれでも","他でもない人","多くの人","私たちの大半","その人",
"もう一人の人","同じもの","他の誰か","他の誰でも","他の誰も",
"これ","それ","他の何か","他の何でも","他のすべてのもの",
"ほとんどない","もっと多く","もっと少なく","たくさん","十分",
"いくらかの数","どちらか一方","どちらでもない","少数","少量"
];

//前置詞

const preposition_E_words = ["in","on","at","by","with",
    "about","against","among","around","before",
    "behind","below","beneath","beside","between",
    "beyond","during","except","for","from",
    "inside","into","near","of","off",
    "out","outside","over","through","to",
    "toward","under","until","up","upon",
    "without","within","along","across","after",
    "as","like","past","since","than",
    "throughout","around","besides","despite","down",
    "above","amid","amongst","barring","concerning",
    "excepting","following","minus","per","plus",
    "regarding","round","save","underneath","unlike",
    "versus","via","aboard","according to","ahead of",
    "along with","apart from","as for","as of","as per",
    "as to","aside from","because of","close to","due to",
    "except for","far from","in addition to","in case of","in front of",
    "in lieu of","in place of","in spite of","instead of","near to",
    "next to","on account of","on behalf of","on top of","opposite",
    "out of","owing to","prior to","regardless of","thanks to"
    ];
    
    const preposition_J_words = ["〜の中に","〜の上に","〜で（場所・時間）","〜によって","〜と一緒に",
    "〜について","〜に対して","〜の間に","〜の周りに","〜の前に",
    "〜の後ろに","〜の下に","〜の下に","〜の隣に","〜の間に",
    "〜の向こうに","〜の間に（時間中）","〜を除いて","〜のために","〜から",
    "〜の中に","〜の中へ","〜の近くに","〜の","〜から離れて",
    "〜の外に","〜の外側に","〜の上に","〜を通って","〜へ",
    "〜に向かって","〜の下に","〜まで","〜の上に","〜の上に（文語）",
    "〜なしで","〜の中で","〜に沿って","〜を横切って","〜の後に",
    "〜として","〜のように","〜を過ぎて","〜以来","〜より",
    "〜の至る所に","〜の周りに","〜のほかに","〜にもかかわらず","〜の下に",
    "〜の上に","〜の中に","〜の間に","〜を除いて","〜について",
    "〜を除いて","〜に続いて","〜を引いた","〜につき","〜を加えた",
    "〜に関して","〜の周りに","〜を除いて","〜の下に","〜とは違って",
    "〜対","〜を通じて","〜に乗って","〜によれば","〜より前に",
    "〜と一緒に","〜を除いて","〜に関しては","〜の時点で","〜に従って",
    "〜に関して","〜を除いて","〜のせいで","〜の近くに","〜のために",
    "〜を除いて","〜からはほど遠い","〜に加えて","〜の場合には","〜の前に",
    "〜の代わりに","〜の代わりに","〜にもかかわらず","〜の代わりに","〜の近くに",
    "〜の隣に","〜の理由で","〜を代表して","〜の上に","〜の向かいに",
    "〜の外に","〜のために","〜より前に","〜にもかかわらず","〜のおかげで"
    ];

//接続詞

const conjunction_E_words = ["and","but","or","so","for"
,"nor","yet","although","because","since"
,"unless","whereas","while","after","before"
,"once","until","when","whenever","where"
,"wherever","if","even if","as","as if"
,"as though","though","than","rather than","whether"
,"both","either","neither","nor","not only"
,"but also","in case","in order that","provided","providing"
,"assuming","lest","once","since","till"
,"unless","until","whereas","while","as soon as"
,"as long as","as far as","now that","even though","no matter"
,"except","except that","insofar as","inasmuch as","so that"
,"than","that","though","although","where"
,"wherever","when","whenever","whether","while"
,"after all","at least","besides","consequently","hence"
,"however","indeed","instead","likewise","meanwhile"
,"moreover","nevertheless","nonetheless","otherwise","therefore"
,"thus","too","yet","accordingly"
];

const conjunction_J_words = ["そして","しかし","または","だから","なぜなら"
,"〜もまた〜ない","それでも","〜だけれども","〜なので","〜以来"
,"〜しない限り","〜に対して","〜の間に","〜の後で","〜の前に"
,"一度〜すると","〜まで","〜の時に","いつでも〜すると","〜するところで"
,"どこでも","もし〜ならば","たとえ〜でも","〜として","まるで〜のように"
,"〜のように振る舞うように","〜だけれども","〜より","〜よりむしろ","〜かどうか"
,"両方の","どちらかの","どちらでもない","〜もまた〜ない","〜だけでなく"
,"〜だけでなく〜も","〜の場合に備えて","〜するために","〜を条件に","〜を条件にして"
,"〜を仮定して","〜しないように","一度〜すると","〜以来","〜まで"
,"〜しない限り","〜まで","〜に対して","〜の間に","〜するとすぐに"
,"〜の間ずっと","〜する限り","〜する限りで","〜だから","〜だけれども"
,"たとえ〜でも","〜にもかかわらず","〜を除いて","〜を除いて","〜の範囲で"
,"〜の範囲で","〜なので","〜より","〜ということ","〜だけれども"
,"〜だけれども","〜するところで","〜するところで","〜かどうか","〜の間に"
,"結局のところ","少なくとも","その上","その結果","したがって"
,"しかしながら","確かに","代わりに","同様に","その間に"
,"さらに","それにもかかわらず","それでもなお","そうでなければ","それゆえに"
,"したがって","〜もまた","それゆえに"
];

//冠詞

const article_E_words = ["a","an","the","some","any",
"each","every","either","neither","much",
"many","few","a few","little","a little",
"all","both","half","several","enough",
"no","one","two","three","four",
"five","another","other","another","such",
"what","which","whose","this","that",
"her","its","our","their","whose",
"whosever","whichever","whatever","another","either",
"neither","each","every","no","any",
"some","all","both","half","many",
"few","several","enough","more","most",
"less","least","little","a little","a few",
"one","two","three","four","five",
"six","seven","eight","nine","ten",
"certain","various","varied","different","diverse",
"such","somewhat","much","many","plenty",
"several","numerous","various","each","every",
"any","no","one","another","other",
"either","neither","my","your","his",
"her","its","our","their","whose",
"whosever","whichever","whatever","one's","someone's",
"anyone's","everyone's","no one's","somebody's","everybody's"
];

const article_J_words = ["一つの","一人の","その","いくつかの","どれでも"
,"それぞれの","すべての","どちらかの","どちらでもない","多くの"
,"多量の","少数の","いくつかの","少しの","少量の"
,"すべての","両方の","半分の","いくつかの","十分な"
,"〜ない","一つの","二つの","三つの","四つの"
,"五つの","もう一つの","他の","もう一つの","そのような"
,"何の","どれの","誰の","これの","それの"
,"これらの","それらの","私の","あなたの","彼の"
,"彼女の","それの","私たちの","彼らの","誰の"
,"誰の","どちらの","何でも","もう一つの","どちらかの"
,"どちらでもない","それぞれの","すべての","〜ない","いくつかの"
,"すべての","両方の","半分の","多くの","少数の"
,"いくつかの","十分な","もっと多くの","ほとんどの","より少ない"
,"最小の","少しの","少量の","いくつかの","一つの"
,"二つの","三つの","四つの","五つの","六つの"
,"七つの","八つの","九つの","十の","確かな"
,"様々な","変わった","違った","多様な","そのような"
,"少しの","多量の","多くの","豊富な","いくつかの"
,"多数の","様々な","それぞれの","すべての","どれでも"
,"〜ない","一つの","もう一つの","他の","どちらかの"
,"どちらでもない","私の","あなたの","彼の","彼女の"
,"それの","私たちの","彼らの","誰の","誰の"
,"どちらの","何でも","誰かの","誰でもの","誰のものでもない"
,"誰かの","みんなの"
];

//いろいろボタン
const quiz = document.getElementById("quiz");
quiz.style.display = "none";
const true_effect = document.getElementById("true");
true_effect.style.display = "none";
const else_effect = document.getElementById("else");
else_effect.style.display = "none";
const next_button = document.getElementById("next");
next_button.style.display = "none";
const true_text = document.getElementById("true_text");
true_text.style.display = "none";
const statistics = document.getElementById("statistics");
statistics.style.display = "none";
const back_button = document.getElementById("back_button");
back_button.style.display = "none";
const J_start_button = document.getElementById("J_start_button");
const E_start_button = document.getElementById("E_start_button");
const statistics_button = document.getElementById("statistics_button");
const main_word = document.getElementById("main_word");
const correct_ = document.getElementById("correct");
const mistake_ = document.getElementById("mistake");
const correct_ratio = document.getElementById("correct_ratio");

//品詞選択ボタンの非表示&取り込み
const noun_start_button = document.getElementById("noun_start_button");
const verb_start_button = document.getElementById("verb_start_button");
const adjective_start_button = document.getElementById("adjective_start_button");
const adverb_start_button = document.getElementById("adverb_start_button");
const pronoun_start_button = document.getElementById("pronoun_start_button");
const preposition_start_button = document.getElementById("preposition_start_button");
const conjunction_start_button = document.getElementById("conjunction_start_button");
const article_start_button = document.getElementById("article_start_button");
const all_button = document.getElementById("all_start_button");
const Part = document.getElementById("Part"); 

function nones(){
    Part.style.display = "none";
};

nones();

//回答ボタン
const a_1 = document.getElementById("answer1");
const a_2 = document.getElementById("answer2");
const a_3 = document.getElementById("answer3");
const a_4 = document.getElementById("answer4");
const counter = document.getElementById("counter");

//統計関係
//回数を記録
let count = 0;
counter.innerHTML = `回答数:${count}`;
let number_memory;

//正誤を記録
let correct_count = 0;
let mistake_count = 0;

correct_.innerHTML = `正解数:${correct_count}`;
mistake_.innerHTML = `誤答数:${mistake_count}`;

//正解確率
let c_ratio = 0;

correct_ratio.innerHTML = `正答率:${c_ratio}%`;

//選ぶ際の関数
function generateOptions(correct, allOptions) {
    let incorrects = [];
    while (incorrects.length < 3) {
        let randIndex = Math.floor(Math.random() * allOptions.length);
        let candidate = allOptions[randIndex];
        if (candidate !== correct && !incorrects.includes(candidate)) {
            incorrects.push(candidate);
        }
    }
    let options = [...incorrects];
    let correctIndex = Math.floor(Math.random() * 4);
    options.splice(correctIndex, 0, correct);
    return options;
}


//モード変数
let mode_type;
let English_Japanese;
let innertype;

//モード英語種類
function English(){
    switch (mode_type){
        case "noun":
            innertype = noun_E_words[r_number];
            break;
        case "verb":
            innertype = verb_E_words[r_number];
            break;
        case "adjective":
            innertype = adjective_E_words[r_number];
            break;
        case "adverb":
            innertype = adverb_E_words[r_number];
            break;
        case "pronoun":
            innertype = pronoun_E_words[r_number];
            break;
        case "preposition":
            innertype = preposition_E_words[r_number];
            break;
        case "conjunction":
            innertype = conjunction_E_words[r_number];
            break;
        case "article":
            innertype = article_E_words[r_number];
            break;
    };
}

function Japanese(){
    switch (mode_type){
        case "noun":
            innertype = noun_J_words[r_number];
            break;
        case "verb":
            innertype = verb_J_words[r_number];
            break;
        case "adjective":
            innertype = adjective_J_words[r_number];
            break;
        case "adverb":
            innertype = adverb_J_words[r_number];
            break;
        case "pronoun":
            innertype = pronoun_J_words[r_number];
            break;
        case "preposition":
            innertype = preposition_J_words[r_number];
            break;
        case "conjunction":
            innertype = conjunction_J_words[r_number];
            break;
        case "article":
            innertype = article_J_words[r_number];
            break;
    };
}

//日本語選択オプション
let options;
let r_number;

function return_J_words(){
    r_number = Math.floor(Math.random() * preposition_E_words.length);
    number_memory = r_number;
    English();
    main_word.innerHTML = innertype;
    Japanese();
    const correct = innertype;

    options = generateOptions(correct, preposition_J_words);
    return options;
}

//英語選択オプション
function return_E_words(){
    r_number = Math.floor(Math.random() * preposition_J_words.length);
    number_memory = r_number;
    Japanese();
    main_word.innerHTML = innertype;
    English();
    const correct = innertype;

    options = generateOptions(correct, preposition_E_words);
    return options;
}

//問題表示処理(名詞)
function r_noun() {
    quiz_open();
    mode_type = "noun";

    if(English_Japanese =="Japanese"){
        return_J_words();
    }else {
        return_E_words();
    }

    a_1.innerHTML = options[0];
    a_2.innerHTML = options[1];
    a_3.innerHTML = options[2];
    a_4.innerHTML = options[3];

    nones();
    quiz.style.display = "";
    statistics_button.style.display = "none";
}

//問題表示処理(動詞)
function r_verb() {
    quiz_open();
    mode_type = "verb";

    if(English_Japanese =="Japanese"){
        return_J_words();
    }else {
        return_E_words();
    }

    a_1.innerHTML = options[0];
    a_2.innerHTML = options[1];
    a_3.innerHTML = options[2];
    a_4.innerHTML = options[3];

    nones();
    quiz.style.display = "";
    statistics_button.style.display = "none";
}

//問題表示処理(形容詞)
function r_adjective() {
    quiz_open();
    mode_type = "adjective";

    if(English_Japanese =="Japanese"){
        return_J_words();
    }else {
        return_E_words();
    }

    a_1.innerHTML = options[0];
    a_2.innerHTML = options[1];
    a_3.innerHTML = options[2];
    a_4.innerHTML = options[3];

    nones();
    quiz.style.display = "";
    statistics_button.style.display = "none";
}

//問題表示処理(副詞)
function r_adverb() {
    quiz_open();
    mode_type = "adverb";

    if(English_Japanese =="Japanese"){
        return_J_words();
    }else {
        return_E_words();
    }

    a_1.innerHTML = options[0];
    a_2.innerHTML = options[1];
    a_3.innerHTML = options[2];
    a_4.innerHTML = options[3];

    nones();
    quiz.style.display = "";
    statistics_button.style.display = "none";
}


//問題表示処理(代名詞)
function r_pronoun() {
    quiz_open();
    mode_type = "pronoun";

    if(English_Japanese =="Japanese"){
        return_J_words();
    }else {
        return_E_words();
    }

    a_1.innerHTML = options[0];
    a_2.innerHTML = options[1];
    a_3.innerHTML = options[2];
    a_4.innerHTML = options[3];

    nones();
    quiz.style.display = "";
    statistics_button.style.display = "none";
}

//問題表示処理(前置詞)
function r_preposition() {
    quiz_open();
    mode_type = "preposition";

    if(English_Japanese =="Japanese"){
        return_J_words();
    }else {
        return_E_words();
    }

    a_1.innerHTML = options[0];
    a_2.innerHTML = options[1];
    a_3.innerHTML = options[2];
    a_4.innerHTML = options[3];

    nones();
    quiz.style.display = "";
    statistics_button.style.display = "none";
}

//問題表示処理(接続詞)
function r_conjunction() {
    quiz_open();
    mode_type = "conjunction";

    if(English_Japanese =="Japanese"){
        return_J_words();
    }else {
        return_E_words();
    }

    a_1.innerHTML = options[0];
    a_2.innerHTML = options[1];
    a_3.innerHTML = options[2];
    a_4.innerHTML = options[3];

    nones();
    quiz.style.display = "";
    statistics_button.style.display = "none";
}

//問題表示処理(冠詞)
function r_article() {
    quiz_open();
    mode_type = "article";

    if(English_Japanese =="Japanese"){
        return_J_words();
    }else {
        return_E_words();
    }

    a_1.innerHTML = options[0];
    a_2.innerHTML = options[1];
    a_3.innerHTML = options[2];
    a_4.innerHTML = options[3];

    nones();
    quiz.style.display = "";
    statistics_button.style.display = "none";
}

//問題表示style.display = "";
function quiz_open(){
    a_1.style.display = "";
    a_2.style.display = "";
    a_3.style.display = "";
    a_4.style.display = "";
    quiz.style.display = "";
    main_word.style.display = "";
};

//正誤処理
const wordMap1 = {
    verb: verb_J_words,
    noun: noun_J_words,
    adjective: adjective_J_words,
    adverb: adverb_J_words,
    pronoun: pronoun_J_words,
    preposition: preposition_J_words,
    conjunction: conjunction_J_words,
    article: article_J_words,
  };

  const wordMap2 = {
    verb: verb_E_words,
    noun: noun_E_words,
    adjective: adjective_E_words,
    adverb: adverb_E_words,
    pronoun: pronoun_E_words,
    preposition: preposition_E_words,
    conjunction: conjunction_E_words,
    article: article_E_words,
  };
  
  function checkAnswer(button) {
    if(English_Japanese == "Japanese"){
        const correctWord = wordMap1[mode_type] ? wordMap1[mode_type][number_memory] : null;
        if (button.textContent === correctWord) {
            true_open();
        } else {
            else_open();
        }
    }else {
        const correctWord = wordMap2[mode_type] ? wordMap2[mode_type][number_memory] : null;
        if (button.textContent === correctWord) {
            true_open();
        } else {
            else_open();
        }
    }
  }

//正解表示用

function E_answer_text(){
    const wordMap = {
      verb: verb_J_words,
      noun: noun_J_words,
      adjective: adjective_J_words,
      adverb: adverb_J_words,
      pronoun: pronoun_J_words,
      preposition: preposition_J_words,
      conjunction: conjunction_J_words,
      article: article_J_words,
    };
  
    if(wordMap[mode_type]){
      true_text.innerHTML = `正解:${wordMap[mode_type][number_memory]}`;
    }
  }

  function J_answer_text(){
    const wordMap = {
      verb: verb_E_words,
      noun: noun_E_words,
      adjective: adjective_E_words,
      adverb: adverb_E_words,
      pronoun: pronoun_E_words,
      preposition: preposition_E_words,
      conjunction: conjunction_E_words,
      article: article_E_words,
    };
  
    if(wordMap[mode_type]){
      true_text.innerHTML = `正解:${wordMap[mode_type][number_memory]}`;
    }
  }
  
//正解パターン
function true_open(){
    true_text.style.display = "";
    true_effect.style.display = "";
    next_button.style.display  = "";

    if(English_Japanese == "Japanese"){
        E_answer_text();
    }else {
        J_answer_text();
    }

    count++;
    counter.innerHTML = `回答数:${count}`;
    correct_count++;
};

//誤答パターン
function else_open(){
    true_text.style.display = "";
    else_effect.style.display = "";
    next_button.style.display  = "";

    if(English_Japanese == "Japanese"){
        E_answer_text();
    }else {
        J_answer_text();
    }

    count++;
    counter.innerHTML = `回答数:${count}`;
    mistake_count++;
};

//次の問題へ移行

function next_button_click(){
    true_effect.style.display = "none";
    else_effect.style.display = "none";
    true_text.style.display = "none";
    next_button.style.display = "none";

    switch (mode_type){
        case "noun":
            r_noun();
            break;
        case "verb":
            r_verb();
            break;
        case "adjective":
            r_adjective();
            break;
        case "adverb":
            r_adverb();
            break;
        case "pronoun":
            r_pronoun();
            break;
        case "preposition":
            r_preposition();
            break;
        case "conjunction":
            r_conjunction();
            break;
        case "article":
            r_article();
            break;
    };
};

//品詞選択ボタンの表示
function button_views(){
    Part.style.display = "";
    back_button.style.display = "";
}

function J_button_views(){
    button_views();
    English_Japanese = "Japanese";
}

function E_button_views(){
    button_views();
    English_Japanese = "English";
}

//メニューに戻る
function back_menu(){
    Part.style.display = "none";
    a_1.style.display = "none";
    a_2.style.display = "none";
    a_3.style.display = "none";
    a_4.style.display = "none";
    quiz.style.display = "none";
    main_word.style.display = "none";
    true_effect.style.display = "none";
    else_effect.style.display = "none";
    true_text.style.display = "none";
    next_button.style.display = "none";
    statistics.style.display = "none";
    back_button.style.display = "none";

    J_start_button.style.display = "";
    E_start_button.style.display = "";
    statistics_button.style.display = "";
};

//統計表示
function s_open(){
    J_start_button.style.display = "none";
    E_start_button.style.display = "none";
    statistics_button.style.display ="none";

    statistics.style.display = "";
    back_button.style.display ="";

    let ct = correct_count / count;
    c_ratio = Math.floor(ct * 100);

    correct_.innerHTML = `正解数:${correct_count}`;
    mistake_.innerHTML = `誤答数:${mistake_count}`;
    correct_ratio.innerHTML = `正答率:${c_ratio}%`;
};

//クリック操作
J_start_button.onclick = J_button_views;
E_start_button.onclick = E_button_views;
statistics_button.onclick = s_open;
verb_start_button.onclick = r_verb;
noun_start_button.onclick = r_noun;
adjective_start_button.onclick = r_adjective;
adverb_start_button.onclick = r_adverb;
pronoun_start_button.onclick = r_pronoun;
preposition_start_button.onclick = r_preposition;
conjunction_start_button.onclick = r_conjunction;
article_start_button.onclick = r_article;
a_1.onclick = () => checkAnswer(a_1);
a_2.onclick = () => checkAnswer(a_2);
a_3.onclick = () => checkAnswer(a_3);
a_4.onclick = () => checkAnswer(a_4);
next_button.onclick = next_button_click;
back_button.onclick = back_menu;





