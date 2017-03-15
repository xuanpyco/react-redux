import * as constants from './constants';
export const loadContacts = () => {
	return {
		type: constants.LOAD_CONTACTS_SUCCESS,
		payload: [
        {
          firstName: 'John',
          lastName: 'Joe',
          age: 13,
          id: 1
        },
        {
          firstName: 'John 2',
          lastName: 'Joe  2',
          age: 14,
          id: 2
        },
        {
          firstName: 'John 3',
          lastName: 'Joe  3',
          age: 14,
          id: 3
        },
      ]
	}
}

export const addContact = (newContact) => {
	return {
		type: constants.CREATE_CONTACT,
		payload: newContact
	}
}