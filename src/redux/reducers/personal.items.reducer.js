const personalItems = (state = [], action) => {
	console.log('IN REDUCER ITEMS');
	switch (action.type) {
		case 'SET_PERSONAL_ITEMS':
			return action.payload;
		default:
			return state;
	}
};

export default personalItems;
