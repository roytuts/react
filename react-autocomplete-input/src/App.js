import React from 'react';
import json from './data/results.json';

class AutoCompleteApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { suggestions:[] };
		this.search = this.search.bind(this);
	}
	
	search(event) {
		let input = event.target.value;
		//console.log('event.target.value: ' + input);
		//console.log('this.searchResults: ' + json);
		let matches = [], i;
		
		if (input.length > 1) {
			for (i = 0; i < json.length; i++) {
				if (json[i].match(input)) {
					matches.push(json[i]);
				}
			}
		}
		
		this.setState({ suggestions: matches });
	}

	render() {
		return (
			<div>
				<label>Search Here</label>&nbsp;&nbsp;<input onKeyUp={this.search.bind(this)}/> 
				<React.Fragment>
					<ul style={{listStyleType:'none'}}>
						{this.state.suggestions.map(res => (
							<li key={res}>
								{res}
							</li>
						))}
					</ul>
				</React.Fragment>
			</div>
		);
	}
}

export default AutoCompleteApp;