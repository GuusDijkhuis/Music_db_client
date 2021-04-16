import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	container: {
		padding: '1rem',
		margin: '1rem',
		'box-shadow': '0 0 4px 0 rgba(0,0,0,.2)',
	},
	formcontrol: {
		margin: '1rem 0'
	},
	button: {
		margin: '0.5rem 0'
	},
	fileInput: {
		margin: '1rem 0 0.5rem'
	},
	songs: {
		display: 'flex',
		width: '100%',
		'justify-content': 'space-between',
	},
	songsInput: {
		width: '100%',
		marginLeft: '0.5rem'
	},
	inputList: {
		'padding-left': '0px',
		width: '100%',
		'max-height': '400px', 
		overflow: 'scroll'
	}
}));

