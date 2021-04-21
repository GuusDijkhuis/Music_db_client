import React from 'react'; 
import Header from '../../components/organisms/Header';
import Albums from '../../components/templates/Albums';
import CssBaseline from '@material-ui/core/CssBaseline';
// import makeStyles from './styles';

const page = () => {
	// const classes = makeStyles();

	return (
		<div>
			<CssBaseline />
			<Header />
			<Albums />
		</div>
	);
}

export default page;