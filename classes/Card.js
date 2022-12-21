// Card class that will be extended with different card categories
class Card {
    category = "";
    englishText = "";
    romajiText = "";
    kanaText = "";
    kanjiText = "";

    // constructor
    constructor(english, romaji) {
        this.englishText = english;
        this.romajiText = romaji;
    }

    // superclass methods
    setKana(unicode) {
        this.kanaText = unicode;
    }

    setKanji(unicode) {
        this.kanjiText = unicode;
    }
    
    // Getters
    getEnglish() {
        return this.englishText;
    }

    getRomaji() {
        return this.romajiText;
    }

    getKana() {
        return this.kanaText;
    }

    getKanji() {
        return this.kanjiText;
    }

}