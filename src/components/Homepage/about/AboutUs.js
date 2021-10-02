import React from "react";
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
        background: '#FACC5C',
        display: 'flex'
    },
    container: {
        width: '30vw',
        height: '70vh',
        marginLeft: "8vw",
        marginTop: '8vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width: '47vw',
        height: `calc(95vh - ${appBarHeight})`,
        marginLeft: 'auto',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '90px',
		lineHeight: '100px',
	},
    body: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '26px',
        lineHeight: '30px',
    },
    learnMoreButton: {
		backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
        alignSelf: 'center'
	},
}))

const AboutUs = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.root}>
            <div className={classes.container}>
                <Typography className={classes.title} variant='h1'>
                    ABOUT US
                </Typography>
                <Typography className={classes.body} align="justify">
                    “Queb chạy bằng cơm” (QCBC) là một dự án nhỏ 
                    trực thuộc tổ chức lớn 2school Guideline (2SG)
                    - một tổ chức phi lợi nhuận nhằm hướng dẫn, hỗ
                    trợ các em học sinh trong kì thi tuyển sinh vào
                    lớp 10 của Thành phố Hồ Chí Minh...
                </Typography>
                <Button
                    className={classes.learnMoreButton}
                    endIcon={<ArrowForward fontSize="large" />}
                >
                    Learn more
                </Button>
            </div>
            <div className={classes.imageContainer}>
                <Image src='/MascotHp2.svg' width={790} height={800} />
            </div>
        </div>
    );
}
 
export default AboutUs;