import Character from './Character.js';

class Team {
  constructor() {
    this.team = [
      new Character('Лучник', 'Bowman', 50, 1, 40, 10),
      new Character('Маг', 'Mag', 100, 2, 100, 80),
      new Character('Воин', 'Warior', 60, 6, 70, 20),
    ];
  }
}
const person = new Team();

const iterator = function () { // итератор
  let index = 0;
  return {
    next() {
      if (index > 2) {
        return {
          value: undefined,
          done: true,
        };
      }
      index += 1;
      return {
        value: person.team[index],
        done: false,
      };
    },
  };
};

const createTeam = iterator();
console.log(createTeam.next()); // маг
console.log(createTeam.next()); // войн
console.log(createTeam.next()); // value: undefined, done: false (???)
console.log(createTeam.next()); // value: undefined, done: true

/* Для поддержки логики необходимо сделать итерируемыми объекты класса Team — команда,
в которой хранятся персонажи противника на текущий раунд.
При итерации они должны выдавать персонажей.
Реализуйте итератор в классе Team, который по одному выдаёт персонажей — объекты типа Person.
*/
