import React from "react"
import Avas from "./Avas"
import { Typography, makeStyles, Grid, Button } from "@material-ui/core"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { drawerWidth } from '../../utils/consts';

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
		name: 'Khoa',
		subject: 'Quá',
		id: 6,
	},
];

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Abel',
		fontSize: '4rem',
		lineHeight: '130%',
		color: '#212353',
		marginLeft: '6vw',
	},
	topcolor: {
		background: theme.palette.secondary.main,
		width: '100%',
		height: '30vh',
		display: 'flex',
		alignItems: 'center',
	},
	bottomcolor: {
		background: theme.palette.themeBrown.main,
		paddingBottom: "30px",
		width: '100vw',
	},
	btnContainer: {
		width: buttonWidth,
		height: buttonHeight,
		marginLeft: `calc(46.5vw - ${drawerWidth})`
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
					Mentor
				</Typography>
			</div>
			<div className={classes.bottomcolor}>
				<Grid
					container
					justifyContent="center"
					style={{ marginLeft: '-3.25vw', paddingTop: '2vh' }}
				>
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
						<Grid
							item
							key={teacher.id}
							xs={12}
							sm={6}
							md={4}
						>
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
						endIcon={<ArrowForwardIcon />}
					>
						Learn more
					</Button>
				</div>
				
			</div>
		</div>
	);
};

export default Mentor;