import React, { useState } from 'react';
import {
	Button,
	Typography,
	Input,
	FormControl,
	IconButton,
	InputLabel,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
	bgRoot: {
		background: '#FACC5C',
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	side: {
		width: '65vw',
		background: '#FFFFFF',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	inputs: {
		width: '70%',
		margin: '10px',
	},
	signInButton: {
		backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		filter: 'brightness(1)',
		transition: 'filter 200ms ease',
		'&:hover': {
			filter: 'brightness(0.8)',
			backgroundColor: theme.palette.themeGreen.main,
		},
		textTransform: 'capitalize',
		// margin: 32,
		height: 50,
		borderRadius: 100,
		fontSize: '1em',
		margin: '12px 24px',
		width: '70%',
	},
}));

const SignInWith = ({ imgSrc, providerName }) => {
	// const classes = useStyles();
	return (
		<div
			style={{
				display: 'flex',
				width: '280px',
				border: '1px solid lightgrey',
				justifyContent: 'center',
				alignItems: 'center',
				padding: 16,
				borderRadius: '8px',
				margin: '0 32px',
			}}
		>
			<div style={{ margin: '0 16px' }}>
				<Image width="24px" height="24px" src={imgSrc} alt="logo" />
			</div>
			<Typography style={{ fontFamily: 'Ubuntu' }}>
				Đăng nhập bằng {providerName}
			</Typography>
		</div>
	);
};
const SignIn = () => {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [visible, setVisible] = useState(false);
	return (
		<div className={classes.bgRoot}>
			<div className={classes.side}>
				<div style={{ width: '70%' }}>
					<Typography
						style={{ fontFamily: 'Abel', fontSize: '2em', marginBottom: '1em' }}
					>
						Đăng nhập
					</Typography>
					<div style={{ display: 'flex' }}>
						<SignInWith providerName="Google" imgSrc="/Google.svg" />
						<SignInWith providerName="Facebook" imgSrc="/Facebook.svg" />
					</div>
				</div>
				<Typography
					style={{
						fontFamily: 'Abel',
						fontSize: '2em',
						margin: '1em',
						fontWeight: 'bold',
					}}
				>
					OR
				</Typography>
				<div
					style={{
						width: '70%',
						marginLeft: 200,
					}}
				>
					<div>
						<FormControl variant="outlined" className={classes.inputs}>
							<InputLabel htmlFor="outlined-adornment-password">
								Email
							</InputLabel>
							<Input
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</FormControl>
					</div>
					<div>
						<FormControl variant="outlined" className={classes.inputs}>
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<Input
								type={visible ? 'text' : 'password'}
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								endAdornment={
									<IconButton onClick={() => setVisible(!visible)}>
										{visible ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								}
							/>
						</FormControl>
					</div>
					<div style={{ marginTop: '100px' }}>
						<Button className={classes.signInButton}>Sign In</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
