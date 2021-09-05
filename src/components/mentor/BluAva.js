<<<<<<< HEAD
import { Typography } from "@material-ui/core"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import Image from "next/image"
=======
import { Typography, Container, makeStyles, Avatar } from '@material-ui/core';
>>>>>>> b568b4994a7fde6d0d51590cbcf627df67999801

const useStyles = makeStyles({
	container: {
		marginLeft: 0,
	},
	name: {
		textAlign: 'center',
		width: '300px',
		fontWeight: '800',
		fontSize: '21.6px',
		lineHeight: '35px',
		color: '#FCFCFC',
	},
	subject: {
		textAlign: 'center',
		width: '300px',
		fontFamily: 'Mplus 1p',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '12.6px',
		lineHeight: '26px',
		letterSpacing: '6px',
		textTransform: 'uppercase',
		color: '#FCFCFC',
		opacity: 0.5,
	},
});

<<<<<<< HEAD
const BluAva = ({teacher}) => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Image width={299} height={262} src="/BluAva.svg" />
            <Typography
                className={classes.name}
                variant="h3"
                color="secondary"
            >{teacher.name}
            </Typography>
=======
const BluAva = ({ teacher, isBlue }) => {
	const classes = useStyles();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginBottom: '10vh',
			}}
		>
			{isBlue ? (
				<Avatar src="/BluAva.svg" style={{ height: '30vh', width: '30vh' }} />
			) : (
				<Avatar src="/OraAva.svg" style={{ height: '30vh', width: '30vh' }} />
			)}
>>>>>>> b568b4994a7fde6d0d51590cbcf627df67999801

			<Typography className={classes.name} variant="h3" color="secondary">
				{teacher.name}
			</Typography>

			<Typography className={classes.subject} variant="h3" color="secondary">
				{teacher.subject}
			</Typography>
		</div>
	);
};

export default BluAva;
