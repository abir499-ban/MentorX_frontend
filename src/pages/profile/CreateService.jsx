import { Button, Input, Textarea, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { serviceTypes } from '../../../constants/service_types.'
import { IndianRupee } from 'lucide-react'

const CreateService = () => {
  const [value, setValue] = React.useState(0)

  return (
    <>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 pt-0 mt-0">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add a Service Today</h1>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {serviceTypes.map((option, index) => (
              <div key={index}>
                <label
                  htmlFor={option}
                  className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                  tabIndex="0"
                >
                  <input className="sr-only" id={option} type="radio" tabIndex="-1" name="domain" value={option}
                  />

                  <span className="text-sm"> {option}</span>
                </label>
              </div>

            ))}

          </div>

          <div className='mx-auto max-w-screen-xl px-3 py-7 '>
            <Input variant="static" label="Enter headline " placeholder="Add a headline to you service" />
          </div>

          <div className='mx-auto max-w-screen-xl px-3 py-2 '>
            <Textarea size="md" placeholder="Adding a description to your service often enagages more career seekers" />
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
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
            </div>
            <Typography variant="small" color="gray" className="mt-2 font-normal">
              Adjust the number using the + and - controls.
            </Typography>
          </div>



          <div className="flex items-center justify-between">


            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"
            >
              Create Service
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateService