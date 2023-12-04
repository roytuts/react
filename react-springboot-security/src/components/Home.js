import React from 'react';
//import axios from 'axios';
import AuthenticationService from '../service/AuthenticationService';

class Home extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {loggedinUser: '', greetId: '', greetMsg: ''};
		this.logout = this.logout.bind(this);
	}
	
	componentDidMount() {
		/*axios.get(`http://localhost:8080/resource`, AuthenticationService.getAxiosConfig())
		.then(response => {
			//console.log(response.data);
			this.setState({
				loggedinUser:AuthenticationService.getLoggedinUser(),
				greetId: response.data.id,
				greetMsg: response.data.content
			});
		})
		.catch((error) => {
			console.log('error in home ' + error);
		});*/
		
		fetch(`http://localhost:8080/resource`, AuthenticationService.getAxiosConfig())
		.then(response => {
			return response.json();
		}).then(result => {
			this.setState({
				loggedinUser:AuthenticationService.getLoggedinUser(),
				greetId: result.id,
				greetMsg: result.content
			});
		});
	}
	
	logout() {
		if(window.confirm("Are you sure want to Logout?")) {
			AuthenticationService.logout();
			window.location.href = '/';
		}
	}
	
	render() {		
		return (
			<div id="container">
				<p>Welcome back, { this.state.loggedinUser }!</p>
				<p>The ID is { this.state.greetId }</p>
				<p>The content is { this.state.greetMsg }</p>
				
				<p><button onClick={this.logout.bind(this)}>Logout</button></p>
			</div>
		);
	}
	
}

export default Home;
