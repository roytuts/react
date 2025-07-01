import React from 'react';
import Button from './Button';

class App extends React.Component {
	
	handleClick() {
		console.log('Click button was clicked!');
	}
	
	handleSave() {
		console.log('Save button was clicked!');
	}
	
	render() {
		return (
			<div>
			  <Button onClick={this.handleClick} style={{ backgroundColor: 'blue', color: 'white' }} className="click" label="Click">
			  </Button>
			  <br/>
			  <Button onClick={this.handleSave} style={{ backgroundColor: 'green', color: 'white' }} id="save" label="Save">
			  </Button>
			</div>
		);
	}
	
}

export default App;
