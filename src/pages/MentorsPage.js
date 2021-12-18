import React, { useState } from 'react';
import MentorCard from '../components/cards/MentorCard';
import { makeStyles } from '@mui/styles';
import {
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Typography,
} from '@mui/material';

const useStyles = makeStyles(() => ({
	rootBg: {
		background: '#FED7A6',
		width: '100vw',
		padding: 64,
	},
	filterContainer: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-evenly',
		margin: '75px 0',
	},
	mentorsContainer: {
		display: 'flex',
		flexDirection: 'column',
		// justtifyContent: 'center',
		width: '100%',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'Abel',
		fontSize: 'clamp(2rem, 6vw, 6rem)',
	},
}));

const mentors = [
	{
		subject: 'Toán',
		name: 'Mạc Lê Duy',
		about:
			'Chúng tôi là những con người vô cùng hài hước và hứa hẹn đem lại những buổi học vô cùng hiệu quả cho bạn!',
	},
	{
		subject: 'Hóa',
		name: 'Tạ Hà Anh Khoa',
		about:
			'Chúng tôi là những con người vô cùng hài hước và hứa hẹn đem lại những buổi học vô cùng hiệu quả cho bạn!',
	},
	{
		subject: 'Anh',
		name: 'Lê Phú Anh Khang',
		about:
			'Chúng tôi là những con người vô cùng hài hước và hứa hẹn đem lại những buổi học vô cùng hiệu quả cho bạn!',
	},
	{
		subject: 'Văn',
		name: 'Đinh Phạm Bảo Nghi',
		about:
			'Chúng tôi là những con người vô cùng hài hước và hứa hẹn đem lại những buổi học vô cùng hiệu quả cho bạn!',
	},
];

const MentorsPage = () => {
	const classes = useStyles();
	const [subject, setSubject] = useState('');
	const [level, setLevel] = useState('');
	const [price, setPrice] = useState('');

	return (
		<div className={classes.rootBg}>
			<div
				style={{
					display: 'flex',
					width: '100%',
					justifyContent: 'center',
					margin: '-32px 0 64px',
				}}
			>
				<Typography className={classes.title}>Our Tutors</Typography>
			</div>
			<div className={classes.filterContainer}>
				<div>
					<FormControl variant="outlined" style={{ width: '15vw' }}>
						<InputLabel>Subject</InputLabel>
						<Select
							id="subject_select_std"
							value={subject}
							onChange={(event) => setSubject(event.target.value)}
							label="Subject"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="Maths">Maths</MenuItem>
							<MenuItem value="Chemistry">Chemistry</MenuItem>
							<MenuItem value="Physics">Physics</MenuItem>
							<MenuItem value="Literature">Literature</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div>
					<FormControl variant="outlined" style={{ width: '15vw' }}>
						<InputLabel>Level</InputLabel>
						<Select
							id="level_select_std"
							value={level}
							onChange={(event) => setLevel(event.target.value)}
							label="Level"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="Primary">Primary</MenuItem>
							<MenuItem value="Secondary">Secondary</MenuItem>
							<MenuItem value="High School">High School</MenuItem>
							<MenuItem value="Bachelors">Bachelors</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div>
					<FormControl variant="outlined" style={{ width: '15vw' }}>
						<InputLabel>Price</InputLabel>
						<Select
							id="price_select_std"
							value={price}
							onChange={(event) => setPrice(event.target.value)}
							label="Price"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="< 60000">{'< 60000'}</MenuItem>
							<MenuItem value="60000-70000">60000-70000</MenuItem>
							<MenuItem value="> 70000">{'> 70000'}</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<div className={classes.mentorsContainer}>
				{mentors.map((d, i) => (
					<MentorCard
						name={d.name}
						subject={d.subject}
						about={d.about}
						key={`mentor${i + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default MentorsPage;
