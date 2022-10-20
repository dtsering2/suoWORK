import React, {useState} from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function LoginPage () {
    
    const handleLogin = () =>{

    }
    return(
        <div className = "auth__form-container">
            <div className = "auth__form-container_fields">
                <div className = "auth__form-container_fields-content">
                    <p>Sign in</p>
                    <form onSubmit = {handleLogin}>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="username"></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};