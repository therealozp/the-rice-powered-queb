import React from 'react';
import { Card, Typography, Divider, ListItem, List, Box } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '40px',
		width: '90vw',
		backgroundColor: 'white',
		justifyContent: 'center',
		margin: '32px 0',
	},
	title: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '3.5rem',
		lineHeight: '106px',
		color: '#33150B',
	},
	container: {
		width: '80vw',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	dividerColor: {
		backgroundColor: theme.palette.secondary.main,
		height: '2.5px',
	},
	typo: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontSize: '1.25rem',
		lineHeight: '160%',
	},
	avalability: {
		height: '50vh',
	},
}));

export default function IndivMentorInfo({
	name,
	school,
	age,
	subject,
	achieves,
	exp,
	records,
	descript,
}) {
	const classes = useStyles();
	return (
		// <Card className={classes.root}>
		// <div className={classes.container}>
		// 	<Typography className={classes.title}>Introduction</Typography>
		// 	<List>
		// 		<ListItem>
		// 			<Typography className={classes.typo}>
		// 				✧ <strong>Họ tên:</strong> {name}
		// 			</Typography>
		// 		</ListItem>
		// 		<ListItem>
		// 			<Typography className={classes.typo}>
		// 				✧ <strong>Trường:</strong> {school}
		// 			</Typography>
		// 		</ListItem>
		// 		<ListItem>
		// 			<Typography className={classes.typo}>
		// 				✧ <strong>Tuổi:</strong> {age}
		// 			</Typography>
		// 		</ListItem>
		// 		<ListItem>
		// 			<Typography className={classes.typo}>
		// 				✧ <strong>Môn dạy:</strong> {subject}
		// 			</Typography>
		// 		</ListItem>
		// 		<ListItem>
		// 			<Typography className={classes.typo}>
		// 				✧ <strong>Thành tích:</strong> {achieves}
		// 			</Typography>
		// 		</ListItem>
		// 		<ListItem>
		// 			<Typography className={classes.typo}>
		// 				✧ <strong>Kinh nghiệm giảng dạy:</strong> {exp}
		// 			</Typography>
		// 		</ListItem>
		// 		<ListItem>
		// 			<Typography className={classes.typo}>
		// 				✧ <strong>Số lần nhận mentee:</strong> {records}
		// 			</Typography>
		// 		</ListItem>
		// 		<ListItem>
		// 			<Typography className={classes.typo}>
		// 				✧ <strong>Mô tả bản thân:</strong> {descript}
		// 			</Typography>
		// 		</ListItem>
		// 	</List>
		// </div>
		// 	<Divider classes={{ root: classes.dividerColor }} variant="fullwidth" />
		// 	<div className={classes.avalability}>
		// 		<Typography className={classes.title}>Availability</Typography>
		// 	</div>
		// </Card>
		<Card
			sx={{
				display: 'flex',
				width: '65vw',
				borderRadius: '40px',
				margin: '32px',
				padding: '32px',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					width: '250px',
					height: '100%',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<AssignmentIndIcon sx={{ fontSize: 120 }} />
				<Typography sx={{ fontSize: '1.5rem' }}>Giới thiệu </Typography>
			</Box>
			<Divider
				sx={{ background: '#444', height: '350px', margin: '32px' }}
				variant="full-width"
				orientation="vertical"
			/>
			<div className={classes.container}>
				<List>
					<ListItem>
						<Typography className={classes.typo}>
							✧ <strong>Họ tên:</strong> {name}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography className={classes.typo}>
							✧ <strong>Trường:</strong> {school}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography className={classes.typo}>
							✧ <strong>Tuổi:</strong> {age}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography className={classes.typo}>
							✧ <strong>Môn dạy:</strong> {subject}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography className={classes.typo}>
							✧ <strong>Thành tích:</strong> {achieves}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography className={classes.typo}>
							✧ <strong>Kinh nghiệm giảng dạy:</strong> {exp}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography className={classes.typo}>
							✧ <strong>Số lần nhận mentee:</strong> {records}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography className={classes.typo}>
							✧ <strong>Mô tả bản thân:</strong> {descript}
						</Typography>
					</ListItem>
				</List>
			</div>
		</Card>
	);
}
