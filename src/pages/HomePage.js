import React from 'react';
// import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/commons/Navbar';
import Mentor from '../components/mentor/Mentor';
import Features from '../components/features/Features';
import Footer from '../components/commons/Footer';

const HomePage = () => {
	return (
		<div style={{ position: 'relative', minHeight: '100vh ' }}>
			<div style={{ paddingBottom: 400 }}>
				<Navbar />
				{/* <SideBar /> */}
				<main>
					<Mentor />
					<Features />
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default HomePage;
