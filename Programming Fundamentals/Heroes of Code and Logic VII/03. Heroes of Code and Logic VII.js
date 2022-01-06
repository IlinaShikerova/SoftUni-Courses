function solve(input) {
  let numberOfHeroes = Number(input.shift());
  let heroes = {};
  while (numberOfHeroes > 0) {
    let [hero, HP, MP] = input.shift().split(" ");
    HP = Number(HP);
    MP = Number(MP);
    heroes[hero] = {
      HP,
      MP,
    };
    numberOfHeroes--;
  }
  let tokens = input.shift();
  while (tokens != "End") {
    tokens = tokens.split(" - ");
    let command = tokens[0];
    let hero = tokens[1];
    if (command === "CastSpell") {
      let MPNeeded = Number(tokens[2]);
      let spellName = tokens[3];
      if (MPNeeded <= heroes[hero].MP) {
        heroes[hero].MP -= MPNeeded;
        console.log(
          `${hero} has successfully cast ${spellName} and now has ${heroes[hero].MP} MP!`
        );
      } else {
        console.log(`${hero} does not have enough MP to cast ${spellName}!`);
      }
    } else if (command === "TakeDamage") {
      let damage = Number(tokens[2]);
      let attacker = tokens[3];
      heroes[hero].HP -= damage;
      if (heroes[hero].HP > 0) {
        console.log(
          `${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].HP} HP left!`
        );
      } else {
        delete heroes[hero];
        console.log(`${hero} has been killed by ${attacker}!`);
      }
    } else if (command === "Recharge") {
      let amount = Number(tokens[2]);
      if (heroes[hero].MP + amount > 200) {
        console.log(`${hero} recharged for ${200 - heroes[hero].MP} MP!`);
        heroes[hero].MP = 200;
      } else {
        heroes[hero].MP += amount;
        console.log(`${hero} recharged for ${amount} MP!`);
      }
    } else if (command === "Heal") {
      let amount = Number(tokens[2]);
      if (heroes[hero].HP + amount > 100) {
        console.log(`${hero} healed for ${100 - heroes[hero].HP} HP!`);
        heroes[hero].HP = 100;
      } else {
        heroes[hero].HP += amount;
        console.log(`${hero} healed for ${amount} HP!`);
      }
    }
    tokens = input.shift();
  }
  let sorted = Object.entries(heroes).sort((a, b) => {
    let HPA = a[1].HP;
    let HPB = b[1].HP;

    let heroA = a[0];
    let heroB = b[0];

    return HPB - HPA || heroA.localeCompare(heroB);
  });
  for (let hero of sorted) {
    console.log(hero[0]);
    console.log(`  HP: ${hero[1].HP}`);
    console.log(`  MP: ${hero[1].MP}`);
  }
}

