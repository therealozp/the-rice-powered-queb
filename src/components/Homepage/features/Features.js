import React from 'react';
import Feature from './Feature';
import { Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '90px',
		lineHeight: '100px',
		marginTop: '8vh',
		marginLeft: '8vw',
	},
}));

const listFeatures = [
	{
		id: 1,
		order: 1,
		title: 'ÔN TẬP KIỂM TRA HỌC KỲ',
		src: '/Fea1.svg',
	},
	{
		id: 2,
		order: 2,
		title: 'ĐỊNH HƯỚNG ÔN THI',
		src: '/Fea2.svg',
	},
	{
		id: 3,
		order: 3,
		title: 'SỬA VĂN',
		src: '/Fea3.svg',
	},
	{
		id: 4,
		order: 4,
		title: 'SỬA LUẬN',
		src: '/Fea4.svg',
	},
];

const Features = () => {
	const classes = useStyles();
	return (
		<div>
			<Typography className={classes.title} variant="h1">
				FEATURES
			</Typography>
			<Box
				sx={{
					display: 'grid',
					width: '100vw',
					padding: 4,
					gridTemplateColumns: { xs: '100%', lg: '50% 50%' },
				}}
			>
				{listFeatures.map((feature, i) => (
					<Box
						key={`feature-${i + 1}`}
						sx={{ display: 'flex', justifyContent: 'center', margin: '32px' }}
					>
						<Feature
							order={feature.order}
							title={feature.title}
							src={feature.src}
						/>
					</Box>
				))}
			</Box>
		</div>
	);
};

export default Features;
