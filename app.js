const pokemon = require("./data.js"); // Messing with line 22 in DOM

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon[58].name);
// console.log(game)

game.difficulty = "Med";
// const difficulty = 'Med'

const starter = pokemon[3];
game.party.push(starter);

game.party.push(pokemon[8], pokemon[17], pokemon[149]);
// const partyOfThree = pokemon.slice(8, 17, 149) //did not add becasue 2 dimension array?
// console.log(game.party);

// gyms.completed(difficulty[<=3]) = 'true'
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}

// console.log(game.gyms)

game.party.splice(0, 1, pokemon[4]);
// console.log(game.party);

for (let i = 0; i < game.party.length; i++) {
  if (game.party[i].name) {
    // console.log(game.party[i].name);
  }
}

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    // console.log("Starter:");
    // console.log(pokemon[i].name);
  }
}

game.catchPokemon = function (pokemonObj) {
  const pokeball = game.items.find(item => item.name === "pokeball");
  if (pokeball) {
    game.party.push(pokemonObj);
    pokeball.quantity = pokeball.quantity -1;
  }  
};

game.catchPokemon(pokemon[148]);
// game.catchPokemon(pokemon[54]);


console.log(game.party);

// game.catchPokemon = function(pokemonObj) {

// game.items.pull(items[0, 1])
console.log(game.items);
// };


for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
};

console.log(game.gyms);

let completed = 0
let incomplete = 0

game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0,
  };
  for (let i= 0; i < game.gyms.length; i++) {
  
  if (game.gyms[i].completed === true) {
      gymTally.completed += 1;
  } else {
    gymTally.incomplete += 1;
  }
}
console.log(gymTally);

};
game.gymStatus();


game.partyCount = function () {
  let count = 0
  for (let i = 0; i < game.party.length; i++) {
    if (game.party[i].name) {
      count += 1
     }
  }
    return count;
};
console.log(game.partyCount());

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 8)
    game.gyms[i].completed = true;
};
console.log(game.gyms);

console.log(game);
