import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {products: []};
		this.headers = [
			{ key: 'id', label: 'Id'},
			{ key: 'name', label: 'Name' },
			{ key: 'code', label: 'Code' },
			{ key: 'price', label: 'Price' }
		];
		this.state = { checkedBoxes: []	};
		this.deleteProducts = this.deleteProducts.bind(this);
		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}
	
	deleteProducts = () => {
		if(window.confirm('Are you sure, want to delete the selected product?')) {
			fetch('http://localhost:8080/delete/products', {
				method: 'POST',
				body: JSON.stringify({'ids' : this.state.checkedBoxes}),
				headers: {'Content-Type' : 'application/json; charset=UTF-8'}
			}).then(response => {
					if(response.status === 200) {
						document.getElementById('msg').innerHTML = '<span style="color:green;">Products deleted successfully</span>';
					}
				})
		}
	}
	
	toggleCheckbox = (e, item) => {		
		if(e.target.checked) {
			let arr = this.state.checkedBoxes;
			arr.push(item.id);
			
			this.setState = { checkedBoxes: arr};
		} else {			
			let items = this.state.checkedBoxes.splice(this.state.checkedBoxes.indexOf(item.id), 1);
			
			this.setState = {
				checkedBoxes: items
			}
		}		
		//console.log(this.state.checkedBoxes);
	}
	
	componentDidMount() {
		fetch('http://localhost:8080/products')
			.then(response => {
				return response.json();
			}).then(result => {
				//console.log(result);
				this.setState({
					products:result
				});				
			});
	}
		
	render() {
		const productFound = this.state.products && this.state.products.length;
		if(productFound) {
			return (
				<div id="container">
					<div id="msg"></div>
					<button type="button" onClick={this.deleteProducts}>Delete Selected Product(s)</button>
					<table className="datatable">
						<thead>
							<tr>
								{
									this.headers.map(function(h) {
										return (
											<th key={h.key}>{h.label}</th>
										)
									})
								}
							</tr>
						</thead>
						<tbody>
							{
								this.state.products.map(function(item, index) {
								return (
									<tr key={index} className={(index % 2) ? "odd_col" : "even_col"}>
									  <td><input type="checkbox" className="selectsingle" value="{item.id}" checked={this.state.checkedBoxes.find((p) => p.id === item.id)} onChange={(e) => this.toggleCheckbox(e, item)}/>
									  &nbsp;&nbsp;{item.id}
									  </td>
									  <td>{item.name}</td>
									  <td>{item.code}</td>
									  <td>{item.price}</td>
									</tr>
								)}.bind(this))
							}
						</tbody>
					</table>
				</div>
			)
		} else {
			return (
				<div id="container">
					No product found
				</div>
			)
		}
	}
}

export default App;
