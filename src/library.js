
// Hiragana Unicode Table
const kana_a = "\u3042";
const kana_i = "\u3044";
const kana_u = "\u3046";
const kana_e = "\u3048";
const kana_o = "\u304A";
const kana_ka = "\u304B";
const kana_ki = "\u304D";
const kana_ku = "\u304F";
const kana_ke = "\u3051";
const kana_ko = "\u3053";
const kana_sa = "\u3055";
const kana_shi = "\u3057";
const kana_su = "\u3059";
const kana_se = "\u305B";
const kana_so = "\u305D";
const kana_ta = "\u305F";
const kana_chi = "\u3061";
const kana_tsu = "\u3064";
const kana_te = "\u3066";
const kana_to = "\u3068";
const kana_na = "\u306A";
const kana_ni = "\u306B";
const kana_nu = "\u306C";
const kana_ne = "\u306D";
const kana_no = "\u306E";
const kana_ha = "\u306F";
const kana_hi = "\u3072";
const kana_fu = "\u3075";
const kana_he = "\u3078";
const kana_ho = "\u307B";
const kana_ma = "\u307E";
const kana_mi = "\u307F";
const kana_mu = "\u3080";
const kana_me = "\u3081";
const kana_mo = "\u3082";
const kana_ya = "\u3084";
const kana_yu = "\u3086";
const kana_yo = "\u3088";
const kana_ra = "\u3089";
const kana_ri = "\u308A";
const kana_ru = "\u308B";
const kana_re = "\u308C";
const kana_ro = "\u308D";
const kana_wa = "\u308F";
const kana_n = "\u3093";
const kana_pa = "\u3071";

// So far unused...
const kana_pi = "\u3074";
const kana_pu = "\u3077";
const kana_pe = "\u307A";
const kana_po = "\u307D";

const kana_small_tsu = "\u3063";
const kana_wo = "\u3092";

// Dakuon
const kana_ga = "\u304C";
const kana_gi = "\u304E";
const kana_gu = "\u3050";
const kana_ge = "\u3052";
const kana_go = "\u3054";
const kana_za = "\u3056";
const kana_ji = "\u3058";
const kana_zu = "\u305A";
const kana_ze = "\u305C";
const kana_zo = "\u305E";
const kana_da = "\u3060";
const kana_de = "\u3067";
const kana_do = "\u3069";
const kana_ba = "\u3070";
const kana_bi = "\u3073";
const kana_bu = "\u3076";
const kana_be = "\u3079";

const middleDot = "\u30FB";


const library = [
    // Contains arrays of Card objects, separated into categories...

    // Body parts
    {
        englishText: "Mouth",
        romaji: "Kuchi",
        kanaText: kana_ku+kana_chi,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Knee(s)",
        romaji: "Hiza",
        kanaText: kana_hi+kana_za,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Arm(s)",
        romaji: "Ude",
        kanaText: kana_u+kana_de,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Head",
        romaji: "Atama",
        kanaText: kana_a+kana_ta+kana_ma,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Chest",
        romaji: "Mune",
        kanaText: kana_mu+kana_ne,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Neck",
        romaji: "Kubi",
        kanaText: kana_ku+kana_bi,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Throat",
        romaji: "Nodo",
        kanaText: kana_no+kana_do,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Face",
        romaji: "Kao",
        kanaText: kana_ka+kana_o,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Hand(s)",
        romaji: "Te",
        kanaText: kana_te,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Nose",
        romaji: "Hana",
        kanaText: kana_ha+kana_na,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Hair",
        romaji: "Kami",
        kanaText: kana_ka+kana_mi,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Eye(s)",
        romaji: "Me",
        kanaText: kana_me,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Tooth, Teeth",
        romaji: "Ha",
        kanaText: kana_ha,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Shoulder(s)",
        romaji: "Kata",
        kanaText: kana_ka+kana_ta,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Back",
        romaji: "Senaka",
        kanaText: kana_se+kana_na+kana_ka,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Leg(s), Foot",
        romaji: "Ashi",
        kanaText: kana_a+kana_shi,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Stomach, Abdomen",
        romaji: "Onaka",
        kanaText: kana_o+kana_na+kana_ka,
        kanjiText: "",
        category: "Body Parts"
    },
    // Category 1: "Adjectives (lump together but on the flipped version indicate (na) where appropriate)"
    {
        englishText: "Well, Fine, Energetic",
        romaji: "Genki",
        kanaText: kana_ge+kana_n+kana_ki,
        kanjiText: '元気',
        category: "Adjectives"
    },
    {
        englishText: "Expensive, Tall",
        romaji: "Takai",
        kanaText: kana_ta+kana_ka+kana_i,
        kanjiText: '\u9ad8'+kana_i,
        category: "Adjectives"
    },
    {
        englishText: "Beautiful, Clean",
        romaji: "Kirei",
        kanaText: kana_ki+kana_re+kana_i,
        kanjiText: "綺麗",
        category: "Adjectives"
    },
    {
        englishText: "Inconvenient",
        romaji: "Fuben",
        kanaText: kana_fu+kana_be+kana_n,
        kanjiText: "不便",
        category: "Adjectives"
    },
    {
        englishText: "Honest, Truthful",
        romaji: "Shoujiki",
        kanaText: kana_shi+kana_yo+kana_u+kana_ji+kana_ki,
        kanjiText: "正直",
        category: "Adjectives"
    },
    {
        englishText: "Kind, gentle, considerate",
        romaji: "Shinsetsu",
        kanaText: kana_shi+kana_n+kana_se+kana_tsu,
        kanjiText: "親切",
        category: "Adjectives"
    },
    {
        englishText: "Kind, gentle, nice",
        romaji: "Yasashii",
        kanaText: kana_ya+kana_sa+kana_shi+kana_i,
        kanjiText: "優しい",
        category: "Adjectives"
    },
    {
        englishText: "Rude, Impolite",
        romaji: "Shitsurei",
        kanaText: kana_shi+kana_tsu+kana_re+kana_i,
        kanjiText: "失礼",
        category: "Adjectives"
    },
    {
        englishText: "Safe",
        romaji: "Anzen",
        kanaText: kana_a+kana_n+kana_ze+kana_n,
        kanjiText: "安全",
        category: "Adjectives"
    },
    {
        englishText: "Convenient, useful",
        romaji: "Benri",
        kanaText: kana_be+kana_n+kana_ri,
        kanjiText: "便利",
        category: "Adjectives"
    },
    {
        englishText: "Easy, simple",
        romaji: "Kantan",
        kanaText: kana_ka+kana_n+kana_ta+kana_n,
        kanjiText: "簡単",
        category: "Adjectives"
    },
    {
        englishText: "Fresh",
        romaji: "Shinsen",
        kanaText: kana_shi+kana_n+kana_se+kana_n,
        kanjiText: "新鮮",
        category: "Adjectives"
    },
    {
        englishText: "Raw, live, fresh, draft (beer)",
        romaji: "Nama",
        kanaText: kana_na+kana_ma,
        kanjiText: "生",
        category: "Adjectives"
    },
    {
        englishText: "Quiet",
        romaji: "Shizuka",
        kanaText: kana_shi+kana_zu+kana_ka,
        kanjiText: "静か",
        category: "Adjectives"
    },
    {
        englishText: "Cold (To the touch)",
        romaji: "Tsumetai",
        kanaText: kana_tsu+kana_me+kana_ta+kana_i,
        kanjiText: "冷たい",
        category: "Adjectives"
    },
    {
        englishText: "Serious / Diligent",
        romaji: "Majime",
        kanaText: kana_ma+kana_ji+kana_me,
        kanjiText: "真面目",
        category: "Adjectives"
    },
    {
        englishText: "Black",
        romaji: "Kuroi",
        kanaText: kana_ku+kana_ro+kana_i,
        kanjiText: "黒い",
        category: "Adjectives"
    },
    {
        englishText: "Yellow",
        romaji: "Kiiroi",
        kanaText: kana_ki+kana_i+kana_ro+kana_i,
        kanjiText: "黄色い",
        category: "Adjectives"
    },
    {
        englishText: "Green",
        romaji: "Midori",
        kanaText: kana_mi+kana_do+kana_ri,
        kanjiText: "緑",
        category: "Adjectives"
    },
    {
        englishText: "Red",
        romaji: "Akai",
        kanaText: kana_a+kana_ka+kana_i,
        kanjiText: "赤い",
        category: "Adjectives"
    },
    {
        englishText: "White",
        romaji: "Shiroi",
        kanaText: kana_shi+kana_ro+kana_i,
        kanjiText: "白い",
        category: "Adjectives"
    },
    {
        englishText: "Gray",
        romaji: "Haiiro",
        kanaText: kana_ha+kana_i+kana_i+kana_ro,
        kanjiText: "灰色",
        category: "Adjectives"
    },
    {
        englishText: "Purple",
        romaji: "Murasaki",
        kanaText: kana_mu+kana_ra+kana_sa+kana_ki,
        kanjiText: "紫",
        category: "Adjectives"
    },
    {
        englishText: "Sad",
        romaji: "Kanashii",
        kanaText: kana_ka+kana_na+kana_shi+kana_i,
        kanjiText: "悲しい",
        category: "Adjectives"
    },
    {
        englishText: "Happy, Glad",
        romaji: "Ureshii",
        kanaText: kana_u+kana_re+kana_shi+kana_i,
        kanjiText: "嬉しい",
        category: "Adjectives"
    },
    {
        englishText: "Cheap, Inexpensive",
        romaji: "Yasui",
        kanaText: kana_ya+kana_su+kana_i,
        kanjiText: "安い",
        category: "Adjectives"
    },
    {
        englishText: "Noisy, Annoying",
        romaji: "Urusai",
        kanaText: kana_u+kana_ru+kana_sa+kana_i,
        kanjiText: "煩い",
        category: "Adjectives"
    },
    {
        englishText: "Early, Fast, Quick",
        romaji: "Hayai",
        kanaText: kana_ha+kana_ya+kana_i,
        kanjiText: "早い",
        category: "Adjectives"
    },
    {
        englishText: "Flat, Level, Smooth",
        romaji: "Taira",
        kanaText: kana_ta+kana_i+kana_ra,
        kanjiText: "平ら",
        category: "Adjectives"
    },
    {
        englishText: "Difficult",
        romaji: "Muzukashi",
        kanaText: kana_mu+kana_zu+kana_ka+kana_shi+kana_i,
        kanjiText: "難しい",
        category: "Adjectives"
    },
    {
        englishText: "Sweet",
        romaji: "Amai",
        kanaText: kana_a+kana_ma+kana_i,
        kanjiText: "甘い",
        category: "Adjectives"
    },
    {
        englishText: "Lightweight, minor, slight",
        romaji: "Karui",
        kanaText: kana_ka+kana_ru+kana_i,
        kanjiText: "軽い",
        category: "Adjectives"
    },
    {
        englishText: "Wide",
        romaji: "Hiroi",
        kanaText: kana_hi+kana_ro+kana_i,
        kanjiText: "広い",
        category: "Adjectives"
    },
    {
        englishText: "Spicy",
        romaji: "Karai",
        kanaText: kana_ka+kana_ra+kana_i,
        kanjiText: "辛い",
        category: "Adjectives"
    },
    {
        englishText: "Dirty",
        romaji: "Kitanai",
        kanaText: kana_ki+kana_ta+kana_na+kana_i,
        kanjiText: "汚い",
        category: "Adjectives"
    },
    {
        englishText: "Dangerous",
        romaji: "Abunai",
        kanaText: kana_a+kana_bu+kana_na+kana_i,
        kanjiText: "危ない",
        category: "Adjectives"
    },
    {
        englishText: "Hot (weather)",
        romaji: "Atsui",
        kanaText: kana_a+kana_tsu+kana_i,
        kanjiText: "熱い",
        category: "Adjectives"
    },
    {
        englishText: "Dark",
        romaji: "Kurai",
        kanaText: kana_ku+kana_ra+kana_i,
        kanjiText: "暗い",
        category: "Adjectives"
    },
    {
        englishText: "Cool (weather)",
        romaji: "Suzushii",
        kanaText: kana_su+kana_zu+kana_shi+kana_i,
        kanjiText: "涼しい",
        category: "Adjectives"
    },
    {
        englishText: "Small",
        romaji: "Chiisai",
        kanaText: kana_chi+kana_i+kana_sa+kana_i,
        kanjiText: "小さい",
        category: "Adjectives"
    },
    {
        englishText: "Busy",
        romaji: "Isogashii",
        kanaText: kana_i+kana_so+kana_ga+kana_shi+kana_i,
        kanjiText: "忙しい",
        category: "Adjectives"
    },
    {
        englishText: "Old",
        romaji: "Furui",
        kanaText: kana_fu+kana_ru+kana_i,
        kanjiText: "古い",
        category: "Adjectives"
    },
    {
        englishText: "Short",
        romaji: "Mijikai",
        kanaText: kana_mi+kana_ji+kana_ka+kana_i,
        kanjiText: "短い",
        category: "Adjectives"
    },
    {
        englishText: "Large, big",
        romaji: "Ookii",
        kanaText: kana_o+kana_o+kana_ki+kana_i,
        kanjiText: "大きい",
        category: "Adjectives"
    },
    {
        englishText: "Good at, Skillful at",
        romaji: "Jouzu",
        kanaText: kana_ji+kana_yo+kana_u+kana_zu,
        kanjiText: "上手",
        category: "Adjectives"
    },
    {
        englishText: "Bad at, Not Skilled at",
        romaji: "Heta",
        kanaText: kana_he+kana_ta,
        kanjiText: "下手",
        category: "Adjectives"
    },
    {
        englishText: "Okay / Fine",
        romaji: "Daijoubu",
        kanaText: kana_da+kana_i+kana_ji+kana_yo+kana_u+kana_bu,
        kanjiText: "大丈夫",
        category: "Adjectives"
    },
    {
        englishText: "Scary / Frightening",
        romaji: "Kowai",
        kanaText: kana_ko+kana_wa+kana_i,
        kanjiText: "怖い",
        category: "Adjectives"
    },
    {
        englishText: "Boring",
        romaji: "Tsumaranai",
        kanaText: kana_tsu+kana_ma+kana_ra+kana_na+kana_i,
        kanjiText: "詰らない",
        category: "Adjectives"
    },    
    {
        englishText: "Popular",
        romaji: "Ninki",
        kanaText: kana_ni+kana_n+kana_ki,
        kanjiText: "人気",
        category: "Adjectives"
    },
    {
        englishText: "Famous",
        romaji: "Yuumei",
        kanaText: kana_yu+kana_u+kana_me+kana_i,
        kanjiText: "有名",
        category: "Adjectives"
    },
    {
        englishText: "Strange, Weird",
        romaji: "Okashii",
        kanaText: kana_o+kana_ka+kana_shi+kana_i,
        kanjiText: "可笑しい",
        category: "Adjectives"
    },
    {
        englishText: "Strange, Weird",
        romaji: "Hen",
        kanaText: kana_he+kana_n,
        kanjiText: "変",
        category: "Adjectives"
    },
    {
        englishText: "Mean",
        romaji: "Hidoi",
        kanaText: kana_hi+kana_do+kana_i,
        kanjiText: "酷い",
        category: "Adjectives"
    },
    {
        englishText: "Funny, Interesting",
        romaji: "Omoshiroi",
        kanaText: kana_o+kana_mo+kana_shi+kana_ro+kana_i,
        kanjiText: "面白い",
        category: "Adjectives"
    },
    {
        englishText: "Heavy, Weighty, Gloomy",
        romaji: "Omoi",
        kanaText: kana_o+kana_mo+kana_i,
        kanjiText: "重い",
        category: "Adjectives"
    },
    {
        englishText: "New",
        romaji: "Atarashii",
        kanaText: kana_a+kana_ta+kana_ra+kana_shi+kana_i,
        kanjiText: "新しい",
        category: "Adjectives"
    },
    {
        englishText: "Slow, Late",
        romaji: "Osoi",
        kanaText: kana_o+kana_so+kana_i,
        kanjiText: "遅い",
        category: "Adjectives"
    },
    {
        englishText: "Bright",
        romaji: "Akarui",
        kanaText: kana_a+kana_ka+kana_ru+kana_i,
        kanjiText: "明るい",
        category: "Adjectives"
    },
    {
        englishText: "Many, Much",
        romaji: "Ooi",
        kanaText: kana_o+kana_o+kana_i,
        kanjiText: "多い",
        category: "Adjectives"
    },
    {
        englishText: "Salty",
        romaji: "Shoppai",
        kanaText: kana_shi+kana_yo+kana_small_tsu+kana_pa+kana_i,
        kanjiText: "塩っぱい",
        category: "Adjectives"
    },
    {
        englishText: "Cold (weather)",
        romaji: "Samui",
        kanaText: kana_sa+kana_mu+kana_i,
        kanjiText: "寒い",
        category: "Adjectives"
    },
    {
        englishText: "Thin, Slender",
        romaji: "Hosoi",
        kanaText: kana_ho+kana_so+kana_i,
        kanjiText: "細い",
        category: "Adjectives"
    },
    {
        englishText: "Sour",
        romaji: "Suppai",
        kanaText: kana_su+kana_small_tsu+kana_pa+kana_i,
        kanjiText: "酸っぱい",
        category: "Adjectives"
    },
    {
        englishText: "Bad (Taste), Unpleasant",
        romaji: "Mazui",
        kanaText: kana_ma+kana_zu+kana_i,
        kanjiText: "不味い",
        category: "Adjectives"
    },
    {
        englishText: "Strong, Powerful",
        romaji: "Tsuyoi",
        kanaText: kana_tsu+kana_yo+kana_i,
        kanjiText: "強い",
        category: "Adjectives"
    },
    {
        englishText: "Weak, Frail",
        romaji: "Yowai",
        kanaText: kana_yo+kana_wa+kana_i,
        kanjiText: "弱い",
        category: "Adjectives"
    },
    {
        englishText: "Blue",
        romaji: "Aoi",
        kanaText: kana_a+kana_o+kana_i,
        kanjiText: "青い",
        category: "Adjectives"
    },
    {
        englishText: "Cloudy",
        romaji: "Kumori",
        kanaText: kana_ku+kana_mo+kana_ri,
        kanjiText: "曇り",
        category: "Adjectives"
    },
    {
        englishText: "Fun, Enjoyable",
        romaji: "Tanoshii",
        kanaText: kana_ta+kana_no+kana_shi+kana_i,
        kanjiText: "楽しい",
        category: "Adjectives"
    },
    {
        englishText: "Far, distant",
        romaji: "Tooi",
        kanaText: kana_to+kana_o+kana_i,
        kanjiText: "遠い",
        category: "Adjectives"
    },
    {
        englishText: "Same",
        romaji: "Onajii",
        kanaText: kana_o+kana_na+kana_ji,
        kanjiText: "同じい",
        category: "Adjectives"
    },
    {
        englishText: "Sunny",
        romaji: "Hare",
        kanaText: kana_ha+kana_re,
        kanjiText: "晴れ",
        category: "Adjectives"
    },
    {
        englishText: "Important",
        romaji: "Taisetsu",
        kanaText: kana_ta+kana_i+kana_se+kana_tsu,
        kanjiText: "大切",
        category: "Adjectives"
    },
    {
        englishText: "Important",
        romaji: "Daiji",
        kanaText: kana_da+kana_i+kana_ji,
        kanjiText: "大事",
        category: "Adjectives"
    },
    {
        englishText: "Difficult, treacherous, greatly",
        romaji: "Taihen",
        kanaText: kana_ta+kana_i+kana_he+kana_n,
        kanjiText: "大変",
        category: "Adjectives"
    },
    {
        englishText: "Regrettable, Close (not quite)",
        romaji: "Oshii",
        kanaText: kana_o+kana_shi+kana_i,
        kanjiText: "惜しい",
        category: "Adjectives"
    },
    {
        englishText: "Delicious",
        romaji: "Oishii",
        kanaText: kana_o+kana_i+kana_shi+kana_i,
        kanjiText: "美味しい",
        category: "Adjectives"
    },
    {
        englishText: "Sober",
        romaji: "Shirafu",
        kanaText: "シラフ",
        kanjiText: "-",
        category: "Adjectives"
    },
    {
        englishText: "Complex, Complicated",
        romaji: "Fukuzatsu",
        kanaText: kana_fu+kana_ku+kana_za+kana_tsu,
        kanjiText: "複雑",
        category: "Adjectives"
    },
    {
        englishText: "Humble, Modest",
        romaji: "Kenkyo",
        kanaText: kana_ke+kana_n+kana_ki+kana_yo,
        kanjiText: "謙虚",
        category: "Adjectives"
    },
    {
        englishText: "Tipsy, Buzzed",
        romaji: "Horoyoi",
        kanaText: kana_ho+kana_ro+kana_yo+kana_i,
        kanjiText: "ほろ酔い",
        category: "Adjectives"
    },
    {
        englishText: "Lonely",
        romaji: "Sabishii",
        kanaText: kana_sa+kana_bi+kana_shi+kana_i,
        kanjiText: "寂しい",
        category: "Adjectives"
    },
    {
        englishText: "Uneven, Rough, Bumpy",
        romaji: "Dekoboko",
        kanaText: kana_de+kana_ko+'ぼ'+kana_ko,
        kanjiText: "寂しい",
        category: "Adjectives"
    },


    // Category 2: Nouns
    {
        englishText: "Car",
        romaji: "Kuruma",
        kanaText: kana_ku+kana_ru+kana_ma,
        kanjiText: "車",
        category: "Nouns"
    },
    {
        englishText: "Wallet",
        romaji: "Saifu",
        kanaText: kana_sa+kana_i+kana_fu,
        kanjiText: "財布",
        category: "Nouns"
    },
    {
        englishText: "Dream",
        romaji: "Yume",
        kanaText: kana_yu+kana_me,
        kanjiText: "夢",
        category: "Nouns"
    },
    {
        englishText: "Family",
        romaji: "Kazoku",
        kanaText: kana_ka+kana_zo+kana_ku,
        kanjiText: "家族",
        category: "Nouns"
    },
    {
        englishText: "Animal",
        romaji: "Doubutsu",
        kanaText: kana_do+kana_u+kana_bu+kana_tsu,
        kanjiText: "動物",
        category: "Nouns"
    },
    {
        englishText: "Address",
        romaji: "Juusho",
        kanaText: kana_ji+kana_yu+kana_u+kana_shi+kana_yo,
        kanjiText: "住所",
        category: "Nouns"
    },
    {
        englishText: "Name",
        romaji: "Namae",
        kanaText: kana_na+kana_ma+kana_e,
        kanjiText: "名前",
        category: "Nouns"
    },
    {
        englishText: "Cash",
        romaji: "Genkin",
        kanaText: kana_ge+kana_n+kana_ki+kana_n,
        kanjiText: "現金",
        category: "Nouns"
    },
    {
        englishText: "Money",
        romaji: "Kane",
        kanaText: kana_o+kana_ka+kana_ne,
        kanjiText: "鐘",
        category: "Nouns"
    },
    {
        englishText: "Leather",
        romaji: "Kawa",
        kanaText: kana_ka+kana_wa,
        kanjiText: "革",
        category: "Nouns"
    },
    {
        englishText: "Hide, Pelt, Fur, Bark, Shell, Wrapping",
        romaji: "Kawa",
        kanaText: kana_ka+kana_wa,
        kanjiText: "皮",
        category: "Nouns"
    },
    {
        englishText: "Train Station",
        romaji: "Eki",
        kanaText: kana_e+kana_ki,
        kanjiText: "駅",
        category: "Nouns"
    },
    {
        englishText: "Umbrella",
        romaji: "Kasa",
        kanaText: kana_ka+kana_sa,
        kanjiText: "傘",
        category: "Nouns"
    },
    {
        englishText: "Entrance",
        romaji: "Iriguchi",
        kanaText: kana_i+kana_ri+kana_gu+kana_chi,
        kanjiText: "入り口",
        category: "Nouns"
    },
    {
        englishText: "Exit",
        romaji: "Deguchi",
        kanaText: kana_de+kana_gu+kana_chi,
        kanjiText: "出口",
        category: "Nouns"
    },
    {
        englishText: "This (here)",
        romaji: "Kore",
        kanaText: kana_ko+kana_re,
        kanjiText: "-",
        category: "Nouns"
    },
    {
        englishText: "That (near speaker)",
        romaji: "Sore",
        kanaText: kana_so+kana_re,
        kanjiText: "-",
        category: "Nouns"
    },
    {
        englishText: "That (over there)",
        romaji: "are",
        kanaText: kana_a+kana_re,
        kanjiText: "-",
        category: "Nouns"
    },
    {
        englishText: "Medical Exam",
        romaji: "Shinsatsu",
        kanaText: kana_shi+kana_n+kana_sa+kana_tsu,
        kanjiText: "診察",
        category: "Nouns"
    },
    {
        englishText: "Coat, Jacket",
        romaji: "Uwagi",
        kanaText: kana_u+kana_wa+kana_gi,
        kanjiText: "診察",
        category: "Nouns"
    },
    {
        englishText: "Physical Condition",
        romaji: "Taichou",
        kanaText: kana_ta+kana_i+kana_chi+kana_yo+kana_u,
        kanjiText: "体調",
        category: "Nouns"
    },
    {
        englishText: "Condition, State",
        romaji: "Guai",
        kanaText: kana_gu+kana_a+kana_i,
        kanjiText: "具合",
        category: "Nouns"
    },
    {
        englishText: "Mental / Emotional Condition, Mood",
        romaji: "Kibun",
        kanaText: kana_ki+kana_bu+kana_n,
        kanjiText: "気分",
        category: "Nouns"
    },
    {
        englishText: "Fish Tank",
        romaji: "Suisou",
        kanaText: kana_su+kana_i+kana_so+kana_u,
        kanjiText: "水槽",
        category: "Nouns"
    },
    {
        englishText: "Lid / Cap / Cover",
        romaji: "Futa",
        kanaText: kana_fu+kana_ta,
        kanjiText: "蓋",
        category: "Nouns"
    },
    {
        englishText: "Weather",
        romaji: "Tenki",
        kanaText: kana_te+kana_n+kana_ki,
        kanjiText: "天気",
        category: "Nouns"
    },
    {
        englishText: "Shoes",
        romaji: "Kutsu",
        kanaText: kana_ku+kana_tsu,
        kanjiText: "靴",
        category: "Nouns"
    },
    {
        englishText: "Socks, Stockings",
        romaji: "Kutsushita",
        kanaText: kana_ku+kana_tsu,
        kanjiText: "靴下",
        category: "Nouns"
    },
    {
        englishText: "Corner",
        romaji: "Kado",
        kanaText: kana_ka+kana_do,
        kanjiText: "角",
        category: "Nouns"
    },
    {
        englishText: "Intersection",
        romaji: "Kousaten",
        kanaText: kana_ko+kana_u+kana_sa+kana_te+kana_n,
        kanjiText: "交差点",
        category: "Nouns"
    },
    {
        englishText: "Traffic Signal",
        romaji: "Shingou",
        kanaText: kana_shi+kana_n+kana_go+kana_u,
        kanjiText: "信号",
        category: "Nouns"
    },
    {
        englishText: "Police",
        romaji: "Keisatsu",
        kanaText: kana_ke+kana_i+kana_sa+kana_tsu,
        kanjiText: "警察",
        category: "Nouns"
    },
    {
        englishText: "Kitchen (Japanese)",
        romaji: "Daidokoro",
        kanaText: kana_da+kana_i+kana_do+kana_ko+kana_ro,
        kanjiText: "台所",
        category: "Nouns"
    },
    {
        englishText: "Picture",
        romaji: "Shashin",
        kanaText: kana_shi+kana_ya+kana_shi+kana_n,
        kanjiText: "写真",
        category: "Nouns"
    },
    {
        englishText: "Photographer",
        romaji: "Shashinka",
        kanaText: kana_shi+kana_ya+kana_shi+kana_n+kana_ka,
        kanjiText: "写真家",
        category: "Nouns"
    },
    {
        englishText: "Chair",
        romaji: "Isu",
        kanaText: kana_i+kana_su,
        kanjiText: "椅子",
        category: "Nouns"
    },
    {
        englishText: "Happiness",
        romaji: "Shiawase",
        kanaText: kana_shi+kana_a+kana_wa+kana_se,
        kanjiText: "幸せ",
        category: "Nouns"
    },
    {
        englishText: "Front Desk / Reception",
        romaji: "Uketsuke",
        kanaText: kana_u+kana_ke+kana_tsu+kana_ke,
        kanjiText: "受付",
        category: "Nouns"
    },
    {
        englishText: "Letter / Mail",
        romaji: "Tegami",
        kanaText: kana_te+kana_ga+kana_mi,
        kanjiText: "手紙",
        category: "Nouns"
    },
    {
        englishText: "Boss",
        romaji: "Buchou",
        kanaText: kana_bu+kana_chi+kana_yo+kana_u,
        kanjiText: "部長",
        category: "Nouns"
    },
    {
        englishText: "Heat / Temperature / Fever",
        romaji: "Netsu",
        kanaText: kana_ne+kana_tsu,
        kanjiText: "熱",
        category: "Nouns"
    },
    {
        englishText: "Temperature (in general, or indoors)",
        romaji: "Ondo",
        kanaText: kana_o+kana_n+kana_do,
        kanjiText: "温度",
        category: "Nouns"
    },
    {
        englishText: "Air Temperature (outdoors, weather)",
        romaji: "Kion",
        kanaText: kana_ki+kana_o+kana_n,
        kanjiText: "気温",
        category: "Nouns"
    },
    {
        englishText: "Doctor",
        romaji: "Isha",
        kanaText: kana_i+kana_shi+kana_ya,
        kanjiText: "医者",
        category: "Nouns"
    },
    {
        englishText: "Clothing",
        romaji: "Fuku",
        kanaText: kana_fu+kana_ku,
        kanjiText: "服",
        category: "Nouns"
    },
    {
        englishText: "Road / Path",
        romaji: "Michi",
        kanaText: kana_mi+kana_chi,
        kanjiText: "道",
        category: "Nouns"
    },
    {
        englishText: "Freeway, Highway",
        romaji: "Douro",
        kanaText: kana_do+kana_u+kana_ro,
        kanjiText: "道路",
        category: "Nouns"
    },
    {
        englishText: "Sky",
        romaji: "Sora",
        kanaText: kana_so+kana_ra,
        kanjiText: "空",
        category: "Nouns"
    },
    {
        englishText: "Friend",
        romaji: "Tomodachi",
        kanaText: kana_to+kana_mo+kana_da+kana_chi,
        kanjiText: "友達",
        category: "Nouns"
    },
    {
        englishText: "Colleague, Associate",
        romaji: "Nakama",
        kanaText: kana_na+kana_ka+kana_ma,
        kanjiText: "仲間",
        category: "Nouns"
    },
    {
        englishText: "Close friend, Best friend",
        romaji: "Shinyuu",
        kanaText: kana_shi+kana_n+kana_yu+kana_u,
        kanjiText: "親友",
        category: "Nouns"
    },
    {
        englishText: "Co-worker",
        romaji: "Douryou",
        kanaText: kana_do+kana_u+kana_ri+kana_yo+kana_u,
        kanjiText: "同僚",
        category: "Nouns"
    },
    {
        englishText: "Neighbor",
        romaji: "Tonari",
        kanaText: kana_to+kana_na+kana_ri,
        kanjiText: "隣",
        category: "Nouns"
    },
    {
        englishText: "Neighborhood",
        romaji: "Kinjo",
        kanaText: kana_ki+kana_n+kana_ji+kana_yo,
        kanjiText: "近所",
        category: "Nouns"
    },
    {
        englishText: "Seasons",
        romaji: "Kisetsu",
        kanaText: kana_ki+kana_se+kana_tsu,
        kanjiText: "季節",
        category: "Nouns"
    },
    {
        englishText: "Autumn",
        romaji: "Aki",
        kanaText: kana_a+kana_ki,
        kanjiText: "秋",
        category: "Nouns"
    },
    {
        englishText: "Autumn colors, Autumn leaves",
        romaji: "Kouyou",
        kanaText: kana_ko+kana_u+kana_yo+kana_u,
        kanjiText: "紅葉",
        category: "Nouns"
    },
    {
        englishText: "Winter",
        romaji: "Fuyu",
        kanaText: kana_fu+kana_yu,
        kanjiText: "冬",
        category: "Nouns"
    },
    {
        englishText: "Spring",
        romaji: "Haru",
        kanaText: kana_ha+kana_ru,
        kanjiText: "春",
        category: "Nouns"
    },
    {
        englishText: "Summer",
        romaji: "Natsu",
        kanaText: kana_na+kana_tsu,
        kanjiText: "夏",
        category: "Nouns"
    },
    {
        englishText: "Both",
        romaji: "Ryouhou",
        kanaText: kana_ri+kana_yo+kana_u+kana_ho+kana_u,
        kanjiText: "両方",
        category: "Nouns"
    },
    {
        englishText: "Electricity",
        romaji: "Denki",
        kanaText: kana_de+kana_n+kana_ki,
        kanjiText: "電気",
        category: "Nouns"
    },
    {
        englishText: "Phone",
        romaji: "Denwa",
        kanaText: kana_de+kana_n+kana_wa,
        kanjiText: "電話",
        category: "Nouns"
    },
    {
        englishText: "(Electrical) Power",
        romaji: "Dengen",
        kanaText: kana_de+kana_n+kana_ge+kana_n,
        kanjiText: "電源",
        category: "Nouns"
    },
    {
        englishText: "Lightning, Thunder",
        romaji: "Kaminari",
        kanaText: kana_ka+kana_mi+kana_na+kana_ri,
        kanjiText: "雷",
        category: "Nouns"
    },
    {
        englishText: "Right (direction)",
        romaji: "Migi",
        kanaText: kana_mi+kana_gi,
        kanjiText: "右",
        category: "Nouns"
    },
    {
        englishText: "Left (direction)",
        romaji: "Hidari",
        kanaText: kana_hi+kana_da+kana_ri,
        kanjiText: "左",
        category: "Nouns"
    },
    {
        englishText: "North",
        romaji: "Kita",
        kanaText: kana_ki+kana_ta,
        kanjiText: "北",
        category: "Nouns"
    },
    {
        englishText: "East",
        romaji: "Higashi",
        kanaText: kana_hi+kana_ga+kana_shi,
        kanjiText: "東",
        category: "Nouns"
    },
    {
        englishText: "South",
        romaji: "Minami",
        kanaText: kana_mi+kana_na+kana_mi,
        kanjiText: "南",
        category: "Nouns"
    },
    {
        englishText: "West",
        romaji: "Nishi",
        kanaText: kana_ni+kana_shi,
        kanjiText: "西",
        category: "Nouns"
    },
    {
        englishText: "Correct answer, Solution",
        romaji: "Seikai",
        kanaText: kana_se+kana_i+kana_ka+kana_i,
        kanjiText: "正解",
        category: "Nouns"
    },
    {
        englishText: "Rice (cooked)",
        romaji: "Gohan",
        kanaText: kana_go+kana_ha+kana_n,
        kanjiText: "ご飯",
        category: "Nouns"
    },
    {
        englishText: "Meat",
        romaji: "Niku",
        kanaText: kana_ni+kana_ku,
        kanjiText: "肉",
        category: "Nouns"
    },
    {
        englishText: "Fish",
        romaji: "Sakana",
        kanaText: kana_sa+kana_ka+kana_na,
        kanjiText: "魚",
        category: "Nouns"
    },
    {
        englishText: "Noon",
        romaji: "Hiru",
        kanaText: kana_hi+kana_ru,
        kanjiText: "昼",
        category: "Nouns"
    },
    {
        englishText: "Afteroon",
        romaji: "Gogo",
        kanaText: kana_go+kana_go,
        kanjiText: "午後",
        category: "Nouns"
    },
    {
        englishText: "Country",
        romaji: "Kuni",
        kanaText: kana_ku+kana_ni,
        kanjiText: "国",
        category: "Nouns"
    },
    {
        englishText: "Airplane",
        romaji: "Hikouki",
        kanaText: kana_hi+kana_ko+kana_u+kana_ki,
        kanjiText: "飛行機",
        category: "Nouns"
    },
    {
        englishText: "Train Platform",
        romaji: "Bansen",
        kanaText: kana_ba+kana_n+kana_se+kana_n,
        kanjiText: "番線",
        category: "Nouns"
    },
    {
        englishText: "Last Month",
        romaji: "Sengetsu",
        kanaText: kana_se+kana_n+kana_ge+kana_tsu,
        kanjiText: "先月",
        category: "Nouns"
    },
    {
        englishText: "Movie",
        romaji: "Eiga",
        kanaText: kana_e+kana_i+kana_ga,
        kanjiText: "映画",
        category: "Nouns"
    },
    {
        englishText: "Evening / Night",
        romaji: "Yoru",
        kanaText: kana_yo+kana_ru,
        kanjiText: "夜",
        category: "Nouns"
    },
    {
        englishText: "Tonight, This evening",
        romaji: "Konya",
        kanaText: kana_ko+kana_n+kana_ya,
        kanjiText: "今夜",
        category: "Nouns"
    },
    {
        englishText: "Lies",
        romaji: "Uso",
        kanaText: kana_u+kana_so,
        kanjiText: "嘘",
        category: "Nouns"
    },
    {
        englishText: "Teacher",
        romaji: "Sensei",
        kanaText: kana_se+kana_n+kana_se+kana_i,
        kanjiText: "先生",
        category: "Nouns"
    },
    {
        englishText: "Heart",
        romaji: "Kokoro",
        kanaText: kana_ko+kana_ko+kana_ro,
        kanjiText: "心",
        category: "Nouns"
    },
    {
        englishText: "Glasses",
        romaji: "Megane",
        kanaText: 'メガネ',
        kanjiText: "-",
        category: "Nouns"
    },
    {
        englishText: "Side (i.e. left side, side of something)",
        romaji: "Gawa",
        kanaText: kana_ga+kana_wa,
        kanjiText: "側",
        category: "Nouns"
    },
    {
        englishText: "Wind",
        romaji: "Kaze",
        kanaText: kana_ka+kana_ze,
        kanjiText: "風",
        category: "Nouns"
    },
    {
        englishText: "Water",
        romaji: "Mizu",
        kanaText: kana_mi+kana_zu,
        kanjiText: "水",
        category: "Nouns"
    },
    {
        englishText: "Lake",
        romaji: "Mizuumi",
        kanaText: kana_mi+kana_zu+kana_u+kana_mi,
        kanjiText: "湖",
        category: "Nouns"
    },
    {
        englishText: "Bank",
        romaji: "Ginkou",
        kanaText: kana_gi+kana_n+kana_ko+kana_u,
        kanjiText: "銀行",
        category: "Nouns"
    },
    {
        englishText: "Ice",
        romaji: "Koori",
        kanaText: kana_ko+kana_o+kana_ri,
        kanjiText: "氷",
        category: "Nouns"
    },
    {
        englishText: "Seat",
        romaji: "Seki",
        kanaText: kana_se+kana_ki,
        kanjiText: "席",
        category: "Nouns"
    },
    {
        englishText: "Plum",
        romaji: "Ume",
        kanaText: kana_u+kana_me,
        kanjiText: "梅",
        category: "Nouns"
    },
    {
        englishText: "Peach",
        romaji: "Momo",
        kanaText: kana_mo+kana_mo,
        kanjiText: "桃",
        category: "Nouns"
    },
    {
        englishText: "Strawberry",
        romaji: "Ichigo",
        kanaText: kana_i+kana_chi+kana_go,
        kanjiText: "-",
        category: "Nouns"
    },
    {
        englishText: "Eel",
        romaji: "Unagi",
        kanaText: kana_u+kana_na+kana_gi,
        kanjiText: "-",
        category: "Nouns"
    },
    {
        englishText: "Bird",
        romaji: "Tori",
        kanaText: kana_to+kana_ri,
        kanjiText: "鳥",
        category: "Nouns"
    },
    {
        englishText: "Apple",
        romaji: "Ringo",
        kanaText: kana_ri+kana_n+kana_go,
        kanjiText: "-",
        category: "Nouns"
    },
    {
        englishText: "Dog",
        romaji: "Inu",
        kanaText: kana_i+kana_nu,
        kanjiText: "犬",
        category: "Nouns"
    },
    {
        englishText: "Cat",
        romaji: "Neko",
        kanaText: kana_ne+kana_ko,
        kanjiText: "猫",
        category: "Nouns"
    },
    {
        englishText: "Room, Bedroom",
        romaji: "Heya",
        kanaText: kana_he+kana_ya,
        kanjiText: "部屋",
        category: "Nouns"
    },
    {
        englishText: "Stairs, Stairway, Staircase",
        romaji: "Kaidan",
        kanaText: kana_ka+kana_i+kana_da+kana_n,
        kanjiText: "階段",
        category: "Nouns"
    },
    {
        englishText: "Rural area, Countryside",
        romaji: "Inaka",
        kanaText: kana_i+kana_na+kana_ka,
        kanjiText: "田舎",
        category: "Nouns"
    },
    {
        englishText: "Word, Speech, Phrase, Term",
        romaji: "Kotoba",
        kanaText: kana_ko+kana_to+kana_ba,
        kanjiText: "言葉",
        category: "Nouns"
    },
    {
        englishText: "Hot Water",
        romaji: "Oyu",
        kanaText: kana_o+kana_yu,
        kanjiText: "お湯",
        category: "Nouns"
    },
    {
        englishText: "Situation, Case, Circumstance",
        romaji: "Baai",
        kanaText: kana_ba+kana_a+kana_i,
        kanjiText: "場合",
        category: "Nouns"
    },
    {
        englishText: "Library",
        romaji: "Toshokan",
        kanaText: kana_to+kana_shi+kana_yo+kana_ka+kana_n,
        kanjiText: "図書館",
        category: "Nouns"
    },
    {
        englishText: "Movie Theater",
        romaji: "Eigakan",
        kanaText: kana_e+kana_i+kana_ga+kana_ka+kana_n,
        kanjiText: "映画館",
        category: "Nouns"
    },
    {
        englishText: "Bathtub",
        romaji: "Ofuro",
        kanaText: kana_o+kana_fu+kana_ro,
        kanjiText: "お風呂",
        category: "Nouns"
    },
    {
        englishText: "House",
        romaji: "ie",
        kanaText: kana_i+kana_e,
        kanjiText: "家",
        category: "Nouns"
    },
    {
        englishText: "Home, Inside, Within",
        romaji: "Uchi",
        kanaText: kana_u+kana_chi,
        kanjiText: "内",
        category: "Nouns"
    },
    {
        englishText: "Outside",
        romaji: "Soto",
        kanaText: kana_so+kana_to,
        kanjiText: "外",
        category: "Nouns"
    },
    {
        englishText: "Clock, Watch",
        romaji: "Tokei",
        kanaText: kana_to+kana_ke+kana_i,
        kanjiText: "時計",
        category: "Nouns"
    },
    {
        englishText: "Late night, Middle of the night",
        romaji: "Yonaka",
        kanaText: kana_yo+kana_na+kana_ka,
        kanjiText: "夜中",
        category: "Nouns"
    },
    {
        englishText: "Luggage",
        romaji: "Nimotsu",
        kanaText: kana_ni+kana_mo+kana_tsu,
        kanjiText: "荷物",
        category: "Nouns"
    },
    {
        englishText: "Store, Shop",
        romaji: "Mise",
        kanaText: kana_mi+kana_se,
        kanjiText: "店",
        category: "Nouns"
    },
    {
        englishText: "Evening",
        romaji: "Ban",
        kanaText: kana_ba+kana_n,
        kanjiText: "晩",
        category: "Nouns"
    },
    {
        englishText: "Morning",
        romaji: "Asa",
        kanaText: kana_a+kana_sa,
        kanjiText: "朝",
        category: "Nouns"
    },
    {
        englishText: "This morning",
        romaji: "Kesa",
        kanaText: kana_ke+kana_sa,
        kanjiText: "今朝",
        category: "Nouns"
    },
    {
        englishText: "Ocean, Beach",
        romaji: "Umi",
        kanaText: kana_u+kana_mi,
        kanjiText: "海",
        category: "Nouns"
    },
    {
        englishText: "Summertime clothing similar to Kimono",
        romaji: "Yukata",
        kanaText: kana_yu+kana_ka+kana_ta,
        kanjiText: "浴衣",
        category: "Nouns"
    },
    {
        englishText: "Voice",
        romaji: "Koe",
        kanaText: kana_ko+kana_e,
        kanjiText: "声",
        category: "Nouns"
    },
    {
        englishText: "Woman",
        romaji: "Onna no hito",
        kanaText: kana_o+kana_n+kana_na+" "+kana_no+" "+kana_hi+kana_to,
        kanjiText: "女の人",
        category: "Nouns"
    },
    {
        englishText: "Train",
        romaji: "Densha",
        kanaText: kana_de+kana_n+kana_shi+kana_ya,
        kanjiText: "電車",
        category: "Nouns"
    },
    {
        englishText: "Subway",
        romaji: "Chikatetsu",
        kanaText: kana_chi+kana_ka+kana_te+kana_tsu,
        kanjiText: "地下鉄",
        category: "Nouns"
    },
    {
        englishText: "Vegetables",
        romaji: "Yasai",
        kanaText: kana_ya+kana_sa+kana_i,
        kanjiText: "野菜",
        category: "Nouns"
    },
    {
        englishText: "Work, Job",
        romaji: "Shigoto",
        kanaText: kana_shi+kana_go+kana_to,
        kanjiText: "仕事",
        category: "Nouns"
    },
    {
        englishText: "Vacation",
        romaji: "Yasumi",
        kanaText: kana_ya+kana_su+kana_mi,
        kanjiText: "休み",
        category: "Nouns"
    },
    {
        englishText: "Forest",
        romaji: "Mori",
        kanaText: kana_mo+kana_ri,
        kanjiText: "森",
        category: "Nouns"
    },
    {
        englishText: "Everyone",
        romaji: "Minna",
        kanaText: kana_mi+kana_n+kana_na,
        kanjiText: "-",
        category: "Nouns"
    },
    {
        englishText: "Arrival",
        romaji: "Touchaku",
        kanaText: kana_to+kana_u+kana_chi+kana_ya+kana_ku,
        kanjiText: "到着",
        category: "Nouns"
    },
    {
        englishText: "Airport",
        romaji: "Kuukou",
        kanaText: kana_ku+kana_u+kana_ko+kana_u,
        kanjiText: "空港",
        category: "Nouns"
    },
    {
        englishText: "Park",
        romaji: "Kouen",
        kanaText: kana_ko+kana_u+kana_e+kana_n,
        kanjiText: "公園",
        category: "Nouns"
    },
    {
        englishText: "License",
        romaji: "Menkyo",
        kanaText: kana_me+kana_n+kana_ki+kana_yo,
        kanjiText: "免許",
        category: "Nouns"
    },
    {
        englishText: "Tomorrow",
        romaji: "Ashita",
        kanaText: kana_a+kana_shi+kana_ta,
        kanjiText: "明日",
        category: "Nouns"
    },
    {
        englishText: "Yesterday",
        romaji: "Kinou",
        kanaText: kana_ki+kana_no+kana_u,
        kanjiText: "昨日",
        category: "Nouns"
    },
    {
        englishText: "Departure",
        romaji: "Shuppatsu",
        kanaText: kana_shi+kana_yu+kana_small_tsu+kana_pa+kana_tsu,
        kanjiText: "出発",
        category: "Nouns"
    },
    {
        englishText: "Today",
        romaji: "Kyou",
        kanaText: kana_ki+kana_yo+kana_u,
        kanjiText: "今日",
        category: "Nouns"
    },
    {
        englishText: "Rain",
        romaji: "Ame",
        kanaText: kana_a+kana_me,
        kanjiText: "雨",
        category: "Nouns"
    },
    {
        englishText: "Customer",
        romaji: "Kyaku",
        kanaText: "("+kana_o+") "+kana_ki+kana_ya+kana_ku,
        kanjiText: "("+kana_o+") 客",
        category: "Nouns"
    },
    {
        englishText: "Now",
        romaji: "Ima",
        kanaText: kana_i+kana_ma,
        kanjiText: "今",
        category: "Nouns"
    },
    {
        englishText: "Crab",
        romaji: "Kani",
        kanaText: 'カニ',
        kanjiText: "-",
        category: "Nouns"
    },
    {
        englishText: "Bag",
        romaji: "Kaban",
        kanaText: kana_ka+kana_ba+kana_n,
        kanjiText: "鞄",
        category: "Nouns"
    },
    {
        englishText: "Tea",
        romaji: "cha",
        kanaText: kana_o+kana_chi+kana_ya,
        kanjiText: "茶",
        category: "Nouns"
    },
    {
        englishText: "Medicine",
        romaji: "Kusuri",
        kanaText: kana_ku+kana_su+kana_ri,
        kanjiText: "薬",
        category: "Nouns"
    },
    {
        englishText: "Snow",
        romaji: "Yuki",
        kanaText: kana_yu+kana_ki,
        kanjiText: "雪",
        category: "Nouns"
    },

    // Category 3: verbs

    {
        englishText: "To Drink",
        romaji: "Nomu",
        kanjiText: "\u98f2",
        kanaText: kana_mu,
        furiganaPairs: [
            { base: "\u98f2", furigana: "の" }, // Kanji with Furigana
        ],
        category: "Verbs",
        conjugations: {
            regular: {
                kana: kana_no+kana_mu,
                romaji: "nomu"
            },
            polite: {
                kana: kana_no+kana_mi+kana_ma+kana_su,
                romaji: "nomimasu"
            },
            pastRegular: {
                kana: kana_no+kana_n+kana_da,
                romaji: "nonda"
            },
            teForm: {
                kana: kana_no+kana_n+kana_de,
                romaji: "nonde"
            }
        }
    },
    {
        englishText: "(to) Give up",
        romaji: "akirameru",
        kanjiText: "\u8ae6",
        kanaText: kana_me+kana_ru,
        furiganaPairs: [
            { base: "\u8ae6", furigana: kana_a+kana_ki+kana_ra }, // Kanji with Furigana
        ],
        category: "Verbs",
        conjugations: {
            regular: {
                kana: kana_a+kana_ki+kana_ra+kana_me+kana_ru,
                romaji: "akirameru"
            },
            polite: {
                kana: kana_a+kana_ki+kana_ra+kana_me+kana_ma+kana_su,
                romaji: "akiramemasu"
            },
            pastRegular: {
                kana: kana_a+kana_ki+kana_ra+kana_me+kana_n+kana_ta,
                romaji: "akirameta"
            },
            teForm: {
                kana: kana_a+kana_ki+kana_ra+kana_me+kana_te,
                romaji: "akiramete"
            }
        }
    },
    {
        englishText: "(to) Stop by somewhere, on the way to another place; (to) Make a short visit",
        romaji: "yoru",
        kanjiText: "\u5bc4",
        kanaText: kana_ru, // The kana after tha kanji
        furiganaPairs: [
            { base: "\u5bc4", furigana: kana_yo }, // Kanji with Furigana
        ],
        category: "Verbs",
        conjugations: {
            regular: {
                kana: kana_yo+kana_ru,
                romaji: "yoru"
            },
            polite: {
                kana: kana_yo+kana_ri+kana_ma+kana_su,
                romaji: "yorimasu"
            },
            pastRegular: {
                kana: kana_yo+kana_small_tsu+kana_ta,
                romaji: "yotta"
            },
            teForm: {
                kana: kana_yo+kana_small_tsu+kana_te,
                romaji: "yotte"
            }
        }
    },
    {
        englishText: "(to) Bring to a boil",
        romaji: "wakasu",
        kanjiText: "\u6cb8",
        furiganaPairs: [
            { base: "\u6cb8", furigana: kana_wa }, // Kanji and its Furigana
        ],
        kanaText: kana_ka+kana_su, // The kana after tha kanji
        category: "Verbs",
        conjugations: {
            regular: {
                kana: kana_wa+kana_ka+kana_su,
                romaji: "wakasu"
            },
            polite: {
                kana: kana_wa+kana_ka+kana_shi+kana_ma+kana_su,
                romaji: "wakashimasu"
            },
            pastRegular: {
                kana: kana_wa+kana_ka+kana_shi+kana_ta,
                romaji: "wakashita"
            },
            teForm: {
                kana: kana_wa+kana_ka+kana_shi+kana_te,
                romaji: "wakashite"
            }
        }
    },
    {
        englishText: "(to) Eat",
        romaji: "taberu",
        kanjiText: "\u98df",
        furiganaPairs: [
            { base: "\u98df", furigana: kana_ta }, // Kanji and its Furigana
        ],
        kanaText: kana_be+kana_ru, // The kana after tha kanji
        category: "Verbs",
        conjugations: {
            regular: {
                kana: kana_ta+kana_be+kana_ru,
                romaji: "taberu"
            },
            polite: {
                kana: kana_ta+kana_be+kana_ma+kana_su,
                romaji: "tabemasu"
            },
            pastRegular: {
                kana: kana_ta+kana_be+kana_ta,
                romaji: "tabeta"
            },
            teForm: {
                kana: kana_ta+kana_be+kana_te,
                romaji: "tabete"
            }
        }
    },
    {
        englishText: "(to) Gaze at, admire",
        romaji: "nagameru",
        kanjiText: "\u98df",
        furiganaPairs: [
            { base: "\u98df", furigana: kana_ta }, // Kanji and its Furigana
        ],
        kanaText: kana_be+kana_ru, // The kana after tha kanji
        category: "Verbs",
        conjugations: {
            regular: {
                kana: kana_ta+kana_be+kana_ru,
                romaji: "nagameru"
            },
            polite: {
                kana: kana_ta+kana_be+kana_ma+kana_su,
                romaji: "tabemasu"
            },
            pastRegular: {
                kana: kana_ta+kana_be+kana_ta,
                romaji: "tabeta"
            },
            teForm: {
                kana: kana_ta+kana_be+kana_te,
                romaji: "tabete"
            }
        }
    },
    
    
    // Category 4: Phrases
    {
        englishText: "Maybe",
        romaji: "Tabun",
        kanaText: kana_ta+kana_bu+kana_n,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "What time is it?",
        romaji: "Nanki desu ka",
        kanaText: kana_na+kana_n+kana_ji+" "+kana_de+kana_su+" "+kana_ka,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Only",
        romaji: "Dake",
        kanaText: kana_da+kana_ke,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "And",
        romaji: "Sorekara",
        kanaText: kana_so+kana_re+kana_ka+kana_ra,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "A little, Slightly",
        romaji: "Chotto",
        kanaText: kana_chi+kana_yo+kana_small_tsu+kana_to,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Sorry, Excuse me",
        romaji: "Sumimasen",
        kanaText: kana_su+kana_mi+kana_ma+kana_se+kana_n,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "That's great, How nice",
        romaji: "Ii desu ne",
        kanaText: kana_i+kana_i+" "+kana_de+kana_su+kana_ne,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Next",
        romaji: "Tsugi",
        kanaText: kana_tsu+kana_gi,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Of Course, Naturally",
        romaji: "Mochiron",
        kanaText: kana_mo+kana_chi+kana_ro+kana_n,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "From ___ until ___",
        romaji: "___ kara ___ made",
        kanaText: "___ "+kana_ka+kana_ra+" ___ "+kana_ma+kana_de,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Or",
        romaji: "Soretomo",
        kanaText: kana_so+kana_re+kana_to+kana_mo,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Thank you for the delicious meal!",
        romaji: "Gochisou sama deshita",
        kanaText: kana_go+kana_chi+kana_so+kana_u+" "+kana_sa+kana_ma+" "+kana_de+kana_shi+kana_ta,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Every day",
        romaji: "Mainichi",
        kanaText: kana_ma+kana_i+kana_ni+kana_chi,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "My ___ hurts",
        romaji: "Watashi no ___ ga itai desu",
        kanaText: kana_wa+kana_ta+kana_shi+" "+kana_no+" ___ "+kana_ga+" "+kana_i+kana_ta+kana_i+" "+kana_de+kana_su,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Sometimes",
        romaji: "Toki doki",
        kanaText: kana_to+kana_ki+" "+kana_do+kana_ki,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Always, Usually",
        romaji: "Itsumo",
        kanaText: kana_i+kana_tsu+kana_mo,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "When",
        romaji: "Itsu",
        kanaText: kana_i+kana_tsu,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Near the ___",
        romaji: "___ no chikaku",
        kanaText: "___ "+kana_no+" "+kana_chi+kana_ka+kana_ku,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Inside the ___",
        romaji: "___ no naka",
        kanaText: "___ "+kana_no+" "+kana_na+kana_ka,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "In front of the ___",
        romaji: "___ no mae",
        kanaText: "___ "+kana_no+" "+kana_ma+kana_e,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Next to the ___",
        romaji: "___ no tonari",
        kanaText: "___ "+kana_no+" "+kana_to+kana_na+kana_ri,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Behind the ___",
        romaji: "___ no ushiro",
        kanaText: "___ "+kana_no+" "+kana_u+kana_shi+kana_ro,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Above the ___",
        romaji: "___ no ue",
        kanaText: "___ "+kana_no+" "+kana_u+kana_e,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Approximately, About ___",
        romaji: "___ gurai",
        kanaText: "___ "+kana_gu+kana_ra+kana_i,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "How much",
        romaji: "Ikura",
        kanaText: kana_i+kana_ku+kana_ra,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Why",
        romaji: "Doushite",
        kanaText: kana_do+kana_u+kana_shi+kana_te,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Very, Extremely",
        romaji: "Totemo",
        kanaText: kana_to+kana_te+kana_mo,
        kanjiText: "",
        category: "Adverbs"
    },
    {
        englishText: "There is/are (animate objects)",
        romaji: "___ ga imasu",
        kanaText: "___ "+kana_ga+" "+kana_i+kana_ma+kana_su,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "There is/are (inanimate objects)",
        romaji: "___ ga arimasu",
        kanaText: "___ "+kana_ga+" "+kana_a+kana_ri+kana_ma+kana_su,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "But, However",
        romaji: "Demo",
        kanaText: kana_de+kana_mo,
        kanjiText: "",
        category: "Misc"
    },
    {
        englishText: "Slowly",
        romaji: "Yukkuri",
        kanaText: kana_yu+kana_small_tsu+kana_ku+kana_ri,
        kanjiText: "",
        category: "Adverbs"
    },
    {
        englishText: "Welcome",
        romaji: "Irasshai(mase)",
        kanaText: kana_i+kana_ra+kana_small_tsu+kana_shi+kana_ya+kana_i+"("+kana_ma+kana_se+")",
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "What kind of ___",
        romaji: "Donna ___",
        kanaText: kana_do+kana_n+kana_na+" ___",
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Who",
        romaji: "Dare",
        kanaText: kana_da+kana_re,
        kanjiText: "",
        category: "Misc"
    },
    {
        englishText: "This way",
        romaji: "Kochira",
        kanaText: kana_ko+kana_chi+kana_ra,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Congratulations",
        romaji: "Omedetou Gozaimasu",
        kanaText: kana_o+kana_me+kana_de+kana_to+kana_u+" "+kana_go+kana_za+kana_i+kana_ma+kana_su,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "How much does ___ cost?",
        romaji: "___ wa ikura desu ka",
        kanaText: "___ "+kana_wa+" "+kana_i+kana_ku+kana_ra+" "+kana_de+kana_su+" "+kana_ka,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Dumb, Stupid",
        romaji: "Atama ga warui",
        kanaText: kana_a+kana_ta+kana_ma+" "+kana_ga+" "+kana_wa+kana_ru+kana_i,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "A lot of ___",
        romaji: "___ ga takusan arimasu",
        kanaText: "___ "+kana_ga+" "+kana_ta+kana_ku+kana_sa+kana_n+" "+kana_a+kana_ri+kana_ma+kana_su,
        kanjiText: "",
        category: "Phrases"
    },

    // Category 5: Days of the Week
    {
        englishText: "Monday",
        romaji: "Getsuyoubi",
        kanaText: kana_ge+kana_tsu+kana_yo+kana_u+kana_bi,
        kanjiText: "",
        category: "Days of the Week"
    },
    {
        englishText: "Tuesday",
        romaji: "Kayoubi",
        kanaText: kana_ka+kana_yo+kana_u+kana_bi,
        kanjiText: "",
        category: "Days of the Week"
    },
    {
        englishText: "Wednesday",
        romaji: "Suiyoubi",
        kanaText: kana_su+kana_i+kana_yo+kana_u+kana_bi,
        kanjiText: "",
        category: "Days of the Week"
    },
    {
        englishText: "Thursday",
        romaji: "Mokuyoubi",
        kanaText: kana_mo+kana_ku+kana_yo+kana_u+kana_bi,
        kanjiText: "",
        category: "Days of the Week"
    },
    {
        englishText: "Friday",
        romaji: "Kinyoubi",
        kanaText: kana_ki+kana_n+kana_yo+kana_u+kana_bi,
        kanjiText: "",
        category: "Days of the Week"
    },
    {
        englishText: "Saturday",
        romaji: "Doyoubi",
        kanaText: kana_do+kana_yo+kana_u+kana_bi,
        kanjiText: "",
        category: "Days of the Week"
    },
    {
        englishText: "Sunday",
        romaji: "Nichiyoubi",
        kanaText: kana_ni+kana_chi+kana_yo+kana_u+kana_bi,
        kanjiText: "",
        category: "Days of the Week"
    },

    
    {
        englishText: "But, However (formal)",
        romaji: "Keredomo",
        kanaText: kana_ke+kana_re+kana_do+kana_mo,
        kanjiText: "",
        category: "Misc"
    },
    {
        englishText: "But, However (regular)",
        romaji: "Kedo",
        kanaText: kana_ke+kana_do,
        kanjiText: "",
        category: "Misc"
    },
    {
        englishText: "Anything",
        romaji: "Nandemo",
        kanaText: kana_na+kana_n+kana_de+kana_mo,
        kanjiText: "",
        category: "Misc"
    },
    {
        englishText: "Last Time / The Other Day / Recently",
        romaji: "Konomae",
        kanaText: kana_ko+kana_no+kana_ma+kana_e,
        kanjiText: "",
        category: "Misc"
    },
    
    {
        englishText: "Immediately / Right Away",
        romaji: "Sugu",
        kanaText: kana_su+kana_gu,
        kanjiText: "",
        category: "Adverbs"
    },    
    {
        englishText: "Probably / Likely (informal)",
        romaji: "Darou",
        kanaText: kana_da+kana_ro+kana_u,
        kanjiText: "",
        category: "Adverbs"
    },
    
    {
        englishText: "Hello, Hi",
        romaji: "Konnichiwa",
        kanaText: kana_ko+kana_n+kana_ni+kana_chi+kana_wa,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Hello, Hi",
        romaji: "Konnichiwa",
        kanaText: kana_ko+kana_n+kana_ni+kana_chi+kana_wa,
        kanjiText: "",
        category: "Phrases"
    },    
    {
        englishText: "Basically, In General",
        romaji: "Kihontekini",
        kanaText: kana_ki+kana_ho+kana_n+kana_te+kana_ki+kana_ni,
        kanjiText: "",
        category: "Adverbs"
    },
    {
        englishText: "Either",
        romaji: "Dochiramo",
        kanaText: kana_do+kana_chi+kana_ra+kana_mo,
        kanjiText: "",
        category: "Misc"
    },
    
    {
        englishText: "Certain, Sure",
        romaji: "Tashika",
        kanaText: kana_ta+kana_shi+kana_ka,
        kanjiText: "",
        category: "Misc"
    },
    {
        englishText: "For Certain, Surely, Certainly",
        romaji: "Tashika ni",
        kanaText: kana_ta+kana_shi+kana_ka+kana_ni,
        kanjiText: "",
        category: "Adverbs"
    },
    
    {
        englishText: "Hardly, Rarely, Seldom",
        romaji: "Metta ni",
        kanaText: kana_me+kana_small_tsu+kana_ta+" "+kana_ni,
        kanjiText: "",
        category: "Adverbs"
    },
    {
        englishText: "Already",
        romaji: "Mou",
        kanaText: kana_mo+kana_u,
        kanjiText: "",
        category: "Misc"
    },
    {
        englishText: "Still, Yet",
        romaji: "Mada",
        kanaText: kana_ma+kana_da,
        kanjiText: "",
        category: "Misc"
    },
];


// function to sort based on language
const sortLibrary = (language) => {
    if (language === "English") {
        library.sort((function(a, b) {
            const wordA = a.englishText.toUpperCase();
            const wordB = b.englishText.toUpperCase();
            if (wordA > wordB) {
                return 1;
            }
            if (wordA < wordB) {
                return -1;
            }
        
            return 0;
            
        }));
    }
    else {
        library.sort((function(a, b) {
            const wordA = a.romaji.toUpperCase();
            const wordB = b.romaji.toUpperCase();
            if (wordA > wordB) {
                return 1;
            }
            if (wordA < wordB) {
                return -1;
            }
        
            return 0;
        
        }));
    }
}


const countLibrary = () => {
    let wordCount = 0;
    for (let i = 0; i < library.length; i++) {
        if (library[i].category !== "Phrases") {
            wordCount += 1;
        }
    }
    // Consider logging an array of unique categories and their total word counts

    console.log("There are "+wordCount+" items in the library, excluding phrases.");
    return wordCount;
}

module.exports = {library, sortLibrary, countLibrary};