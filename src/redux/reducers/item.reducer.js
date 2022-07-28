const items = (state = [], action) => {
	console.log('IN REDUCER ITEMS');
	switch (action.type) {
		case 'SET_ITEMS':
			return action.payload;
		default:
			return state;
	}
};

export default items;
