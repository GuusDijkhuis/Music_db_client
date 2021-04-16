import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%',
		position: 'relative',
		transition: '.35s ease transform'
	},
	media: {
		height: 0,
		paddingTop: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		backgroundBlendMode: 'darken',
	},
	content: {
		padding: '1rem'
	},
	border: {
		border: 'solid',
	},
	fullHeightCard: {
		height: '100%',
	},
	toolbar: {
		display: 'flex',
		width: '100%',
		'min-height': '1rem',
		'margin-top': '.5rem',
		padding: '0',
		gap: '0.5rem'
	},
	grid: {
		display: 'flex',
	},
	details: {
	},
	button: {
		transition: '.25s transform ease',
		'&:hover': {
			transform: 'scale(1.02)'
		}
	}
}))