import React, { useEffect, useState } from 'react'; 
import { useDispatch } from 'react-redux';
import Form from '../../organisms/Form'; 
import AlbumList from '../../organisms/AlbumList';
import { getAlbums } from '../../../actions/albums';
import makeStyles from './styles';

const Albums = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = makeStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAlbums())
	}, [currentId, dispatch]);

	return (
		<div className={classes.main}>
			<AlbumList setCurrentId={setCurrentId} />
			<Form currentId={currentId} setCurrentId={setCurrentId} />
		</div>
	);
}

export default Albums;