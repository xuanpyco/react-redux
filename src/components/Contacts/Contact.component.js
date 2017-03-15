import React from 'react';

const Contact = ({contact}) => {
	const { firstName, lastName } = contact;

	return (
		<span>{`${firstName} ${lastName}`}</span>
	);
}

export default Contact;