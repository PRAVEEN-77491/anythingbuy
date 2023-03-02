import React from 'react'
import './OtpPage.css'
import { Box, Button } from '@mui/material'
import { MuiOtpInput } from 'mui-one-time-password-input'

function OtpPage() {
    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
      setOtp(newValue);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
    } 

  return (
    <div className='otp_page'>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <MuiOtpInput
            name="opt"
            value={otp}
            onChange={handleChange}
            length={4}
            />
            <Button type="submit">Verify</Button>
        </Box>
        
    </div>
  )
}

export default OtpPage