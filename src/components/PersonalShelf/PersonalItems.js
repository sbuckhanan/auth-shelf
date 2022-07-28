import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function PersonalItems() {
	const myItems = useSelector((store) => store.personalItems);
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const doDelete = (id) => {
		console.log('THIS IS ITEM ID', id);
		dispatch({ type: 'DELETE_ITEM', payload: id });
	};

	useEffect(() => {
		dispatch({ type: 'GET_MY_ITEMS', payload: user.id });
	}, []);

	return (
		<div className='container'>
			<h2>My Shelf</h2>
			{myItems.map((item) => (
				<div>
					<img src={item.image_url} />
					<p>{item.description}</p>
					<button onClick={() => doDelete(item.id)}>DELETE</button>
				</div>
			))}
		</div>
	);
}

export default PersonalItems;
