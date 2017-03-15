import React, {Component} from 'react';

class ContactForm extends Component {

	constructor(){
		super();

		this.state = {
			firstName: '',
			lastName: '',
			age: 0
		}
	}
	_onFormSubmit = (event) => {
		event.preventDefault();

		//TODE Contact Added
		let newContact = {...this.state};
		console.log(newContact);
		console.log(this.props);
		this.props.onFormSubmit(newContact);
	}

	_onFirstNameChange = (event) => {
		const firstName = event.target.value;
		this.setState({firstName: firstName});
	}

	_onLastNameChange = (event) => {
		const lastName = event.target.value;
		this.setState({lastName});
	}

	_onAgeChange = (event) => {
		const age = event.target.value;
		this.setState({age});
	}
	render(){
		return (
			<form onSubmit={this._onFormSubmit}>
				<input type="text" value={this.state.firstName} onChange={this._onFirstNameChange}/>
				<br/>
				<input type="text" value={this.state.lastName} onChange={this._onLastNameChange}/>
				<br/>
				<input type="text" value={this.state.age} onChange={this._onAgeChange}/>
				<br/>
				<input type="submit" value="Submit" onClick={this._onFormSubmit}/>
			</form>
		)
	}
}

export default ContactForm;