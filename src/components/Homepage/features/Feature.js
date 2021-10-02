import React from 'react';
import Image from 'next/image';
import { Button, Typography, Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowForward } from '@mui/icons-material';

const buttonWidth = '210px';
const buttonHeight = '60px';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '50px',
		marginLeft: '15vw',
		width: "430px",
		height: "370px",
		minHeight: "370px",
		display: "flex",
	},
	container: {
		width: '430px',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	learnMoreButton: {
		backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
	},
	title: {
		fontFamily: "Raleway",
		fontStyle: "normal",
		fontWeight: "800",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#33150B",
	}
}));

const FeatureOra = ({ order, title, src }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>

			{order === 1 ? (
				<div className={classes.container}>
					<Image src={src} width={430} height={370} />
					<Typography
						className={classes.title}
					>
						{title}
					</Typography>
					<Button
						disableElevation
						className={classes.learnMoreButton}
						endIcon={<ArrowForward />}
					>
						Learn more
					</Button>
				</div>
			): null}
			{order === 2 ? (
				<div className={classes.container}>
					<Image src={src} width={430} height={370} />
					<Typography
						className={classes.title}
					>
						{title}
					</Typography>
					<Button
						disableElevation
						className={classes.learnMoreButton}
						endIcon={<ArrowForward />}
						style={{backgroundColor: "#FACC5C"}}
					>
						Learn more
					</Button>
				</div>
			): null}
			{order === 3 ? (
				<div className={classes.container}>
					<Image src={src} width={430} height={370} />
					<Typography
						className={classes.title}
					>
						{title}
					</Typography>
					<Button
						disableElevation
						className={classes.learnMoreButton}
						endIcon={<ArrowForward />}
						style={{backgroundColor: "#FACC5C"}}
					>
						Learn more
					</Button>
				</div>
			): null}
			{order === 4 ? (
				<div className={classes.container}>
					<Image src={src} width={430} height={370} />
					<Typography
						className={classes.title}
					>
						{title}
					</Typography>
					<Button
						disableElevation
						className={classes.learnMoreButton}
						endIcon={<ArrowForward />}
					>
						Learn more
					</Button>
				</div>
			): null}

		</Card>
	);
};

export default FeatureOra;
