
// Hiragana Unicode Table
const kana_a = "\u3041";
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


const library = [
    // Contains arrays of Card objects, separated into categories...

    // Category 1: "-na adjectives"
    [
        "\"-na\" Adjectives",
        {
            englishText: "Water",
            romaji: "Mizu",
            kanaText: kana_mi+kana_zu,
            kanjiText: ""
        },

    ],

    // Category 2: "-i adjectives"
    [
        "\"-i\" Adjectives",
        {
            englishText: "Water",
            romaji: "Mizu",
            kanaText: "",
            kanjiText: ""
        },
    ],

    // Category 3: Nouns
    [
        "Nouns",
        {
            englishText: "Water",
            romaji: "Mizu",
            kanaText: "",
            kanjiText: ""
        },
    ],

    // Category 4: verbs
    [
        "Verbs",
        {
            englishText: "Water",
            romaji: "Mizu",
            kanaText: "",
            kanjiText: ""
        },
    ],

    // Category 5: Phrases
    [
        "Phrases",
        {
            englishText: "Water",
            romaji: "Mizu",
            kanaText: "",
            kanjiText: ""
        },
    ]
];

export {library};