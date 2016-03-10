'use strict'

const a = {
  type:'place',
  name: 'A',
  x: 0,
  y: 0,
  cnxns: {b:4, e:4, c:2}
};
const b = {
  type:'place',
  name: 'B',
  x: 2,
  y: 0,
  cnxns: {a:4, d:3}
};
const c = {
  type:'place',
  name: 'C',
  x: 1,
  y: 1,
  cnxns: {a:2, e:4}
};
const d = {
  type:'place',
  name: 'D',
  x: 2,
  y: 1,
  cnxns: {b:3, e:5}
};
const e = {
  type:'place',
  name: 'E',
  x: 0,
  y: 2,
  cnxns: {a:4, c:3, d:5}
};
const me = {
  name: 'ME',
  loc: ['d', 'e', 3],
  movesRemain: 3,
  messages: [],
  frozenTurns: 0,
  unfreeze: []
};
const players = {me};
const places = {a, b, c, d, e};

const NY = {
  name:'NY',
  cnxns: {MC:10, LON:6},
  gps:[0,0]
}

// const places = {
//   NY,
// }


//returns arr with players and places populated in spots
function populateBoard(players, places){
  let board = [[[],[],[]],[[],[],[]],[[],[],[]]];
  board = addObjToBoard(players, board, 'player');
  board = addObjToBoard(places, board, 'place');
  return board;
}

function addObjToBoard(obj, board, type){
  Object.keys(obj).forEach(item=>
    board[item.x][item.y].push({type:item, name:item.name}));
  return board;
}

//moves player 
function movePlayer(player, places, dest){
  //determine if dest is connected to player's loc
  const origin = player.loc[0];
  const prevDest = player.loc[1];
  let prog = player.loc[2];
  let dist = 0;

  //if player is already at a place and it is connected to add destination to player loc
  if(origin === prevDest) {
    if (places[origin].cnxns[dest]){
      player.loc[1] = dest;
    }
  }
  //if destination is not connected to player loc, add error message and return
  // dest will either have already been at one side of the player's loc segment or will have been added
  if (!(dest === origin || dest === player.loc[1])) {
    player.messages.push('Sorry, that destination is not immediately connected to your location');
    return player;
  }
  //determine distance from current loc to destination
  if (dest === origin){
    dist = prog;
    //if player is turning around, switch everything so that prevDest becomes origin and dest becomes dest
    player.loc[0] = prevDest;
    player.loc[1] = dest;
    prog = places[prevDest].cnxns[dest] - prog;
  } else dist = places[origin].cnxns[dest] - prog;

  //player will reach dest this turn
  if (dist <= player.movesRemain){
    player.movesRemain = player.movesRemain - dist;
    player.loc[0] = dest;
    player.loc[2] = 0;
  }
  //player will not reach dest this turn
  else {
    player.loc[2] = prog + player.movesRemain;
    player.movesRemain = 0;
  }
  return player;
}

//determines if player's turn is over???
function managePlayerTurn(){

}

//determines whether a path exists between two places within the given length
function findPath(length, orig, dest, places){

}

// movePlayer(me, places, 'd')
// console.log(me)