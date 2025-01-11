import React, { useContext, useState } from 'react'
import AuthContext from '../../context/Authcontext'
import { domain_options } from '../../../constants/mentor_list'
import { base_url } from '../../../constants/domain_credentials'
import { checkInvalidResponse } from '../../../common/InvalidResponseChecker'
import { successfull_Response } from '../../../common/SuccessResponse'
import { Loader } from 'lucide-react'
import { BadResponse } from '../../../common/BadResponse'
import { useNavigate } from 'react-router-dom'

const CreateProfile = () => {
  const Navigate = useNavigate()
  const token = localStorage.getItem('token')
  const { user } = useContext(AuthContext)
  const [loading, setloading] = useState(false)
  const [createMentorPayload, setcreateMentorPayload] = useState({
    userID : user.id,
    domain : '',
    company : '',
    position : '',
    about : ''
  })

  const HandleSubmit = async(e) =>{
    e.preventDefault()
    setloading(true)
    try{
      const res = await fetch(`${base_url}/mentor`,{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify(createMentorPayload)
      })
      const response = await res.json();
      
     
      if(checkInvalidResponse(response)){
        console.log(BadResponse(response.message));
        return;
      }
      console.log(successfull_Response('mentor registration successfull'))
      Navigate('/editProfile')
    }
    catch(err){
      console.log(err);
    }finally{
      setloading(false)
    }
  }

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
                          <input className="sr-only" id={option} type="radio" tabIndex="-1" name="domain" value={option}
                          onChange={(e) => setcreateMentorPayload((prev) => ({
                            ...prev,
                            domain : e.target.value
                          }))}/>

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
                    name="company"
                    value={createMentorPayload.company}
                    onChange={(e)=> setcreateMentorPayload((prev) =>({
                      ...prev,
                      company : e.target.value
                    }))}
                  />
                </div>

                <div className='mt-5'>

                  <label className="sr-only text-black p-3 font-bold">Enter your position in the company /organization</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter your position in the company /organization<"
                    type="text"
                    id="position"
                    name='position'
                    value={createMentorPayload.position}
                    onChange={(e)=> setcreateMentorPayload((prev) =>({
                      ...prev,
                      position : e.target.value
                    }))}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Description</label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Description"
                    rows="8"
                    id="message"
                    name='about'
                    value={createMentorPayload.about}
                    onChange={(e)=>setcreateMentorPayload((prev) => ({
                      ...prev,
                      about : e.target.value
                    }))}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    onClick={HandleSubmit}
                    className="inline-block shrink-0 rounded-md border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"

                  >
                    {!loading ? (
                      <p>Register as a Mentor</p>
                    ) : (
                      <Loader/>
                    )}
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