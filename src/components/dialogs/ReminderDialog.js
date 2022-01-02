import React, { useState } from 'react';
import {
	Dialog,
	TextField,
	Typography,
	Button,
	DialogContent,
	DialogActions,
	RadioGroup,
	FormControl,
	FormControlLabel,
	DialogTitle,
} from '@mui/material';
import { Box } from '@mui/system';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { MobileDatePicker, LocalizationProvider } from '@mui/lab';

const CustomChip = ({ bgColor, onClick, label, value, currType, icon }) => {
	const isActive = value == currType;
	return (
		<Button
			sx={{
				width: 'max-content',
				borderRadius: 999,
				display: 'flex',
				padding: '4px 8px',
				textTransform: 'none',
				filter: isActive ? 'brightness(1.3)' : 'brightness(1.1)',
				'& .MuiButton-startIcon': {
					padding: '4px',
				},
				margin: '8px',
				color: '#000000',
				boxShadow: isActive ? 1 : 2,
			}}
			startIcon={icon}
			variant="contained"
			color={bgColor}
			onClick={onClick}
			disableRipple
		>
			<Box sx={{ padding: '4px 4px 4px 0' }}>
				<Typography>{label}</Typography>
			</Box>
		</Button>
	);
};
const ReminderDialog = ({ open, handleClose, setExtraReminders }) => {
	const [eventName, setEventName] = useState('');
	const [eventDesc, setEventDesc] = useState('');

	const [type, setType] = useState('');
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState('');

	const clearReminder = () => {
		setEventDesc('');
		setEventName('');
		setType('');
		setDate(new Date());
		setTime('');
	};

	const setMoreReminders = () => {
		setExtraReminders({
			note: eventName,
			desc: eventDesc,
			topic: type,
			date: date,
			time: time,
		});
		handleClose();
		clearReminder();
	};
	return (
		<Dialog open={open} onClose={handleClose} maxWidth={false}>
			<DialogTitle
				sx={{
					background: '#ffcd8f',
					fontSize: '2em',
				}}
			>
				Create a Reminder
			</DialogTitle>
			<DialogContent
				sx={{
					background: '#ffcd8f',
					height: '43vh',
					width: '50vw',
				}}
			>
				<Typography
					sx={{
						textTransform: 'uppercase',
						fontSize: '0.85em',
						// fontWeight: '500',
						letterSpacing: '2px',
					}}
				>
					General
				</Typography>

				<Box sx={{ margin: '16px' }}>
					<TextField
						label="Event Name"
						variant="outlined"
						value={eventName}
						onChange={(event) => setEventName(event.target.value)}
						sx={{ color: '#EEECF1', marginRight: '32px' }}
						required
					/>
					<TextField
						label="Event Description"
						variant="outlined"
						value={eventDesc}
						onChange={(event) => setEventDesc(event.target.value)}
						sx={{ color: '#EEECF1', width: '50%' }}
						required
					/>
				</Box>
				<Typography
					sx={{
						textTransform: 'uppercase',
						fontSize: '0.85em',
						// fontWeight: '500',
						letterSpacing: '2px',
					}}
				>
					Reminder type
				</Typography>
				<Box sx={{ margin: '8px' }}>
					<FormControl>
						<RadioGroup value={type} row>
							<FormControlLabel
								control={
									<CustomChip
										icon={<DonutSmallOutlinedIcon />}
										label="Exam"
										onClick={() => setType('exam')}
										bgColor="chipRed"
										clickable
										currType={type}
										value="exam"
									/>
								}
								value="exam"
								label=""
								sx={{}}
							/>
							<FormControlLabel
								control={
									<CustomChip
										icon={<CoronavirusOutlinedIcon />}
										label="Class II"
										onClick={() => setType('classII')}
										bgColor="chipYellow"
										clickable
										currType={type}
										value="classII"
									/>
								}
								value="classII"
								label=""
							/>
							<FormControlLabel
								control={
									<CustomChip
										icon={<BedtimeOutlinedIcon />}
										label="Class I"
										onClick={() => setType('classI')}
										bgColor="chipGreen"
										clickable
										currType={type}
										value="classI"
									/>
								}
								value="classI"
								label=""
							/>
						</RadioGroup>
					</FormControl>
				</Box>
				<Typography
					sx={{
						textTransform: 'uppercase',
						fontSize: '0.85em',
						// fontWeight: '500',
						letterSpacing: '2px',
					}}
				>
					Extra details
				</Typography>
				<Box sx={{ display: 'flex' }}>
					<Box sx={{ margin: '16px' }}>
						<LocalizationProvider dateAdapter={DateAdapter}>
							<MobileDatePicker
								label="Date"
								inputFormat="dd/MM/yyyy"
								value={date}
								onChange={(newValue) => setDate(newValue)}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
					</Box>
					<Box sx={{ margin: '16px' }}>
						<TextField
							label="Time"
							variant="outlined"
							value={time}
							onChange={(event) => setTime(event.target.value)}
						/>
					</Box>
				</Box>
			</DialogContent>
			<DialogActions
				sx={{
					background: '#ffcd8f',
				}}
			>
				<Button
					variant="contained"
					color="themeYellow"
					onClick={() => setMoreReminders()}
				>
					Create
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ReminderDialog;
