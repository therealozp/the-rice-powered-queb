import { Typography, Container, makeStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		marginLeft: 0,
	},
	name: {
		textAlign: 'center',
		width: '300px',
		fontWeight: '800',
		fontSize: '21.6px',
		lineHeight: '35px',
		color: '#000000',
	},
	subject: {
		textAlign: 'center',
		width: '300px',
		fontFamily: 'Mplus 1p',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '12.6px',
		lineHeight: '26px',
		letterSpacing: '6px',
		textTransform: 'uppercase',
		color: '#000000',
		opacity: 0.5,
	},
});

const BluAva = ({ teacher, isBlue }) => {
	const classes = useStyles();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginBottom: '10vh',
			}}
		>
			{isBlue ? (
				<Avatar src="/BluAva.svg" style={{ height: '30vh', width: '30vh' }} />
			) : (
				<Avatar src="/OraAva.svg" style={{ height: '30vh', width: '30vh' }} />
			)}

			<Typography className={classes.name} variant="h3" color="secondary">
				{teacher.name}
			</Typography>

			<Typography className={classes.subject} variant="h3" color="secondary">
				{teacher.subject}
			</Typography>
		</div>
	);
};

export default BluAva;
