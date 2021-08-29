import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import NavbarTemp from '../components/navbar/NavbarTemp';
import Mentor from '../components/mentor/Mentor';

const HomePage = () => {
	return (
		<div>
			<NavbarTemp />
			<SideBar />
			<Mentor />
		</div>
	);
};

export default HomePage;
