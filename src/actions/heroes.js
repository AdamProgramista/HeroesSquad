import * as actionTypes from './actionTypes';

export const addHeroById_action = (id) => {
  const action = {
    type: actionTypes.ADD_HERO,
    id
  }
  return action;
}

export const removeHeroById_action = (id) => {
  const action = {
    type: actionTypes.REMOVE_HERO,
    id
  }
  return action;
}