import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	navBar: {
		width: '70vw',
		background: theme.palette.themeBrown.main,
		margin: theme.spacing(4),
		borderRadius: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: 8,
	},
	navItem: {
		width: 'max-content',
		padding: '10px 24px',
		borderRadius: 1000,
		background: '#527571',
		margin: 10,
	},
}));

const navLinks = [
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Calendar',
		href: '/calendar',
	},
	{
		name: 'Inbox',
		href: '/inbox',
	},
	{
		name: 'Guides',
		href: '/guides',
	},
	{
		name: 'Settings',
		href: '/settings',
	},
];

const NavItem = ({ label, href }) => {
	const classes = useStyles();
	return (
		<div className={classes.navItem}>
			<Typography style={{ color: '#FFFFFF' }}>{label}</Typography>
		</div>
	);
};

const CalendarNavbar = () => {
	const classes = useStyles();
	return (
		<div className={classes.navBar}>
			{navLinks.map((d, i) => (
				<NavItem label={d.name} href={d.href} key={`${d.name} ${i}`} />
			))}
		</div>
	);
};

export default CalendarNavbar;
