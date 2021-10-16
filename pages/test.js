import React, { useState } from 'react';
import ReminderPanel from '../src/components/infocards/ReminderPanel';
import { Button } from '@mui/material';
import ReminderDialog from '../src/components/dialogs/ReminderDialog';

const Test = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div>
				<ReminderPanel />
				<Button onClick={() => setOpen(!open)}>Click me</Button>
			</div>
			<ReminderDialog open={open} handleClose={() => setOpen(false)} />
		</>
	);
};

export default Test;
