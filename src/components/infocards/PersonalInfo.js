import { Card, Typography, Box, Divider, CardContent } from "@mui/material"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const PersonalInfo = () => {
    return ( 
        <Card sx={{
            width: '100%',
            height: '340px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px'
        }}>
            <CardContent sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Box sx={{
                    width: '250px',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <AssignmentIndIcon sx={{fontSize: 120}}/>
                    <Typography sx={{fontSize: '1.5rem'}}>
                        Thông tin cá nhân 
                    </Typography>
                </Box>
                <Divider sx={{background: '#444', height: '350px'}} variant='full-width' orientation='vertical' />
                <Box sx={{
                    width: '500px',
                    height: '100%',
                    marginLeft: '16px',
                    marginTop: '10px',
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <AccessibilityNewRoundedIcon sx={{fontSize: 30, marginRight: '8px' }} /> 
                        17 Tuổi
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <HomeRoundedIcon sx={{fontSize: 30, marginRight: '8px' }} /> 
                        Sống tại Thành Phố Hồ Chí Minh
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <LocationOnIcon sx={{fontSize: 30, marginRight: '8px' }} />
                        Đến từ Thế giới của những nụ cười 
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <PersonPinIcon sx={{fontSize: 30, marginRight: '8px' }} />
                        Mình là một người vô cùng hài hước 
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <MailOutlineRoundedIcon sx={{fontSize: 30, marginRight: '8px' }} />
                        macleduy1803@gmail.com 
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <FacebookRoundedIcon sx={{fontSize: 30, marginRight: '8px' }} />
                            <a href='https://www.facebook.com/MLDuyy'>
                                https://www.facebook.com/MLDuyy
                            </a>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default PersonalInfo;