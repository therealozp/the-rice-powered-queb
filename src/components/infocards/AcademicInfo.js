import { Card, Typography, Box, Divider, CardContent } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FeedIcon from '@mui/icons-material/Feed';

const AcademicInfo = () => {
    return ( 
        <Card sx={{
            marginTop: '20px',
            width: '100%',
            height: '300px',
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
                    <SchoolIcon sx={{fontSize: 120}}/>
                    <Typography sx={{fontSize: '1.5rem'}}>
                        Trình độ học vấn
                    </Typography>
                </Box>
                <Divider sx={{background: '#444', height: '310px'}} variant='full-width' orientation='vertical' />
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
                        <AccountBalanceIcon sx={{fontSize: 30, marginRight: '8px' }} /> 
                        Trường Tiếng cười và niềm hạnh phúc
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <MenuBookIcon sx={{fontSize: 30, marginRight: '8px' }} /> 
                        Môn hài hước
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <EmojiEventsIcon sx={{fontSize: 30, marginRight: '8px' }} />
                        Năm năm làm cho các bạn trong lớp và bạn bè cười
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <FeedIcon sx={{fontSize: 30, marginRight: '8px' }} />
                        Đã đào tạo thành công 1 chúa hề
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                    }}>
                        <PeopleIcon sx={{fontSize: 30, marginRight: '8px' }} />
                            Đã nhận dạy 2 chúa hề mới
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default AcademicInfo;