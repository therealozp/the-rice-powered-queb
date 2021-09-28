import React from 'react';
import Link from 'next/link';
import { Button, Typography, AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const appBarHeight = '230px';
const buttonWidth = '170px';
const buttonHeight = '50px';
const useStyles = makeStyles((theme) => ({
	container1: {
		// marginLeft: 'auto',
		// display: 'flex',
	},
	container2: {
		marginLeft: 'auto',
		display: 'flex',
		// alignContent: 'center',
	},
	signUpButton: {
		backgroundColor: '#FFFFFF',
		color: 'black',
		filter: 'brightness(1)',
		transition: 'filter 200ms ease',
		'&:hover': {
			filter: 'brightness(0.8)',
			backgroundColor: '#FFFFFF',
		},
		textTransform: 'capitalize',
		borderRadius: 100,
		// margin: 32,
		width: buttonWidth,
		height: buttonHeight,
		fontSize: '1em',
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
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
		margin: '12px 24px',
	},
	linkContainers: {
		marginLeft: 24,
		marginRight: 24,
	},
	linkText: {
		cursor: 'pointer',
		textDecoration: 'none',
		transition: 'text-decoration 200ms ease',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	appBarPaper: {
		background: theme.palette.themeBrown.main,
		// height: appBarHeight,
	},
	toolbarmargin: { ...theme.mixins.toolbar },
}));

const navLinks = [
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Help',
		href: '/help',
	},
	{
		name: 'Guides',
		href: '/guides',
	},
	{
		name: 'See our mentors',
		href: '/mentors',
	},
];

const LinkComp = ({ href, name }) => {
	const classes = useStyles();
	return (
		<div className={classes.linkContainers}>
			<Link href={href} passHref>
				<Typography className={classes.linkText}>{name}</Typography>
			</Link>
		</div>
	);
};

const Navbar = () => {
	const classes = useStyles();
	return (
		<>
			<AppBar className={classes.appBarPaper}>
				<Toolbar>
					<div
						style={{
							width: '100vw',
							display: 'flex',
							alignItems: 'center',
							// flexWrap: 'nowrap',
							justifyContent: 'flex-end',
						}}
					>
						<div
							style={{
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								marginRight: 50,
							}}
						>
							{navLinks.map((d, i) => (
								<LinkComp href={d.href} name={d.name} key={d.name} />
							))}
						</div>
						<div className={classes.container1}>
							<Button className={classes.signInButton}>Sign in</Button>
							<Button className={classes.signUpButton}>Sign up</Button>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<div className={classes.toolbarmargin} />
		</>
	);
};

export default Navbar;
