import Context from "../../context/UserContext";
import { useCallback, useContext } from "react";
import loginService from "../../services/login"

export default function useUser() {
    const {jwt, setJWT} = useContext(Context)
                      //fiajrse que sea igual que models
    const login = useCallback(({correo, contraseña})=>{  // username, password
        loginService({correo, contraseña})
        .then(jwt =>{
            console.log(jwt)
        })
        .catch(err =>{
            console.error(err)
        })
    }, [setJWT])




const logout = useCallback(()=>{
    setJWT(null)
}, [setJWT])



    return{
        isLogged : Boolean(jwt),
        login,
        logout
    }
}