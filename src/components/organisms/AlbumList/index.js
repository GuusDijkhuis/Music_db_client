import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Album from '../../molecules/Album';

import makeStyles from './styles.js';

const AlbumList = ({setCurrentId}) => {
	const classes = makeStyles();
	const albums = useSelector((state) => state.albums);
	return (
		!albums.length ? <CircularProgress /> : (
			<Grid container alignItems="stretch" spacing={3} className={classes.container}>
				{
					albums.map(album => (
						<Grid key={album._id} item xs={12} sm={6}>
							<Album album={album} setCurrentId={setCurrentId} />
						</Grid>
					))
				}
			</Grid>
		)
	);
}

export default AlbumList;