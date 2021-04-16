import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	list: {
		display: 'flex',
		'align-items': 'center',
		listStyle: 'none',
		height: '100%',
		margin: '0',
		padding: '0'
	},
	link: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		color: 'black',
		height: '100%',
		width: '100%',
		fontSize: '1rem',
		fontWeight: '600',
		transition: '.35s all ease',
		padding: '0 2rem',
		'&:hover': {
			backgroundColor: '#50e083'
		}
	}
}))