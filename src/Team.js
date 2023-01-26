import Character from './Character.js';

class Team {
  constructor() {
    this.team = [
      new Character('Лучник', 'Bowman', 50, 1, 40, 10),
      new Character('Маг', 'Mag', 100, 2, 100, 80),
      new Character('Воин', 'Warior', 60, 6, 70, 20),
    ];
    this.length = this.team.length;
  }

  createTeam() {
    let index = 0;
    return {
      next() {
        if (index > this.length) {
          return {
            value: undefined,
            done: true,
          };
        }

        index++;
        return {
          value: this.team[index],
          done: false,
        };
      },
    };
  }
}

const person = new Team();
console.log(person.createTeam().next());

/* Для поддержки логики необходимо сделать итерируемыми объекты класса Team — команда,
в которой хранятся персонажи противника на текущий раунд.
При итерации они должны выдавать персонажей.
Реализуйте итератор в классе Team, который по одному выдаёт персонажей — объекты типа Person.
*/
