import { createContext, useState} from 'react'
import { checkInvalidResponse } from '../../common/InvalidResponseChecker'
import { successfull_Response } from '../../common/SuccessResponse'
import { BadResponse } from '../../common/BadResponse'
import { base_url } from '../../constants/domain_credentials'

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

    const createAccount = async(userPayload) =>{
        try {
            const result = await fetch(`${base_url}/users`, {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userPayload)
            })
            const res = await result.json()
            console.log(res)
            if(checkInvalidResponse(res)){
                return {
                    message : res.message,
                    success : false
                }
            }
            localStorage.setItem('email', userPayload.email)
            return successfull_Response('Account created Successfully and OTP sent via email');
        } catch (error) {
            return BadResponse(error.message)
        }
    }
    return <AuthContext.Provider value={{user, logIn, createAccount }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext
export {AuthContextProvider}