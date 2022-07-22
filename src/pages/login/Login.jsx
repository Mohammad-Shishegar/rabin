import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { AccountBox, Email, Warning } from "@mui/icons-material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./loginStyle.scss"

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const checkEmail = (event) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))
            setValues({ ...values, email: event.target.value });
        else
            setValues({ ...values, email: "" });
        
    }

    const handleDisable = () => {
        if((values.password.length > 8 || values.password.length === 8) && values.email && values.lastName && values.name)
            return false
        else
            return true
    }

    return (
        <div className="login">
            <div className="title-text">
                <p className="text">start for free</p>
                <p className="title">Create new account <span className="circle"></span></p>
                <p>Already A Member? <span>Log in</span></p>
            </div>
            <div className="input">
                <div className="name">
                    <FormControl sx={{ m: 1, width: '25ch', backgroundColor: " #4d4d4d", color: "#d9d9d9", borderRadius: "10px" , marginLeft:"0"}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-name" sx={{ color: "#d9d9d9", borderRadius: "10px" }}>Name</InputLabel>
                        <OutlinedInput
                            type="text"
                            value={values.name}
                            onChange={handleChange('name')}
                            sx={{ borderRadius: "10px", color: "#d9d9d9" }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <AccountBox sx={{ color: "#d9d9d9" }} />
                                </InputAdornment>
                            }
                            label="name"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch', backgroundColor: " #4d4d4d", color: "#d9d9d9", borderRadius: "10px" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-lastName" sx={{ color: "#d9d9d9", borderRadius: "10px" }}>Last name</InputLabel>
                        <OutlinedInput
                            type={'text'}
                            value={values.lastName}
                            onChange={handleChange('lastName')}
                            sx={{ borderRadius: "10px", color: "#d9d9d9" }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <AccountBox sx={{ color: "#d9d9d9" }} />
                                </InputAdornment>
                            }
                            label="last name"
                        />
                    </FormControl>
                </div>
                <div className="email-pass">
                    <FormControl sx={{ m: 1, maxWidth: '450px', backgroundColor: " #4d4d4d", color: "#d9d9d9", borderRadius: "10px" , marginLeft:"0"}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-email" sx={{ color: "#d9d9d9", borderRadius: "10px" }}>Email</InputLabel>
                        <OutlinedInput
                            type={"email"}
                            sx={{ borderRadius: "10px", color: "#d9d9d9" }}
                            onChange={(e)=>checkEmail(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Email sx={{ color: "#d9d9d9" }} />
                                </InputAdornment>
                            }
                            label="email"
                        />
                    </FormControl>
                    <p className="warning" style={values.email ? {display:"none"} : null} > <Warning sx={{ marginRight: "10px" }} /> Please insert correct email format</p>
                    <FormControl sx={{ m: 1, maxWidth: '450px', backgroundColor: " #4d4d4d", color: "#d9d9d9", borderRadius: "10px" , marginTop:"10px" ,  marginLeft:"0"}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" sx={{ color: "#d9d9d9", borderRadius: "10px" }}>Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            sx={{ borderRadius: "10px", color: "#d9d9d9" }}
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff sx={{ color: "#d9d9d9" }} /> : <Visibility sx={{ color: "#d9d9d9" }} />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <p className="warning" style={values.password.length === 8 || values.password.length > 8 ? {display:"none"} : null}> <Warning sx={{ marginRight: "10px" }} /> The password must be at least 8 characters long</p>
                </div>
            </div>
            <div className="btns">
                <button>Chanege method</button>
                <button disabled = {handleDisable()} >Create Account</button>
            </div>
        </div>
    )
}

export default Login