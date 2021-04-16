import React from 'react'; 
import { useSelector } from 'react-redux';

import makeStyles from './styles.js';
import List from '../../molecules/List'
import { CircularProgress } from '@material-ui/core';

const Article = () => {
	const classes = makeStyles();
	const album = useSelector((state) => state.albums);
	return (
		!album.length ? <CircularProgress /> : (
			<div className={classes.container}>
				<h1>{album.title}</h1>
				<span>{album.artist}</span>
				<p>{album.genre}</p>
				<p>{album.length}</p>
				<p>{album.songCount}</p>
				<List songs={album.songs} />
			</div>
		)
	);
}

export default Article;


