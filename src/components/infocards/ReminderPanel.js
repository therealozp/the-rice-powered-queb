import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ReminderDialog from '../dialogs/ReminderDialog';
import ReminderCard from './ReminderCard';

const ReminderPanel = () => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [reminders, setReminders] = useState([
		{
			note: 'Design review',
			timeStr: '9:00 AM — 10:00 AM',
			topic: 'classI',
		},
		{
			note: 'Exam review',
			timeStr: '9:00 AM — 10:00 AM',
			topic: 'exam',
		},
		{
			note: 'Little Test',
			timeStr: '9:00 AM — 10:00 AM',
			topic: 'classII',
		},
		{
			note: 'Design review',
			timeStr: '9:00 AM — 10:00 AM',
			topic: 'classI',
		},
	]);

	const addReminders = (newReminder) => {
		setReminders([...reminders, newReminder]);
	};

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Box>
				{reminders.map((d, i) => (
					<ReminderCard
						key={`reminder-${i}`}
						note={d.note}
						timeStr={d.timeStr}
						topic={d.topic}
					/>
				))}
			</Box>
			<Button
				onClick={() => setDialogOpen(true)}
				sx={{ width: '80%' }}
				color="themeYellow"
				variant="contained"
			>
				Create Reminder
			</Button>
			<ReminderDialog
				open={dialogOpen}
				handleClose={() => setDialogOpen(false)}
				setExtraReminders={(newReminder) => addReminders(newReminder)}
			/>
		</Box>
	);
};

export default ReminderPanel;
