import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class ProductRow extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	handleEdit() {
		this.props.onEdit(this.props.product)
	}

	handleDelete () {
		this.props.onDelete(this.props.product.id)
	}

	render() {
	return (
		<tr>
			<td>{this.props.product.id}</td>
			<td>{this.props.product.name}</td>
			<td>{this.props.product.price}</td>
			<td>
				<button className="fa fa-remove text-danger" onClick={this.handleDelete.bind(this)}></button>
			</td>
		</tr>
	);
}
}
export default connect()(ProductRow);