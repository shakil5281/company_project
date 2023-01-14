import React from 'react'
import { Avatar, Box, Button } from '@mui/material'
import {  deepPurple } from '@mui/material/colors';

const Profile = () => {
  return (
    <>
        <Box component='div'>
            <Button>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    S
                </Avatar>
            </Button>
        </Box>
    </>
  )
}

export default Profile