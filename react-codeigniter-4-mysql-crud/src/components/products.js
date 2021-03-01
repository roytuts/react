import React from 'react';
import { Link } from 'react-router-dom';

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {products: []};
		this.headers = [
			{ key: 'id', label: 'Id'},
			{ key: 'name', label: 'Name' },
			{ key: 'price', label: 'Price' },
			{ key: 'sale_price', label: 'Selling Price' },
			{ key: 'sales_count', label: 'Sales Count' },
			{ key: 'sale_date', label: 'Sale Date' }
		];
		this.deleteProduct = this.deleteProduct.bind(this);
	}
	
	componentDidMount() {
		fetch('http://localhost:8080/product')
			.then(response => {
				return response.json();
			}).then(result => {
				console.log(result);
				this.setState({
					products:result
				});
			});
	}
	
	deleteProduct(id) {
		if(window.confirm("Are you sure want to delete?")) {
			fetch('http://localhost:8080/product/' + id, {
                                method : 'DELETE'
                                   }).then(response => { 
					if(response.status === 200) {
						alert("Product deleted successfully");
                        fetch('http://localhost:8080/product')
						.then(response => {
							return response.json();
						}).then(result => {
							console.log(result);
							this.setState({
								products:result
							});
						});
					} 
			 });
		}
	}
	
	render() {
		return (
			<div id="container">
				<Link to="/create">Add Product</Link>
				<p/>
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
						  <th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.products.map(function(item, key) {
							return (
								<tr key = {key}>
								  <td>{item.id}</td>
								  <td>{item.name}</td>
								  <td>{item.price}</td>
								  <td>{item.sale_price}</td>
								  <td>{item.sales_count}</td>
								  <td>{item.sale_date}</td>
								  <td>
										<Link to={`/update/${item.id}`}>Edit</Link>
										&nbsp;&nbsp;
										<a href="javascript:void(0);" onClick={this.deleteProduct.bind(this, item.id)}>Delete</a>
								  </td>
								</tr>
											)
							}.bind(this))
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Products;