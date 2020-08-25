import React from 'react';

class RestController extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'DELETE'
		});
	}
	render() {                            
		return (
			<div>
				<p><b>Resource deleted in the server</b></p>
			</div>
		)
	}
}

export default RestController;