import React from 'react';
import Contact from '../Contacts/Contact.component'

const ContactList = ({ contacts}) => {
	return (
		<ul>
			{
				contacts.map(contact => (
					<li key={contact.id}>
						<Contact contact={contact}/>
					</li>
				))
			}
		</ul>
	)
}

export default ContactList;