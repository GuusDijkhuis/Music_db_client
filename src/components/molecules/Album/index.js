import React from 'react';
import { useDispatch } from 'react-redux';
import { CardMedia, Typography, Toolbar, Link, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { removeAlbum } from '../../../actions/albums';

import makeStyles from './styles';


const Album = ({ album, setCurrentId }) => {
	const classes = makeStyles();
	const dispatch = useDispatch();

	return (
		<div className={classes.card}>
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
							Info
						</Button>
					</Link>
					<IconButton 
						className={classes.button}
						variant="contained" 
						color="primary"
						onClick={() => {setCurrentId(album._id)}}
					>
						<EditIcon />
					</IconButton>
					<IconButton 
						className={classes.button}
						variant="contained" 
						color="secondary"
						onClick={() => dispatch(removeAlbum(album._id))}
					>
						<DeleteIcon />
					</IconButton>
				</Toolbar>
			</div>
		</div>
	);
}

export default Album;



