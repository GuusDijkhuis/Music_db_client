import React from 'react'; 
import Header from '../../components/organisms/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Details from '../../components/templates/Details';
const page = (req, res) => {
	

	return (
		<div>
			<CssBaseline />
			<Header />
			<Details />
		</div>
	);
}

export default page;