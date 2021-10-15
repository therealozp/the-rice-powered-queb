import React from 'react';
import Feature from './Feature';
import { Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '4rem',
		lineHeight: '100px',
		marginTop: "8vh",
		marginLeft: "8vw"
	},
}));

const listFeatures = [
	{
		id: 1,
		order: 1,
		title: "ÔN TẬP KIỂM TRA HỌC KỲ",
		src: "/Fea1.svg"
	},
	{
		id: 2,
		order: 2,
		title: "ĐỊNH HƯỚNG ÔN THI",
		src: "/Fea2.svg"
	},
	{
		id: 3,
		order: 3,
		title: "SỬA VĂN",
		src: "/Fea3.svg"
	},
	{
		id: 4,
		order: 4,
		title: "SỬA LUẬN",
		src: "/Fea4.svg"
	},
];

const Features = () => {
	const classes = useStyles();
	return (
		<div>
			<Typography className={classes.title} variant="h1">
				FEATURES
			</Typography>
			<Grid container justifyContent="flex-start">
				{listFeatures.map((feature, i) => (
					<Grid item xs={12} sm={6} md={6} key={`feature-${i + 1}`}>
						<Feature 
							key={feature.id} 
							order={feature.order} 
							title={feature.title} 
							src={feature.src}
							/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Features;
