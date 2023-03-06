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
        <div className='otp_header'>
            <h1>Verify Account</h1>
        </div>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div className='otp_des'>
                <p>An OTP has been sent to your email - "abcd@gmail.com"</p>
            </div>
            <div className='otp_input'>
                <p className="otp_code">Enter one time Code</p>
            <MuiOtpInput
            containerStyle = {{marginTop : "30"}}
            name="opt"
            value={otp}
            onChange={handleChange}
            length={4}
            />
            </div>

            <div className='otp_notRec'>
                <p>Didn't get the code? <a href='#' className='otp_resend'> Resend</a></p>
            </div>

            <div className='otp_button'>
            <Button 
            type="submit"
            variant='contained'
            fullWidth
            style={{backgroundColor:"blue" , color:"white" , borderRadius:20 , width: "30%"}}
            >Verify</Button>
            </div>
        </Box>
        
    </div>
  )
}

export default OtpPage