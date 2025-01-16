class hero {
    constructor (called, age, type) {
        this.called = called;
        this.age = age;
        this.type = type;
    }

    toAttack() {
        const heroTypes = ["warrior", "mage", "monk", "ninja"];
        const heroAttacks = ["sword", "magic", "martial arts", "shouriken"];
        let attack;

        for (let i=0; i < heroTypes.length; i++) {
            if (this.type === heroTypes[i]) {
                attack = heroAttacks[i];
                break;
            }
        }

        console.log(`[EN] Hero ${this.called} (${this.type}) has attacked using ${attack}!`);
        console.log(`[PT] O heroi ${this.called} (${this.type}) atacou usando ${attack}!`);
    }
}

const chandraNalaar = new hero ("Chandra Nalaar", 28, "mage");
chandraNalaar.toAttack();

const shikamaruNara = new hero ("Shikamaru Nara", 27, "ninja");
shikamaruNara.toAttack();