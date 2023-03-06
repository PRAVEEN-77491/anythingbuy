import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './SignUp.css'
import { Button, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useRef } from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import { useGoogleLogin } from '@react-oauth/google';
function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef('');
    const passRef = useRef('');
    const firstNameRef =useRef('');
    const lastNameRef = useRef('');

    const [errors, setErrors] = useState({ emailError: "", passError: ""  ,firstNameError:'' , lastNameError:''})

    const handlePassword = () =>
        setShowPassword(!showPassword);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (passRef.current.value.length < 4) {
            setErrors({ ...errors, passError: "Password must be long" });
        }
        else if (!passRef.current.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/)) {//passRef.current.value.length === 0){
            setErrors({ ...errors, passError: "Password must contain a number,special character" });
        }
        else {
            const data = new FormData(event.currentTarget);
            console.log({
                firstname: data.get('firstName'),
                lastname: data.get('lastName'),
                email: data.get('email'),
                password: data.get('password'),
            });
        }
    }

    const showFirstNameError = () => {
        console.log("hello")
        if (firstNameRef.current.value.length === 0) {
            setErrors({ ...errors, firstNameError: "Enter FirstName" });
        }
    }

    const showLastNameError = () => {
        if (lastNameRef.current.value.length === 0) {
            setErrors({ ...errors, lastNameError: "Enter LastName" });
        }
    }

    const showEmailError = () => {

        if (emailRef.current.value.length === 0) {
            setErrors({ ...errors, emailError: "Enter Email" });
        }
        else if (!emailRef.current.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setErrors({ ...errors, emailError: "Invalid Format" });
        }
        else {
            setErrors({ ...errors, emailError: "" });
        }
    }

    const showPasswordError = () => {
        if (passRef.current.value.length === 0) {
            setErrors({ ...errors, passError: "Enter Password" });
        }
        else if (passRef.current.value.length >= 8) {
            setErrors({ ...errors, passError: "Strong Password" });
        }
        else if (passRef.current.value.length <= 4) {
            setErrors({ ...errors, passError: "Easy Password" });
        }

        else if (passRef.current.value.length >= 5) {
            setErrors({ ...errors, passError: "Moderate Password" });
        }
    }

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
    

    return (
        <div className='signUp'>
            <div className='signUp_heading'>
                <h2>SignUp</h2>
            </div>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <div className='signUp_name'>
                    <TextField
                        variant='standard'
                        margin='normal'
                        required
                        autoFocus
                        id='firstName'
                        name='firstName'
                        error={errors.firstNameError.length === 0 ? false : true}
                        helperText={errors.firstNameError}
                        label="First Name"
                        onChange={showFirstNameError}
                        InputProps={{
                            className: "signUp_Fname"
                        }}
                    />
                    <TextField
                        variant='standard'
                        margin='normal'
                        required
                        id='lastName'
                        name='lastName'
                        error={errors.lastNameError.length === 0 ? false : true}
                        helperText={errors.lastNameError}
                        label="Last Name"
                        onChange={showLastNameError}
                        InputProps={{
                            className: "signUp_Lname"
                        }}
                    />
                </div>
                <div className='signUp_form'>
                    <TextField
                        variant='standard'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        name='email'
                        error={errors.emailError.length === 0 ? false : true}
                        helperText={errors.emailError}
                        inputRef={emailRef}
                        label='Email'

                        InputProps={{
                            startAdornment: <EmailOutlinedIcon className='signUp_emailIcon' style={{ fontSize: 18 }} />
                        }}
                        onChange={showEmailError}
                    />
                    <TextField
                        type={showPassword ? "text" : "password"}
                        variant='standard'
                        label='Password'
                        inputRef={passRef}
                        error={errors.passError === "Enter Password" ? true : false}
                        helperText={errors.passError}
                        id='password'
                        name='password'
                        margin='normal'
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: <KeyOutlinedIcon className='signUp_emailIcon' style={{ fontSize: 18 }} />,
                            endAdornment: (
                                <InputAdornment position='end' >
                                    <IconButton onClick={handlePassword} style={{ outline: "none" }} >
                                        {
                                            showPassword ? <VisibilityOff className='signUp_emailIcon' style={{ fontSize: 18, marginLeft: "7" }} />
                                                : <Visibility className='signUp_emailIcon' style={{ fontSize: 18, marginLeft: "7" }} />
                                        }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        onChange={showPasswordError}
                    />

                    <MuiPhoneNumber defaultCountry={'in'} className="phoneNumber" style={{ outline: "none", marginTop: "15px", marginBottom: "5px" }} />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={(!errors.emailError && !errors.passError && !errors.firstname ) ? false : true}
                        sx={{ mt: 5, mb: 2 }}
                        style={{ outline: "none", borderRadius: 20 }}
                        className="signUp_button"
                    >
                        SignUp
                    </Button>
                </div>
                <h3 className='signUp_detail'>or signup using app you love:</h3>
                <div className='signUp_apps'>
                    <IconButton style={{ outline: "none" }} onClick={() => login()}>
                        <GoogleIcon className='signUp_appIcon' />
                    </IconButton>
                    <IconButton style={{ outline: "none" }}>
                        <FacebookIcon className='signUp_appIcon' />
                    </IconButton>
                    <IconButton style={{ outline: "none" }}>
                        <LinkedInIcon className='signUp_appIcon' />
                    </IconButton>
                </div>
            </Box>
            
        </div>
    )
}


export default SignUp;