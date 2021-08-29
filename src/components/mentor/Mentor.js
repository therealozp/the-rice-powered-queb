import React from "react"
import BluAva from "./BluAva"
import OraAva from "./OraAva"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Grid } from "@material-ui/core"

const bluTeachers = [
    {
        name: "Duy",
        subject: "Queb",
        id: 1
    },
    {
        name: "Khang",
        subject: "Chạy",
        id: 2
    },
    {
        name: "Khoa",
        subject: "Bằng",
        id: 3
    }
]

const oraTeachers = [
    {
        name: "Nghi",
        subject: "Cơm",
        id: 4
    },
    {
        name: "Quyên",
        subject: "Ngầu",
        id: 5
    },
    {
        name: "Khoa",
        subject: "Quá",
        id: 6
    }
]

const useStyles = makeStyles((theme) => ({
    grid: {
        position: "absolute",
        top: "115vh",
        marginLeft: "10vw"
    },
    bottomrow: {
        background: theme.palette.themeBrown.main,
        marginTop: "100px",
        paddingLeft: 0
    },
    topcolor: {
        background: theme.palette.secondary.main,
        width: "100%",
        height: "30vh",
        position: "absolute",
        top: "780px",
        display: "block"
    },
    bottomcolor: {
        background: theme.palette.themeBrown.main,
        width: "100vw",
        height: "75vh",
    },
    title: {
        position: "absolute",
        left: "290px",
        marginBottom: "20px",
        top: "862px",
        fontFamily: "Abel",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "40px",
        lineHeight: "130%",
        color: "#212353"
    }
}))

const Mentor = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.topcolor}></div>
            <div className={classes.bottomcolor}></div>
            <Typography
                className={classes.title}
                variant="h1"
            >
                Mentor
            </Typography>

            <Grid container className={classes.grid}>
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

        </div>
    )
}

export default Mentor