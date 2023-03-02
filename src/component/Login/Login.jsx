import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import "./Login.css";
import { useState } from "react";
import { useRef } from "react";
import { Button } from "@mui/material";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const emailRef = useRef('');
  const passRef = useRef('');

  const [errors, setErrors] = useState({emailError:"", passError:""})

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(passRef.current.value.length<4){
        setErrors({...errors, passError:"Password must be long"});
    }
    else if( !passRef.current.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/)     ){//passRef.current.value.length === 0){
        setErrors({...errors, passError:"Password must contain a number,special character"});
    }
    else{
    const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    }  
    } 

const showEmailError = () => {
    if(emailRef.current.value.length === 0){
        setErrors({...errors, emailError:"Enter Email"});
    }
    else if( !emailRef.current.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        setErrors({...errors, emailError:"Invalid Format"});
    }
    else{
        setErrors({...errors, emailError:""});
    }
}

const showPasswordError = () => {
    if( passRef.current.value.length === 0){
        setErrors({...errors, passError:"Enter Password"});
    }
    else if(passRef.current.value.length >= 8){
        setErrors({...errors, passError:"Strong Password"});
    }
    else if(passRef.current.value.length <= 4){
        setErrors({...errors, passError:"Easy Password"});
    }
    
    else if(passRef.current.value.length >= 5){
        setErrors({...errors, passError:"Moderate Password"});
    }
}

  return (
    <div className="login">
      <h2 className="login_heading">Login </h2>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} >
        <div className="login_field">
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="Email"
            name="Email"
            autoComplete="Email"
            autoFocus
            error = {errors.emailError}
            helperText={errors.emailError}
            inputRef={emailRef}
            label= 'Email'
            onChange = {showEmailError}
            InputProps={{
              startAdornment: <MailOutlineIcon style={{ color: "gray" , marginRight: "10px" }}/>,
              disableUnderline: false,
            }}
          />

          <TextField
            type={showPassword ? "text" : "password"}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="Password"
            name="Password"
            autoComplete="Password"
            autoFocus
            inputRef={passRef}
            error = {errors.passError === "Enter Password" ? true : false}
            helperText={errors.passError}
            onChange = {showPasswordError}
            InputProps={{
              startAdornment: <KeyOutlinedIcon style={{ color: "gray" , marginRight: "10px" }} />,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    style={{ outline: "none" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: false,
            }}
          />
          <div className="login_forgot_comp">
            <a href="#" className="login_forgot">
              I forgot my password
            </a>
          </div>

          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ outline:"none", borderRadius:20}}
              className="login_button"
            >
              Login
            </Button>

          <div className="login_connection">
            <span> or Sign in with: </span>
          </div>

          <div className="login_connIcons">
            <IconButton className="Icon">
              <GoogleIcon />
            </IconButton>

            <IconButton className="Icon">
              <FacebookIcon />
            </IconButton>

            <IconButton className="Icon">
              <TwitterIcon />
            </IconButton>

          </div>

            <div className="login_signLink">
              <p> New to AnythingBuy?  <a href="#">SignUp</a> </p>
            </div>

        </div>
      </Box>
    </div>
  );
}

export default Login;
