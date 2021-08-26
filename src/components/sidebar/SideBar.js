import React from 'react';
import { Drawer, Typography, makeStyles } from '@material-ui/core';

const drawerWidth = '10vw';
const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		width: drawerWidth,
		background: theme.palette.themeBrown.main,
	},
	drawerHeader: {
		width: drawerWidth,
		height: '10vh',
		background: theme.palette.secondary.main,
	},
	drawer: {
		height: '100vh',
	},
}));
const SideBar = () => {
	const classes = useStyles();
	return (
		<>
			<Drawer
				variant="permanent"
				classes={{ paper: classes.drawerPaper }}
				className={classes.drawer}
			></Drawer>
		</>
	);
};

export default SideBar;
