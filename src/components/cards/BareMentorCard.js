import { Card, Typography, Divider } from '@mui/material';
import Image from 'next/image';
import { Favorite, PlaylistAddCheck } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '40px',
		width: '90vw',
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
		fontSize: '3.25rem',
	},
	info2: {
		width: '22vw',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
        fontSize: '2.25rem',
        marginTop: '50px'
	},
	price: {
        fontSize: '2.25rem'
    },
	rating: {
		alignSelf: 'flex-start',
		margin: '50px 0',
	},
	records: {
		alignSelf: 'flex-start',
	},
}));

export default function BareMentorCard({ subject, name, about }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<div className={classes.header}>
				<Image
					src="/OraAva.svg"
					alt="mentorAvatar"
					width="280px"
					height="280px"
				/>
				<Typography className={classes.subject}>{subject}</Typography>
			</div>
			<div style={{ display: 'flex' }}>
				<div className={classes.info}>
					<div style={{ marginLeft: '3em' }}>
						<Typography className={classes.name}>{name}</Typography>
						<Typography
							className={classes.description}
							style={{ marginBottom: '2rem', fontSize: '2rem' }}
						>
							About me: {about}
						</Typography>
					</div>
				</div>
				<Divider
					orientation="vertical"
					style={{ marginLeft: '100px', marginRight: '50px' }}
					variant="middle"
				/>
				<div className={classes.info2}>
					<Typography className={classes.price}>50.000/hour</Typography>
					<Typography className={classes.rating}>
						<Favorite fontSize="large" />
					</Typography>
					<Typography className={classes.records}>
						<PlaylistAddCheck fontSize="large" />
					</Typography>
				</div>
			</div>
		</Card>
	);
}
