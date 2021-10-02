import { Card, Typography, Divider } from '@mui/material';
import Image from 'next/image';
import { Favorite, PlaylistAddCheck } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '40px',
		width: '90vw',
		backgroundColor: 'white',
		display: 'flex',
        justifyContent: 'center',
		margin: '32px 0',
	},
    title: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '70px',
        lineHeight: '106px',
        color: '#33150B',
    },
	container: {
		width: '80vw',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	typo: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '35px',
        lineHeight: '160%',
    },
    avalability: {
        height: '50vh'
    }
}));

export default function IndivMentorInfo({ 
    name, 
    school, 
    age, 
    subject, 
    achieves, 
    exp, 
    records, 
    descript
}) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<div className={classes.container}>
				<Typography className={classes.title}>INTRODUCTION</Typography>
                <br />
                <Typography className={classes.typo}>✧ Họ tên: {name}</Typography>
                <br />
                <Typography className={classes.typo}>✧ Trường: {school}</Typography>
                <br />
                <Typography className={classes.typo}>✧ Tuổi: {age}</Typography>
                <br />
                <Typography className={classes.typo}>✧ Môn dạy: {subject}</Typography>
                <br />
                <Typography className={classes.typo}>✧ Thành tích: {achieves}</Typography>
                <br />
                <Typography className={classes.typo}>✧ Kinh nghiệm giảng dạy: {exp}</Typography>
                <br />
                <Typography className={classes.typo}>✧ Số lần nhận mentee: {records}</Typography>
                <br />
                <Typography className={classes.typo}>✧ Mô tả bản thân: {descript}</Typography>
                <br />
                <br />
                <br />
                <Typography className={classes.title}>AVAILABILITY</Typography>
                <div className={classes.avalability}></div>
			</div>
		</Card>
	);
}
