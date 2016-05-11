import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ProductForm from './ProductForm.jsx';
import ProductTable from './ProductTable.jsx';
import ProductRow from './ProductRow.jsx';

class Crud extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.products = [];
		this.state.editableProduct = '';
	}

	componentDidMount() {
		this.setState({products:this.props.products});
	}

	editRow(product) {

		this.setState({editableProduct:product})
		//this.state.editableProduct = product;
	}

	deleteRow(productId) {
		var index = -1;
		var products = this.props.products;
		for(var i= 0;i<products.length;i++){
			if(products[i].id == productId){
				index = i;
				break;
			}
		}
		if(index > -1){
			products.splice(index,1);
			var newProducts = products;
			this.setState({products:newProducts});
		}
	}

	handleProductSubmit(product) {
		var products = this.state.products;
		if(product.id){
			for(var i=0;i<products.length;i++){
				if(products[i].id == product.id){
					products[i].name = product.name;
					products[i].price = product.price;
					break;
				}
			}
			this.setState({products:products});
			this.state.editableProduct = null;
		} else {
			product.id = Date.now();
			products.push(product);
			this.setState({products: products});
		}
	}

	render() {
		var rows = [];
		this.props.products.forEach(function(product) {
			rows.push(<ProductRow product={product} key={product.name} onEdit={this.props.editRow} onDelete={this.props.deleteRow}/>);
		}.bind(this));
		return (
			<div>
				<ProductForm onProductSubmit={this.handleProductSubmit.bind(this)}
							 productEditable={this.state.editableProduct}
							 onEdit={this.onHandleEdit}></ProductForm>
				<ProductTable products={this.props.products} editRow={this.editRow.bind(this)} deleteRow={this.deleteRow.bind(this)}></ProductTable>
			</div>
		)
	}
}

export default connect()(Crud);