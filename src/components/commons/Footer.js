import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import styles from '../../../styles/footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
	footerBg: {
		backgroundColor: theme.palette.themeBrown.main,
		display: 'flex',
		alignItems: 'center',
		height: '400px',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		justifyContent: 'center',
	},
	container: {
		display: 'flex',
	},
	linkText: {
		fontFamily: 'M PLUS 1p',
		color: '#FFFFFF',
		letterSpacing: 2,
	},
	linkContainers: {
		margin: 8,
	},
	icons: {
		fontSize: '1.5rem',
		margin: 8,
		color: '#FCFCFC;',
	},
}));

const footerLinks = [
	{
		name: 'Home',
		href: '/home',
	},
	{
		name: 'Guides',
		href: '/guides',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Mentors',
		href: '/mentors',
	},
	{
		name: 'Make a booking!',
		href: '/booking',
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

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footerBg}>
			<div className={classes.container}>
				<div style={{ margin: '0 160px' }}>
					<Typography
						className={styles.linkTitle}
						style={{ fontSize: '1.25rem', marginLeft: -24 }}
					>
						Menu
					</Typography>
					{footerLinks.map((d, i) => (
						<LinkComp href={d.href} name={d.name} key={d.name} />
					))}
				</div>
				<div style={{ margin: '0 160px' }}>
					<Typography
						className={styles.linkTitle}
						style={{ fontSize: '1.25rem', marginLeft: -24 }}
					>
						Contact Us
					</Typography>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<FacebookIcon className={classes.icons} />
						<InstagramIcon className={classes.icons} />
						<MailOutlineIcon className={classes.icons} />
					</div>
				</div>
				<div style={{ margin: '0 160px' }}>
					<Typography
						className={styles.linkTitle}
						style={{ fontSize: '1.25rem', marginLeft: -24 }}
					>
						Follow Us
					</Typography>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<FacebookIcon className={classes.icons} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
