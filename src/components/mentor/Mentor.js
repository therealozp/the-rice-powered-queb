import React from 'react';
import BluAva from './BluAva';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

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
	bottomrow: {
		background: theme.palette.themeBrown.main,
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
		width: '100vw',
		height: '75vh',
	},
	title: {
		fontFamily: 'Abel',
		fontSize: '4rem',
		lineHeight: '130%',
		color: '#212353',
		marginLeft: '6vw',
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
					style={{ marginLeft: '-3.25vw' }}
				>
					{bluTeachers.map((teacher) => (
						<Grid item key={teacher.id} xs={12} sm={6} md={4}>
							<BluAva
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
							className={classes.bottomrow}
						>
							<BluAva
								teacher={{
									name: teacher.name,
									subject: teacher.subject,
								}}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default Mentor;
