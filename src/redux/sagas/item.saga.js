import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getItems() {
	try {
		// console.log('IN GET ITEM SAGA');
		const items = yield axios.get('/api/shelf');
		yield console.log('THIS IS ITEMS', items);
		yield put({ type: 'SET_ITEMS', payload: items.data });
	} catch (error) {
		console.log('Error is GET items', error);
	}
}

function* addItem(action) {
	try {
		yield axios.post('/api/shelf', action.payload);
		yield put({ type: 'GET_ITEMS' });
	} catch (error) {
		console.log('Error in ADD items', error);
	}
}

function* deleteItem(action) {
	try {
		yield axios.delete(`/api/shelf/${action.payload}`);
		yield put({ type: 'GET_ITEMS' });
		yield put({ type: 'GET_MY_ITEMS' });
	} catch (error) {
		console.log('Error in DELETE item', error);
	}
}

function* personalItems(action) {
	try {
		const items = yield axios.get(`/api/shelf/personal/${action.payload}`);
		yield console.log('THIS IS ITEMS', items);
		yield put({ type: 'SET_PERSONAL_ITEMS', payload: items.data });
	} catch (error) {
		console.log('Error in GET PERSONAL item', error);
	}
}

export default function* getItemsSaga() {
	yield takeLatest('GET_ITEMS', getItems);
	yield takeLatest('ADD_ITEM', addItem);
	yield takeLatest('DELETE_ITEM', deleteItem);
	yield takeLatest('GET_MY_ITEMS', personalItems);
}
