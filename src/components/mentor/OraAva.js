import { Typography } from "@material-ui/core"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    container: {
        marginLeft: 0,
    },
    name: {
        textAlign: "center",
        width: "300px",
        fontFamily: "Mplus 1p",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "21.6px",
        lineHeight: "35px",
        color: "#FCFCFC"
    },
    subject: {
        textAlign: "center",
        width: "300px",
        fontFamily: "Mplus 1p",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "12.6px",
        lineHeight: "26px",
        letterSpacing: "6px",
        textTransform: "uppercase",
        color: "#FCFCFC",
        opacity: 0.5
    }
}) 

const BluAva = ({teacher}) => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <img src="/OraAva.svg" />
            <Typography
                className={classes.name}
                variant="h3"
                color="secondary"
            >{teacher.name}
            </Typography>

            <Typography
                className={classes.subject}
                variant="h3"
                color="secondary"
            >{teacher.subject}
            </Typography>
        </Container>
    )
}

export default BluAva 