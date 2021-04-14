import React, { useEffect, useState } from 'react'; 
import { useDispatch } from 'react-redux';
import Form from './components/Form/Form'; 
import Albums from './components/Albums/Albums';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, AppBar, Toolbar, Typography, Grow, Grid } from '@material-ui/core';
import { getAlbums } from './actions/albums';
import makeStyles from './styles';

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = makeStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAlbums())
	}, [currentId, dispatch]);

	return (
		<div>
			<CssBaseline />
			<AppBar className={classes.appbar} position="static">
				<Toolbar>
					<Typography variant="h6">
						Music Database
					</Typography>
				</Toolbar>
			</AppBar>
			<Grow in>
				<Container className={classes.container} >
					<Grid container  alignItems="stretch" spacing={3}>
						<Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid> 
						<Grid item xs={12} sm={8}>
							<Albums setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</div>
	);
}

export default App;