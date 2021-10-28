import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';

const buttonWidth = '220px';
const buttonHeight = '60px';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		display: 'grid',
		gridTemplateColumns: '40% 60% ',
		width: '100vw',
		height: '96vh',
		background: theme.palette.themeGreen.main,
	},
	container: {
		marginLeft: '8vw',
		marginTop: '8vh',
		width: '60%',
	},
	imageContainer: {
		marginLeft: '5vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'Abel',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '4rem',
		lineHeight: '100px',
		alignSelf: 'center',
	},
	body: {
		fontSize: '1.5rem',
		lineHeight: '30px',
	},
	learnMoreButton: {
		backgroundColor: theme.palette.secondary.main,
		color: '#FFFFFF',
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
		margin: 64,
		marginLeft: 0,
	},
}));

const Help = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.imageContainer}>
				<Image src="/MascotHp3.svg" width={620} height={680} />
			</div>
			<div className={classes.container}>
				<Typography className={classes.title} variant="h1">
					HELP
				</Typography>
				<div style={{ marginTop: 64 }}>
					<Typography className={classes.body}>
						Khi truy cập vào “Queb chạy bằng cơm”, để có trải nghiệm tốt nhất,
						bạn có thể tham khảo các bước thực hiện theo hướng dẫn...
					</Typography>
					<Button
						className={classes.learnMoreButton}
						endIcon={<ArrowForward fontSize="large" />}
						color="secondary"
						href="/help"
					>
						Learn more
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Help;
