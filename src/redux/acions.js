import { ADD_CONTACT, DELETE_CONTACT } from "./actionTypes";

let nextContactId = 0;

export const addContact = (name, phone) => ({
  type: ADD_CONTACT,
  payload: {
    id: ++nextContactId,
    name,
    phone,
  },
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: {
    id,
  },
});
