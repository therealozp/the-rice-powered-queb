import React, { useState } from 'react';
import {
	Button,
	Typography,
	Input,
	FormControl,
	IconButton,
	InputLabel,
	OutlinedInput,
	FormLabel,
	FormControlLabel,
	TextField,
	Radio,
	RadioGroup,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { yellow } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
	bgRoot: {
		background: '#FACC5C',
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	side: {
		width: '55vw',
		background: '#FFFFFF',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	side1: {
		background: '#FACC5C',
		width: '15vw',
		height: '100vh',
	},
	inputs: {
		width: '380px',
		margin: '20px',
		marginLeft: '0',
	},
	signUpButton: {
		backgroundColor: '#FACC5C',
		color: '#000000',
		filter: 'brightness(1)',
		transition: 'filter 200ms ease',
		'&:hover': {
			filter: 'brightness(0.8)',
			backgroundColor: '#FACC5C',
		},
		textTransform: 'capitalize',
		// margin: 32,
		height: 50,
		borderRadius: 100,
		fontSize: '1em',
		margin: '12px 24px',
		width: '240px',
	},
}));

const SignIn = () => {
	const classes = useStyles();
	const [name, setName] = useState('');
	const [date, setDate] = useState(Date.now());
	const [gender, setGender] = useState('female');
	const [phone, setPhone] = useState('');
	return (
		<div className={classes.bgRoot}>
			<div className={classes.side}>
				<div style={{ width: '70%' }}>
					<Typography
						style={{ fontFamily: 'Abel', fontSize: '2em', marginBottom: 32 }}
					>
						Sign up
					</Typography>
				</div>
				<div
					style={{
						width: '70%',
						marginLeft: 100,
					}}
				>
					<div>
						<FormControl className={classes.inputs}>
							<InputLabel
								htmlFor="outlined-name"
								sx={{ '&.Mui-focused': { color: yellow[800] } }}
							>
								Name *
							</InputLabel>
							<OutlinedInput
								value={name}
								onChange={(event) => setName(event.target.value)}
								id="outlined-name"
								label="Name *"
								required={true}
							/>
						</FormControl>
					</div>
					<div>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DesktopDatePicker
								inputFormat="dd/MM/yyyy"
								value={date}
								onChange={(newDate) => setDate(newDate)}
								renderInput={(params) => (
									<TextField
										{...params}
										required
										sx={{ '& label.Mui-focused': { color: yellow[800] } }}
										label="Birthdate"
										className={classes.inputs}
									/>
								)}
							/>
						</LocalizationProvider>
					</div>
					<div style={{ margin: 16, marginLeft: 0 }}>
						<FormControl>
							<FormLabel sx={{ '&.Mui-focused': { color: yellow[800] } }}>
								Gender
							</FormLabel>
							<RadioGroup
								onChange={(event) => setGender(event.target.value)}
								value={gender}
								row
							>
								<FormControlLabel
									control={
										<Radio
											sx={{
												color: yellow[800],
												'&.Mui-checked': {
													color: yellow[700],
												},
											}}
										/>
									}
									value="female"
									label="Female"
								/>
								<FormControlLabel
									control={
										<Radio
											sx={{
												color: yellow[800],
												'&.Mui-checked': {
													color: yellow[700],
												},
											}}
										/>
									}
									value="male"
									label="Male"
								/>
								<FormControlLabel
									control={
										<Radio
											sx={{
												color: yellow[800],
												'&.Mui-checked': {
													color: yellow[700],
												},
											}}
										/>
									}
									value="other"
									label="Other"
								/>
							</RadioGroup>
						</FormControl>
					</div>
					<div style={{ marginTop: 56 }}>
						<FormControl className={classes.inputs}>
							<InputLabel
								htmlFor="phone-input"
								sx={{
									'&.Mui-focused': { color: yellow[800] },
								}}
							>
								Phone *
							</InputLabel>
							<OutlinedInput
								value={phone}
								onChange={(event) => setPhone(event.target.value)}
								id="phone-input"
								label="Phone *"
								required
							/>
						</FormControl>
					</div>
					<div>
						<Button className={classes.signUpButton}> Complete Sign Up</Button>
					</div>
				</div>
			</div>
			<div className={classes.side1} />
		</div>
	);
};

export default SignIn;
