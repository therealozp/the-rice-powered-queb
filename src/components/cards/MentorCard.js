import {
	Card,
	Typography,
	makeStyles,
	Button,
	Divider,
} from '@material-ui/core';
import Image from 'next/image';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const buttonWidth = '210px';
const buttonHeight = '50px';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '40px',
		width: '75vw',
		height: '380px',
		minHeight: '380px',
		backgroundColor: 'white',
		display: 'flex',
		margin: '32px 0',
	},
	header: {
		width: '18vw',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 48,
	},
	subject: {
		fontFamily: 'Abel',
		fontSize: '2rem',
		marginTop: '1rem',
	},
	info: {
		fontFamily: 'Abel',
		marginTop: '3.5em',
		width: '35vw',
	},
	name: {
		fontSize: '2.25rem',
	},
	info2: {
		width: '22vw',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	price: {},
	rating: {
		alignSelf: 'flex-start',
		margin: '50px 0',
	},
	records: {
		alignSelf: 'flex-start',
	},
	learnMoreButton: {
		backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
		marginTop: '2em',
	},
}));

export default function MentorCard({ subject, name, about }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<div className={classes.header}>
				<Image
					src="/OraAva.svg"
					alt="mentorAvatar"
					width="220px"
					height="220px"
				/>
				<Typography className={classes.subject}>{subject}</Typography>
			</div>
			<div style={{ display: 'flex' }}>
				<div className={classes.info}>
					<div style={{ marginLeft: '3em' }}>
						<Typography className={classes.name}>{name}</Typography>
						<Typography
							className={classes.description}
							style={{ marginBottom: '2rem' }}
						>
							About me:
						</Typography>
						<Typography className={classes.description}>{about}</Typography>
					</div>
				</div>
				<Divider
					orientation="vertical"
					style={{ margin: '0 16px' }}
					variant="middle"
				/>
				<div className={classes.info2}>
					<Typography className={classes.price}>50.000/hour</Typography>
					<Typography className={classes.rating}>
						<FavoriteIcon fontSize="large" />
					</Typography>
					<Typography className={classes.records}>
						<PlaylistAddCheckIcon fontSize="large" />
					</Typography>
					<Button
						className={classes.learnMoreButton}
						endIcon={<ArrowForwardIcon />}
					>
						Learn more
					</Button>
				</div>
			</div>
		</Card>
	);
}
