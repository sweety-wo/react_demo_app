import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ProductRow from './ProductRow.jsx';

class ProductTable extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var rows = [];
		this.props.products.forEach(function(product) {
			rows.push(<ProductRow product={product} key={product.name} onEdit={this.props.editRow} onDelete={this.props.deleteRow}/>);
		}.bind(this));
		return (
			<div className="row">
				<div className="col-md-12">
					<h3>All Products</h3>
					<table className="table table-responsive">
						<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Price</th>
							<th>Actions</th>
						</tr>
						</thead>
						<tbody>{rows}</tbody>
					</table>
				</div>
			</div>
		)
	}
}
export default connect()(ProductTable);