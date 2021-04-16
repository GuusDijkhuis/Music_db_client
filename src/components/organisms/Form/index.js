import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, TextField, Button, FormControl } from '@material-ui/core';

import { createAlbum, updateAlbum } from '../../../actions/albums';

import makeStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
	const [albumData, setAlbumData] = useState({ title: '', artist: '', genre: '', songCount: 1, length: '', albumCover: '', songs: [] })
	const album = useSelector((state) => currentId ? state.albums.find((a) => a._id === currentId) : null);
	const classes = makeStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		if(album) setAlbumData(album);
	}, [album])

	const handleSubmit = (e) => {
		e.preventDefault();

		if(currentId) {
			dispatch(updateAlbum(currentId, albumData));
		} else {
			dispatch(createAlbum(albumData));
		}
		clear()
	}
	const setSongInfo = (e, i) => {
		let songArray = [ ...albumData.songs ];
		if(songArray[i]) {
			const songInfo = songArray[i];
			songArray[i] = { ...songInfo, [e.target.name]: e.target.value }
			setAlbumData({ ...albumData, songs: songArray });
		} else {
			setAlbumData({ ...albumData, songs: [ ...albumData.songs, { [e.target.name]: e.target.value}] });
		}
	}
	const clear = () => {
		setAlbumData({ title: '', artist: '', genre: '', songCount: 1, length: '', albumCover: '', songs: [] });
	}
	return (
		<Paper className={classes.paper}>
			<form autoComplete="off" noValidate onSubmit={handleSubmit} className={classes.form}>
				<FormControl className={classes.formcontrol} fullWidth>
					<Typography variant="h5">Album Info</Typography>
					<TextField
						required
						id="standard-error-helper-text"
						name="title"
						value={albumData.title} 
						onChange={(e) => setAlbumData({ ...albumData, title: e.target.value })} 
						label="Title" 
						variant="outlined" 
						fullWidth 
						margin="dense" 
					/>
					<TextField
						required
						id="standard-error-helper-text"
						name="artist"
						value={albumData.artist} 
						onChange={(e) => setAlbumData({ ...albumData, artist: e.target.value })} 
						label="Artist" 
						variant="outlined" 
						fullWidth 
						margin="dense"
					/>
					<TextField
						required
						id="standard-error-helper-text"
						name="genre"
						value={albumData.genre} 
						onChange={(e) => setAlbumData({ ...albumData, genre: e.target.value })} 
						label="Genre" 
						variant="outlined" 
						fullWidth 
						margin="dense"
					/>
					<TextField
						required
						id="standard-error-helper-text"
						type="number"
						name="songCount" 
						value={albumData.songCount} 
						onChange={(e) => setAlbumData({ ...albumData, songCount: Number(e.target.value) })} label="Number of songs" variant="outlined" fullWidth margin="dense" />
					<TextField
						required
						id="standard-error-helper-text"
						name="length" 
						value={albumData.length} 
						onChange={(e) => setAlbumData({ ...albumData, length: e.target.value })} 
						label="Full Album Length" 
						variant="outlined" 
						fullWidth 
						margin="dense" 
					/>
					<div className={classes.fileInput}>
						<FileBase 
						required type="file" 
						multiple={false} 
						onDone={({base64}) => setAlbumData({ ...albumData, albumCover: base64})} 
					/>
					</div>
				</FormControl>
				<FormControl className={classes.formcontrol} fullWidth>
					<Typography variant="h5">Song Info</Typography>
					<ul className={classes.inputList}>
						<li className={classes.songs}>
							<Typography variant="body2"></Typography>
							<Typography variant="body2" textalign="center">title</Typography>
							<Typography variant="body2" textalign="center">artist</Typography>
							<Typography variant="body2" textalign="center">length</Typography>
						</li>
						{
							[...Array(albumData.songCount)].map((res, i) => (
								<li className={classes.songs}>
									<Typography variant="body2">{i+1}</Typography>
									<TextField 
										className={classes.songsInput} 
										value={albumData.songs[i] ? albumData.songs[i].title : ''} 
										name="title" 
										onChange={(e) => setSongInfo(e, i)} 
										variant="outlined" 
										margin="dense" 
										size="medium" 
									/>
									<TextField 
										className={classes.songsInput} 
										value={albumData.songs[i] ? albumData.songs[i].artist : ''} 
										name="artist" 
										onChange={(e) => setSongInfo(e, i)} 
										variant="outlined" 
										margin="dense" 
										size="medium" 
									/>
									<TextField 
										className={classes.songsInput} 
										value={albumData.songs[i] ? albumData.songs[i].songLength : ''} 
										name="songLength" 
										onChange={(e) => setSongInfo(e, i)} 
										variant="outlined" 
										margin="dense" 
										size="medium" 
									/>
								</li>
							))
						}
					</ul>
				</FormControl>
				<Button 
					className={classes.button}
					type="submit" 
					variant="contained" 
					color="secondary" 
					fullWidth 
				>
				Submit
				</Button>
			</form>
		</Paper>
	);
}

export default Form;

// title: String,
// 	artist: String,
// 	genre: String,
// 	length: String,
// 	songCount: Number,
// 	songs: [
// 		{
// 			title: String,
// 			artist: [String],
// 			length: String
// 		}
// 	]