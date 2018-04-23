// place for action creators

export const addHeroById_action = (id) => {
  const action = {
    type: 'ADD_HERO',
    id
  }
  return action;
}

export const removeHeroById_action = (id) => {
  const action = {
    type: 'REMOVE_HERO',
    id
  }
  return action;
}