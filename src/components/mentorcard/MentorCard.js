import { Card, CardMedia, CardContent, Typography, makeStyles, Button } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck'
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const buttonWidth = '210px';
const buttonHeight = '70px';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '100px',
        marginLeft: '200px',
        borderRadius: '40px',
        width: '75vw',
        height: '380px',
        minHeight: '380px',
        backgroundColor: "white",
        display: "flex"
    },
    header: {
        width: '18vw',
        height: "380px",
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: '220px',
        height: '220px'
    },
    subject: {
    },
    info: {
        fontFamily: 'Abel',
        fontStyle: 'normaL',
        fontWeight: 'normal',
        marginTop: "20px",
        width: '35vw',
    },
    name: {

    },
    description: {

    },
    divider: {
        width: "2px",
        height: '320px',
        backgroundColor: '#333',
        margin: "30px 0"
    },
    info2: {
        width: '22vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    price: {
        
    },
    rating: {
        alignSelf: 'flex-start',
        margin: '50px 0'
    },
    records: {
        alignSelf: 'flex-start'
    },
    learnMoreButton: {
        backgroundColor: theme.palette.themeGreen.main,
		color: '#FFFFFF',
		textTransform: 'capitalize',
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: 100,
		fontSize: '1em',
        marginTop: "70px"
    }
}))

const MentorCard = ({ subject, name, about }) => {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <div className={classes.header}> 
                    <CardMedia 
                        className={classes.avatar}
                        image='OraAva.svg'
                        title='mentor avatar'
                    />
                    <CardContent>
                        <Typography
                            className={classes.subject}
                            variant='h2'
                        > Toán 
                        </Typography>
                    </CardContent>
                </div>
                    <CardContent className={classes.info}>
                        <Typography
                            className={classes.name}
                            variant='h3'
                        > Mạc Lê Duy
                        </Typography>
                        <Typography
                            className={classes.description}
                            variant='h4'
                        > About me:
                        </Typography>
                    </CardContent>
                    <div className={classes.divider}></div>
                    <CardContent className={classes.info2}>
                        <Typography
                            className={classes.price}
                            variant='h4'
                            gutterBottom
                        > 50.000/hour 
                        </Typography>
                        <Typography
                            className={classes.rating}
                            variant='h4'
                        > <FavoriteIcon fontSize='large' /> RATING 
                        </Typography>
                        <Typography
                            className={classes.records}
                            variant='h4'
                        > <PlaylistAddCheckIcon fontSize='large' /> RECORDS 
                        </Typography>
                        <Button 
                            className={classes.learnMoreButton}
                            endIcon={<ArrowForwardIcon />}
                        >
                            Learn more
                        </Button>
                    </CardContent>
            </Card>
        </div>
    );
}
 
export default MentorCard;