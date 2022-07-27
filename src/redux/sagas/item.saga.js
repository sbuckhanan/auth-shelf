import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getItems (action){
try { 
const items = yield axios.get('/api/shelf') 
yield put({type: 'SET_ITEMS', payload: items })

} catch(error){
    console.log('Error is GET items', error);
}
};

function* getItemsSaga() {
    takeLatest('GET_ITEMS', getItems)
}

export default getItemsSaga