
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
const kana_pi = "\u3074";
const kana_pu = "\u3077";
const kana_pe = "\u307A";
const kana_po = "\u307D";
const kana_small_tsu = "\u3063";

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


const library = [
    // Contains arrays of Card objects, separated into categories...

    // Category 1: "-na adjectives"
    {
        englishText: "Well/Fine",
        romaji: "Genki",
        kanaText: kana_ge+kana_n+kana_ki,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Expensive/Tall",
        romaji: "Takai",
        kanaText: kana_ta+kana_ka+kana_i,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Beautiful/Clean",
        romaji: "Kirei",
        kanaText: kana_ki+kana_re+kana_i,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Inconvenient",
        romaji: "Fuben",
        kanaText: kana_fu+kana_be+kana_n,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Honest/Truthful",
        romaji: "Shoujiki",
        kanaText: kana_shi+kana_yo+kana_u+kana_ji+kana_ki,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Kind",
        romaji: "Shinsetsu",
        kanaText: kana_shi+kana_n+kana_se+kana_tsu,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Rude",
        romaji: "Shitsurei",
        kanaText: kana_shi+kana_tsu+kana_re+kana_i,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Safe",
        romaji: "Anzen",
        kanaText: kana_a+kana_n+kana_ze+kana_n,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Convenient",
        romaji: "Benri",
        kanaText: kana_be+kana_n+kana_ri,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Important",
        romaji: "Daiji",
        kanaText: kana_da+kana_i+kana_ji,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Easy",
        romaji: "Kantan",
        kanaText: kana_ka+kana_n+kana_ta+kana_n,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Fresh",
        romaji: "Shinsen",
        kanaText: kana_shi+kana_n+kana_se+kana_n,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
    {
        englishText: "Quiet",
        romaji: "Shizuka",
        kanaText: kana_shi+kana_zu+kana_ka,
        kanjiText: "",
        category: "\"-na\" Adjectives"
    },
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
        englishText: "Tooth/Teeth",
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
        englishText: "Leg(s)/Foot",
        romaji: "Ashi",
        kanaText: kana_a+kana_shi,
        kanjiText: "",
        category: "Body Parts"
    },
    {
        englishText: "Stomach/Abdomen",
        romaji: "Onaka",
        kanaText: kana_o+kana_na+kana_ka,
        kanjiText: "",
        category: "Body Parts"
    },
    // Category 2: "-i adjectives"
    {
        englishText: "Happy/Glad",
        romaji: "Ureshii",
        kanaText: kana_u+kana_re+kana_shi+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Cheap/Inexpensive",
        romaji: "Yasui",
        kanaText: kana_ya+kana_su+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Noisy/Annoying",
        romaji: "Urusai",
        kanaText: kana_u+kana_ru+kana_sa+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Early",
        romaji: "Hayai",
        kanaText: kana_ha+kana_ya+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Difficult",
        romaji: "Muzukashi",
        kanaText: kana_mu+kana_zu+kana_ka+kana_shi+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Sweet",
        romaji: "Amai",
        kanaText: kana_a+kana_ma+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Lightweight",
        romaji: "Karui",
        kanaText: kana_ka+kana_ru+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Wide",
        romaji: "Hiroi",
        kanaText: kana_hi+kana_ro+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Spicy",
        romaji: "Karai",
        kanaText: kana_ka+kana_ra+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Dirty",
        romaji: "Kitanai",
        kanaText: kana_ki+kana_ta+kana_na+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Dangerous",
        romaji: "Abunai",
        kanaText: kana_a+kana_bu+kana_na+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Hot (weather)",
        romaji: "Atsui",
        kanaText: kana_a+kana_tsu+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Dark",
        romaji: "Kurai",
        kanaText: kana_ku+kana_ra+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Cool (weather)",
        romaji: "Suzushii",
        kanaText: kana_su+kana_zu+kana_shi+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Small",
        romaji: "Chiisai",
        kanaText: kana_chi+kana_i+kana_sa+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Busy",
        romaji: "Isogashii",
        kanaText: kana_i+kana_so+kana_ga+kana_shi+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Old",
        romaji: "Furui",
        kanaText: kana_fu+kana_ru+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Short",
        romaji: "Mijikai",
        kanaText: kana_mi+kana_ji+kana_ka+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Large",
        romaji: "Ookii",
        kanaText: kana_o+kana_o+kana_ki+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Interesting",
        romaji: "Omoshiroi",
        kanaText: kana_o+kana_mo+kana_shi+kana_ro+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Heavy",
        romaji: "Omoi",
        kanaText: kana_o+kana_mo+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "New",
        romaji: "Atarashi",
        kanaText: kana_a+kana_ta+kana_ra+kana_shi+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Slow/Late",
        romaji: "Osoi",
        kanaText: kana_o+kana_so+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Bright",
        romaji: "Akarui",
        kanaText: kana_a+kana_ka+kana_ru+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Many/Much",
        romaji: "Ooi",
        kanaText: kana_o+kana_o+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Salty",
        romaji: "Shoppai",
        kanaText: kana_shi+kana_yo+kana_small_tsu+kana_pa+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Cold (weather)",
        romaji: "Samui",
        kanaText: kana_sa+kana_mu+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Thin/Slender",
        romaji: "Hosoi",
        kanaText: kana_ho+kana_so+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Sour",
        romaji: "Suppai",
        kanaText: kana_su+kana_small_tsu+kana_pa+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    {
        englishText: "Strong/Powerful",
        romaji: "Tsuyoi",
        kanaText: kana_tsu+kana_yo+kana_i,
        kanjiText: "",
        category: "\"-i\" Adjectives"
    },
    // Category 3: Nouns
    {
        englishText: "Car",
        romaji: "Kuruma",
        kanaText: kana_ku+kana_ru+kana_ma,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Wallet",
        romaji: "Saifu",
        kanaText: kana_sa+kana_i+kana_fu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Dream",
        romaji: "Yume",
        kanaText: kana_yu+kana_me,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Family",
        romaji: "Kazoku",
        kanaText: kana_ka+kana_zo+kana_ku,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Animal",
        romaji: "Doubutsu",
        kanaText: kana_do+kana_u+kana_bu+kana_tsu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Address",
        romaji: "Juusho",
        kanaText: kana_ji+kana_yu+kana_u+kana_shi+kana_yo,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Name",
        romaji: "Namae",
        kanaText: kana_na+kana_ma+kana_e,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Cash",
        romaji: "Genkin",
        kanaText: kana_ge+kana_n+kana_ki+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Money",
        romaji: "Okane",
        kanaText: kana_o+kana_ka+kana_ne,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Leather",
        romaji: "Kawa",
        kanaText: kana_ka+kana_wa,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Train Station",
        romaji: "Eki",
        kanaText: kana_e+kana_ki,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Umbrella",
        romaji: "Kasa",
        kanaText: kana_ka+kana_sa,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Entrance",
        romaji: "Iriguchi",
        kanaText: kana_i+kana_ri+kana_gu+kana_chi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Police Officer",
        romaji: "Keisatsukan",
        kanaText: kana_ke+kana_i+kana_sa+kana_tsu+kana_ka+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Exit",
        romaji: "Deguchi",
        kanaText: kana_de+kana_gu+kana_chi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "This (here)",
        romaji: "Kore",
        kanaText: kana_ko+kana_re,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "That (near speaker)",
        romaji: "Sore",
        kanaText: kana_so+kana_re,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "That (over there)",
        romaji: "are",
        kanaText: kana_a+kana_re,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "House",
        romaji: "ie",
        kanaText: kana_i+kana_e,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Home",
        romaji: "Uchi",
        kanaText: kana_u+kana_chi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Outside",
        romaji: "Soto",
        kanaText: kana_so+kana_to,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Clock/Watch",
        romaji: "Tokei",
        kanaText: kana_to+kana_ke+kana_i,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Late night",
        romaji: "Yonaka",
        kanaText: kana_yo+kana_na+kana_ka,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Luggage",
        romaji: "Nimotsu",
        kanaText: kana_ni+kana_mo+kana_tsu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Store/Shop",
        romaji: "Mise",
        kanaText: kana_mi+kana_se,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Evening",
        romaji: "Ban",
        kanaText: kana_ba+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Morning",
        romaji: "Asa",
        kanaText: kana_a+kana_sa,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Ocean/Beach",
        romaji: "Umi",
        kanaText: kana_u+kana_mi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Summer/Pajama Kimono",
        romaji: "Yukata",
        kanaText: kana_yu+kana_ka+kana_ta,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Voice",
        romaji: "Koe",
        kanaText: kana_ko+kana_e,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Woman",
        romaji: "Onna no hito",
        kanaText: kana_o+kana_n+kana_na+" "+kana_no+" "+kana_hi+kana_to,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Train",
        romaji: "Densha",
        kanaText: kana_de+kana_n+kana_shi+kana_ya,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Subway",
        romaji: "Chikatetsu",
        kanaText: kana_chi+kana_ka+kana_te+kana_tsu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Vegetables",
        romaji: "Yasai",
        kanaText: kana_ya+kana_sa+kana_i,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Work/Job",
        romaji: "Shigoto",
        kanaText: kana_shi+kana_go+kana_to,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Vacation",
        romaji: "Yasumi",
        kanaText: kana_ya+kana_su+kana_mi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Forest",
        romaji: "Mori",
        kanaText: kana_mo+kana_ri,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Everyone",
        romaji: "Mina-san",
        kanaText: kana_mi+kana_na+"-"+kana_sa+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Arrival",
        romaji: "Touchaku",
        kanaText: kana_to+kana_u+kana_chi+kana_ya+kana_ku,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Airport",
        romaji: "Kuukou",
        kanaText: kana_ku+kana_u+kana_ko+kana_u,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Park",
        romaji: "Koen",
        kanaText: kana_ko+kana_u+kana_e+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "License",
        romaji: "Menkyo",
        kanaText: kana_me+kana_n+kana_ki+kana_yo,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Tomorrow",
        romaji: "Ashita",
        kanaText: kana_a+kana_shi+kana_ta,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Yesterday",
        romaji: "Kinou",
        kanaText: kana_ki+kana_no+kana_u,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Departure",
        romaji: "Shuppatsu",
        kanaText: kana_shi+kana_yu+kana_small_tsu+kana_pa+kana_tsu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Today",
        romaji: "Kyou",
        kanaText: kana_ki+kana_yo+kana_u,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Rain",
        romaji: "Ame",
        kanaText: kana_a+kana_me,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Customer",
        romaji: "Kyaku-san",
        kanaText: "("+kana_o+") "+kana_ki+kana_ya+kana_ku+"-"+kana_sa+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Now",
        romaji: "Ima",
        kanaText: kana_i+kana_ma,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Crab",
        romaji: "Kani",
        kanaText: kana_ka+kana_ni,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Bag",
        romaji: "Kaban",
        kanaText: kana_ka+kana_ba+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Tea",
        romaji: "Ocha",
        kanaText: kana_o+kana_chi+kana_ya,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Traffic",
        romaji: "Juutai",
        kanaText: kana_ji+kana_yu+kana_u+kana_ta+kana_i,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Medicine",
        romaji: "Kusuri",
        kanaText: kana_ku+kana_su+kana_ri,
        kanjiText: "",
        category: "Nouns"
    },

    // Category 4: verbs
    {
        englishText: "To Drink",
        romaji: "Nomimasu",
        kanaText: kana_no+kana_mi+kana_ma+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Buy",
        romaji: "Kaimasu",
        kanaText: kana_ka+kana_i+kana_ma+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Write",
        romaji: "Kakimasu",
        kanaText: kana_ka+kana_ki+kana_ma+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Read",
        romaji: "Yomimasu",
        kanaText: kana_yo+kana_mi+kana_ma+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Speak",
        romaji: "Hanashimasu",
        kanaText: kana_ha+kana_na+kana_shi+kana_ma+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Make",
        romaji: "Tsukurimasu",
        kanaText: kana_tsu+kana_ku+kana_ri+kana_ma+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Use",
        romaji: "Tsukau",
        kanaText: kana_tsu+kana_ka+kana_u,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Drop",
        romaji: "Otoshimasu",
        kanaText: kana_o+kana_to+kana_shi+kana_ma+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Get Tired",
        romaji: "Tsukaremasu",
        kanaText: kana_tsu+kana_ka+kana_re+kana_ma+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    
    // Category 5: Phrases
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
        englishText: "A little/Slightly",
        romaji: "Chotto",
        kanaText: kana_chi+kana_yo+kana_small_tsu+kana_to,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Sorry/Excuse me",
        romaji: "Sumimasen",
        kanaText: kana_su+kana_mi+kana_ma+kana_se+kana_n,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "That's great/How nice",
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
        englishText: "Of Course/Naturally",
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
        englishText: "Always/Usually",
        romaji: "Itsumo",
        kanaText: kana_i+kana_tsu+kana_mo,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Still (as in still here)",
        romaji: "Mada",
        kanaText: kana_ma+kana_da,
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
        englishText: "Approximately/About ___",
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
        englishText: "Very/Extremely",
        romaji: "Totemo",
        kanaText: kana_to+kana_te+kana_mo,
        kanjiText: "",
        category: "Phrases"
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
        englishText: "But/However",
        romaji: "Demo",
        kanaText: kana_de+kana_mo,
        kanjiText: "",
        category: "Phrases"
    },
    {
        englishText: "Slowly",
        romaji: "Yukkuri",
        kanaText: kana_yu+kana_small_tsu+kana_ku+kana_ri,
        kanjiText: "",
        category: "Phrases"
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
        category: "Phrases"
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
        englishText: "Dumb/Stupid",
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
        englishText: "Medical Exam",
        romaji: "Shinsatsu",
        kanaText: kana_shi+kana_n+kana_sa+kana_tsu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Wait",
        romaji: "Matsu",
        kanaText: kana_ma+kana_tsu,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Meet",
        romaji: "Au",
        kanaText: kana_a+kana_u,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Exit",
        romaji: "Deru",
        kanaText: kana_de+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Coat / Jacket",
        romaji: "Uwagi",
        kanaText: kana_u+kana_wa+kana_gi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Open",
        romaji: "Akeru",
        kanaText: kana_a+kana_ke+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Important",
        romaji: "Taisetsu",
        kanaText: kana_ta+kana_i+kana_se+kana_tsu,
        kanjiText: "",
        category: "-na Adjectives"
    },
    {
        englishText: "Important",
        romaji: "Daiji",
        kanaText: kana_da+kana_i+kana_ji,
        kanjiText: "",
        category: "-na Adjectives"
    },
    {
        englishText: "Physical Condition",
        romaji: "Taichou",
        kanaText: kana_ta+kana_i+kana_chi+kana_yo+kana_u,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Mental / Emotional Condition",
        romaji: "Kibun",
        kanaText: kana_ki+kana_bu+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To be Surprised",
        romaji: "Otosu",
        kanaText: kana_o+kana_to+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Clean",
        romaji: "Souji Suru",
        kanaText: kana_so+kana_u+kana_ji+" "+kana_su+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Fish Tank",
        romaji: "Suisou",
        kanaText: kana_su+kana_i+kana_so+kana_u,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Lid / Cap / Cover",
        romaji: "Futa",
        kanaText: kana_fu+kana_ta,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Hold / Carry",
        romaji: "Motsu",
        kanaText: kana_mo+kana_tsu,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Weather",
        romaji: "Tenki",
        kanaText: kana_te+kana_n+kana_ki,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Put On / Wear (Accessories)",
        romaji: "Tsukeru",
        kanaText: kana_tsu+kana_ke+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Shoes",
        romaji: "Kutsu",
        kanaText: kana_ku+kana_tsu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Cold (To the touch)",
        romaji: "Tsumetai",
        kanaText: kana_tsu+kana_me+kana_ta+kana_i,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "Corner",
        romaji: "Kado",
        kanaText: kana_ka+kana_do,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Intersection",
        romaji: "Kousaten",
        kanaText: kana_ko+kana_u+kana_sa+kana_te+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Traffic Signal",
        romaji: "Shingou",
        kanaText: kana_shi+kana_n+kana_go+kana_u,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Police",
        romaji: "Keisatsu",
        kanaText: kana_ke+kana_i+kana_sa+kana_tsu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Snack / Appetizer",
        romaji: "Otsumami",
        kanaText: kana_o+kana_tsu+kana_ma+kana_mi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Later / After (Suffix)",
        romaji: "Go",
        kanaText: kana_go,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Arrive",
        romaji: "Tsuku",
        kanaText: kana_tsu+kana_ku,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Kitchen",
        romaji: "Daidokoro",
        kanaText: kana_da+kana_i+kana_do+kana_ko+kana_ro,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Cook",
        romaji: "Ryouri Suru",
        kanaText: kana_ri+kana_yo+kana_u+kana_ri+" "+kana_su+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Serious / Diligent",
        romaji: "Majime",
        kanaText: kana_ma+kana_ji+kana_me,
        kanjiText: "",
        category: "-na Adjectives"
    },
    {
        englishText: "Picture",
        romaji: "Shasshin",
        kanaText: kana_shi+kana_ya+kana_small_tsu+kana_shi+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Walk",
        romaji: "Aruku",
        kanaText: kana_a+kana_ru+kana_ku,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Chair",
        romaji: "Isu",
        kanaText: kana_i+kana_su,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Board / Ride",
        romaji: "Noru",
        kanaText: kana_no+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Disembark / Get Off",
        romaji: "Oriru",
        kanaText: kana_o+kana_ri+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Listen / Hear",
        romaji: "Kiku",
        kanaText: kana_ki+kana_ku,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Take",
        romaji: "Toru",
        kanaText: kana_to+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Happiness",
        romaji: "Shiawase",
        kanaText: kana_shi+kana_a+kana_wa+kana_se,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Front Desk / Reception",
        romaji: "Uketsuke",
        kanaText: kana_u+kana_ke+kana_tsu+kana_ke,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Wake Up",
        romaji: "Okiru",
        kanaText: kana_o+kana_ki+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Receive",
        romaji: "Morau",
        kanaText: kana_mo+kana_ra+kana_u,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Hide",
        romaji: "Kakusu",
        kanaText: kana_ka+kana_ku+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Black",
        romaji: "Kuroi",
        kanaText: kana_ku+kana_ro+kana_i,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "To Cry",
        romaji: "Naku",
        kanaText: kana_na+kana_ku,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Letter / Mail",
        romaji: "Tegami",
        kanaText: kana_te+kana_ga+kana_mi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Boss",
        romaji: "Bushou",
        kanaText: kana_bu+kana_chi+kana_yo+kana_u,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Heat / Temperature / Fever",
        romaji: "Netsu",
        kanaText: kana_ne+kana_tsu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Yellow",
        romaji: "Kiiroi",
        kanaText: kana_ki+kana_i+kana_ro+kana_i,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "Doctor",
        romaji: "Isha",
        kanaText: kana_i+kana_shi+kana_ya,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Clothing",
        romaji: "Fuku",
        kanaText: kana_fu+kana_ku,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Get Angry",
        romaji: "Okoru",
        kanaText: kana_o+kana_ko+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Sleep",
        romaji: "Neru",
        kanaText: kana_ne+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Red",
        romaji: "Aka",
        kanaText: kana_a+kana_ka,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "White",
        romaji: "Shiroi",
        kanaText: kana_shi+kana_ro+kana_i,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "Blue",
        romaji: "Aoi",
        kanaText: kana_a+kana_o+kana_i,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "Road / Path",
        romaji: "Michi",
        kanaText: kana_mi+kana_chi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Sky",
        romaji: "Sora",
        kanaText: kana_so+kana_ra,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Cloudy",
        romaji: "Kumori",
        kanaText: kana_ku+kana_mo+kana_ri,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "Friend",
        romaji: "Tomodachi",
        kanaText: kana_to+kana_mo+kana_da+kana_chi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Family",
        romaji: "Kazoku",
        kanaText: kana_ka+kana_zo+kana_ku,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Neighbor",
        romaji: "Tonari",
        kanaText: kana_to+kana_na+kana_ri,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Sunny",
        romaji: "Hare",
        kanaText: kana_ha+kana_re,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "Autumn",
        romaji: "Aki",
        kanaText: kana_a+kana_ki,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Winter",
        romaji: "Fuyu",
        kanaText: kana_fu+kana_yu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Spring",
        romaji: "Haru",
        kanaText: kana_ha+kana_ru,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Summer",
        romaji: "Natsu",
        kanaText: kana_na+kana_tsu,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Probably / Likely",
        romaji: "Deshou",
        kanaText: kana_de+kana_shi+kana_yo+kana_u,
        kanjiText: "",
        category: "Adverbs"
    },
    {
        englishText: "Same",
        romaji: "Onaji",
        kanaText: kana_o+kana_na+kana_ji,
        kanjiText: "",
        category: "-na Adjectives"
    },
    {
        englishText: "To Live / Reside",
        romaji: "Sumu",
        kanaText: kana_su+kana_mu,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Both",
        romaji: "Ryouhou",
        kanaText: kana_ri+kana_yo+kana_u+kana_ho+kana_u,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "To Take off (Clothing)",
        romaji: "Nugu",
        kanaText: kana_nu+kana_gu,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Put On (Lower body clothing)",
        romaji: "Haku",
        kanaText: kana_ha+kana_ku,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Put On (Upper body clothing)",
        romaji: "Kiru",
        kanaText: kana_ki+kana_ru,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Take Off (Accessories)",
        romaji: "Hazusu",
        kanaText: kana_ha+kana_zu+kana_su,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "To Rest",
        romaji: "Yasumu",
        kanaText: kana_ya+kana_su+kana_mu,
        kanjiText: "",
        category: "Verbs"
    },
    {
        englishText: "Fun, Enjoyable",
        romaji: "Tanoshii",
        kanaText: kana_ta+kana_no+kana_shi+kana_i,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "Far, Long distance",
        romaji: "Tooi",
        kanaText: kana_to+kana_o+kana_i,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "Electricity",
        romaji: "Den",
        kanaText: kana_de+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Phone",
        romaji: "Denwa",
        kanaText: kana_de+kana_n+kana_wa,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Lightning, Thunder",
        romaji: "Kaminari",
        kanaText: kana_ka+kana_mi+kana_na+kana_ri,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Sad",
        romaji: "Kanashii",
        kanaText: kana_ka+kana_na+kana_shi+kana_i,
        kanjiText: "",
        category: "-i Adjectives"
    },
    {
        englishText: "Right (direction)",
        romaji: "Migi",
        kanaText: kana_mi+kana_gi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Left (direction)",
        romaji: "Hidari",
        kanaText: kana_hi+kana_da+kana_ri,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "North",
        romaji: "Kita",
        kanaText: kana_ki+kana_ta,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "East",
        romaji: "Higashi",
        kanaText: kana_hi+kana_ga+kana_shi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "South",
        romaji: "Minami",
        kanaText: kana_mi+kana_na+kana_mi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "West",
        romaji: "Nishi",
        kanaText: kana_ni+kana_shi,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Rice",
        romaji: "Gohan",
        kanaText: kana_go+kana_ha+kana_n,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Meat",
        romaji: "Niku",
        kanaText: kana_ni+kana_ku,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Fish",
        romaji: "Sakana",
        kanaText: kana_sa+kana_ka+kana_na,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Daytime",
        romaji: "Hiru",
        kanaText: kana_hi+kana_ru,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Noon",
        romaji: "Gogo",
        kanaText: kana_go+kana_go,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Country",
        romaji: "Kuni",
        kanaText: kana_ku+kana_ni,
        kanjiText: "",
        category: "Nouns"
    },
    {
        englishText: "Difficult, treacherous, greatly",
        romaji: "Taihen",
        kanaText: kana_ta+kana_i+kana_he+kana_n,
        kanjiText: "",
        category: "-na Adjectives"
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
}

module.exports = {library, sortLibrary, countLibrary};