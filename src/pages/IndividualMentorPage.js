import React from 'react';
import { Typography, Avatar, Box } from '@mui/material';
import IndivMentorInfo from '../components/cards/IndivMentorInfo';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#FED7A6',
		display: 'flex',
		flexDirection: 'column',
		// alignItems: 'center',
		padding: '0 32px',
	},
	cardContainer1: {
		marginTop: '5vh',
	},
	cardContainer2: {},
}));

const IndividualMentorPage = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.cardContainer}>
				<Box
					sx={{
						width: '70vw',
						height: '365px',
						borderRadius: '10px',
						marginTop: '50px',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Box
						sx={{
							height: '280px',
							width: '100%',
						}}
					>
						{/* Put cover photo down here */}
						<img
							style={{
								objectFit: 'cover',
								borderRadius: '10px',
							}}
							src="/Cover.jpg"
							alt="Cover photo"
							width="100%"
							height="100%"
						/>
					</Box>
					<Box
						sx={{
							marginTop: '160px',
							width: '170px',
							position: 'absolute',
							display: 'center',
							flexWrap: 'wrap',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Avatar
							src="/Userprofile.png"
							sx={{ width: '168px', height: '168px' }}
						/>
						<Typography
							sx={{
								fontStyle: 'normal',
								fontWeight: '500',
								fontSize: '2rem',
							}}
						>
							Mạc Lê Duy
						</Typography>
					</Box>
				</Box>
			</div>
			<div>
				<IndivMentorInfo
					name="Mạc Lê Mao"
					school="Trường Trung học Phổ Thông Nụ Cười"
					age="17"
					subject="Khiếu hài hước"
					achieves="Diễn hài tại Paris by Morning"
					exp="5 năm làm người khác cười"
					records="189"
					descript="Bạn muốn đem lại niềm vui cho người khác? Hãy đến với tôi!"
				/>
			</div>
		</div>
	);
};
export default IndividualMentorPage;
