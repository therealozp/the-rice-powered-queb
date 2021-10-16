import React from 'react';
import { borderRadius, Box } from '@mui/system';
import { Typography, Avatar } from '@mui/material';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
const ReminderCard = ({ topic, note, timeStr }) => {
	const bgColor =
		topic === 'exam' ? '#C8372D' : topic === 'classII' ? '#D1941A' : '#37833B';
	return (
		<Box
			sx={{
				display: 'grid',
				borderRadius: '10px',
				gridTemplateColumns: '2% 68% 30%',
				background: (theme) => theme.palette.themeBrown.main,
				width: '400px',
				minHeight: '120px',
				margin: '16px',
			}}
		>
			<Box
				sx={{
					borderRadius: '10px 0 0 10px',
					backgroundColor: bgColor,
					width: '100%',
					height: '100%',
				}}
			/>
			<Box sx={{ padding: '24px' }}>
				<Typography sx={{ color: '#EEECF1', fontSize: '1.1rem' }}>
					{note}
				</Typography>
				<Typography sx={{ color: '#9590A0', fontSize: '1.1rem' }}>
					{timeStr}
				</Typography>
			</Box>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-end', padding: '24px' }}
			>
				<Avatar
					sx={{
						height: '48px',
						width: '48px',
						borderRadius: '50%',
						background: bgColor,
					}}
				>
					{topic === 'exam' ? (
						<DonutSmallOutlinedIcon sx={{ color: '#EEECF1' }} />
					) : topic === 'classII' ? (
						<CoronavirusOutlinedIcon sx={{ color: '#EEECF1' }} />
					) : (
						<BedtimeOutlinedIcon sx={{ color: '#EEECF1' }} />
					)}
				</Avatar>
			</Box>
		</Box>
	);
};

export default ReminderCard;
