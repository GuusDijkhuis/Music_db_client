import React, { useEffect } from 'react'; 
import { useDispatch } from 'react-redux'; 
import makeStyles from './styles.js';

import { getAlbum } from '../../../actions/albums';
import { useParams } from 'react-router-dom';
import Article from '../../organisms/Article';

const Details = () => {
	const classes = makeStyles();
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getAlbum(id))
	}, [id, dispatch]);

	return (
		<div className={classes.container}>
			<Article />
		</div>
	);
}

export default Details;