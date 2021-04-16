import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	card: {
		flex: '0 0 calc(25% - 1rem)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		'box-shadow': '0 0 4px 0 rgba(0,0,0,.2)',
		overflow: 'hidden',
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
	button: {
		transition: '.25s transform ease',
		'&:hover': {
			transform: 'scale(1.02)'
		}
	}
}))