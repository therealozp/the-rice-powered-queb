import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import CalendarNavbar from '../components/navbar/CalendarNavbar';

const useStyles = makeStyles((theme) => ({
	bgRoot: {
		background: '#ffebba',
		width: '100vw',
		// height: '75vh',
	},
}));

const CalendarPage = () => {
	const classes = useStyles();
	return (
		<div className={classes.bgRoot}>
			<CalendarNavbar />
		</div>
	);
};

export default CalendarPage;
