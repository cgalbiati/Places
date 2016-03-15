import {ADD_PLAYER, START_REQ, SET_INITIAL_STATE, REQ_SUCCESS, REQ_FAIL } from './actions';

export function players(state=[], action){
  switch(action.type){
    case ADD_PLAYER: return state;
    default: return state;
  }
}
export function places(state={}, action){
  switch(action.type){
    // case ADD_PLAYER: return state;
    default: return state;
  }
}
function loading(state={}, action){
  switch(action.type){
    case SET_INITIAL_STATE:
      return action.data;
    case START_REQ: return Object.assign({}, state, {loading:true});
    case REQ_SUCCESS: return Object.assign({}, state, {loading:false});
    case REQ_FAIL: return Object.assign({}, state, {loading:false});
    default: return state;
  }
}