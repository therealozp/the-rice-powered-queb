import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import NavbarTemp from '../components/navbar/NavbarTemp';
import Mentor from '../components/mentor/Mentor';
import Features from '../components/features/Features'

const HomePage = () => {
	return (
		<div>
			<NavbarTemp />
			<SideBar />
			<Mentor />
			<Features />
		</div>
	);
};

export default HomePage;
