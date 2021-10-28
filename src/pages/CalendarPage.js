import React from 'react';
import CalendarNavbar from '../components/commons/CalendarNavbar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
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
