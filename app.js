const articleSource = {
  cdcActivity: {
    en: "CDC · Benefits of Physical Activity",
    tr: "CDC · Fiziksel Aktivitenin Faydaları",
    url: "https://www.cdc.gov/physical-activity-basics/health-benefits/adults.html"
  },
  cdcChronic: {
    en: "CDC · Living with a Chronic Condition",
    tr: "CDC · Kronik Bir Hastalıkla Yaşamak",
    url: "https://www.cdc.gov/chronic-disease/living-with/index.html"
  },
  nhlbiSleep: {
    en: "NHLBI · Get Enough Good-Quality Sleep",
    tr: "NHLBI · Yeterli ve Kaliteli Uyku",
    url: "https://www.nhlbi.nih.gov/health/heart-healthy-living/sleep"
  },
  nccihHerbs: {
    en: "NCCIH · Dietary and Herbal Supplements",
    tr: "NCCIH · Besin ve Bitkisel Takviyeler",
    url: "https://www.nccih.nih.gov/health/dietary-and-herbal-supplements"
  }
};

const articles = [
  {
    id: "morning",
    number: "01",
    category: "daily",
    readTime: 6,
    image: "assets/morning-table.png",
    imageClass: "",
    en: {
      title: "The quiet architecture of a good morning",
      excerpt: "Small choices, a calmer mind, and a healthier day often start before the world gets loud.",
      body: [
        "A good morning does not need to be optimized. It needs a little room. Open a curtain, drink something, notice the first thought you are carrying. The point is not to win the day before breakfast; it is to meet yourself before the requests begin.",
        "Try building a short sequence you can return to: light, water, food when you are hungry, and one kind next action. On difficult days, the sequence can be smaller. A practice that survives real life is more useful than a perfect routine that asks you to become someone else."
      ],
      source: null
    },
    tr: {
      title: "İyi bir sabahın sessiz mimarisi",
      excerpt: "Daha sakin bir zihin ve daha iyi bir gün çoğu zaman dünya gürültülenmeden önce başlar.",
      body: [
        "İyi bir sabahın kusursuz olması gerekmez; biraz alan açması yeterlidir. Perdeyi açın, bir şey için, taşıdığınız ilk düşünceyi fark edin. Amaç kahvaltıdan önce günü kazanmak değil, istekler başlamadan önce kendinizle buluşmaktır.",
        "Dönebileceğiniz kısa bir sıra kurmayı deneyin: ışık, su, acıktığınızda yemek ve iyi niyetli tek bir sonraki adım. Zor günlerde sıra daha da kısalabilir. Gerçek hayatta sürdürülebilen bir pratik, sizi başkasına dönüştürmeye çalışan kusursuz bir rutinden daha değerlidir."
      ],
      source: null
    }
  },
  {
    id: "headache",
    number: "02",
    category: "symptoms",
    readTime: 8,
    image: "assets/hero-coast.png",
    imageClass: "is-color-blue",
    en: {
      title: "When a headache is a signal, not a sentence",
      excerpt: "Understanding what headaches can mean—and when to take them seriously.",
      body: [
        "A headache is information, but it is not a diagnosis. Sleep, dehydration, skipped meals, stress, infection, eyesight, medication, and many other factors can be part of the story. Notice the pattern: when it begins, where it sits, what makes it better or worse, and whether anything else changes.",
        "A sudden, severe, new, or rapidly changing headache deserves prompt medical attention—especially after an injury or alongside confusion, weakness, fainting, fever, or vision changes. A notebook can help a clinician see the pattern, but it should never replace care when something feels urgent."
      ],
      source: null
    },
    tr: {
      title: "Baş ağrısı bir cümle değil, bir sinyal olduğunda",
      excerpt: "Baş ağrısının ne anlatabileceğini ve ne zaman ciddiye alınması gerektiğini anlamak.",
      body: [
        "Baş ağrısı bir bilgidir ama tek başına tanı değildir. Uyku, susuzluk, öğün atlama, stres, enfeksiyon, görme, ilaçlar ve başka birçok etken hikâyenin parçası olabilir. Ne zaman başladığını, nerede olduğunu, neyin artırıp azalttığını ve başka bir şeyin değişip değişmediğini not edin.",
        "Ani, çok şiddetli, yeni başlayan veya hızla değişen bir baş ağrısı—özellikle bir yaralanmanın ardından ya da bilinç bulanıklığı, güçsüzlük, bayılma, ateş veya görme değişikliğiyle birlikteyse—hızlı tıbbi değerlendirme gerektirir. Not tutmak hekime yardımcı olabilir; acil bir durumda bakımın yerini tutmaz."
      ],
      source: null
    }
  },
  {
    id: "meals",
    number: "03",
    category: "daily",
    readTime: 6,
    image: "assets/botanical-field.png",
    imageClass: "is-botanical",
    en: {
      title: "Small meals, steadier days",
      excerpt: "How simple, balanced eating can support your energy, mood, and overall health.",
      body: [
        "Food does not have to become another exam you can fail. A steadier day often comes from making the next meal easier: keep a few familiar options nearby, add something filling, and let convenience be part of the plan. Variety matters, but so does eating in a way you can afford, access, and repeat.",
        "Your needs can change with age, activity, illness, medication, culture, and appetite. If you are managing diabetes, digestive symptoms, an eating disorder, or another condition, use general ideas as conversation starters with a qualified professional—not as a replacement for an individual plan."
      ],
      source: null
    },
    tr: {
      title: "Küçük öğünler, daha dengeli günler",
      excerpt: "Basit ve dengeli beslenme enerjinizi, ruh halinizi ve genel sağlığınızı nasıl destekleyebilir?",
      body: [
        "Yemek, başarısız olabileceğiniz başka bir sınava dönüşmek zorunda değil. Daha dengeli bir gün çoğu zaman bir sonraki öğünü kolaylaştırmakla başlar: tanıdık birkaç seçeneği hazır tutun, doyurucu bir şey ekleyin ve pratikliği planın bir parçası sayın. Çeşitlilik önemlidir; fakat karşılayabildiğiniz, erişebildiğiniz ve sürdürebildiğiniz bir düzen de öyle.",
        "İhtiyaçlar yaşa, hareketliliğe, hastalığa, ilaçlara, kültüre ve iştaha göre değişebilir. Diyabet, sindirim şikâyetleri, yeme bozukluğu veya başka bir durumla yaşıyorsanız genel önerileri kişisel planın yerine değil, nitelikli bir uzmanla konuşmaya başlangıç olarak görün."
      ],
      source: null
    }
  },
  {
    id: "burnout",
    number: "04",
    category: "recovery",
    readTime: 8,
    image: "assets/morning-table.png",
    imageClass: "is-color-sand",
    en: {
      title: "The long way back from burnout",
      excerpt: "Recovery is not a quick fix, but it is possible. A gentler look at rest, limits, and rebuilding.",
      body: [
        "Burnout can make ordinary decisions feel expensive. Recovery often begins by reducing the number of decisions you ask your body to carry: one honest boundary, one simpler meal, one conversation with someone safe. Rest is not a prize for finishing everything; it is part of the work of returning.",
        "If exhaustion, low mood, anxiety, or detachment keeps narrowing your life, professional support can help you tell stress from something that needs treatment. There is no virtue in waiting until you have a perfect explanation before asking for help."
      ],
      source: null
    },
    tr: {
      title: "Tükenmişlikten dönüşün uzun yolu",
      excerpt: "İyileşme hızlı bir çözüm değildir ama mümkündür. Dinlenmeye, sınırlara ve yeniden kurmaya daha nazik bir bakış.",
      body: [
        "Tükenmişlik, sıradan kararları bile pahalı hissettirebilir. İyileşme çoğu zaman bedeninizden beklediğiniz karar sayısını azaltmakla başlar: dürüst bir sınır, daha basit bir öğün, güvendiğiniz biriyle bir konuşma. Dinlenmek her şeyi bitirmenin ödülü değil, geri dönme sürecinin bir parçasıdır.",
        "Yorgunluk, çökkünlük, kaygı veya kopukluk hayatınızı daraltmayı sürdürüyorsa profesyonel destek, stresle tedavi gerektiren başka bir durumu ayırt etmenize yardımcı olabilir. Yardım istemeden önce kusursuz bir açıklamaya sahip olmanız gerekmez."
      ],
      source: null
    }
  },
  {
    id: "sleep",
    number: "05",
    category: "daily",
    readTime: 6,
    image: "assets/hero-coast.png",
    imageClass: "is-color-blue",
    en: {
      title: "What your sleep is trying to tell you",
      excerpt: "Better sleep begins with listening. Here is what to notice and what can help.",
      body: [
        "Sleep is not a moral score. A rough night is not a personal failure, and a sleep routine should support your life rather than become another source of pressure. Notice your wake time, light exposure, caffeine, alcohol, screens, pain, worry, and the conditions that make rest feel possible.",
        "A consistent wind-down, a darker and cooler room, and a regular wake time help many people create better conditions for sleep. Persistent insomnia, loud snoring with pauses in breathing, or sleepiness that makes driving unsafe deserves a conversation with a clinician."
      ],
      source: "nhlbiSleep"
    },
    tr: {
      title: "Uykunuz size ne anlatmaya çalışıyor?",
      excerpt: "Daha iyi uyku dinlemekle başlar. Fark edilecek şeyler ve işe yarayabilecek küçük adımlar.",
      body: [
        "Uyku bir ahlak puanı değildir. Kötü bir gece kişisel bir başarısızlık sayılmaz; uyku düzeni de hayatınızı desteklemeli, yeni bir baskı kaynağına dönüşmemelidir. Uyanma saatinizi, ışığa maruz kalmayı, kafeini, alkolü, ekranları, ağrıyı, endişeyi ve dinlenmeyi mümkün kılan koşulları fark edin.",
        "Düzenli bir gevşeme zamanı, daha karanlık ve serin bir oda ve sabit bir uyanma saati birçok kişide uyku için daha iyi koşullar yaratabilir. Süregelen uykusuzluk, nefes duraklamalarıyla birlikte yüksek sesli horlama veya araç kullanmayı güvensiz hâle getiren uykululuk bir hekimle konuşulmalıdır."
      ],
      source: "nhlbiSleep"
    }
  },
  {
    id: "herbs",
    number: "06",
    category: "alternative",
    readTime: 6,
    image: "assets/botanical-field.png",
    imageClass: "is-botanical",
    en: {
      title: "Herbal remedies, held with care",
      excerpt: "A practical look at traditional remedies, what the evidence says, and how to use them wisely.",
      body: [
        "Plants have long histories in care, ritual, food, and medicine. Respecting that history does not mean assuming every product is safe or effective. Evidence can vary by herb, preparation, dose, and condition—and a product sold as natural can still be pharmacologically active.",
        "Before trying a supplement, check the ingredients, the evidence, and the possibility of interactions with medicines or health conditions. Pregnancy, breastfeeding, childhood, surgery, liver disease, and multiple medications all call for extra caution. A pharmacist or clinician can help you ask a better question before you buy."
      ],
      source: "nccihHerbs"
    },
    tr: {
      title: "Bitkisel çözümler, özenle ele alındığında",
      excerpt: "Geleneksel yöntemlere, kanıtlara ve onları daha bilinçli kullanmaya pratik bir bakış.",
      body: [
        "Bitkilerin bakımda, ritüelde, mutfakta ve tıpta uzun bir geçmişi var. Bu geçmişe saygı duymak, her ürünün güvenli veya etkili olduğunu varsaymak anlamına gelmez. Kanıtlar bitkiye, hazırlama biçimine, doza ve duruma göre değişebilir; doğal diye satılan bir ürün de farmakolojik olarak aktif olabilir.",
        "Bir takviyeyi denemeden önce içeriğini, kanıtları ve ilaçlarınızla ya da sağlık durumlarınızla etkileşme ihtimalini kontrol edin. Gebelik, emzirme, çocukluk, ameliyat, karaciğer hastalığı ve birden çok ilaç kullanımı daha fazla dikkat gerektirir. Eczacı veya hekim, satın almadan önce daha iyi bir soru sormanıza yardımcı olabilir."
      ],
      source: "nccihHerbs"
    }
  },
  {
    id: "symptoms",
    number: "07",
    category: "symptoms",
    readTime: 8,
    image: "assets/botanical-field.png",
    imageClass: "is-color-sand",
    en: {
      title: "A field guide to checking symptoms",
      excerpt: "How to find reliable information, reduce anxiety, and know when to seek support.",
      body: [
        "When a symptom appears, the internet offers too many stories at once. Start smaller: name the symptom in plain language, note when it started, and look for information from a public-health agency, a hospital, or a professional medical organization. Read the date, the context, and the limits of the advice.",
        "A useful question is not only ‘What could this be?’ but also ‘What should I watch for, and who should I ask?’ If a symptom is severe, sudden, worsening, or affecting breathing, consciousness, movement, or safety, skip the rabbit hole and seek urgent local care."
      ],
      source: null
    },
    tr: {
      title: "Belirti kontrolü için bir saha rehberi",
      excerpt: "Güvenilir bilgi nasıl bulunur, kaygı nasıl azaltılır ve ne zaman destek aranır?",
      body: [
        "Bir belirti ortaya çıktığında internet aynı anda çok fazla hikâye sunar. Daha küçük başlayın: belirtiyi sade bir dille adlandırın, ne zaman başladığını not edin ve bir halk sağlığı kurumu, hastane veya profesyonel sağlık kuruluşundan bilgi arayın. Tarihi, bağlamı ve önerinin sınırlarını okuyun.",
        "Yararlı soru yalnızca ‘Bu ne olabilir?’ değil, ‘Neyi izlemeliyim ve kime sormalıyım?’ da olabilir. Belirti şiddetliyse, aniden başladıysa, kötüleşiyorsa veya solunumu, bilinci, hareketi ya da güvenliği etkiliyorsa arama zincirini bırakıp yerel acil desteğe başvurun."
      ],
      source: null
    }
  },
  {
    id: "movement",
    number: "08",
    category: "movement",
    readTime: 6,
    image: "assets/hero-coast.png",
    imageClass: "is-color-green",
    en: {
      title: "Movement for the days you have",
      excerpt: "Realistic, flexible ways to be active—without perfection.",
      body: [
        "Movement can be a walk, a stretch between meetings, a few stairs, dancing in the kitchen, or strength work that respects your body. It does not have to look athletic to count. Small amounts can be a useful beginning, especially when the alternative is waiting for the perfect schedule.",
        "The right amount depends on your health, capacity, symptoms, and goals. Build gradually, notice warning signs, and ask a clinician for individualized guidance if you have a chronic condition, a recent injury, chest pain, dizziness, or a major change in tolerance."
      ],
      source: "cdcActivity"
    },
    tr: {
      title: "Sahip olduğunuz günler için hareket",
      excerpt: "Kusursuzluk aramadan, gerçekçi ve esnek hareket etme yolları.",
      body: [
        "Hareket; yürüyüş, toplantılar arasında esneme, birkaç merdiven, mutfakta dans etmek veya bedeninize saygı duyan kuvvet çalışması olabilir. Sayılması için atletik görünmesi gerekmez. Özellikle kusursuz programı beklemekten daha iyi bir başlangıç olabilir.",
        "Doğru miktar sağlığınıza, kapasitenize, belirtilerinize ve hedeflerinize bağlıdır. Yavaşça artırın, uyarı işaretlerini fark edin; kronik bir durumunuz, yeni bir sakatlığınız, göğüs ağrınız, baş dönmeniz veya dayanıklılığınızda belirgin bir değişiklik varsa kişisel öneri için bir hekimle görüşün."
      ],
      source: "cdcActivity"
    }
  },
  {
    id: "chronic",
    number: "09",
    category: "symptoms",
    readTime: 8,
    image: "assets/hero-coast.png",
    imageClass: "is-color-blue",
    en: {
      title: "Living well with a chronic condition",
      excerpt: "Practical ideas for more good days, on your terms.",
      body: [
        "A chronic condition can turn health into a long conversation rather than a single answer. Some days are about treatment and monitoring; some are about making tea, asking for help, or changing the plan without shame. Living well does not mean pretending the condition is not there.",
        "Keep your care plan visible, write down questions before appointments, and ask what changes should prompt a call. Taking medication as prescribed and monitoring what your team has asked you to monitor are practical acts of self-advocacy—not signs that you have to manage everything alone."
      ],
      source: "cdcChronic"
    },
    tr: {
      title: "Kronik bir durumla iyi yaşamak",
      excerpt: "Kendi koşullarınızda daha çok iyi gün için pratik fikirler.",
      body: [
        "Kronik bir durum, sağlığı tek bir cevaptan çok uzun bir sohbete dönüştürebilir. Bazı günler tedavi ve takip içindir; bazı günler çay yapmak, yardım istemek veya planı utanmadan değiştirmek. İyi yaşamak, durum yokmuş gibi davranmak değildir.",
        "Bakım planınızı görünür tutun, randevulardan önce sorularınızı yazın ve hangi değişiklikte aramanız gerektiğini sorun. İlaçları reçete edildiği gibi almak ve ekibinizin önerdiği ölçümleri takip etmek, her şeyi tek başınıza yönetmeniz gerektiği anlamına gelmez; kendi bakımınızda söz sahibi olmanın pratik yollarıdır."
      ],
      source: "cdcChronic"
    }
  },
  {
    id: "body",
    number: "10",
    category: "recovery",
    readTime: 6,
    image: "assets/morning-table.png",
    imageClass: "is-color-coral",
    en: {
      title: "The body is not a problem to solve",
      excerpt: "A different perspective on health, healing, and what it means to be human.",
      body: [
        "Health culture can make the body sound like a project that is always behind. But a body is not a before photo. It is a living place: changing with seasons, illness, grief, hormones, work, age, and joy. Care can include change, but it does not have to begin with rejection.",
        "A more humane question is: what would make this body feel safer, better supported, or more understood today? Sometimes the answer is a clinician. Sometimes it is food, movement, medication, rest, a boundary, or the patience to try again tomorrow."
      ],
      source: null
    },
    tr: {
      title: "Beden çözülmesi gereken bir sorun değildir",
      excerpt: "Sağlığa, iyileşmeye ve insan olmanın anlamına farklı bir açıdan bakmak.",
      body: [
        "Sağlık kültürü bedeni sürekli geride kalan bir proje gibi anlatabilir. Oysa beden bir ‘önce’ fotoğrafı değildir. Mevsimlerle, hastalıkla, yasla, hormonlarla, işle, yaşla ve sevinçle değişen canlı bir yerdir. Bakım değişimi içerebilir; ama reddetmeyle başlamak zorunda değildir.",
        "Daha insani bir soru şu olabilir: Bugün bu bedeni ne daha güvende, daha desteklenmiş veya daha anlaşılmış hissettirirdi? Bazen cevap bir hekimdir. Bazen yemek, hareket, ilaç, dinlenme, bir sınır veya yarın yeniden deneyecek sabırdır."
      ],
      source: null
    }
  }
];

const ui = {
  en: {
    nav: ["Stories", "Guides", "Perspectives", "About"],
    heroTitle: "A clearer way to care for yourself.",
    heroDescription: "Ten thoughtful reads on health, illness, recovery, and the everyday practices that make room for both evidence and wonder.",
    heroAside: "A healthier tomorrow is made of small, kinder choices.",
    explore: "Explore the journal",
    featuredLabel: "Featured story",
    journalLabel: "The journal",
    passageLabel: "A passage to keep",
    passage: "To care for yourself is not to escape life, but to meet it more fully—with a clearer mind, a steadier heart, and a deeper sense of what matters.",
    signoff: "Health is a kinder story when we tell it together.",
    readStory: "Read the full story",
    read: "Read story",
    categories: { all: "All stories", daily: "Daily life", symptoms: "Disease literacy", recovery: "Recovery", alternative: "Alternative care", movement: "Movement" },
    writerLabel: "Azra / The writer behind the notes",
    writerTitle: "A future in medicine, one careful story at a time.",
    writerCopy: "Azra writes these notes as she prepares for a future studying medicine in the United States. This bilingual blog is part of her application portfolio: a record of curiosity, careful research, and a human approach to health. It is a personal editorial project, not a clinic, and it never replaces individual medical care.",
    writerCredit: "Azra · writer / future medicine student",
    footerCopy: "A more human conversation about health.",
    rights: "© 2026 NAR / FIELD NOTES. All rights reserved.",
    note: "Editorial note: this journal is for general education, not diagnosis or personal medical advice. For urgent symptoms, contact local emergency services. Read more from",
    searchLabel: "Search the journal",
    searchPlaceholder: "Try “sleep” or “herbs”",
    searchEmpty: "No stories found.",
    sourceLabel: "Trusted reading:",
    close: "Close"
  },
  tr: {
    nav: ["Yazılar", "Rehberler", "Perspektifler", "Hakkında"],
    heroTitle: "Kendinize bakmanın daha berrak bir yolu.",
    heroDescription: "Sağlık, hastalık, iyileşme ve kanıtla meraka birlikte yer açan gündelik pratikler üzerine on düşünceli okuma.",
    heroAside: "Daha sağlıklı bir yarın, küçük ve daha nazik seçimlerle kurulur.",
    explore: "Dergiyi keşfet",
    featuredLabel: "Öne çıkan yazı",
    journalLabel: "Dergi",
    passageLabel: "Saklanacak bir pasaj",
    passage: "Kendinize bakmak hayattan kaçmak değil, ona daha bütünlüklü yaklaşmaktır—daha berrak bir zihin, daha dengeli bir kalp ve neyin önemli olduğuna dair daha derin bir hisle.",
    signoff: "Sağlık, onu birlikte anlattığımızda daha insani bir hikâyedir.",
    readStory: "Yazının tamamını oku",
    read: "Yazıyı oku",
    categories: { all: "Tüm yazılar", daily: "Gündelik hayat", symptoms: "Hastalık okuryazarlığı", recovery: "İyileşme", alternative: "Alternatif bakım", movement: "Hareket" },
    writerLabel: "Azra / Notların arkasındaki yazar",
    writerTitle: "Tıbba giden yol, özenle yazılmış hikâyelerle.",
    writerCopy: "Azra bu notları, Amerika Birleşik Devletleri'nde tıp eğitimi alma hedefiyle yazıyor. Bu iki dilli blog, başvuru portföyünün bir parçası: merakını, dikkatli araştırmasını ve sağlığa insani yaklaşımını gösteren bir kayıt. Bu bir klinik değil; kişisel bir editoryal çalışma ve bireysel tıbbi bakımın yerini tutmaz.",
    writerCredit: "Azra · yazar / geleceğin tıp öğrencisi",
    footerCopy: "Sağlık hakkında daha insani bir sohbet.",
    rights: "© 2026 NAR / FIELD NOTES. Tüm hakları saklıdır.",
    note: "Editoryal not: bu dergi genel bilgilendirme içindir; tanı veya kişisel tıbbi tavsiye değildir. Acil belirtilerde yerel acil yardım hattına başvurun. Daha fazla bilgi:",
    searchLabel: "Dergide ara",
    searchPlaceholder: "“uyku” veya “bitki” deneyin",
    searchEmpty: "Yazı bulunamadı.",
    sourceLabel: "Güvenilir okuma:",
    close: "Kapat"
  }
};

let language = localStorage.getItem("nar-language") || "en";
let activeCategory = "all";
let selectedArticleId = null;

const getText = () => ui[language];
const articleText = (article) => article[language];

function navMarkup(t) {
  return t.nav.map((item, index) => `<a href="#${["featured", "journal", "passage", "about"][index]}">${item}</a>`).join("");
}

function languageMarkup() {
  return `<button class="language-toggle" data-action="toggle-language" aria-label="Switch language">
    <span class="${language === "en" ? "active" : ""}">EN</span><span class="divider">/</span><span class="${language === "tr" ? "active" : ""}">TR</span>
  </button>`;
}

function abstractArt(article) {
  const map = { headache: "blue", meals: "green", burnout: "sand", movement: "green", chronic: "blue", body: "coral", symptoms: "sand" };
  return `<div class="abstract-art ${map[article.id] || "blue"}" aria-hidden="true"></div>`;
}

function imageMarkup(article, eager = false) {
  const alt = articleText(article).title;
  if (article.imageClass === "is-botanical" || article.imageClass === "is-color-sand" || article.imageClass === "is-color-coral" || article.imageClass === "is-color-blue" || article.imageClass === "is-color-green") {
    if (article.imageClass === "is-botanical" || article.image === "assets/botanical-field.png") {
      return `<img src="${article.image}" alt="" loading="${eager ? "eager" : "lazy"}" />`;
    }
    if (article.id === "burnout" || article.id === "body") return abstractArt(article);
    return abstractArt(article);
  }
  return `<img src="${article.image}" alt="${alt}" loading="${eager ? "eager" : "lazy"}" />`;
}

function cardMarkup(article) {
  const t = getText();
  const copy = articleText(article);
  const source = article.source ? articleSource[article.source] : null;
  return `<article class="journal-card" data-category="${article.category}" data-search="${`${copy.title} ${copy.excerpt}`.toLowerCase()}">
    <div class="journal-number">${article.number}</div>
    <div class="journal-image ${article.imageClass}">${imageMarkup(article)}</div>
    <div class="journal-card-content">
      <h3 class="article-title">${copy.title}</h3>
      <p class="article-excerpt">${copy.excerpt}</p>
      <div class="article-meta"><span>${article.readTime} min read</span><span class="meta-divider">|</span><span>EN / TR</span>${source ? `<span class="meta-divider">|</span><span>${article.category === "alternative" ? "Care with context" : "Field note"}</span>` : ""}</div>
      <button class="text-link" data-action="open-article" data-article="${article.id}">${t.read} <span class="arrow">→</span></button>
    </div>
  </article>`;
}

function render() {
  const t = getText();
  const featured = articles[0];
  const featuredCopy = articleText(featured);
  const columns = [articles.slice(1, 6), articles.slice(6)];

  document.documentElement.lang = language === "tr" ? "tr" : "en";
  document.title = language === "tr" ? "NAR / FIELD NOTES — Sağlık. İnsan. Daha Nazik Bir Yarın." : "NAR / FIELD NOTES — Health. People. A Kinder Tomorrow.";
  document.querySelector("#site-shell").innerHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="NAR / FIELD NOTES home"><span class="brand-mark">NAR / FIELD NOTES</span><span class="brand-subtitle">Health. People. A Kinder Tomorrow.</span></a>
      <div class="header-tools">
        <nav class="main-nav" data-mobile-nav aria-label="Primary navigation">${navMarkup(t)}</nav>
        ${languageMarkup()}
        <button class="search-trigger" data-action="open-search" aria-label="${t.searchLabel}"><span class="search-icon" aria-hidden="true"></span></button>
        <button class="mobile-menu-trigger" data-action="toggle-menu" aria-label="Menu"><span class="menu-icon" aria-hidden="true"></span></button>
      </div>
    </header>

    <main id="main-content">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero-copy">
          <div class="hero-rule" aria-hidden="true"></div>
          <h1 id="hero-title">${t.heroTitle}</h1>
          <p class="hero-description">${t.heroDescription}</p>
          <a class="primary-link" href="#journal">${t.explore} <span class="arrow">→</span></a>
        </div>
        <div class="hero-media"><img src="assets/hero-coast.png" alt="A person walking along a sunlit coastal path" fetchpriority="high" /></div>
        <p class="hero-aside">${t.heroAside}</p>
      </section>

      <div class="section-rule"></div>

      <section class="section featured" id="featured" aria-labelledby="featured-heading">
        <h2 class="section-heading" id="featured-heading"><span>${t.featuredLabel}</span></h2>
        <div class="featured-grid">
          <div class="feature-image"><img src="assets/morning-table.png" alt="A mug, notebook, and wildflowers on a sunlit table" /></div>
          <div class="feature-copy">
            <h2>${featuredCopy.title}</h2>
            <p>${featuredCopy.excerpt} ${language === "tr" ? "Bu, daha az baskıyla ve daha çok niyetle size uyan bir sabah kurmaya davettir." : "This is an invitation to build a morning that works for you—with less pressure and more intention."}</p>
            <div class="article-meta"><span>${featured.readTime} min read</span><span class="meta-divider">|</span><span>EN / TR</span></div>
            <button class="text-link" data-action="open-article" data-article="${featured.id}">${t.readStory} <span class="arrow">→</span></button>
          </div>
        </div>
      </section>

      <section class="section journal" id="journal" aria-labelledby="journal-heading">
        <div class="section-heading journal-heading">
          <h2 id="journal-heading">${t.journalLabel}</h2>
          <div class="filters" role="group" aria-label="Filter stories">
            ${Object.entries(t.categories).map(([key, label]) => `<button class="filter-button ${activeCategory === key ? "is-active" : ""}" data-action="filter" data-category="${key}">${label}</button>`).join("")}
          </div>
        </div>
        <div class="journal-grid">
          ${columns.map((column) => `<div class="journal-column">${column.map(cardMarkup).join("")}</div>`).join("")}
          <p class="empty-state" data-empty-state hidden>${t.searchEmpty}</p>
        </div>
      </section>

      <section class="passage" id="passage" aria-labelledby="passage-heading">
        <div class="passage-inner">
          <h2 class="passage-label" id="passage-heading">${t.passageLabel}</h2>
          <div class="passage-layout">
            <div><span class="quote-mark" aria-hidden="true">“</span><blockquote class="passage-quote">${t.passage}</blockquote></div>
            <p class="passage-signoff">${t.signoff}<span>NAR / FIELD NOTES</span></p>
          </div>
        </div>
      </section>

      <section class="author-section" id="about" aria-labelledby="author-heading">
        <div class="section author-inner">
          <div class="author-photo"><img src="assets/writer-portrait.png" alt="Illustrated portrait of the fictional writer behind NAR / FIELD NOTES" /></div>
          <div class="author-copy">
            <p class="author-label">${t.writerLabel}</p>
            <h2 id="author-heading">${t.writerTitle}</h2>
            <p>${t.writerCopy}</p>
            <div class="author-credit">${t.writerCredit}</div>
          </div>
        </div>
      </section>

      <div class="sources-note"><p>${t.note} <a href="${articleSource.cdcActivity.url}" target="_blank" rel="noreferrer">CDC</a>, <a href="${articleSource.nhlbiSleep.url}" target="_blank" rel="noreferrer">NHLBI</a>, <a href="${articleSource.nccihHerbs.url}" target="_blank" rel="noreferrer">NCCIH</a>.</p></div>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand"><a class="brand" href="#top"><span class="brand-mark">NAR / FIELD NOTES</span><span class="brand-subtitle">Health. People. A Kinder Tomorrow.</span></a><p class="footer-copy">${t.footerCopy}</p></div>
          <nav class="footer-nav" aria-label="Footer navigation">${navMarkup(t)}</nav>
          <div class="footer-nav footer-language">${languageMarkup()}</div>
        </div>
        <div class="footer-bottom"><p>${t.rights}</p><p>Stories for the everyday body.</p></div>
      </div>
    </footer>

    <div class="modal-backdrop" data-modal-backdrop aria-hidden="true"><article class="article-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" data-action="close-modal" aria-label="${t.close}">×</button><div class="modal-content"></div></article></div>
    <div class="search-panel" data-search-panel aria-hidden="true"><div class="search-box" role="dialog" aria-modal="true" aria-labelledby="search-label"><div class="search-input-row"><div style="width:100%"><label id="search-label" for="search-input">${t.searchLabel}</label><input id="search-input" class="search-input" type="search" placeholder="${t.searchPlaceholder}" autocomplete="off" /></div><button class="search-close" data-action="close-search" aria-label="${t.close}">×</button></div><ul class="search-results" data-search-results></ul></div></div>
  `;
  applyFilter();
}

function applyFilter() {
  const cards = [...document.querySelectorAll(".journal-card")];
  let visible = 0;
  cards.forEach((card) => {
    const match = activeCategory === "all" || card.dataset.category === activeCategory;
    card.classList.toggle("is-hidden", !match);
    if (match) visible += 1;
  });
  const emptyState = document.querySelector("[data-empty-state]");
  if (emptyState) emptyState.hidden = visible !== 0;
}

function openArticle(id) {
  const article = articles.find((item) => item.id === id);
  if (!article) return;
  selectedArticleId = id;
  const t = getText();
  const copy = articleText(article);
  const source = article.source ? articleSource[article.source] : null;
  const category = t.categories[article.category] || t.categories.all;
  const modal = document.querySelector("[data-modal-backdrop]");
  modal.querySelector(".modal-content").innerHTML = `<div class="modal-category">${category}</div><h2 class="modal-title" id="modal-title">${copy.title}</h2><div class="article-meta"><span>${article.readTime} min read</span><span class="meta-divider">|</span><span>EN / TR</span></div><div class="modal-body">${copy.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>${source ? `<div class="modal-source">${t.sourceLabel} <a href="${source.url}" target="_blank" rel="noreferrer">${source[language]}</a></div>` : ""}`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  modal.querySelector(".modal-close").focus();
}

function closeArticle() {
  const modal = document.querySelector("[data-modal-backdrop]");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  selectedArticleId = null;
}

function openSearch() {
  const panel = document.querySelector("[data-search-panel]");
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  const input = panel.querySelector(".search-input");
  input.value = "";
  updateSearchResults("");
  setTimeout(() => input.focus(), 20);
}

function closeSearch() {
  const panel = document.querySelector("[data-search-panel]");
  if (!panel) return;
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
}

function updateSearchResults(query) {
  const results = document.querySelector("[data-search-results]");
  if (!results) return;
  const t = getText();
  const normalized = query.trim().toLowerCase();
  const matches = normalized ? articles.filter((article) => `${articleText(article).title} ${articleText(article).excerpt}`.toLowerCase().includes(normalized)) : articles.slice(0, 5);
  results.innerHTML = matches.length ? matches.map((article) => `<li><button data-action="open-search-result" data-article="${article.id}"><span>${articleText(article).title}</span><small>${article.readTime} min</small></button></li>`).join("") : `<li>${t.searchEmpty}</li>`;
}

document.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) {
    if (event.target.matches("[data-modal-backdrop]")) closeArticle();
    if (event.target.matches("[data-search-panel]")) closeSearch();
    return;
  }
  const action = actionElement.dataset.action;
  if (action === "toggle-language") {
    language = language === "en" ? "tr" : "en";
    localStorage.setItem("nar-language", language);
    render();
    if (selectedArticleId) openArticle(selectedArticleId);
  }
  if (action === "filter") {
    activeCategory = actionElement.dataset.category;
    document.querySelectorAll(".filter-button").forEach((button) => button.classList.toggle("is-active", button.dataset.category === activeCategory));
    applyFilter();
  }
  if (action === "open-article") openArticle(actionElement.dataset.article);
  if (action === "close-modal") closeArticle();
  if (action === "open-search") openSearch();
  if (action === "close-search") closeSearch();
  if (action === "open-search-result") { closeSearch(); openArticle(actionElement.dataset.article); }
  if (action === "toggle-menu") document.querySelector("[data-mobile-nav]").classList.toggle("is-open");
});

document.addEventListener("input", (event) => {
  if (event.target.matches(".search-input")) updateSearchResults(event.target.value);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const modal = document.querySelector("[data-modal-backdrop]");
  const panel = document.querySelector("[data-search-panel]");
  if (modal?.classList.contains("is-open")) closeArticle();
  if (panel?.classList.contains("is-open")) closeSearch();
});

render();
