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

export default function* getItemsSaga() {
	yield takeLatest('GET_ITEMS', getItems);
}
