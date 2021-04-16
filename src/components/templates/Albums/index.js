import React, { useEffect, useState } from 'react'; 
import { useDispatch } from 'react-redux';
import Form from '../../components/organisms/Form'; 
import AlbumList from '../../components/organisms/AlbumList';
import Header from '../../components/organisms/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, AppBar, Toolbar, Typography, Grow, Grid } from '@material-ui/core';
import { getAlbums } from '../../actions/albums';
import makeStyles from './styles';

const Albums = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = makeStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAlbums())
	}, [currentId, dispatch]);

	return (
		<div>
			<CssBaseline />
			<Header />
			<AlbumList setCurrentId={setCurrentId} />
			<Form currentId={currentId} setCurrentId={setCurrentId} />
		</div>
	);
}

export default Albums;