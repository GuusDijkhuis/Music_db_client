import React from 'react'; 
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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