import React from 'react';
import Intro from '../components/Homepage/intro/Intro';
import AboutUs from '../components/Homepage/about/AboutUs';
import Help from '../components/Homepage/help/Help';
import Mentor from '../components/Homepage/mentor/Mentor';
import Features from '../components/Homepage/features/Features';
import CommonLayout from '../layouts/CommonLayout';

const HomePage = () => {
	return (
		<CommonLayout>
			<Intro />
			<AboutUs />
			<Help />
			<Features />
			<Mentor />
		</CommonLayout>
	);
};

export default HomePage;
