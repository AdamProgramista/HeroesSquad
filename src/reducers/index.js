// place for reducers connection
import { combineReducers } from 'redux';
import { allHeroes_reducer } from './allHeroes_reducer'
import { myHeroes_reducer } from './myHeroes_reducer'

export const rootReducer = combineReducers ({
  allHeroes: allHeroes_reducer,
  myHeroes: myHeroes_reducer
});