import React from 'react';
import Avas from './Avas';
import { Typography, Avatar, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { drawerWidth } from '../../../utils/consts';
import { ArrowForward } from '@mui/icons-material';

const buttonWidth = '210px';
const buttonHeight = '60px';
const bluTeachers = [
	{
		name: 'Duy',
		subject: 'Queb',
		id: 1,
	},
	{
		name: 'Khang',
		subject: 'Chạy',
		id: 2,
	},
	{
		name: 'Khoa',
		subject: 'Bằng',
		id: 3,
	},
];

const oraTeachers = [
	{
		name: 'Nghi',
		subject: 'Cơm',
		id: 4,
	},
	{
		name: 'Quyên',
		subject: 'Ngầu',
		id: 5,
	},
	{
		name: 'Hiếu',
		subject: 'Quá',
		id: 6,
	},
];

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '4rem',
		lineHeight: '100px',
		color: '#fff',
		marginLeft: '8vw'
	},
	topcolor: {
		background: "#33150B",
		width: '100%',
		height: '15vh',
		marginTop: '8vh',
		display: 'flex',
		alignItems: 'center',
	},
	bottomcolor: {
		width: '100vw',
		background: '#FACC5C',
		padding: '50px 0',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
	btnContainer: {
		width: buttonWidth,
		height: buttonHeight,
	},
	learnMoreButton: {
		backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		boxShadow: '0px 2px 2px rgba(75, 93, 104, 0.1)',
		transition: 'box-shadow 200ms ease',
		'&:hover': {
			boxShadow: '0px 5px 5px rgba(75, 93, 104, 0.1)',
			backgroundColor: theme.palette.themeGreen.main,
		},
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
	},
}));

const Mentor = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.topcolor}>
				<Typography className={classes.title} variant="h1">
					MENTOR
				</Typography>
			</div>
			<div className={classes.bottomcolor}>
				<Grid container justifyContent="center" style={{ paddingTop: '2vh' }}>
					{bluTeachers.map((teacher) => (
						<Grid item key={teacher.id} xs={12} sm={6} md={4}>
							<Avas
								teacher={{
									name: teacher.name,
									subject: teacher.subject,
								}}
								isBlue
							/>
						</Grid>
					))}
					{oraTeachers.map((teacher) => (
						<Grid item key={teacher.id} xs={12} sm={6} md={4}>
							<Avas
								teacher={{
									name: teacher.name,
									subject: teacher.subject,
								}}
							/>
						</Grid>
					))}
				</Grid>
				<div className={classes.btnContainer}>
					<Button
						className={classes.learnMoreButton}
						endIcon={<ArrowForward />}
						href='/mentors'
					>
						Learn more
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Mentor;
