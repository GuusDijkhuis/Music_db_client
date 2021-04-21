import axios from 'axios';

const url = 'https://album-database.herokuapp.com/albums';

export const fetchAlbums = () => axios.get(url); 
export const createAlbum = (newAlbum) => axios.post(url, newAlbum);
export const removeAlbum = (id) => axios.delete(`${url}/${id}`);
export const updateAlbum = (id, newData) => axios.patch(`${url}/${id}`, newData);
export const fetchAlbum = (id) => axios.get(`${url}/${id}`);
