import React from 'react';
// import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/commons/Navbar';
import Mentor from '../components/mentor/Mentor';
import Features from '../components/features/Features';
import Footer from '../components/commons/Footer';
import MentorCard from '../components/mentorcard/mentorcard';
import dynamic from 'next/dynamic';

const CommonLayout = dynamic(() => import('../layouts/CommonLayout'));

const HomePage = () => {
	return (
		<CommonLayout>
			<Mentor />
			<Features />
			<MentorCard />
		</CommonLayout>
	);
};

export default HomePage;
