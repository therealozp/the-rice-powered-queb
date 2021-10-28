import React from 'react';
import { Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SidebarButtons from './SidebarButtons';
import {
	InsertDriveFile,
	InsertDriveFileOutlined,
	AssessmentOutlined,
	AssessmentRounded,
	FolderOutlined,
	Folder,
	MailOutlineOutlined,
	Mail,
} from '@mui/icons-material';
import { drawerWidth } from '../../utils/consts';

const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		width: `calc(${drawerWidth} - 0px)`,
		background: theme.palette.themeBrown.main,
	},
	drawerInside: {
		height: '100%',
	},
	drawerHeader: {
		width: `calc(${drawerWidth} - 0.5px)`,
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
			<Drawer
				variant="permanent"
				className={classes.drawer}
				classes={{ paper: classes.drawerPaper }}
			>
				<div className={classes.drawerInside}>
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
								<InsertDriveFile
									style={{ fontSize: '2em', color: '#68C9BA' }}
								/>
							}
							unselectedIconComponent={
								<InsertDriveFileOutlined
									style={{ color: '#969CBA', fontSize: '2em' }}
								/>
							}
							href="/"
						/>
						<SidebarButtons
							selectedIconComponent={
								<AssessmentRounded
									style={{ fontSize: '2em', color: '#68C9BA' }}
								/>
							}
							unselectedIconComponent={
								<AssessmentOutlined
									style={{ color: '#969CBA', fontSize: '2em' }}
								/>
							}
							href="/"
							isActive
						/>
						<SidebarButtons
							selectedIconComponent={
								<Mail style={{ fontSize: '2em', color: '#68C9BA' }} />
							}
							unselectedIconComponent={
								<MailOutlineOutlined
									style={{ color: '#969CBA', fontSize: '2em' }}
								/>
							}
							href="/"
						/>
						<SidebarButtons
							selectedIconComponent={
								<Folder style={{ fontSize: '2em', color: '#68C9BA' }} />
							}
							unselectedIconComponent={
								<FolderOutlined style={{ color: '#969CBA', fontSize: '2em' }} />
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
