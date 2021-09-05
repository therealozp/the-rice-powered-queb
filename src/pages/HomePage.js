import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import NavbarTemp from '../components/navbar/NavbarTemp';
import Mentor from '../components/mentor/Mentor';
<<<<<<< HEAD
import Features from '../components/features/Features'
=======
import { drawerWidth } from '../utils/consts';
>>>>>>> b568b4994a7fde6d0d51590cbcf627df67999801

const HomePage = () => {
	return (
		<div>
			<NavbarTemp />
			<SideBar />
<<<<<<< HEAD
			<Mentor />
			<Features />
=======
			<main style={{ marginLeft: drawerWidth }}>
				<Mentor />
			</main>
>>>>>>> b568b4994a7fde6d0d51590cbcf627df67999801
		</div>
	);
};

export default HomePage;
