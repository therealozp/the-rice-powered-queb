import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ReminderDialog from '../dialogs/ReminderDialog';
import ReminderCard from './ReminderCard';
import PaymentDialog from '../dialogs/PaymentDialog'

const cards = [1, 2, 3, 4, 5];
const ReminderPanel = ({ reminders }) => {
	const [dialogOpen, setDialogOpen] = useState(false);
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
			/>
			<Button
				onClick={() => setDialogOpen(true)}
				sx={{ width: '80%', marginTop: '10px' }}
				color="themeYellow"
				variant="contained"
			>
				Thanh Toán
			</Button>
			<PaymentDialog 
				open={dialogOpen}
				handleClose={() => setDialogOpen(false)}
				amountToPay={1000000}
			/>
		</Box>
	);
};

export default ReminderPanel;
