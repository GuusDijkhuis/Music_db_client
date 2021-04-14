const albumsReducers = (albums = [], action) => {
	switch(action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'UPDATE':
		case 'CREATE':
			return [...albums, action.payload];
		case 'DELETE':
			return albums.filter((album) => album._id !== action.payload); 
		default: 
			return albums;
	}
}

export default albumsReducers;