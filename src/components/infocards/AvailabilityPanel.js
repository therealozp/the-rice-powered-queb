import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import PaymentDialog from '../dialogs/PaymentDialog';

const AvailabilityPanel = () => {
	const [date, setDate] = useState(new Date());
	const [dialogOpen, setDialogOpen] = useState(false);
	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Box
				sx={{
					borderRadius: '10px',
					background: (theme) => theme.palette.themeBrown.main,
					minHeight: '60vh',
					width: '375px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: '16px',
					margin: '48px 20px 32px 0 ',
				}}
			>
				<Calendar value={date} onChange={(date) => setDate(date)} />
			</Box>
			<Button
				onClick={() => setDialogOpen(true)}
				sx={{ width: '80%' }}
				color="themeYellow"
				variant="contained"
			>
				Book lịch hẹn
			</Button>
			<PaymentDialog
				open={dialogOpen}
				handleClose={() => setDialogOpen(false)}
			/>
		</Box>
	);
};

export default AvailabilityPanel;
