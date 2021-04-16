import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	container: {
		display: 'block',
		width: '80%',
		backgroundColor: 'white',
		boxShadow: '0 0 4px 0 rgba(0,0,0,0.2)',
		padding: '2rem',
		
		margin: '0 auto',
		marginTop: '2rem',
		'& > h1': {
			marginTop: '0'
		}
	}
}))