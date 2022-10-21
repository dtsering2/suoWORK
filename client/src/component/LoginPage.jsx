import React, {useState} from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function LoginPage () {
    const cookies = new Cookies()
    const initialStateLoginCredentials = {
        username: '',
        password: ''
    }

    const [loginCredentials, setLoginCredentials] = useState(initialStateLoginCredentials)
    const handleLoginCredentials = (e) =>{
        setLoginCredentials({...loginCredentials, [e.target.name]: e.target.value});
        console.log(loginCredentials)
    }
    const handleLoginSubmit = async (e) =>{
        e.preventDefault()
        const { fullName, username, password, phoneNumber, avatarURL} = signUpCredentials
        const URL = 'http://http://localhost:8000/' ;

        const { data: {token, userId, hashedPassword} } = await axios.post(`${URL}/login`, {
            username, password, fullName, phoneNumber, avatarURL
        })

        cookies.set('token', token);
        cookies.set('username', token);
        cookies.set('fullName', token);
        cookies.set('userId', userId);

        window.location.reload();
    }
    return(
        <div className = "auth__form-container">
            <div className = "auth__form-container_fields">
                <div className = "auth__form-container_fields-content">
                    <p>Sign in</p>
                    <form onSubmit = {handleLoginSubmit}>
                    <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                            <input
                                name = "username"
                                type = "text"
                                placeholder="Username"
                                onChange={handleLoginCredentials}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                name = "password"
                                type = "password"
                                placeholder="Password"
                                onChange={handleLoginCredentials}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_button">
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};