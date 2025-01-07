import { createContext, useState} from 'react'
import { checkInvalidResponse } from '../../common/InvalidResponseChecker'
import { successfull_Response } from '../../common/SuccessResponse'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [user, setuser] = useState("")

    const logIn = async (userLoginData) => {
        try {
            const result = await fetch('http://localhost:3000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userLoginData)
            })
            const res = await result.json();
            if(checkInvalidResponse(res)){
                return {
                    message : res.message,
                    success : false
                }
            }

            localStorage.setItem('token', res.access_token)
            return successfull_Response('Successfull Login')
        } catch (error) {
            return {
                message : error.message,
                success : false
            }
        }
    }
    return <AuthContext.Provider value={{user, logIn }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext
export {AuthContextProvider}