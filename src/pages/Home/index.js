import React from 'react'; 
import Header from '../../components/organisms/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
// import makeStyles from './styles';

const page = () => {
	// const classes = makeStyles();

	return (
		<div>
			<CssBaseline />
			<Header />
			<h1>Home</h1>
		</div>
	);
}

export default page;