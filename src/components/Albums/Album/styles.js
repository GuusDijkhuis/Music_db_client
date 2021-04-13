import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%',
		position: 'relative',
		transition: '.35s ease transform',
		'&:hover' : {
			transform: 'scale(1.02)'
		}
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		backgroundBlendMode: 'darken',
	},
	border: {
		border: 'solid',
	},
	fullHeightCard: {
		height: '100%',
	},
	overlay: {
		position: 'absolute',
		top: '20px',
		left: '20px',
		color: 'white',
	},
	grid: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '0.5rem 1rem',
	},
	title: {
		padding: '0 16px',
	}
}))