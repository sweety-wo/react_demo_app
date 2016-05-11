import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class ProductForm extends Component {
	constructor(props) {
		super(props);
		const _this = this;
		this.state = {};
		this.state.name = '';
		this.state.price = '';
	}

	componentWillMount() {
		this.updateName = this.updateName.bind(this);
		this.updatePrice = this.updatePrice.bind(this);
	}

	updateName(event) {
		this.setState({name : event.target.value});
	}

	updatePrice(event) {
		this.setState({price : event.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		var name = this.state.name;
		var price = this.state.price;
		if (!name || !price) {
			return;
		}
		if(this.props.productEditable){
			this.props.onProductSubmit({name: name, price: price,id:this.props.productEditable.id});
		} else {
			this.props.onProductSubmit({name: name, price: price});
		}
		this.setState({editableProduct:null});
		//this.refs.productNameInput.value = '';
		//this.refs.productPriceInput.value = '';
		this.render();
	}

	render() {
		if(this.props.productEditable) {
			this.refs.productNameInput.value = this.props.productEditable.name;
			this.refs.productPriceInput.value= this.props.productEditable.price;
		} else {
			if(this.refs.productNameInput && this.refs.productPriceInput) {
				this.refs.productNameInput.value = '';
				this.refs.productPriceInput.value = '';
			}
		}
		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<h3>Products</h3>
						<form onSubmit={this.handleSubmit.bind(this)}>
							<div className="form-group">
								<label>Name</label>
								<input
									type="text"
									className="form-control"
									placeholder="Name"
									value={this.state.name}
									onChange={this.updateName}
									ref="productNameInput"/>
							</div>
							<div className="form-group">
								<label>Price</label>
								<input
									type="text"
									className="form-control"
									placeholder="Price"
									value={this.state.price}
									onChange={this.updatePrice}
									ref="productPriceInput"
								/>
							</div>
							<button type="submit" className="btn btn-primary">Save</button>
						</form>
					</div>
				</div>
			</div>
			)
		}
}
export default connect()(ProductForm);