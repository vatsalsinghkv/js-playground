// Demonstrate JASON
'use strict';
const fs = require('fs');

// const game = {
//     name: 'Counter Strike 1.6',
//     extension: 'CS 1.6',
//     genre: ['Multiplayer', 'Action', 'Shooting']
// }

const gameJSONBuffer = fs.readFileSync('game.json');
const gameObj = JSON.parse(gameJSONBuffer);

gameObj.name = `Player's Unknown Battleground`;
gameObj.extension = 'PUBG';
const gameJSON = JSON.stringify(gameObj);
fs.writeFileSync('game.json', gameJSON);
