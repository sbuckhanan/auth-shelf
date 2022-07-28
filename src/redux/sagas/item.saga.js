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

export default function* getItemsSaga() {
	yield takeLatest('GET_ITEMS', getItems);
	yield takeLatest('ADD_ITEM', addItem);
}
