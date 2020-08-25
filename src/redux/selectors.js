export const getContactsState = (store) => store.contacts;

export const getContacts = (store) =>
  Object.values(getContactsState(store).contacts);
