import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardMedia, Typography, Toolbar, Link, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { removeAlbum } from '../../../actions/albums';

import makeStyles from './styles';


const Album = ({ album, setCurrentId }) => {
	const classes = makeStyles();
	const dispatch = useDispatch();

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} alt={album.artist} image={album.albumCover}  />
			<div className={classes.content}>
				<Typography variant="h4">{album.title}</Typography>
				<div className={classes.details}>
					<Typography variant="h6" >{album.artist}</Typography>
				</div>
				<div className={classes.details}>
					<Typography variant="body2" color="textSecondary">{album.genre}</Typography>
					<Typography variant="body2" color="textSecondary">{album.length} min</Typography>
					<Typography variant="body2" color="textSecondary">{album.songCount} songs</Typography>
				</div>
				<Toolbar className={classes.toolbar}>
					<Link 
						href={`/albums/${album._id}`} 
						underline="none"
					>
						<Button 
							className={classes.button} 
							variant="contained" 
							color="primary"
						>
							More info
						</Button>
					</Link>
					<Button 
						className={classes.button} 
						variant="contained" 
						color="primary"
						onClick={() => {setCurrentId(album._id)}}
						startIcon={<EditIcon />}
					>
						Edit
					</Button>
					<Button 
						className={classes.button}
						variant="contained"
						color="secondary"
						onClick={() => dispatch(removeAlbum(album._id))}
						startIcon={<DeleteIcon />}
					>
						Delete
					</Button>
				</Toolbar>
			</div>
		</Card>
	);
}

export default Album;



