<<<<<<< HEAD
import React from "react"
import BluAva from "./BluAva"
import OraAva from "./OraAva"
import { Typography, makeStyles, Grid, Button } from "@material-ui/core"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
=======
import React from 'react';
import BluAva from './BluAva';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
>>>>>>> b568b4994a7fde6d0d51590cbcf627df67999801

const buttonWidth = '210px';
const buttonHeight = '50px';
const bluTeachers = [
	{
		name: 'Duy',
		subject: 'Queb',
		id: 1,
	},
	{
		name: 'Khang',
		subject: 'Chạy',
		id: 2,
	},
	{
		name: 'Khoa',
		subject: 'Bằng',
		id: 3,
	},
];

const oraTeachers = [
	{
		name: 'Nghi',
		subject: 'Cơm',
		id: 4,
	},
	{
		name: 'Quyên',
		subject: 'Ngầu',
		id: 5,
	},
	{
		name: 'Khoa',
		subject: 'Quá',
		id: 6,
	},
];

const useStyles = makeStyles((theme) => ({
<<<<<<< HEAD
    grid: {
        position: "absolute",
        top: "-160px",
        marginLeft: "10vw"
    },
    bottomrow: {
        marginTop: theme.spacing(5),
    },
    topcolor: {
        display: "block",
        background: theme.palette.secondary.main,
        width: "100%",
        height: "30vh",
        position: "absolute",
        top: "790px",
    },
    bottomcolor: {
        background: theme.palette.themeBrown.main,
        position: "absolute",
        top: "calc(790px + 30vh)",
        width: "100vw",
        height: "80vh"

    },
    title: {
        marginLeft: "18vw",
        marginTop: "50px",
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "40px",
        lineHeight: "130%",
        color: "#212353",
    },
    learnMoreButton: {
		backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		boxShadow: '0px 2px 2px rgba(75, 93, 104, 0.1)',
		transition: 'box-shadow 200ms ease',
		'&:hover': {
			boxShadow: '0px 5px 5px rgba(75, 93, 104, 0.1)',
			backgroundColor: theme.palette.themeGreen.main,
		},
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
    },
    buttonContainer: {
        display: "flex",
        marginLeft: "10vw",
        justifyContent: "center",
        marginTop: "70vh"
    }
}))

const Mentor = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.topcolor}>
                <Typography
                    className={classes.title}
                    variant="h1"
                > 
                    Mentor
                </Typography>
            </div>

            <div className={classes.bottomcolor}>          
                <Grid container space={8} justifyContent="center" className={classes.grid}>
                    {bluTeachers.map(teacher => (
                        <Grid item key={teacher.id} xs={12} sm={6} md={4}>
                            <BluAva teacher={{
                                name: teacher.name,
                                subject: teacher.subject
                            }} />    
                        </Grid>
                    ))}           

                    {oraTeachers.map(teacher => (
                        <Grid item key={teacher.id} xs={12} sm={6} md={4}
                            className={classes.bottomrow}
                        >
                            <OraAva teacher={{
                                name: teacher.name,
                                subject: teacher.subject
                            }} />    
                        </Grid>
                    ))}     
                </Grid>
                <div className={classes.buttonContainer}>           
                    <Button endIcon={<ArrowForwardIcon />} className={classes.learnMoreButton}>
                        Learn more
                    </Button>           
                </div>
            </div>
        </div>
    )
}

export default Mentor
=======
	bottomrow: {
		background: theme.palette.themeBrown.main,
	},
	topcolor: {
		background: theme.palette.secondary.main,
		width: '100%',
		height: '30vh',
		display: 'flex',
		alignItems: 'center',
	},
	bottomcolor: {
		background: theme.palette.themeBrown.main,
		width: '100vw',
		height: '75vh',
	},
	title: {
		fontFamily: 'Abel',
		fontSize: '4rem',
		lineHeight: '130%',
		color: '#212353',
		marginLeft: '6vw',
	},
}));

const Mentor = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.topcolor}>
				<Typography className={classes.title} variant="h1">
					Mentor
				</Typography>
			</div>
			<div className={classes.bottomcolor}>
				<Grid
					container
					justifyContent="center"
					style={{ marginLeft: '-3.25vw' }}
				>
					{bluTeachers.map((teacher) => (
						<Grid item key={teacher.id} xs={12} sm={6} md={4}>
							<BluAva
								teacher={{
									name: teacher.name,
									subject: teacher.subject,
								}}
								isBlue
							/>
						</Grid>
					))}
					{oraTeachers.map((teacher) => (
						<Grid
							item
							key={teacher.id}
							xs={12}
							sm={6}
							md={4}
							className={classes.bottomrow}
						>
							<BluAva
								teacher={{
									name: teacher.name,
									subject: teacher.subject,
								}}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default Mentor;
>>>>>>> b568b4994a7fde6d0d51590cbcf627df67999801
