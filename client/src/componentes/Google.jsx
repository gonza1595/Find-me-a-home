import React from "react";
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import GoogleLogin from 'react-google-login';




 export default function Google(){


   const clientID ="937620879306-paserb1mqre208feu49eakrpjogk8eip.apps.googleusercontent.com"
    const [user, setUser] = useState({});
    const [loggeIn, setLoggetInfo] = useState(false); 
  
    const onSuccess = (response) => {
      setUser(response.profileObj);
      document.getElementsByClassName("btn").hidden = true;
    }
    const onFailure = (response) => {
      console.log(response);
    }

    
    const handleLogout  = () => {
      setUser({}); 
    }
    useEffect(() => {
      function start() {
        gapi.auth2.init({ 
          clientId: clientID,
        });
      }
      gapi.load("client:auth2", start);
    });
  


    
    return(
<div >
      <h1>Login</h1>
    
      <div>

        <GoogleLogin
         
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Continue  with Google"
          cookiePolicy={"single_host_origin"}
        />

      </div>

      <div>
       
        <h3>{user.name}</h3>
  
      </div>



    </div>
    )
 }
