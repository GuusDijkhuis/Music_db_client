import React, { useEffect, useState } from 'react'; 
import { useDispatch } from 'react-redux';
import Form from '../../components/organisms/Form'; 
import AlbumList from '../../components/organisms/AlbumList';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, AppBar, Toolbar, Typography, Grow, Grid } from '@material-ui/core';
import { getAlbums } from '../../actions/albums';
import makeStyles from './styles';

const Header = () => {
	const classes = makeStyles();

	return (
		<AppBar className={classes.appbar} position="static">
			<Toolbar>
				<Typography variant="h6">
					Music Database
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;