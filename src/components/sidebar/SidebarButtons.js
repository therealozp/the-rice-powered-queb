import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	button: {
		height: 60,
		width: 60,
		borderRadius: 8,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	active: {
		backgroundColor: '#FFFFFF',
	},
	inactive: {
		backgroundColor: theme.palette.themeBrown.main,
		border: ' 2px solid rgba(150, 156, 186, 0.2)',
	},
	wrapper: {
		cursor: 'pointer',
		transition: 'filter 200ms ease',
		'&:hover': {
			filter: 'brightness(0.75)',
		},
		margin: '1rem 0 1rem -10px',
	},
}));

const SidebarButtons = ({
	isActive,
	href,
	unselectedIconComponent,
	selectedIconComponent,
}) => {
	const classes = useStyles();
	return (
		<div className={classes.wrapper}>
			<Link href={href} passHref>
				{isActive ? (
					<div className={clsx(classes.button, classes.active)}>
						{selectedIconComponent}
					</div>
				) : (
					<div className={clsx(classes.button, classes.inactive)}>
						{unselectedIconComponent}
					</div>
				)}
			</Link>
		</div>
	);
};

export default SidebarButtons;
