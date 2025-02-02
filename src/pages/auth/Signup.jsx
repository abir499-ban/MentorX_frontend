import { useEffect, useState } from "react"
import { Button } from '@material-tailwind/react'
import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/Authcontext";
import OTPDialog from "../../components/OTPDialog";


const SignUp = () => {
  const [loading, setloading] = useState(false)
  const [otpSent, setotpSent] = useState(false)
  const [userSignUpPayload, setuserSignUpPayload] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const { createAccount } = useContext(AuthContext)

  const HandleSubmit = async (e) => {
    e.preventDefault()
    setloading(true)
    try {
      const res = await createAccount(userSignUpPayload)
      console.log(res)
      if (res.success)
        setotpSent(true)
      else
        console.log(res.message)
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
  }
  return (
    <>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
      {otpSent && (
        <OTPDialog />
      )}

      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">


              <h1 className="mt-6 text-2xl font-poppins font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to MentorX
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Instant access to pros from top companies & domains
              </p>

              <form className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={userSignUpPayload.firstName}
                    onChange={(e) => setuserSignUpPayload((prev) => ({
                      ...prev,
                      firstName: e.target.value
                    }))}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={userSignUpPayload.lastName}
                    onChange={(e) => setuserSignUpPayload((prev) => ({
                      ...prev,
                      lastName: e.target.value
                    }))}
                  />
                </div>



                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={setuserSignUpPayload.email}
                    onChange={(e) => setuserSignUpPayload((prev) => ({
                      ...prev,
                      email: e.target.value
                    }))}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={userSignUpPayload.password}
                    onChange={(e) => setuserSignUpPayload((prev) => ({
                      ...prev,
                      password: e.target.value
                    }))}
                  />
                </div>

                {/* <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div> */}





                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    onClick={HandleSubmit}
                  >
                    {!loading ? 'Create an Account' : (
                      <Loader />
                    )}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link to="/login" className="text-gray-700 underline">Log in</Link>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  )
}

export default SignUp