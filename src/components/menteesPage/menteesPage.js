import React from 'react';
import Image from 'next/image'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PersonalInfo from '../infocards/PersonalInfo';
import AcademicInfo from '../infocards/AcademicInfo';

const MenteesPage = () => {
    return ( 
        <Box sx={{
            padding: '10px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'wrap'
        }}>
            <Box sx={{
                width: '90%',
                height: '365px',
                borderRadius: '10px',
                marginTop: '50px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    height: '280px', 
                    width: '100%', 
                }}>
                    {/* Put cover photo down here */}
                    <img style={{
                        objectFit: 'cover', 
                        borderRadius: '10px',
                    }}
                        src="/Cover.jpg" 
                        alt="Cover photo" 
                        width="100%" 
                        height="100%" 
                    />
                </Box>
                <Box sx={{
                    marginTop: '160px', 
                    width: '170px',
                    position: 'absolute',
                    display: 'center',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image 
                        src='/Userprofile.svg'
                        width='168px'
                        height='168px'
                        alt='User Avatar'
                    />
                    <Typography sx={{
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '1.5rem',
                    }}>
                        Name
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                width: '90%',
                borderRadius: '10px',
                marginTop: '20px',
            }}>
                <PersonalInfo />
                <AcademicInfo />
            </Box>
        </Box>
    );
}

export default MenteesPage;