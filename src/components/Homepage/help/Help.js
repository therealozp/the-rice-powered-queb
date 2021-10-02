import React from 'react'
import { Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowForward } from "@mui/icons-material";
import Image from "next/image"

const buttonWidth = '220px';
const buttonHeight = '60px';
const appBarHeight = '65px';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: `calc(100vh - ${appBarHeight})`,
        background: theme.palette.themeGreen.main,
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        width: '40vw',
        height: '60vh',
        marginLeft: "8vw",
        marginTop: '2vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageContainer: {
        height: '95vh',
        width: '40vw',
        marginLeft: '5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '90px',
		lineHeight: '100px',
        alignSelf: 'center'
	},
    body: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '26px',
        lineHeight: '30px',
    },
    learnMoreButton: {
		backgroundColor: '#FACC5C',
		color: '#FFFFFF',
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
        alignSelf: 'center'
	},
}))

const Help = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.root}>
            <div className={classes.imageContainer}>
                <Image src='/MascotHp3.svg' width={620} height={740} />
            </div>
            <div className={classes.container}>
                <Typography className={classes.title} variant='h1'>
                    HELP
                </Typography>
                <Typography className={classes.body} align="justify">
                    Khi truy cập vào “Queb chạy bằng cơm”, để có trải nghiệm
                    tốt nhất, bạn có thể tham khảo các bước thực hiện theo hướng dẫn...
                </Typography>
                <Button
                    className={classes.learnMoreButton}
                    endIcon={<ArrowForward fontSize="large" />}
                >
                    Learn more
                </Button>
            </div>
            
        </div>
    );
}
 
export default Help;