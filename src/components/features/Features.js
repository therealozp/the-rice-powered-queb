import React from "react"
import Feature from "./Feature"
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
		fontFamily: 'Abel',
		fontSize: '4rem',
		lineHeight: '130%',
		color: '#212353',
		marginLeft: '6vw',
        marginTop: '7vh'
	}
}))

const listFeatures = [
    {
        id: 1,
        isBlue: true
    },
    {
        id: 2,
        isBlue: null
    },
    {
        id: 3,
        isBlue: null
    },
    {
        id: 4,
        isBlue: true
    },
]

const Features = () => {
    const classes = useStyles()
    return (
        <div>
            <Typography className={classes.title} variant="h1">
					Features
            </Typography>
            <Grid
                container
                justifyContent="center"
            >
                {listFeatures.map(feature => (
                    <Grid item xs={12} sm={6} md={6} >
                        <Feature key={feature.id} isBlue={feature.isBlue} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
 
export default Features;