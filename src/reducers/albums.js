const albumsReducers = (albums = [], action) => {
	switch(action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...albums, action.payload];
		default: 
			return albums;
	}
}

export default albumsReducers;