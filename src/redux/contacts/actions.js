//import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";
//import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "./types";

// const addContact = createAction(ADD_CONTACT, (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction(DELETE_CONTACT);

// const changeFilter = createAction(FILTER_CONTACT);

// const contactsActions = { addContact, deleteContact, changeFilter };
// export default contactsActions;

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');