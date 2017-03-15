import React, { Component } from 'react';
import ContactList from '../components/ContactList/ContactList.component';
import ContactForm from '../components/ContactForm/ContactForm.component';
import {connect} from 'react-redux';
import {addContact} from '../actions/contacts'
import * as actions from '../actions/contacts';
import { bindActionCreators } from 'redux';

class ContactContainer extends Component {
  constructor() {
    super();
		this.id = 10;

  }
  _addContact = (newContact) => {
    //this.setState({contacts: [...this.state.contacts, newContact]})
		this.props.addContact(newContact);
  }
  render() {
    const {contacts} = this.props;
    return (
      <div>
        <ContactList  contacts={contacts.data} />
        <ContactForm onFormSubmit={this._addContact}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    contacts: store.contacts
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
		addContact: bindActionCreators(actions.addContact, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
