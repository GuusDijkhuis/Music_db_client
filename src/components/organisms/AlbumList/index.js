import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import Album from '../../molecules/Album';

import makeStyles from './styles.js';

const AlbumList = ({setCurrentId}) => {
	const classes = makeStyles();
	const albums = useSelector((state) => state.albums);
	return (
		!albums.length ? <CircularProgress /> : (
			<div className={classes.container}>
				{
					albums.map(album => (
							<Album album={album} setCurrentId={setCurrentId} />
					))
				}
			</div>
		)
	);
}

export default AlbumList;