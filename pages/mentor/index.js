import React from 'react';
import CommonLayout from '../../src/layouts/CommonLayout';
import MentorsPage from '../../src/pages/MentorsPage';

const mentors = () => {
	return (
		<div>
			<CommonLayout>
				<MentorsPage />
			</CommonLayout>
		</div>
	);
};

export default mentors;
