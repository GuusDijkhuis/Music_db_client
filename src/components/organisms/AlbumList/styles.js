import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	container: {
		display: 'flex',
		'flex-basis': 'auto',
		'flex-wrap': 'wrap',
		'flex-direction': 'row',
		justifyContent: 'flex-start',
		'align-content': 'start',
		gap: '1rem',
		margin: '1rem',
		width: '100%'
	} 
}))