import { Route, Routes, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

// import "@fontsource/montserrat";

import WelcomePage from "./component/WelcomePage";
import SignUpPage from "./component/SignUpPage"
import LoginPage from "./component/LoginPage";
import LandingPage from "./component/LandingPage";

function App() {
  let navigate = useNavigate();

  const navigateToSignUpPage = () => {
      navigate('/signup');
  };

  const navigateToLoginPage = () => {
      navigate('/login');
  };

  const navigateToWelcomePage = () => {
      navigate('/');
  };
  const navigateToLandingPage = () => {
    navigate('/landing-page');
};
  return (
    <>
      <Routes>
        <Route 
          path = "/" 
          element = { 
            <WelcomePage 
              navigateToLoginPage = {navigateToLoginPage} 
              navigateToSignUpPage = {navigateToSignUpPage}
            />
          } 
        />
        <Route 
          path = "/signup" 
          element = { 
            <SignUpPage 
              navigateToLoginPage = {navigateToLoginPage}
              navigateToWelcomePage = {navigateToWelcomePage}
            /> 
          }
        />
        <Route path = "/login" element = { <LoginPage navigateToLandingPage ={navigateToLandingPage} navigateToSignUpPage = {navigateToSignUpPage}/>  }/>
        <Route path = "/landing-page" element = { <LandingPage navigateToWelcomePage={navigateToWelcomePage}/> } />
      </Routes> 
    </>
  );
}

export default App;
