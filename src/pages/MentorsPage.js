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
		margin: '32px 0 32px',
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
		refname: 'mlduy',
	},
	{
		subject: 'Hóa',
		name: 'Tạ Hà Anh Khoa',
		about:
			'Chúng tôi là những con người vô cùng hài hước và hứa hẹn đem lại những buổi học vô cùng hiệu quả cho bạn!',
		refname: 'khoata',
	},
	{
		subject: 'Anh',
		name: 'Lê Phú Anh Khang',
		about:
			'Chúng tôi là những con người vô cùng hài hước và hứa hẹn đem lại những buổi học vô cùng hiệu quả cho bạn!',
		refname: 'lekhang',
	},
	{
		subject: 'Văn',
		name: 'Đinh Phạm Bảo Nghi',
		about:
			'Chúng tôi là những con người vô cùng hài hước và hứa hẹn đem lại những buổi học vô cùng hiệu quả cho bạn!',
		refname: 'bnghii',
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
				<Typography className={classes.title}>Giáo viên</Typography>
			</div>
			<div className={classes.filterContainer}>
				<div>
					<FormControl variant="outlined" style={{ width: '15vw' }}>
						<InputLabel>Môn học</InputLabel>
						<Select
							id="subject_select_std"
							value={subject}
							onChange={(event) => setSubject(event.target.value)}
							label="Subject"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="Maths">Toán học</MenuItem>
							<MenuItem value="Chemistry">Hóa học</MenuItem>
							<MenuItem value="Physics">Vật Lý</MenuItem>
							<MenuItem value="Literature">Văn học</MenuItem>
							<MenuItem value="Geography">Địa Lý</MenuItem>
							<MenuItem value="Literature">Lịch Sử</MenuItem>
							<MenuItem value="Literature">Sinh học</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div>
					<FormControl variant="outlined" style={{ width: '15vw' }}>
						<InputLabel>Trình độ học</InputLabel>
						<Select
							id="level_select_std"
							value={level}
							onChange={(event) => setLevel(event.target.value)}
							label="Level"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="Primary">Tiểu học</MenuItem>
							<MenuItem value="Secondary">Trung học cơ sở</MenuItem>
							<MenuItem value="High School">Trung học phổ thông</MenuItem>
							<MenuItem value="Bachelors">Đại học</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div>
					<FormControl variant="outlined" style={{ width: '15vw' }}>
						<InputLabel>Học phí</InputLabel>
						<Select
							id="price_select_std"
							value={price}
							onChange={(event) => setPrice(event.target.value)}
							label="Price"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="< 60000">{'< 60000VND'}</MenuItem>
							<MenuItem value="60000-70000">60000-70000VND</MenuItem>
							<MenuItem value="> 70000">{'> 70000VND'}</MenuItem>
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
						href={d.refname}
						key={`mentor${i + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default MentorsPage;
