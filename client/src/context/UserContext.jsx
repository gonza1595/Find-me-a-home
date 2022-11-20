import React, { useCallback, useState } from "react";
import axios from 'axios'

const initialAuthState = {
  loading: true,
  authentication: "idle",
  user: undefined,
};

const initialContext = [
  initialAuthState,
  {
    login: async () => undefined,
    logout: () => undefined,
  },
];

const AuthContext = React.createContext(initialContext)

export const  UserContextProvider = (props) => {  
  const [state, setState] = useState() 

  const  login = useCallback(async ( correo, contraseña ) => {               
        try {
           await axios.post('/usuario/login', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: {
              correo: correo, 
              contraseña: contraseña} //fijarse si tiene que ser el mismo nombre que los models
          })
          .then((response) => response.json() )
          .then((data) => {
            if(data.tokenSesion){
            console.log(data.tokenSesion)
            }
          })       
        } catch (error) {          
        console.log(error.message)
        }
      },[])  

      const contextValue = React.useMemo(
        () => [state, { login }],
        [state, login]
      );

    return <AuthContext.Provider value={contextValue} {...props}/>
}      



export default UserContextProvider
export {AuthContext}