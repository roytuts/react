import React from 'react';
import AuthenticationService from '../service/AuthenticationService';

class Login extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {username: '', password:'', isLoginFailed: false};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
		const state = this.state
		state[event.target.name] = event.target.value
		this.setState(state);
	}
  
	handleSubmit(event) {
		event.preventDefault();
		AuthenticationService
		.authenticate(this.state.username, this.state.password)
		.then(() => {
			AuthenticationService.registerUserInSession(this.state.username, this.state.password);
			window.location.href = '/';
		})
		.catch( () => this.setState({ isLoginFailed: true }) );
	}
  
	render() {		
		return (
			<div id="container">
				<h2>Login Here</h2>
				<p/>
				{this.state.isLoginFailed && <div style={{ color: "red" }}>Invalid Credentials</div>}
				<form onSubmit={this.handleSubmit}>
					<p>
						<label>Username:</label>
						<input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required/>
					</p>
					<p>
						<label>Password:</label>
						<input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required/>
					</p>
					<p>
						<input type="submit" value="Submit" />
					</p>
				</form>
			</div>
		);
	}
	
}

export default Login;
