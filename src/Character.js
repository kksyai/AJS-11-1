class Character{
    constructor( name, type, health, level, attack, defence){
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence
    }
}

const Bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const Mag = new Character('Маг', 'Mag', 100, 2, 100, 80);
const Warior = new Character('Воин', 'Warior', 60, 6, 70, 20);

//console.log(user)