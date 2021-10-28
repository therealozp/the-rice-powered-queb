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
		background: '#FACC5C',
	},
	container: {
		marginLeft: '8vw',
		marginTop: '8vh',
		width: '90%',
	},
	imageContainer: {
		position: 'absolute',
		right: 0,
		bottom: -7,
	},
	title: {
		fontFamily: 'Abel',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '4rem',
		lineHeight: '100px',
	},
	body: {
		fontSize: '1.5rem',
		lineHeight: '30px',
	},
	learnMoreButton: {
		backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
		margin: 64,
	},
}));

const AboutUs = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Typography className={classes.title} variant="h1">
					ABOUT US
				</Typography>
				<Typography className={classes.body}>
					“Queb chạy bằng cơm” (QCBC) là một dự án nhỏ trực thuộc tổ chức lớn
					2school Guideline (2SG) - một tổ chức phi lợi nhuận nhằm hướng dẫn, hỗ
					trợ các em học sinh trong kì thi tuyển sinh vào lớp 10 của Thành phố
					Hồ Chí Minh...
				</Typography>
				<Button
					className={classes.learnMoreButton}
					endIcon={<ArrowForward fontSize="large" />}
					href="/about"
				>
					Learn more
				</Button>
			</div>
			<div className={classes.imageContainer}>
				<Image
					src="/MascotHp2.svg"
					width={600}
					height={610}
					alt="HomePage mascot 2"
				/>
			</div>
		</div>
	);
};
export default AboutUs;
