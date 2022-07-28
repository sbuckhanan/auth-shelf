import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function ShelfPage() {
	const items = useSelector((store) => store.items);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'GET_ITEMS' });
		console.log('THIS IS ITEMS', items);
	}, []);

	return (
		<div className='container'>
			<h2>Shelf</h2>
			<p>All of the available items can be seen here.</p>
		</div>
	);
}

export default ShelfPage;
