
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
    [
        "\"-na\" Adjectives",
        {
            englishText: "Well/Fine",
            romaji: "Genki",
            kanaText: kana_ge+kana_n+kana_ki,
            kanjiText: ""
        },
        {
            englishText: "Expensive/Tall",
            romaji: "Takai",
            kanaText: kana_ta+kana_ka+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Beautiful/Clean",
            romaji: "Kirei",
            kanaText: kana_ki+kana_re+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Inconvenient",
            romaji: "Fuben",
            kanaText: kana_fu+kana_be+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Honest/Truthful",
            romaji: "Shoujiki",
            kanaText: kana_shi+kana_yo+kana_u+kana_ji+kana_ki,
            kanjiText: ""
        },
        {
            englishText: "Kind",
            romaji: "Shinsetsu",
            kanaText: kana_shi+kana_n+kana_se+kana_tsu,
            kanjiText: ""
        },
        {
            englishText: "Rude",
            romaji: "Shitsurei",
            kanaText: kana_shi+kana_tsu+kana_re+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Safe",
            romaji: "Anzen",
            kanaText: kana_a+kana_n+kana_ze+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Convenient",
            romaji: "Benri",
            kanaText: kana_be+kana_n+kana_ri,
            kanjiText: ""
        },
        {
            englishText: "Important",
            romaji: "Daiji",
            kanaText: kana_da+kana_i+kana_ji,
            kanjiText: ""
        },
        {
            englishText: "Easy",
            romaji: "Kantan",
            kanaText: kana_ka+kana_n+kana_ta+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Fresh",
            romaji: "Shinsen",
            kanaText: kana_shi+kana_n+kana_se+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Quiet",
            romaji: "Shizuka",
            kanaText: kana_shi+kana_zu+kana_ka,
            kanjiText: ""
        },

    ],

    // Body parts
    [
        "Body Parts",
        {
            englishText: "Mouth",
            romaji: "Kuchi",
            kanaText: kana_ku+kana_chi,
            kanjiText: ""
        },
        {
            englishText: "Knee(s)",
            romaji: "Hiza",
            kanaText: kana_hi+kana_za,
            kanjiText: ""
        },
        {
            englishText: "Arm(s)",
            romaji: "Ude",
            kanaText: kana_u+kana_de,
            kanjiText: ""
        },
        {
            englishText: "Head",
            romaji: "Atama",
            kanaText: kana_a+kana_ta+kana_ma,
            kanjiText: ""
        },
        {
            englishText: "Chest",
            romaji: "Mune",
            kanaText: kana_mu+kana_ne,
            kanjiText: ""
        },
        {
            englishText: "Neck",
            romaji: "Kubi",
            kanaText: kana_ku+kana_bi,
            kanjiText: ""
        },
        {
            englishText: "Throat",
            romaji: "Nodo",
            kanaText: kana_no+kana_do,
            kanjiText: ""
        },
        {
            englishText: "Face",
            romaji: "Kao",
            kanaText: kana_ka+kana_o,
            kanjiText: ""
        },
        {
            englishText: "Hand(s)",
            romaji: "Te",
            kanaText: kana_te,
            kanjiText: ""
        },
        {
            englishText: "Nose",
            romaji: "Hana",
            kanaText: kana_ha+kana_na,
            kanjiText: ""
        },
        {
            englishText: "Hair",
            romaji: "Kami",
            kanaText: kana_ka+kana_mi,
            kanjiText: ""
        },
        {
            englishText: "Eye(s)",
            romaji: "Me",
            kanaText: kana_me,
            kanjiText: ""
        },
        {
            englishText: "Tooth/Teeth",
            romaji: "Ha",
            kanaText: kana_ha,
            kanjiText: ""
        },
        {
            englishText: "Shoulder(s)",
            romaji: "Kata",
            kanaText: kana_ka+kana_ta,
            kanjiText: ""
        },
        {
            englishText: "Back",
            romaji: "Senaka",
            kanaText: kana_se+kana_na+kana_ka,
            kanjiText: ""
        },
        {
            englishText: "Leg(s)/Foot",
            romaji: "Ashi",
            kanaText: kana_a+kana_shi,
            kanjiText: ""
        },
        {
            englishText: "Stomach/Abdomen",
            romaji: "Onaka",
            kanaText: kana_o+kana_na+kana_ka,
            kanjiText: ""
        },
    ],

    // Category 2: "-i adjectives"
    [
        "\"-i\" Adjectives",
        {
            englishText: "Happy/Glad",
            romaji: "Ureshii",
            kanaText: kana_u+kana_re+kana_shi+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Cheap/Inexpensive",
            romaji: "Yasui",
            kanaText: kana_ya+kana_su+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Noisy/Annoying",
            romaji: "Urusai",
            kanaText: kana_u+kana_ru+kana_sa+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Early",
            romaji: "Hayai",
            kanaText: kana_ha+kana_ya+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Difficult",
            romaji: "Muzukashi",
            kanaText: kana_mu+kana_zu+kana_ka+kana_shi+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Sweet",
            romaji: "Amai",
            kanaText: kana_a+kana_ma+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Lightweight",
            romaji: "Karui",
            kanaText: kana_ka+kana_ra+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Wide",
            romaji: "Hiroi",
            kanaText: kana_hi+kana_ro+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Spicy",
            romaji: "Karai",
            kanaText: kana_ka+kana_ra+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Dirty",
            romaji: "Kitanai",
            kanaText: kana_ki+kana_ta+kana_na+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Dangerous",
            romaji: "Abunai",
            kanaText: kana_a+kana_bu+kana_na+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Hot (weather)",
            romaji: "Atsui",
            kanaText: kana_a+kana_tsu+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Dark",
            romaji: "Kurai",
            kanaText: kana_ku+kana_ra+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Cool (weather)",
            romaji: "Suzushii",
            kanaText: kana_su+kana_zu+kana_shi+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Small",
            romaji: "Chiisai",
            kanaText: kana_chi+kana_i+kana_sa+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Busy",
            romaji: "Isogashii",
            kanaText: kana_i+kana_so+kana_ga+kana_shi+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Old",
            romaji: "Furui",
            kanaText: kana_fu+kana_ru+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Short",
            romaji: "Mijikai",
            kanaText: kana_mi+kana_ji+kana_ka+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Large",
            romaji: "Ookii",
            kanaText: kana_o+kana_o+kana_ki+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Interesting",
            romaji: "Omoshiroi",
            kanaText: kana_o+kana_mo+kana_shi+kana_ro+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Heavy",
            romaji: "Omoi",
            kanaText: kana_o+kana_mo+kana_i,
            kanjiText: ""
        },
        {
            englishText: "New",
            romaji: "Atarashi",
            kanaText: kana_a+kana_ta+kana_ra+kana_shi+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Slow/Late",
            romaji: "Osoi",
            kanaText: kana_o+kana_so+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Bright",
            romaji: "Akarui",
            kanaText: kana_a+kana_ka+kana_ru+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Many/Much",
            romaji: "Ooi",
            kanaText: kana_o+kana_o+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Salty",
            romaji: "Shoppai",
            kanaText: kana_shi+kana_yo+kana_small_tsu+kana_pa+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Cold (weather)",
            romaji: "Samui",
            kanaText: kana_sa+kana_mu+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Thin/Slender",
            romaji: "Hosoi",
            kanaText: kana_ho+kana_so+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Sour",
            romaji: "Suppai",
            kanaText: kana_su+kana_small_tsu+kana_pa+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Strong/Powerful",
            romaji: "Tsuyoi",
            kanaText: kana_tsu+kana_yo+kana_i,
            kanjiText: ""
        },
    ],

    // Category 3: Nouns
    [
        "Nouns",
        {
            englishText: "Car",
            romaji: "Kuruma",
            kanaText: kana_ku+kana_ru+kana_ma,
            kanjiText: ""
        },
        {
            englishText: "Wallet",
            romaji: "Saifu",
            kanaText: kana_sa+kana_i+kana_fu,
            kanjiText: ""
        },
        {
            englishText: "Dream",
            romaji: "Yume",
            kanaText: kana_yu+kana_me,
            kanjiText: ""
        },
        {
            englishText: "Family",
            romaji: "Kazoku",
            kanaText: kana_ka+kana_zo+kana_ku,
            kanjiText: ""
        },
        {
            englishText: "Animal",
            romaji: "Doubutsu",
            kanaText: kana_do+kana_u+kana_bu+kana_tsu,
            kanjiText: ""
        },
        {
            englishText: "Address",
            romaji: "Juusho",
            kanaText: kana_ji+kana_yu+kana_u+kana_shi+kana_yo,
            kanjiText: ""
        },
        {
            englishText: "Name",
            romaji: "Namae",
            kanaText: kana_na+kana_ma+kana_e,
            kanjiText: ""
        },
        {
            englishText: "Cash",
            romaji: "Genkin",
            kanaText: kana_ge+kana_n+kana_ki+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Money",
            romaji: "Okane",
            kanaText: kana_o+kana_ka+kana_ne,
            kanjiText: ""
        },
        {
            englishText: "Leather",
            romaji: "Kawa",
            kanaText: kana_ka+kana_wa,
            kanjiText: ""
        },
        {
            englishText: "Train Station",
            romaji: "Eki",
            kanaText: kana_e+kana_ki,
            kanjiText: ""
        },
        {
            englishText: "Umbrella",
            romaji: "Kasa",
            kanaText: kana_ka+kana_sa,
            kanjiText: ""
        },
        {
            englishText: "Entrance",
            romaji: "Iriguchi",
            kanaText: kana_i+kana_ri+kana_gu+kana_chi,
            kanjiText: ""
        },
        {
            englishText: "Police Officer",
            romaji: "Keisatsukan",
            kanaText: kana_ke+kana_i+kana_sa+kana_tsu+kana_ka+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Exit",
            romaji: "Deguchi",
            kanaText: kana_de+kana_gu+kana_chi,
            kanjiText: ""
        },
        {
            englishText: "This (here)",
            romaji: "Kore",
            kanaText: kana_ko+kana_re,
            kanjiText: ""
        },
        {
            englishText: "That (near speaker)",
            romaji: "Sore",
            kanaText: kana_so+kana_re,
            kanjiText: ""
        },
        {
            englishText: "That (over there)",
            romaji: "are",
            kanaText: kana_a+kana_re,
            kanjiText: ""
        },
        {
            englishText: "House",
            romaji: "ie",
            kanaText: kana_i+kana_e,
            kanjiText: ""
        },
        {
            englishText: "Home",
            romaji: "Uchi",
            kanaText: kana_u+kana_chi,
            kanjiText: ""
        },
        {
            englishText: "Outside",
            romaji: "Soto",
            kanaText: kana_so+kana_to,
            kanjiText: ""
        },
        {
            englishText: "Clock/Watch",
            romaji: "Tokei",
            kanaText: kana_to+kana_ke+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Late night",
            romaji: "Yonaka",
            kanaText: kana_yo+kana_na+kana_ka,
            kanjiText: ""
        },
        {
            englishText: "Luggage",
            romaji: "Nimotsu",
            kanaText: kana_ni+kana_mo+kana_tsu,
            kanjiText: ""
        },
        {
            englishText: "Store/Shop",
            romaji: "Mise",
            kanaText: kana_mi+kana_se,
            kanjiText: ""
        },
        {
            englishText: "Evening",
            romaji: "Ban",
            kanaText: kana_ba+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Noon/Midday",
            romaji: "Hiru",
            kanaText: kana_hi+kana_ru,
            kanjiText: ""
        },
        {
            englishText: "Morning",
            romaji: "Asa",
            kanaText: kana_a+kana_sa,
            kanjiText: ""
        },
        {
            englishText: "Ocean/Beach",
            romaji: "Umi",
            kanaText: kana_u+kana_mi,
            kanjiText: ""
        },
        {
            englishText: "Summer/Pajama Kimono",
            romaji: "Yukata",
            kanaText: kana_yu+kana_ka+kana_ta,
            kanjiText: ""
        },
        {
            englishText: "Voice",
            romaji: "Koe",
            kanaText: kana_ko+kana_e,
            kanjiText: ""
        },
        {
            englishText: "Woman",
            romaji: "Onna no hito",
            kanaText: kana_o+kana_n+kana_na+" "+kana_no+" "+kana_hi+kana_to,
            kanjiText: ""
        },
        {
            englishText: "Train",
            romaji: "Densha",
            kanaText: kana_de+kana_n+kana_shi+kana_ya,
            kanjiText: ""
        },
        {
            englishText: "Subway",
            romaji: "Chikatetsu",
            kanaText: kana_chi+kana_ka+kana_te+kana_tsu,
            kanjiText: ""
        },
        {
            englishText: "Vegetables",
            romaji: "Yasai",
            kanaText: kana_ya+kana_sa+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Work/Job",
            romaji: "Shigoto",
            kanaText: kana_shi+kana_go+kana_to,
            kanjiText: ""
        },
        {
            englishText: "Vacation",
            romaji: "Yasumi",
            kanaText: kana_ya+kana_su+kana_mi,
            kanjiText: ""
        },
        {
            englishText: "Forest",
            romaji: "Mori",
            kanaText: kana_mo+kana_ri,
            kanjiText: ""
        },
        {
            englishText: "Everyone",
            romaji: "Mina-san",
            kanaText: kana_mi+kana_na+"-"+kana_sa+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Arrival",
            romaji: "Touchaku",
            kanaText: kana_to+kana_u+kana_chi+kana_ya+kana_ku,
            kanjiText: ""
        },
        {
            englishText: "Airport",
            romaji: "Kuukou",
            kanaText: kana_ku+kana_u+kana_ko+kana_u,
            kanjiText: ""
        },
        {
            englishText: "Park",
            romaji: "Koen",
            kanaText: kana_ko+kana_u+kana_e+kana_n,
            kanjiText: ""
        },
        {
            englishText: "License",
            romaji: "Menkyo",
            kanaText: kana_me+kana_n+kana_ki+kana_yo,
            kanjiText: ""
        },
        {
            englishText: "Tomorrow",
            romaji: "Ashita",
            kanaText: kana_a+kana_shi+kana_ta,
            kanjiText: ""
        },
        {
            englishText: "Yesterday",
            romaji: "Kinou",
            kanaText: kana_ki+kana_no+kana_u,
            kanjiText: ""
        },
        {
            englishText: "Departure",
            romaji: "Shuppatsu",
            kanaText: kana_shi+kana_yu+kana_small_tsu+kana_pa+kana_tsu,
            kanjiText: ""
        },
        {
            englishText: "Today",
            romaji: "Kyou",
            kanaText: kana_ki+kana_yo+kana_u,
            kanjiText: ""
        },
        {
            englishText: "Rain",
            romaji: "Ame",
            kanaText: kana_a+kana_me,
            kanjiText: ""
        },
        {
            englishText: "Customer",
            romaji: "Kyaku-san",
            kanaText: "("+kana_o+") "+kana_ki+kana_ya+kana_ku+"-"+kana_sa+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Now",
            romaji: "Ima",
            kanaText: kana_i+kana_ma,
            kanjiText: ""
        },
        {
            englishText: "Crab",
            romaji: "Kani",
            kanaText: kana_ka+kana_ni,
            kanjiText: ""
        },
        {
            englishText: "Bag",
            romaji: "Kaban",
            kanaText: kana_ka+kana_ba+kana_n,
            kanjiText: ""
        },
        {
            englishText: "Tea",
            romaji: "Ocha",
            kanaText: kana_o+kana_chi+kana_ya,
            kanjiText: ""
        },
        {
            englishText: "Traffic",
            romaji: "Juutai",
            kanaText: kana_ji+kana_yu+kana_u+kana_ta+kana_i,
            kanjiText: ""
        },
        {
            englishText: "Medicine",
            romaji: "Kusuri",
            kanaText: kana_ku+kana_su+kana_ri,
            kanjiText: ""
        },
    ],

    // Category 4: verbs
    [
        "Verbs",
        {
            englishText: "To Drink",
            romaji: "Nomimasu",
            kanaText: kana_no+kana_mi+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "To Buy",
            romaji: "Kaimasu",
            kanaText: kana_ka+kana_i+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "To Write",
            romaji: "Kakimasu",
            kanaText: kana_ka+kana_ki+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "To Read",
            romaji: "Yomimasu",
            kanaText: kana_yo+kana_mi+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "To Speak",
            romaji: "Hanashimasu",
            kanaText: kana_ha+kana_na+kana_shi+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "To Make",
            romaji: "Tsukurimasu",
            kanaText: kana_tsu+kana_ku+kana_ri+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "To Use",
            romaji: "Tsukaimasu",
            kanaText: kana_tsu+kana_ka+kana_i+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "To Drop",
            romaji: "Otoshimasu",
            kanaText: kana_o+kana_to+kana_shi+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "To Get Tired",
            romaji: "Tsukaremasu",
            kanaText: kana_tsu+kana_ka+kana_re+kana_ma+kana_su,
            kanjiText: ""
        },
    ],
    
    // Category 5: Phrases
    [
        "Phrases",
        {
            englishText: "Maybe",
            romaji: "Tabun",
            kanaText: kana_ta+kana_bu+kana_n,
            kanjiText: ""
        },
        {
            englishText: "What time is it?",
            romaji: "Nanki desu ka",
            kanaText: kana_na+kana_n+kana_ji+" "+kana_de+kana_su+" "+kana_ka,
            kanjiText: ""
        },
        {
            englishText: "Only",
            romaji: "Dake",
            kanaText: kana_da+kana_ke,
            kanjiText: ""
        },
        {
            englishText: "And",
            romaji: "Sorekara",
            kanaText: kana_so+kana_re+kana_ka+kana_ra,
            kanjiText: ""
        },
        {
            englishText: "A little/Slightly",
            romaji: "Chotto",
            kanaText: kana_chi+kana_yo+kana_small_tsu+kana_to,
            kanjiText: ""
        },
        {
            englishText: "Sorry/Excuse me",
            romaji: "Sumimasen",
            kanaText: kana_su+kana_mi+kana_ma+kana_se+kana_n,
            kanjiText: ""
        },
        {
            englishText: "That's great/How nice",
            romaji: "Ii desu ne",
            kanaText: kana_i+kana_i+" "+kana_de+kana_su+kana_ne,
            kanjiText: ""
        },
        {
            englishText: "Next",
            romaji: "Tsugi",
            kanaText: kana_tsu+kana_gi,
            kanjiText: ""
        },
        {
            englishText: "Of Course/Naturally",
            romaji: "Mochiron",
            kanaText: kana_mo+kana_chi+kana_ro+kana_n,
            kanjiText: ""
        },
        {
            englishText: "From ___ until ___",
            romaji: "___ kara ___ made",
            kanaText: "___ "+kana_ka+kana_ra+" ___ "+kana_ma+kana_de,
            kanjiText: ""
        },
        {
            englishText: "Or",
            romaji: "Soretomo",
            kanaText: kana_so+kana_re+kana_to+kana_mo,
            kanjiText: ""
        },
        {
            englishText: "Thank you for the delicious meal!",
            romaji: "Gochisou sama deshita",
            kanaText: kana_go+kana_chi+kana_so+kana_u+" "+kana_sa+kana_ma+" "+kana_de+kana_shi+kana_ta,
            kanjiText: ""
        },
        {
            englishText: "Every day",
            romaji: "Mainichi",
            kanaText: kana_ma+kana_i+kana_ni+kana_chi,
            kanjiText: ""
        },
        {
            englishText: "My ___ hurts",
            romaji: "Watashi no ___ ga itai desu",
            kanaText: kana_wa+kana_ta+kana_shi+" "+kana_no+" ___ "+kana_ga+" "+kana_i+kana_ta+kana_i+" "+kana_de+kana_su,
            kanjiText: ""
        },
        {
            englishText: "Sometimes",
            romaji: "Toki doki",
            kanaText: kana_to+kana_ki+" "+kana_do+kana_ki,
            kanjiText: ""
        },
        {
            englishText: "Always/Usually",
            romaji: "Itsumo",
            kanaText: kana_i+kana_tsu+kana_mo,
            kanjiText: ""
        },
        {
            englishText: "Still (as in still here)",
            romaji: "Mada",
            kanaText: kana_ma+kana_da,
            kanjiText: ""
        },
        {
            englishText: "When",
            romaji: "Itsu",
            kanaText: kana_i+kana_tsu,
            kanjiText: ""
        },
        {
            englishText: "Near the ___",
            romaji: "___ no chikaku",
            kanaText: "___ "+kana_no+" "+kana_chi+kana_ka+kana_ku,
            kanjiText: ""
        },
        {
            englishText: "Inside the ___",
            romaji: "___ no naka",
            kanaText: "___ "+kana_no+" "+kana_na+kana_ka,
            kanjiText: ""
        },
        {
            englishText: "In front of the ___",
            romaji: "___ no mae",
            kanaText: "___ "+kana_no+" "+kana_ma+kana_e,
            kanjiText: ""
        },
        {
            englishText: "Next to the ___",
            romaji: "___ no tonari",
            kanaText: "___ "+kana_no+" "+kana_to+kana_na+kana_ri,
            kanjiText: ""
        },
        {
            englishText: "Behind the ___",
            romaji: "___ no ushiro",
            kanaText: "___ "+kana_no+" "+kana_u+kana_shi+kana_ro,
            kanjiText: ""
        },
        {
            englishText: "Above the ___",
            romaji: "___ no ue",
            kanaText: "___ "+kana_no+" "+kana_u+kana_e,
            kanjiText: ""
        },
        {
            englishText: "Approximately/About ___",
            romaji: "___ gurai",
            kanaText: "___ "+kana_gu+kana_ra+kana_i,
            kanjiText: ""
        },
        {
            englishText: "How much",
            romaji: "Ikura",
            kanaText: kana_i+kana_ku+kana_ra,
            kanjiText: ""
        },
        {
            englishText: "Why",
            romaji: "Doushite",
            kanaText: kana_do+kana_u+kana_shi+kana_te,
            kanjiText: ""
        },
        {
            englishText: "Very/Extremely",
            romaji: "Totemo",
            kanaText: kana_to+kana_te+kana_mo,
            kanjiText: ""
        },
        {
            englishText: "There is/are (animate objects)",
            romaji: "___ ga imasu",
            kanaText: "___ "+kana_ga+" "+kana_i+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "There is/are (inanimate objects)",
            romaji: "___ ga arimasu",
            kanaText: "___ "+kana_ga+" "+kana_a+kana_ri+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "But/However",
            romaji: "Demo",
            kanaText: kana_de+kana_mo,
            kanjiText: ""
        },
        {
            englishText: "Slowly",
            romaji: "Yukkuri",
            kanaText: kana_yu+kana_small_tsu+kana_ku+kana_ri,
            kanjiText: ""
        },
        {
            englishText: "Welcome",
            romaji: "Irasshai(mase)",
            kanaText: kana_i+kana_ra+kana_small_tsu+kana_shi+kana_ya+kana_i+"("+kana_ma+kana_se+")",
            kanjiText: ""
        },
        {
            englishText: "What kind of ___",
            romaji: "Donna ___",
            kanaText: kana_do+kana_n+kana_na+" ___",
            kanjiText: ""
        },
        {
            englishText: "Who",
            romaji: "Dare",
            kanaText: kana_da+kana_re,
            kanjiText: ""
        },
        {
            englishText: "This way",
            romaji: "Kochira",
            kanaText: kana_ko+kana_chi+kana_ra,
            kanjiText: ""
        },
        {
            englishText: "Congratulations",
            romaji: "Omedetou Gozaimasu",
            kanaText: kana_o+kana_me+kana_de+kana_to+kana_u+" "+kana_go+kana_za+kana_i+kana_ma+kana_su,
            kanjiText: ""
        },
        {
            englishText: "How much does ___ cost?",
            romaji: "___ wa ikura desu ka",
            kanaText: "___ "+kana_wa+" "+kana_i+kana_ku+kana_ra+" "+kana_de+kana_su+" "+kana_ka,
            kanjiText: ""
        },
        {
            englishText: "Dumb/Stupid",
            romaji: "Atama ga warui",
            kanaText: kana_a+kana_ta+kana_ma+" "+kana_ga+" "+kana_wa+kana_ru+kana_i,
            kanjiText: ""
        },
        {
            englishText: "A lot of ___",
            romaji: "___ ga takusan arimasu",
            kanaText: "___ "+kana_ga+" "+kana_ta+kana_ku+kana_sa+kana_n+" "+kana_a+kana_ri+kana_ma+kana_su,
            kanjiText: ""
        },

        // Category 5: Days of the Week
        [
            "Days of the Week",
            {
                englishText: "Monday",
                romaji: "Getsuyoubi",
                kanaText: kana_ge+kana_tsu+kana_yo+kana_u+kana_bi,
                kanjiText: ""
            },
            {
                englishText: "Tuesday",
                romaji: "Kayoubi",
                kanaText: kana_ka+kana_yo+kana_u+kana_bi,
                kanjiText: ""
            },
            {
                englishText: "Wednesday",
                romaji: "Suiyoubi",
                kanaText: kana_su+kana_i+kana_yo+kana_u+kana_bi,
                kanjiText: ""
            },
            {
                englishText: "Thursday",
                romaji: "Mokuyoubi",
                kanaText: kana_mo+kana_ku+kana_yo+kana_u+kana_bi,
                kanjiText: ""
            },
            {
                englishText: "Friday",
                romaji: "Kinyoubi",
                kanaText: kana_ki+kana_n+kana_yo+kana_u+kana_bi,
                kanjiText: ""
            },
            {
                englishText: "Saturday",
                romaji: "Doyoubi",
                kanaText: kana_do+kana_yo+kana_u+kana_bi,
                kanjiText: ""
            },
            {
                englishText: "Sunday",
                romaji: "Nichiyoubi",
                kanaText: kana_ni+kana_chi+kana_yo+kana_u+kana_bi,
                kanjiText: ""
            },
        ],
    ]
];

module.exports = library;