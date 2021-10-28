import React from 'react';
import MentorCard from '../components/cards/MentorCard';
import IndivMentorInfo from '../components/cards/IndivMentorInfo';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#FED7A6',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
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
				<MentorCard
					subject="Toán"
					name="Mạc Lê Mao"
					about="Lê Duy hài hước"
					isMentorPage
				/>
			</div>
			<div>
				<IndivMentorInfo
					name="Mạc Lê Mao"
					school="Institution of Laughter"
					age="17"
					subject="Funniness"
					achieves="Stand-up comedy"
					exp="5 years of making people laugh"
					records="soon"
					descript="will make everyone laugh within the proximity"
				/>
			</div>
		</div>
	);
};
export default IndividualMentorPage;
