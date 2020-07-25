import React from 'react';

class NumericInputApp extends React.Component {
	constructor(props) {
		super(props);
		//this.state = { error: '' };
		//this.allowOnlyNumericsOrDigits = this.allowOnlyNumericsOrDigits.bind(this);
	}
	
	allowOnlyNumericsOrDigits(e) {		
		/*if(/\D/g.test(e.target.value)) {
			e.target.value = e.target.value.replace(/\D/g,'');
		}*/
		
		/*const charCode = e.which ? e.which : e.keyCode;
		
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			this.setState({ error: 'OOPs! Only numeric values or digits allowed' });
		}*/
	}

	render() {
		return (
			<div>
				{/*<span style={{color:'red'}}>{this.state.error}</span><br/>*/}
				{/*<label>Input Here</label>&nbsp;&nbsp;<input onKeyUp={this.allowOnlyNumericsOrDigits.bind(this)}/>*/}
				<label>Input Here</label>&nbsp;&nbsp;<input type="number"/>
			</div>
		);
	}
}

export default NumericInputApp;
