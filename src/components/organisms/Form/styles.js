import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	formcontrol: {
		margin: '1rem 0'
	},
	paper: {
		padding: '1rem',
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

