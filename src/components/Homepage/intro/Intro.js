import React from 'react';
import Image from 'next/image';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowForward } from '@mui/icons-material';

const buttonWidth = '220px';
const buttonHeight = '60px';
const appBarHeight = '65px';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		display: 'flex',
	},
	container: {
		height: '60vh',
		width: '350px',
		marginTop: '15vh',
		marginLeft: '8vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	imageContainer: {
		height: '800px',
		width: '800px',
		marginLeft: '22vw',
		marginTop: '5vh',
	},
	title: {
		fontFamily: 'Abel',
		fontSize: '4rem',
		lineHeight: '100px',
	},
	body: {
		fontStyle: 'normal',
		fontSize: '1.8rem',
		lineHeight: '160%',
		color: '#4B5D68',
	},
	findMentorsButton: {
		backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
	},
}));

const Intro = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Typography className={classes.title}>QUEB</Typography>
				<Typography className={classes.body}>
					Your one-stop shop for all things tutors
				</Typography>
				<Button
					className={classes.findMentorsButton}
					endIcon={<ArrowForward fontSize="large" />}
					href="/mentors"
				>
					Find Mentors
				</Button>
			</div>
			<div className={classes.imageContainer}>
				<Image src="/MascotHp1.svg" width={600} height={600} />
			</div>
		</div>
	);
};

export default Intro;
