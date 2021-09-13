import React from "react"
import Image from "next/image"
import { Button, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const buttonWidth = '210px';
const buttonHeight = '60px';

const useStyles = makeStyles(theme => ({
    container: {
        position: "relative",
        marginTop: "50px",
        marginLeft: "8vw"
    },
    learnMoreButton: {
        backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
        position: "absolute",
        top: 300,
        left: 115
    }
}))

const FeatureOra = ({ isBlue }) => {
    const classes = useStyles()
    
    return (
        <div className={classes.container}>
            {isBlue ? (
                <Image src="/FeatureBlu.svg" width={440} height={360} />
            ) : (
                <Image src="/FeatureOra.svg" width={440} height={360} />
            ) }

            {isBlue ? (
                <Button 
                    disableElevation
                    className={classes.learnMoreButton}
                    endIcon={<ArrowForwardIcon />}
                >
                    Learn more
                </Button>
            ) : (
                <Button 
                    disableElevation
                    className={classes.learnMoreButton}
                    endIcon={<ArrowForwardIcon />}
                    style={{backgroundColor: '#FACC5C'}}
                >
                    Learn more
                </Button>
            ) }
        </div>
    );
}

export default FeatureOra;