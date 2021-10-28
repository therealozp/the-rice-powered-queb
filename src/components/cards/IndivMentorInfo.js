import React from 'react';
import { Card, Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '40px',
		width: '90vw',
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		margin: '32px 0',
	},
	title: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '3.5rem',
		lineHeight: '106px',
		color: '#33150B',
	},
	container: {
		width: '80vw',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	dividerColor: {
		backgroundColor: theme.palette.secondary.main,
		height: '2.5px',
	},
	typo: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '1.25rem',
		lineHeight: '160%',
	},
	avalability: {
		height: '50vh',
	},
}));

export default function IndivMentorInfo({
	name,
	school,
	age,
	subject,
	achieves,
	exp,
	records,
	descript,
}) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<div className={classes.container}>
				<Typography className={classes.title}>INTRODUCTION</Typography>
				<br />
				<Typography className={classes.typo}>✧ Họ tên: {name}</Typography>
				<br />
				<Typography className={classes.typo}>✧ Trường: {school}</Typography>
				<br />
				<Typography className={classes.typo}>✧ Tuổi: {age}</Typography>
				<br />
				<Typography className={classes.typo}>✧ Môn dạy: {subject}</Typography>
				<br />
				<Typography className={classes.typo}>
					✧ Thành tích: {achieves}
				</Typography>
				<br />
				<Typography className={classes.typo}>
					✧ Kinh nghiệm giảng dạy: {exp}
				</Typography>
				<br />
				<Typography className={classes.typo}>
					✧ Số lần nhận mentee: {records}
				</Typography>
				<br />
				<Typography className={classes.typo}>
					✧ Mô tả bản thân: {descript}
				</Typography>
				<br />
				<br />
				<Divider classes={{ root: classes.dividerColor }} variant="fullwidth" />
				<br />
				<Typography className={classes.title}>AVAILABILITY</Typography>
				<div className={classes.avalability}></div>
			</div>
		</Card>
	);
}
