import Bowerman from '../js/Bowerman';
import Team from '../js/Team';


test('Проверка Team на добавление одного персонажа Bowerman', () => {
  const bowerman = new Bowerman('Лучник', 'Bowerman');
  const team = new Team();
  team.add(bowerman);
  const received = team.toArray();
  const expected = [{
    name: 'Лучник',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }];

  expect(received).toEqual(expected);
});

test('Проверка Team на добавление нескольких одинаковых персонажей', () => {
  const bowerman1 = new Bowerman('Лучник', 'Bowerman');
  const bowerman2 = new Bowerman('Лучник', 'Bowerman');
  const team = new Team();
  team.addAll(bowerman1, bowerman2);
  const received = team.toArray();
  const expected = [{
    name: 'Лучник',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  },
  {
    name: 'Лучник',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }];

  expect(received).toEqual(expected);
});

test('Проверка Team на добавление нескольких разных персонажей', () => {
  const bowerman1 = new Bowerman('Лучник', 'Bowerman');
  const bowerman2 = new Bowerman('Лучник', 'Bowerman');
  const team = new Team();
  team.addAll(bowerman1, bowerman2, bowerman1, bowerman2, bowerman1);
  const received = team.toArray();
  const expected = [{
    name: 'Лучник',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  },
  {
    name: 'Лучник',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }];

  expect(received).toEqual(expected);
});

test('Проверка Team на добавление уже существующего персонажа', () => {
  const bowerman = new Bowerman('Лучник', 'Bowerman');
  const team = new Team();
  team.add(bowerman);

  expect(() => {
    team.add(bowerman);
  }).toThrow();
});
