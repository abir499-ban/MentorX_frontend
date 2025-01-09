import React, { useContext } from 'react'
import AuthContext from '../../context/Authcontext'
import { domain_options } from '../../../constants/mentor_list'

const CreateProfile = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
            <div className="mt-8">
                <p className="text-2xl font-bold text-pink-600 p-6">Join Our Mentoring Network and Make a Difference!</p>

              </div>
              <p className="max-w-xl text-lg">
              Becoming a mentor means more than just sharing your skills; it's about guiding others on their journey to success. As a mentor, you'll have the opportunity to inspire, educate, and create meaningful connections while helping mentees achieve their goals. Join our community of professionals committed to making a lasting impact!
              </p>

              
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form className="space-y-4">

                <div className='flex flex-wrap flex-col gap-2'>
                  <label className='text-black p-3 font-bold'>Choose your Expertise</label>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    {domain_options.map((option, index) => (
                      <div key={index}>
                        <label
                          htmlFor={option}
                          className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                          tabIndex="0"
                        >
                          <input className="sr-only" id={option} type="radio" tabIndex="-1" name="Domain" />

                          <span className="text-sm"> {option}</span>
                        </label>
                      </div>

                    ))}

                  </div>
                </div>

                <div className='mt-5'>

                  <label className="sr-only text-black p-3 font-bold">Enter Company/Organizaton's name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter company/organization name"
                    type="text"
                    id="company"
                  />
                </div>

                <div className='mt-5'>

                  <label className="sr-only text-black p-3 font-bold">Enter your position in the company /organization</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter your position in the company /organization<"
                    type="text"
                    id="position"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Description</label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Description"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"

                  >
                    Resgister as a Mentor
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default CreateProfile