import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/Authcontext'
import { Button } from '@material-tailwind/react'

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
            <header className="bg-white pt-0 mt-0 top-0 relative w-full">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl"><Link to='/'>Mentor_X</Link></h1>

                            <p className="mt-1.5 text-sm text-gray-500">
                                Find the right mentor to rockstart your career!! 🚀
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            {user != undefined ? (
                                <Button
                                variant='outline'
                                color='pink'
                            >
                                <Link className="text-sm font-medium" to='/createProfile'> Register as mentor </Link>

                               
                            </Button>
                            ) : (
                                <Link
                                className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                                to='/login'
                            >
                                Log In
                            </Link>
                            )}
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header