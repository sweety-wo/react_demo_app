import { API_CALL } from '../middlewares/fetchMiddleware';

export const PRODUCTS_FETCH         = 'PRODUCTS_FETCH';
export const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
export const PRODUCTS_FETCH_FAILURE = 'PRODUCTS_FETCH_FAILURE';

function fetch() {
    return {
        [API_CALL]: {
            types:    [PRODUCTS_FETCH, PRODUCTS_FETCH_SUCCESS, PRODUCTS_FETCH_FAILURE],
            endpoint: 'http://localhost:3008/api/products',
            method:   'GET'
        }
    }
}

export const PRODUCTS_ADD         = 'PRODUCTS_ADD';
export const PRODUCTS_ADD_SUCCESS = 'PRODUCTS_ADD_SUCCESS';
export const PRODUCTS_ADD_FAILURE = 'PRODUCTS_ADD_FAILURE';

function add() {
    return {
        [API_CALL]: {
            types:    [PRODUCTS_ADD, PRODUCTS_ADD_SUCCESS, PRODUCTS_ADD_FAILURE],
            endpoint: `http://localhost:3008/api/products`,
            method:   'PUT'
        }
    }
}

export const PRODUCTS_REMOVE         = 'PRODUCTS_REMOVE';
export const PRODUCTS_REMOVE_SUCCESS = 'PRODUCTS_REMOVE_SUCCESS';
export const PRODUCTS_REMOVE_FAILURE = 'PRODUCTS_REMOVE_FAILURE';

function remove(id) {
        return {
        [API_CALL]: {
            types:    [PRODUCTS_REMOVE, PRODUCTS_REMOVE_SUCCESS, PRODUCTS_REMOVE_FAILURE],
            endpoint: `http://localhost:3008/api/products/${id}`,
            method:   'DELETE'
        }
    }
}

export default {
    fetch,
    add,
    remove
}