import React from 'react'; 
import makeStyles from './styles.js';
import { CircularProgress } from '@material-ui/core';

const List = ({ songs }) => {
	const classes = makeStyles();
	console.log(songs);
	return (
		!songs ? <CircularProgress /> : (
			<ul className={classes.list}>
				{songs.map((song, i) => (
					<li className={classes.listItem}>
						<span>{i+1}</span>
						<span>{song.title}</span>
						<span>{song.artist}</span>
						<span>{song.songLength}</span>
					</li>
				))}
			</ul>
		)
	);
}

export default List;


