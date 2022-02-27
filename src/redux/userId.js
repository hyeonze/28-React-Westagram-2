const initialState = { userId: '' };
let tempId;

// Action Type
const ID_INPUT = 'userId/ID_INPUT';

// Action Creator & Action
export const inputId = txt => {
  tempId = txt.split('@')[0];
  return { type: ID_INPUT };
};

// Reducer
export default function userId(state = initialState, action) {
  switch (action.type) {
    case ID_INPUT:
      return { userId: tempId };
    default:
      return state;
  }
}
