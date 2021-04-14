import * as api from '../api/albums';


export const getAlbums = () => async (dispatch) => {
	try {
		const { data } = await api.fetchAlbums();
		dispatch({ type: 'FETCH_ALL', payload: data })

	} catch (error) {
		console.log(error);
	}
}
export const createAlbum = (album) => async (dispatch) => {
	try {
		const { data } = await api.createAlbum(album);
		dispatch({ type: 'CREATE', payload: data })
	} catch (error) {
		console.log(error);
	}
}
export const removeAlbum = (id) => async (dispatch) => {
	try {
		// await api.removeAlbum(id);
		dispatch({ type: 'DELETE', payload: id })
	} catch (error) {
		console.log(error);
	}
}

