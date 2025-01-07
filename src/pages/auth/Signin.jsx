import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Loader } from "lucide-react"
import AuthContext from "../../context/Authcontext"

const Login = () => {
  const {logIn} = useContext(AuthContext)
  const [userLoginPayload, setuserLoginPayload] = useState ({
    email: "",
    password: ""
  })

  const [loading, setloading] = useState(false)



  const HandleLogin = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      console.log("Hello")
      const result = await logIn(userLoginPayload)
      console.log(result)
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }
  return (
    <>

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
                Log In to Get Started
              </h1>


              <form className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={userLoginPayload.email}
                    onChange={(e) => setuserLoginPayload((prev) => ({
                      ...prev,
                      email: e.target.value
                    }))}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={userLoginPayload.password}
                    onChange={(e) => setuserLoginPayload((prev) => ({
                      ...prev,
                      password: e.target.value
                    }))}
                  />
                </div>





                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    type="submit"
                    onClick={HandleLogin}
                  >
                    {!loading ? 'Log In' : (
                      <Loader />
                    )}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Don't have an account?
                    <Link to="/signup" className="text-gray-700 underline">Regsiter now!!</Link>.
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

export default Login