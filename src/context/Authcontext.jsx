import { createContext, useState} from 'react'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [token, settoken] = useState("")
    const [user, setuser] = useState("")

    const logIn = async (userLoginData) => {
        console.log("inside Auth Context")
        try {
            const result = await fetch('http://localhost:3000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userLoginData)
            })
            const res = await result.json();
            console.log(res);
            return res;
        } catch (error) {
            throw new Error(error)
        }
    }
    return <AuthContext.Provider value={{ token, user, logIn }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext
export {AuthContextProvider}