import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { Paper, Typography, TextField, Button, FormControl } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import { createAlbum } from '../../actions/albums';

import makeStyles from './styles';

const Form = () => {
	const [albumData, setAlbumData] = useState({ title: '', artist: '', genre: '', songCount: 1, length: '', albumCover: '', songs: [] })
	const classes = makeStyles();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createAlbum(albumData));
		setAlbumData({ title: '', artist: '', genre: '', songCount: 1, length: '', albumCover: '', songs: [] });
	}
	const setSongInfo = (e, i) => {
		let songArray = [ ...albumData.songs ];
		if(songArray[i]) {
			const songInfo = songArray[i];
			songArray[i] = { ...songInfo, [e.target.name]: e.target.value }
			setAlbumData({ ...albumData, songs: songArray });
		} else {
			setAlbumData({ ...albumData, songs: [ ...albumData.songs, { title: e.target.value}] });
		}
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
						<div key={uuidv4} className={classes.songs}>
							<Typography variant="body2"></Typography>
							<Typography variant="body2" textalign="center">title</Typography>
							<Typography variant="body2" textalign="center">artist</Typography>
							<Typography variant="body2" textalign="center">length</Typography>
						</div>
						{
							[...Array(albumData.songCount)].map((res, i) => (
								<div key={uuidv4} className={classes.songs}>
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
								</div>
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