import { ADD_CONTACT, DELETE_CONTACT } from "../actionTypes";

const initialState = {
  contacts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT: {
      const { id, name, phone } = action.payload;
      return {
        ...state,
        contacts: {
          ...state.contacts,
          [id]: {
            id,
            name,
            phone,
          },
        },
      };
    }
    case DELETE_CONTACT: {
      const { id } = action.payload;
      delete state.contacts[id];
      return {
        ...state,
        contacts: {
          ...state.contacts,
        },
      };
    }
    default:
      return state;
  }
}
