import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import FeedbackIcon from '@mui/icons-material/Feedback';

const useStyles = makeStyles((theme) => ({
	commonTypo: {
		width: '80%',
		fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '40px',
        lineHeight: '50px',
	},
	heading: {
		fontSize: '4rem',
		fontFamily: 'Abel, Helvetica, Roboto',
		fontWeight: 'bold',
		margin: '16px 10vw ',
	},
	customImage: {
        marginLeft: '20px'
	}
}));

const ContactPage = () => {
	const classes = useStyles();
	return (
		<div>
			<Typography className={classes.heading}>Contact</Typography>
			<Container>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: 64,
                        marginBottom: '0'
					}}
				>
					<Typography className={classes.commonTypo}>
						<MailOutlineIcon fontSize='large'/> Email: 2schoolguideline@gmail.com
					</Typography>
					<br />
					<Typography className={classes.commonTypo}>
						<FacebookIcon fontSize='large'/> Fanpage Facebook: <a href='https://www.facebook.com/2schoolguideline'> 2School Guideline</a>
					</Typography>
					<br />
					<Typography className={classes.commonTypo}>
						<FeedbackIcon fontSize='large'/> <a>Form Feedback</a>
					</Typography>
					<br />
					<br />
				</div>
			</Container>
            <div className={classes.customImage}>
				<Image
					src="/ContactImg.svg"
					alt="garden"
					width="800px"
					height="670px"
				/>
			</div>
		</div>
	);
};

export default ContactPage;