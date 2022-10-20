import React, {useState} from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function SignUpPage ({navigateToLoginPage}) {
    
    const handleSignUp = () =>{

    }
    const handleChange = () => {

    }
    return(
        <div className = "auth__form-container">
            <div className = "auth__form-container_fields">
                <div className = "auth__form-container_fields-content">
                    <p>Sign in</p>
                    <form onSubmit = {handleSignUp}>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                name = "fullName"
                                type = "text"
                                placeholder="Full Name"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                            <input
                                name = "username"
                                type = "text"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                name = "phoneNumber"
                                type = "text"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="avatarURL">Avatar URL</label>
                            <input
                                name = "avatarURL"
                                type = "text"
                                placeholder="Avatar URL"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                name = "password"
                                type = "password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                name = "confirmPassword"
                                type = "password"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                    </form>
                    <div className="">
                        <p>
                            Already have an account?
                        </p>
                        <span onClick = {navigateToLoginPage}>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};