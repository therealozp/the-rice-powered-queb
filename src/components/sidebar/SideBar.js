import React from 'react';
import { Drawer, Typography, makeStyles } from '@material-ui/core';
import SidebarButtons from './SidebarButtons';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import FolderIcon from '@material-ui/icons/Folder';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import MailIcon from '@material-ui/icons/Mail';
const drawerWidth = '100px';
const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		width: drawerWidth,
		background: theme.palette.themeBrown.main,
		height: '100%',
	},
	drawerHeader: {
		width: drawerWidth,
		height: drawerWidth,
		background: theme.palette.secondary.main,
		marginBottom: '1rem',
	},
	drawer: {
		height: '100vh',
	},
}));
const SideBar = () => {
	const classes = useStyles();
	return (
		<>
			<Drawer variant="permanent" className={classes.drawer}>
				<div className={classes.drawerPaper}>
					<div className={classes.drawerHeader} />
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<SidebarButtons
							selectedIconComponent={
								<InsertDriveFileIcon
									style={{ fontSize: '2em', color: '#68C9BA' }}
								/>
							}
							unselectedIconComponent={
								<InsertDriveFileOutlinedIcon
									style={{ color: '#969CBA', fontSize: '2em' }}
								/>
							}
							href="/"
						/>
						<SidebarButtons
							selectedIconComponent={
								<AssessmentRoundedIcon
									style={{ fontSize: '2em', color: '#68C9BA' }}
								/>
							}
							unselectedIconComponent={
								<AssessmentOutlinedIcon
									style={{ color: '#969CBA', fontSize: '2em' }}
								/>
							}
							href="/"
							isActive
						/>
						<SidebarButtons
							selectedIconComponent={
								<MailIcon style={{ fontSize: '2em', color: '#68C9BA' }} />
							}
							unselectedIconComponent={
								<MailOutlineOutlinedIcon
									style={{ color: '#969CBA', fontSize: '2em' }}
								/>
							}
							href="/"
						/>
						<SidebarButtons
							selectedIconComponent={
								<FolderIcon style={{ fontSize: '2em', color: '#68C9BA' }} />
							}
							unselectedIconComponent={
								<FolderOutlinedIcon
									style={{ color: '#969CBA', fontSize: '2em' }}
								/>
							}
							href="/"
						/>
					</div>
				</div>
			</Drawer>
		</>
	);
};

export default SideBar;
