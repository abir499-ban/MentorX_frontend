import React, { useContext, useEffect } from 'react'
import { Select, Option } from "@material-tailwind/react";
import { base_url } from '../../../constants/domain_credentials';
import AuthContext from '../../context/Authcontext';
import { useState } from 'react';
import { Typography } from '@material-tailwind/react'
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { CODES, COUNTRIES } from '../../../constants/country_codes';
import gradyears from '../../../constants/gradYears';
import { Turtle } from 'lucide-react';


const UserProfile = () => {
  const [changes, setchanges] = useState(false)
  const [country, setCountry] = React.useState(0);

  const { user } = useContext(AuthContext)
  const { token } = localStorage.getItem('token')
  const [loaduser, setloaduser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: '',
    graduationYear: ''
  })

  const handleUpdate = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${base_url}/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(loaduser)
      })
      const response = await res.json()
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }


  useEffect(() => {

    const fetchUser = async () => {
      try {
        const res = await fetch(`${base_url}/users/${user.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })

        const response = await res.json();
        setloaduser(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, []);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-9 sm:px-6 lg:px-8">
        <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <Typography className='font-gilroy text-3xl font-bold text-center mt-0 pt-0'>
            Hi, {loaduser.firstName}
          </Typography>
          <div className='flex flex-row gap-4'>
            <Input placeholder='Enter first name' value={loaduser.firstName} onChange={(e) => {
              setchanges(true)
              setloaduser((prev) => ({
                ...prev,
                firstName: e.target.value
              }))
            }}></Input>
            <Input placeholder='Enter last name' value={loaduser.lastName} onChange={(e) => {
              setchanges(true)
              setloaduser((prev) => ({
                ...prev,
                lastName: e.target.value
              }))
            }}></Input>
          </div>

          <div>
            <Input disabled value={loaduser.email}></Input>

          </div>

          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-gilroy mt-3"
            >
              Enter Phone Number
            </Typography>
            <div className="relative flex w-full">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="h-10 w-14 shrink-0 rounded-r-none border border-r-0 border-blue-gray-200 bg-transparent px-3"
                  >
                    {CODES[country]}
                  </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-[18rem]">
                  {COUNTRIES.map((country, index) => {
                    return (
                      <MenuItem
                        key={country}
                        value={country}
                        onClick={() => setCountry(index)}
                      >
                        {country}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Input
                type="tel"
                value={loaduser.phone}
                pattern="[0-9]*"
                inputMode="numeric"
                maxLength={12}
                placeholder="324-456-2323"
                className="rounded-l-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
                onChange={(e) => {
                  setchanges(true)
                  setloaduser((prev) => ({
                    ...prev,
                    phone: e.target.value
                  }))
                }}
              />
            </div>
          </div>

          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-gilroy mt-3"
            >
              Enter Graduation Year
            </Typography>
            <Select defaultValue="1">
              {gradyears.map((year) => (
                <Option value={year} onChange={(e) => {
                  setchanges(true)
                  setloaduser((prev) => ({
                    ...prev,
                    graduationYear: e.target.value
                  }))
                }}>{year}</Option>
              ))}
            </Select>
          </div>

          <div className="flex items-center justify-between">
            {changes ? (
              <button
                onClick={handleUpdate}
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Save
              </button>
            ) : (
              <button
                className="inline-block rounded-lg bg-gray-700 px-5 py-3 text-sm font-medium text-white"
              >
                Save
              </button>
            )}
          </div>
        </form>

      </div>
    </>
  )
}

export default UserProfile