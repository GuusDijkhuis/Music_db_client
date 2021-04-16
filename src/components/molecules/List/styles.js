import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	list: {
		listStyle: 'none',
		padding: '0',
		margin: '0',
		border: 'solid .5px black'
	},
	listItem: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		padding: '.5rem 1rem',
		'& > span': {
			flex: '0 0 25%'
		},
		'&:nth-child(odd)': {
			'background-color': 'rgba(29, 185, 84,0.2)'
		} 
	}
}))