import React from 'react';

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products : []
		};
		this.headers = [
			{ key: 'id', label: 'Product Id'},
			{ key: 'price', label: 'Price' },
			{ key: 'sale_price', label: 'Sale Price' },
			{ key: 'sales_count', label: 'Sales Count' },
			{ key: 'sale_date', label: 'Sale Date' }
		];
	}
  
	componentDidMount() {
		this.setState({
			products : [
				{ id: 1, price: 30000, sale_price: 35000, sales_count: 55, sale_date: '02-04-2018'},
				{ id: 2, price: 30300, sale_price: 37030, sales_count: 43, sale_date: '03-04-2018'},
				{ id: 3, price: 39010, sale_price: 48700, sales_count: 145, sale_date: '04-04-2018'},
				{ id: 4, price: 15000, sale_price: 17505, sales_count: 251, sale_date: '05-04-2018'},
				{ id: 5, price: 18000, sale_price: 22080, sales_count: 178, sale_date: '05-04-2018'},
				{ id: 6, price: 30500, sale_price: 34040, sales_count: 58, sale_date: '05-04-2018'},
				{ id: 7, price: 2000, sale_price: 2500, sales_count: 68, sale_date: '06-04-2018'},
				{ id: 8, price: 45871, sale_price: 55894, sales_count: 165, sale_date: '07-04-2018'}
			]
		});
	}
	
	getColor(value: number): string {
		if (value >=0 && value <=15) {
			return 'RGBA(255,198,191,0.4)';
		} else if (value > 15 && value <=20) {
			return 'RGBA(170,214,136,0.4)';
		} else if (value > 20 && value <=25) {
			return 'RGBA(152,195,119,0.6)';
		} else if (value > 25 && value <=30) {
			return 'RGBA(139,189,120,0.9)';
		} else if (value > 30 && value <=60) {
			return 'RGBA(94,167,88,0.9)';
		} else if (value > 60 && value <=150) {
			return 'RGBA(88,157,65,0.3)';
		} else if (value > 150 && value <=10000) {
			return 'RGBA(95,160,97,0.6)';
		} else if (value > 10000 && value <=20000) {
			return 'RGBA(105,170,90,0.7)';
		} else if (value > 20000 && value <=30000) {
			return 'RGBA(115,164,76,0.6)';
		} else if (value > 30000) {
			return 'RGBA(98,143,94,0.4)';
		} else {
			return 'RGBA(70,135,90,0.2)';
		}
	}
	
	render() {
		return (
			<div>
				<table id="sales-info" border="1" cellPadding="4" cellSpacing="1" style={{margin: 'auto'}}>
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
							this.state.products.map(function(product, key) {
							return (
								<tr key = {key}>
								  <td style={{backgroundColor: this.getColor(product.id)}}>{product.id}</td>
								  <td style={{backgroundColor: this.getColor(product.price)}}>{product.price}</td>
								  <td style={{backgroundColor: this.getColor(product.sale_price)}}>{product.sale_price}</td>
								  <td style={{backgroundColor: this.getColor(product.sales_count)}}>{product.sales_count}</td>
								  <td>{product.sale_date}</td>
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

export default Table;
