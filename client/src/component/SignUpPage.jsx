import React, {useState} from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function SignUpPage ({navigateToLoginPage}) {
    const cookies = new Cookies();

    const initialStateSignUpCredentials = {
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        avatarURL: '',
    };

    const [signUpCredentials, setSignUpCredentials] = useState(initialStateSignUpCredentials)

    const handleSignUpCredentials = (e) => {
        setSignUpCredentials({...signUpCredentials, [e.target.name]: e.target.value});
        console.log(signUpCredentials)
    }

    const handleSignUpSubmit = async (e) =>{
        e.preventDefault()
        const { fullName, username, password, phoneNumber, avatarURL} = signUpCredentials
        const URL = 'http://http://localhost:8000/' ;

        const { data: {token, userId, hashedPassword} } = await axios.post(`${URL}/signup`, {
            username, password, fullName, phoneNumber, avatarURL
        })

        cookies.set('token', token);
        cookies.set('username', token);
        cookies.set('fullName', token);
        cookies.set('userId', userId);
        cookies.set('phoneNumber', phoneNumber);
        cookies.set('avatarURL', avatarURL)
        cookies.set('hashedPassword', hashedPassword);

        window.location.reload();
    }

    return(
        <div className = "auth__form-container">
            <div className = "auth__form-container_fields">
                <div className = "auth__form-container_fields-content">
                    <p>Sign Up</p>
                    <form onSubmit = {handleSignUpSubmit}>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                name = "fullName"
                                type = "text"
                                placeholder="Full Name"
                                onChange={handleSignUpCredentials}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                            <input
                                name = "username"
                                type = "text"
                                placeholder="Username"
                                onChange={handleSignUpCredentials}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                name = "phoneNumber"
                                type = "number"
                                placeholder="Phone Number"
                                onChange={handleSignUpCredentials}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="avatarURL">Avatar URL</label>
                            <input
                                name = "avatarURL"
                                type = "url"
                                placeholder="Avatar URL"
                                onChange={handleSignUpCredentials}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                name = "password"
                                type = "password"
                                placeholder="Password"
                                onChange={handleSignUpCredentials}
                                required
                            ></input>
                        </div>
                        <div className = "auth__form-container_fields-content_input">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                name = "confirmPassword"
                                type = "password"
                                placeholder="Confirm Password"
                                onChange={handleSignUpCredentials}
                                required
                            ></input>
                        </div>
                    </form>
                    <div className="">
                        <p>
                            Already have an account? {/*Need to attach a onClick event to redirect to login page */}
                        </p>
                        <span onClick = {navigateToLoginPage}>
                            Sign in
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};