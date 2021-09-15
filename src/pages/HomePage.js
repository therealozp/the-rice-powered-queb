import React from 'react';
// import SideBar from '../components/sidebar/SideBar';
import Mentor from '../components/mentor/Mentor';
import Features from '../components/features/Features';
// import MentorCard from '../components/mentorcard/mentorcard';
import dynamic from 'next/dynamic';
import MentorPage from './home/MentorPage';
import CommonLayout from '../layouts/CommonLayout';

// const CommonLayout = dynamic(() => import('../layouts/CommonLayout'));

const HomePage = () => {
	return (
		<CommonLayout>
			<Mentor />
			<Features />
			<MentorPage />
		</CommonLayout>
	);
};

export default HomePage;
