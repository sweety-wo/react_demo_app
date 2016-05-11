import { handleActions } from 'redux-actions';

import { PRODUCTS_FETCH, PRODUCTS_FETCH_SUCCESS, PRODUCTS_FETCH_FAILURE } from '../actions/products';
import { PRODUCTS_ADD, PRODUCTS_ADD_SUCCESS, PRODUCTS_ADD_FAILURE } from '../actions/products';
import { PRODUCTS_REMOVE, PRODUCTS_REMOVE_SUCCESS, PRODUCTS_REMOVE_FAILURE } from '../actions/products';

export default handleActions({
    [PRODUCTS_FETCH]:         (state, action) => state.set('isFetching', true),
    [PRODUCTS_FETCH_SUCCESS]: (state, action) => state.merge({'isFetching': false, items: action.payload}),
    [PRODUCTS_FETCH_FAILURE]: (state, action) => state.set('isFetching', false),

    [PRODUCTS_ADD]:         (state, action) => state.set('isFetching', true),
    [PRODUCTS_ADD_SUCCESS]: (state, action) => state.merge({'isFetching': false, items: action.payload}),
    [PRODUCTS_ADD_FAILURE]: (state, action) => state.set('isFetching', false),

    [PRODUCTS_REMOVE]:         (state, action) => state.set('isFetching', true),
    [PRODUCTS_REMOVE_SUCCESS]: (state, action) => state.merge({'isFetching': false, items: action.payload}),
    [PRODUCTS_REMOVE_FAILURE]: (state, action) => state.set('isFetching', false)
})