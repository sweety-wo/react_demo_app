import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Crud from './products/Crud.jsx';

import actions from '../../actions';

class Products extends Component {

    constructor(props) {
        super(props);
        this.products = [
            {id: 1, name: 'Football', price: '$49.99'},
            {id: 2, name: 'Baseball', price: '$09.99'},
            {id: 3, name: 'Basketball', price: '$29.99'},
            {id: 4, name: 'iPod Touch', price: '$99.99'},
            {id: 5, name: 'iPhone 5', price: '$99.99'},
            {id: 6, name: 'Nexus 7', price: '$99.99'}
        ];
    }

    render() {
        return (
            <Crud products={this.products} />
        )
    }
}

function mapState(state) {
    return {
        products: state.get('products').toJS()
    }
}

function mapDispatch(dispatch) {
    return bindActionCreators({
        fetch:  actions.products.fetch,
        add:    actions.products.add,
        remove: actions.products.remove
    }, dispatch);
}

export default connect(mapState, mapDispatch)(Products);
