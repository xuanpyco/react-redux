import contactsReducer from './contactsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	contacts: contactsReducer
});

export default rootReducer;