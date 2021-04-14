import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardMedia, Typography, Toolbar, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { removeAlbum } from '../../../actions/albums';

import makeStyles from './styles';


const Album = ({ album }) => {
	const classes = makeStyles();
	const dispatch = useDispatch();

	const handleRemoveClick = (id) => {
		dispatch(removeAlbum(id));
	}

	return (
		<Card className={classes.card}>
			<Toolbar className={classes.toolbar}>
				<IconButton aria-label="delete" onClick={(e) => handleRemoveClick(album._id)}>
					<DeleteIcon color="primary"/>
				</IconButton>
			</Toolbar>
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



