import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import NavbarTemp from '../components/navbar/NavbarTemp';
import Mentor from '../components/mentor/Mentor';
import { drawerWidth } from '../utils/consts';

const HomePage = () => {
	return (
		<div>
			<NavbarTemp />
			<SideBar />
			<main style={{ marginLeft: drawerWidth }}>
				<Mentor />
			</main>
		</div>
	);
};

export default HomePage;
