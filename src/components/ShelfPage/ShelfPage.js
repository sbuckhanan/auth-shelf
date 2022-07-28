import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function ShelfPage() {
	const items = useSelector((store) => store.items);
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const [url, setUrl] = useState('');
	const [description, setDescription] = useState('');

	const handleStuff = () => {
		dispatch({ type: 'ADD_ITEM', payload: { url, description, user_id: user.id } });
	};

	const doDelete = (id) => {
		console.log('THIS IS ITEM ID', id);
		dispatch({ type: 'DELETE_ITEM', payload: id });
	};

	useEffect(() => {
		dispatch({ type: 'GET_ITEMS' });
		console.log('THIS IS ITEMS', items);
	}, []);

	return (
		<div className='container'>
			{user.id ? (
				<>
					<input
						type='text'
						placeholder='Description'
						onChange={(e) => setDescription(e.target.value)}
						value={description}
					/>
					<input
						type='text'
						placeholder='URL'
						onChange={(e) => setUrl(e.target.value)}
						value={url}
					/>
					<button onClick={handleStuff}>ADD</button>
				</>
			) : (
				''
			)}
			<h2>Shelf</h2>
			{items.map((item) =>
				item.user_id === user.id ? (
					<div className='card'>
						<img className='myImg' src={item.image_url} />
						<p>{item.description}</p>
						<button onClick={() => doDelete(item.id)}>DELETE</button>
						<button>EDIT</button>
					</div>
				) : (
					<div className='card'>
						<img className='myImg' src={item.image_url} />
						<p>{item.description}</p>
					</div>
				)
			)}
		</div>
	);
}

export default ShelfPage;
