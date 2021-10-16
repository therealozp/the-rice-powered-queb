import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ReminderDialog from '../dialogs/ReminderDialog';
import ReminderCard from './ReminderCard';

const cards = [1, 2, 3, 4, 5];
const ReminderPanel = () => {
	const [dialogOpen, setDialogOpen] = useState(false);
	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Box>
				{cards.map((d, i) => (
					<ReminderCard
						key={`reminder-${i}`}
						note="Design review"
						timeStr="9:00 AM — 10:00 AM"
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
			/>
		</Box>
	);
};

export default ReminderPanel;
