import React from "react"
import Image from "next/image"
import { makeStyles, Button } from "@material-ui/core"
import ArrowForwardIcon from "@material-ui/icons"

const buttonWidth = "210px"
const buttonHeight = "60px"

const useStyles = makeStyles(theme => ({
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
    }
}))

const Feature = () => {
    const classes = useStyles()
    return (
        <div>
            <Image width={434} height={358} src="/FeaBlue.svg" />
            <Button endIcon={<ArrowForwardIcon />} className={classes.learnMoreButton}>
                Learn more
            </Button> 
        </div>
    )    
}

export default Feature