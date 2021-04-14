import axios from 'axios';

const url = 'http://localhost:5000/albums';

export const fetchAlbums = () => axios.get(url); 
export const createAlbum = (newAlbum) => axios.post(url, newAlbum);
export const removeAlbum = (id) => axios.delete(`${url}/${id}`);
