import React from 'react';
import Image from 'next/image';
import { Button, Typography, Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowForward } from '@mui/icons-material';
import { Box } from '@mui/system';

const buttonWidth = '210px';
const buttonHeight = '60px';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	learnMoreButton: {
		color: '#FFFFFF',
		textTransform: 'none',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
	},
	title: {
		fontFamily: 'Raleway',
		fontWeight: '800',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#33150B',
		marginBottom: '8px',
	},
}));

const RoundedContainer = ({ children, isGreen }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				display: 'flex',
				background: isGreen
					? (theme) => theme.palette.themeGreen.main
					: (theme) => theme.palette.secondary.main,
				width: '400px',
				height: '350px',
				borderRadius: '20px 50px 50px 0',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				marginLeft: '80px',
				'&:before': {
					content: '""',
					display: 'block',
					bottom: 0,
					top: 0,
					left: -33,
					width: '80px',
					height: '350px',
					position: 'absolute',
					transform: 'skew(-10deg)',
					background: isGreen
						? (theme) => theme.palette.themeGreen.main
						: (theme) => theme.palette.secondary.main,
					borderRadius: '20px 0 0 50px',
					zIndex: -1,
				},
			}}
		>
			{children}
		</Box>
	);
};

const FeatureOra = ({ order, title, src }) => {
	const classes = useStyles();

	return (
		<>
			{order % 2 == 1 ? (
				<RoundedContainer isGreen>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Typography className={classes.title}>{title}</Typography>
						<Box sx={{ margin: '16px 0' }}>
							<Image
								src={src}
								width={150}
								height={150}
								alt="interesting people sprite"
							/>
						</Box>
						<Button
							disableElevation
							className={classes.learnMoreButton}
							endIcon={<ArrowForward />}
						>
							Learn more
						</Button>
					</Box>
				</RoundedContainer>
			) : (
				<RoundedContainer>
					<Typography className={classes.title}>{title}</Typography>
					<Box sx={{ margin: '16px 0' }}>
						<Image
							src={src}
							width={150}
							height={150}
							alt="interesting people sprite"
						/>
					</Box>

					<Button
						disableElevation
						color="secondary"
						className={classes.learnMoreButton}
						endIcon={<ArrowForward />}
					>
						Learn more
					</Button>
				</RoundedContainer>
			)}
		</>
	);
};

export default FeatureOra;
