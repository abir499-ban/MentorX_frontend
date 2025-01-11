import React, { useContext } from 'react'
import { Input, Typography, Button } from '@material-tailwind/react'
import { Facebook, FolderKanban, Github, Instagram, Linkedin, Loader } from 'lucide-react'
import { useState } from 'react'
import AuthContext from '../../context/Authcontext'
import { base_url } from '../../../constants/domain_credentials'
import { checkInvalidResponse } from '../../../common/InvalidResponseChecker'
import { BadResponse } from '../../../common/BadResponse'
import { successfull_Response } from '../../../common/SuccessResponse'
import { useNavigate,Link } from 'react-router-dom'

const EditProfile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('token')
    const [loading, setloading] = useState(false)
    const [updateMentorPayload, setupdateMentorPayload] = useState({
        id: user.id,
        metaData: {
            linkedIn: '',
            github: '',
            socials: ['', ''],
            bio: '',
            interests: ['', '', ''],
            work: ['', '', '']
        }
    })

    const handleSocialChange = (index, value) => {
        setupdateMentorPayload((prev) => {
            const arr = [...prev.metaData.socials]
            arr[index] = value;
            return {
                ...prev,
                metaData: { ...prev.metaData, socials: arr }
            }
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        setloading(true)
        try {
            const res = await fetch(`${base_url}/mentor`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updateMentorPayload)
            })
            const response = await res.json();
            if(checkInvalidResponse(response)){
                console.log(BadResponse('Error occurred'))
                return;
            }
            console.log(successfull_Response('profile updated. Lets move on!!'))
            navigate('/createService')
        }
        catch (error) {
            console.log(error)
        }finally{
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

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl text-pink-600">Add more Details to your Profile</h1>

                    <p className="mt-4 text-gray-500">
                        Complete your profile by adding more details to help others understand your expertise and experience.
                    </p>
                </div>

                <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div className='flex flex-wrap flex-col gap-3'>

                        <div >
                            <Input label="Add your LinkedIn URL" icon={<Linkedin />}
                                name='linkedIn'
                                value={updateMentorPayload.metaData.linkedIn}
                                onChange={(e) => setupdateMentorPayload((prev) => ({
                                    ...prev,
                                    metaData: {
                                        ...prev.metaData,
                                        linkedIn: e.target.value
                                    }
                                }))}
                            />
                            <Typography
                                variant="small"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-muted"
                            >
                                *This is a compulsory feild
                            </Typography>
                        </div>


                        <div>

                            <div>
                                <Input label="Add your Github URL" icon={<Github />}
                                    name='github'
                                    value={updateMentorPayload.metaData.github}
                                    onChange={(e) => setupdateMentorPayload((prev) => ({
                                        ...prev,
                                        metaData: {
                                            ...prev.metaData,
                                            github: e.target.value
                                        }
                                    }))} />
                            </div>
                        </div>



                        {updateMentorPayload.metaData.socials.map((option, idx) => (
                            <div key={idx}>
                                <Input label={`${idx}.  Add a social media URL`}
                                    name={`social${idx}`}
                                    value={option}
                                    onChange={(e) => handleSocialChange(idx, e.target.value)}
                                />
                            </div>
                        ))}



                        <div className='mt-10'>
                            <div>
                                <Input variant='static' label="Add a bio" placeholder='Enter a short bio about yourself'
                                    name='bio'
                                    value={updateMentorPayload.metaData.bio}
                                    onChange={(e) => setupdateMentorPayload((prev) => ({
                                        ...prev,
                                        metaData: {
                                            ...prev.metaData,
                                            bio: e.target.value
                                        }
                                    }))} />
                            </div>
                        </div>

                        <div className='mt-3'>
                            <label className='text-sm text-gray-600 mb-2' >Add your Interests</label>
                            <div className='flex  flex-row gap-3 w-1/2'>
                                {updateMentorPayload.metaData.interests.map((option, idx) => (
                                    <Input key={idx} color="pink"
                                        value={option}
                                        onChange={(e) => setupdateMentorPayload((prev) => {
                                            const arr = [...prev.metaData.interests]
                                            arr[idx] = e.target.value
                                            return {
                                                ...prev,
                                                metaData: {
                                                    ...prev.metaData,
                                                    interests: arr
                                                }
                                            }
                                        })}
                                    />
                                ))}

                            </div>
                        </div>

                        <div className='mt-3'>
                            <label className='text-sm text-gray-600 mb-2' >Add links, resources, blogs or anything related to your work or project</label>
                            <div className='flex  flex-col gap-3'>
                                {updateMentorPayload.metaData.work.map((option, idx) => (
                                    <Input key={idx} color="blue" icon={<FolderKanban />}
                                        value={option}
                                        onChange={(e) => setupdateMentorPayload((prev) => {
                                            const arr = [...prev.metaData.work]
                                            arr[idx] = e.target.value;
                                            return {
                                                ...prev,
                                                metaData: { ...prev.metaData, work: arr }
                                            }
                                        })}
                                    />
                                ))}

                            </div>
                        </div>

                    </div>






                    <div className="flex items-center justify-between">
                        <Button variant="outlined"><a href='/createService'>Skip</a></Button>

                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="inline-block shrink-0 rounded-md border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"
                        >
                            {!loading ? (
                                <p>Save Details</p>
                            ) : (
                                <Loader/>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProfile