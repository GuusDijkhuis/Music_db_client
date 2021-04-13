import React from 'react';

import { Card, CardMedia, Typography } from '@material-ui/core';

import makeStyles from './styles';


const Album = ({ album }) => {
	const classes = makeStyles();
	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} alt={album.artist} image={album.albumCover}  />
			<div className={classes.overlay}>
				<Typography variant="h3">{album.title}</Typography>
			</div>
			<div className={classes.details}>
				<Typography variant="h6" >{album.artist}</Typography>
			</div>
			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary" >{album.genre}</Typography>
				<Typography variant="body2" color="textSecondary" >{album.length} min</Typography>
				<Typography variant="body2" color="textSecondary" >{album.songCount} songs</Typography>
			</div>
		</Card>
	);
}

export default Album;



