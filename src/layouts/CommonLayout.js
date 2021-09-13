import React from 'react';
// import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/commons/Navbar';
import Footer from '../components/commons/Footer';

const CommonLayout = ({ children }) => {
	return (
		<div style={{ position: 'relative', minHeight: '100vh ' }}>
			<div style={{ paddingBottom: 400 }}>
				<Navbar />
				{/* <SideBar /> */}
				<main>{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default CommonLayout;
