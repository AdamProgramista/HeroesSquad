import * as actionTypes from '../actions/actionTypes';
import characters_json from '../data/characters.json';

const allHeroes = characters_json;
const initialState = allHeroes;

export const allHeroes_reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_HERO: {
      state = state.filter(h => h.id !== action.id);
      return state;
    }
    case actionTypes.REMOVE_HERO: {
      const hero = allHeroes.find(h => h.id === action.id);
      state = [...state, hero];
      return state;
    }
    default:
      return state;
  }
}