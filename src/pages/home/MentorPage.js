import React from 'react';
import MentorCard from '../../components/cards/MentorCard';

const mentors = [
	{
		subject: 'Toán',
		name: 'Mạc Lê Mao',
		about: 'Dảk bủh lmao',
	},
	{
		subject: 'Hóa',
		name: 'Tạ Hà Anh Dảk',
		about: 'Dảk bủh lmao',
	},
	{
		subject: 'Anh',
		name: 'Lê Phú Anh Khanime',
		about: 'Dảk bủh lmao',
	},
	{
		subject: 'Văn',
		name: 'Đinh Phạm Bủh Nghi',
		about: 'Dảk bủh lmao',
	},
];

const MentorPage = () => {
	return (
		<div
			style={{
				width: '100vw',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{mentors.map((d, i) => (
				<MentorCard
					key={`mentor-${i}`}
					subject={d.subject}
					name={d.name}
					about={d.about}
				/>
			))}
		</div>
	);
};

export default MentorPage;
