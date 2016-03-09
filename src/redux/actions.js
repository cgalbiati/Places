"use strict";

export const ADD_PLAYER = 'ADD_PLAYER';
export const SWITCH_PLAYERS = 'UPDATE_PLAYERS';
export const RESET_SUBMIT = 'RESET_SUBMIT';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const START_REQ = 'START_REQ';
export const REQ_SUCCESS = 'REQ_SUCCESS';
export const REQ_FAIL = 'REQ_FAIL';


export function createAddPlayer(name){
  return {
    type: ADD_PLAYER,
    name
  }
}

function createUpdateScore(index, change){
  return {
    type: UPDATE_SCORE,
    index,
    change
  }
}

function createResetSubmit(){
  return {
    type: RESET_SUBMIT
  }
}

function createUpdatePlayers(){
  return {
    type: SWITCH_PLAYERS
  }
}



// export function submitWord(curState){
//   console.log('curstate', curState)
//   let wordsList = curState.wordsList;
//   let newWord = curState.inPlay.newWord;
//   const valid = testWord(wordsList, newWord);
//   if(valid){
//     dispatch(createAddWord(newWord));
//     dispatch(createUpdateScore(0, 'inc'));
//   } else dispatch(createUpdateScore(0, 'decr'));
//   dispatch(createUpdatePlayers());
//   dispatch(createResetSubmit());
// }


// //returns t/f if word is valid and has not been played yet
// function testWord(wordsList, word){
//   if (wordsList.length === 0) return true;
//   const lastWord = wordsList[0].word;
//   const lastLetter = lastWord[lastWord.length-1].toLowerCase();
//   if(word[0].toLowerCase() !== lastLetter) return false;
//   return wordsList.every(playedWord=>playedWord.word.toLowerCase() !== word.toLowerCase()); 
// }

// function updateNewWord(evt){
//   dispatch(createUpdateNewWord(evt.target.value))
// }
