import React from 'react'
import { Input, Typography, Button } from '@material-tailwind/react'
import { Facebook, FolderKanban, Github, Instagram, Linkedin } from 'lucide-react'

const EditProfile = () => {
    const interest = [1, 2, 3]
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
                            <Input label="Add your LinkedIn URL" icon={<Linkedin />} />
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
                                <Input label="Add your Github URL" icon={<Github />} />
                            </div>
                        </div>

                        <div>

                            <div>
                                <Input label="Add a social media url" />
                            </div>
                        </div>

                        <div>

                            <div>
                                <Input label="Add a social media URL" />
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <Input variant='static' label="Add a bio" placeholder='Enter a short bio about yourself' />
                            </div>
                        </div>

                        <div className='mt-3'>
                            <label className='text-sm text-gray-600 mb-2' >Add your Interests</label>
                            <div className='flex  flex-row gap-3 w-1/2'>
                                {interest.map((option, inx) => (
                                    <Input key={inx} color="pink" />
                                ))}

                            </div>
                        </div>

                        <div className='mt-3'>
                            <label className='text-sm text-gray-600 mb-2' >Add links, resources, blogs or anything related to your work or project</label>
                            <div className='flex  flex-col gap-3'>
                                {interest.map((option, inx) => (
                                    <Input key={inx} color="blue" icon={<FolderKanban/>} />
                                ))}

                            </div>
                        </div>

                    </div>






                    <div className="flex items-center justify-between">
                    <Button variant="outlined">Skip</Button>

                        <button
                            type="submit"
                            className="inline-block shrink-0 rounded-md border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"
                        >
                            Save Details
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProfile