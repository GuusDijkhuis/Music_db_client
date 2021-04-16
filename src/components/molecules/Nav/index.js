import React from 'react'; 
import makeStyles from './styles';

const Nav = () => {
	const classes = makeStyles();
	return (
		<nav className={classes.nav}>
			<ul className={classes.list}>
				<a className={classes.link} href="/">
					<li>Home</li>
				</a>
				<a className={classes.link} href="/albums">
					<li>Albums</li>
				</a>
			</ul>	
		</nav>
	);
}

export default Nav;