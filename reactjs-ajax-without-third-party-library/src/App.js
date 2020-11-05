import React from 'react';

class App extends React.Component {
	
	constructor (props) {
		super(props)
		this.state = {error: null, users: []};
		this.headers = [
			{ key: 'userId', label: 'User ID' },
			{ key: 'id', label: 'ID' },
			{ key: 'title', label: 'Title' },
			{ key: 'body', label: 'Body' }
		];
	}
	
	componentDidMount () {
		var request = new XMLHttpRequest();
		
		request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
		
		request.onload = () => {
			if (request.readyState === 4 && request.status === 200) {
				this.setState({users: JSON.parse(request.responseText)})
			} else {
				//Error
			}
		};
		
		request.onerror = (err) => {
			this.setState({error: err})
		};
		
		request.send();
	}
	
	render() {
		if (this.state.error) {
			return <div>Error: {this.state.error.message}</div>;
		} else {
			return (
				<table>
					<thead>
						<tr>
						{
							this.headers.map(function(h) {
								return (
									<th key = {h.key}>{h.label}</th>
								)
							})
						}
						</tr>
					</thead>
					<tbody>
						{
							this.state.users.map(function(item, key) {
								return (
									<tr key = {key}>
									  <td>{item.userId}</td>
									  <td>{item.id}</td>
									  <td>{item.title}</td>
									  <td>{item.body}</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			)
		}
	}
}

export default App;
