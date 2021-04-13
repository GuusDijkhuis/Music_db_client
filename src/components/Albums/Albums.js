import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Album from './Album/Album';

import makeStyles from './styles.js';

const Albums = () => {
	const classes = makeStyles();
	const albums = useSelector((state) => state.albums);
	return (
		!albums.length ? <CircularProgress /> : (
			<Grid container alignItems="stretch" spacing={3} className={classes.container}>
				{
					albums.map(album => (
						<Grid key={album._id} item xs={12} sm={6}>
							<Album album={album} />
						</Grid>
					))
				}
			</Grid>
		)
	);
}

export default Albums;