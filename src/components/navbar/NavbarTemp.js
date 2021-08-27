import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';

const buttonWidth = '170px';
const buttonHeight = '50px';
const useStyles = makeStyles((theme) => ({
	container1: {
		marginLeft: 'auto',
	},
	container2: {
		marginLeft: 'auto',
		marginRight: '18vw',
		display: 'flex',
	},
	signUpButton: {
		backgroundColor: '#FFFFFF',
		color: 'black',
		boxShadow: '0px 2px 2px rgba(75, 93, 104, 0.1)',
		transition: 'box-shadow 200ms ease',
		'&:hover': {
			boxShadow: '0px 5px 5px rgba(75, 93, 104, 0.1)',
			backgroundColor: '#FFFFFF',
		},
		textTransform: 'capitalize',
		borderRadius: 100,
		margin: 32,
		width: buttonWidth,
		height: buttonHeight,
		fontSize: '1em',
	},
	signInButton: {
		backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		boxShadow: '0px 2px 2px rgba(75, 93, 104, 0.1)',
		transition: 'box-shadow 200ms ease',
		'&:hover': {
			boxShadow: '0px 5px 5px rgba(75, 93, 104, 0.1)',
			backgroundColor: theme.palette.themeGreen.main,
		},
		textTransform: 'capitalize',
		margin: 32,
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
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

const NavbarTemp = () => {
	const classes = useStyles();
	return (
		<div
			style={{
				width: '98vw',
				display: 'flex',
				flexDirection: 'column',
				alignContent: 'flex-end',
				flexWrap: 'nowrap',
			}}
		>
			<div className={classes.container1}>
				<Button className={classes.signInButton}>Sign in</Button>
				<Button className={classes.signUpButton}>Sign up</Button>
			</div>
			<div className={classes.container2}>
				{navLinks.map((d, i) => (
					<LinkComp href={d.href} name={d.name} key={d.name} />
				))}
			</div>
		</div>
	);
};

export default NavbarTemp;
