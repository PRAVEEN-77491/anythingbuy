import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPass.css";

function ForgotPass() {

  const [confirm ,setConfirm] = useState(false)

  const handleSubmit= (e)=>{
    e.preventDefault();
    setConfirm(true)

  }

  return (
    <div className="forgotPass">
      <div className="forgotPass_heading">
        <h2> Forgot your Password? </h2>
      </div>

      <div className="forgotPass_des">
        <p>Enter your email address below and we'll get you back on track.</p>
      </div>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          variant="standard"
          autoFocus
          fullWidth
          placeholder="Enter Email address"
          type="email"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ outline: "none", borderRadius: 20 }}
        >
          SEND
        </Button>
        
        <div className="forgotPass_Confirmation_message">
          {confirm && <p> Password has been sent on your email</p>}
        </div>

        <div className="forgotPass_back">
          <p> Back to <Link to="/">Login</Link> </p>
        </div>
      </Box>
    </div>
  );
}

export default ForgotPass;
