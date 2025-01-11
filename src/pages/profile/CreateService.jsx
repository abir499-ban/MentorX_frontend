import { Button, Input, Textarea, IconButton, Typography } from '@material-tailwind/react'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { serviceTypes } from '../../../constants/service_types.'
import { IndianRupee, Loader } from 'lucide-react'
import AuthContext from '../../context/Authcontext'
import { base_url } from '../../../constants/domain_credentials'
import { BadResponse } from '../../../common/BadResponse'
import { checkInvalidResponse } from '../../../common/InvalidResponseChecker'
import { successfull_Response } from '../../../common/SuccessResponse'

const CreateService = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const { user } = useContext(AuthContext)
  const [loading, setloading] = useState(false)
  const [servicePayload, setservicePayload] = React.useState({
    userID: user.id,
    type: '',
    headline: '',
    about: '',
    cost: 0
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setloading(true)
    try {
      const res = await fetch(`${base_url}/mentor_Service`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(servicePayload)
      })
      const response = await res.json();
      if (checkInvalidResponse(response)) {
        console.log(BadResponse('Error occurred'))
        return;
      }
      console.log(successfull_Response('Service Created'))
      navigate('/')
    } catch (error) {
      console.log(error.message)
    } finally {
      setloading(false)
    }
  }
  return (
    <>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 pt-0 mt-0">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add a Service Today</h1>
        </div>

        <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {serviceTypes.map((option, index) => (
              <div key={index}>
                <label
                  htmlFor={option}
                  className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                  tabIndex="0"
                >
                  <input className="sr-only" id={option} type="radio" tabIndex="-1" name="domain" value={option}
                    onChange={(e) => setservicePayload((prev) => ({
                      ...prev,
                      type: e.target.value
                    }))}
                  />

                  <span className="text-sm"> {option}</span>
                </label>
              </div>

            ))}

          </div>

          <div className='mx-auto max-w-screen-xl px-3 py-7 '>
            <Input variant="static" label="Enter headline " placeholder="Add a headline to you service" required value={servicePayload.headline}
              onChange={(e) => setservicePayload((prev) => ({
                ...prev,
                headline: e.target.value
              }))}
            />
          </div>

          <div className='mx-auto max-w-screen-xl px-3 py-2 '>
            <Textarea size="md" placeholder="Adding a description to your service often enagages more career seekers"
              value={servicePayload.about}
              onChange={(e) => setservicePayload((prev) => ({
                ...prev,
                about: e.target.value
              }))} />
          </div>

          <div className="w-80">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              Select Pricing for Your Service
            </Typography>
            <div className="relative w-full">
              <Input
                icon={<IndianRupee />}
                type="number"
                value={servicePayload.cost}
                onChange={(e) => setservicePayload((prev) => ({
                  ...prev,
                  cost: e.target.value
                }))}
              />
            </div>

          </div>



          <div className="flex items-center justify-between">


            {!loading ? (
              <button
              onClick={handleSubmit}
              type="submit"
              className="inline-block shrink-0 rounded-md border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"
            >
              Create Service
            </button>
            ) : (
              <button
              className="inline-block shrink-0 rounded-md border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"
            >
              <Loader/>
            </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateService