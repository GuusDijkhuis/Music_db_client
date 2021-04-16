import React from 'react'; 
import makeStyles from './styles';

import Nav from '../../molecules/Nav';

const Header = () => {
	const classes = makeStyles();

	return (
		<header className={classes.header}>
			<h1>Music Database</h1>
			<Nav />
		</header>
	);
}

export default Header;