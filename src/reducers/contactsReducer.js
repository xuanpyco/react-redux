import * as constants from '../actions/constants'
const initialState = {
	      data: []
};
const contactsReducer = (state = initialState, action) => {
	switch(action.type) {
		case constants.LOAD_CONTACTS_SUCCESS: return {
			...state,
			data: action.payload
		}
		case constants.CREATE_CONTACT: {
				action.payload.id = state.data.length + 1;
				return {
				...state,
				data: [...state.data, action.payload]
			}
		}
		default: return state;
	}
	return state;
}
export default contactsReducer;