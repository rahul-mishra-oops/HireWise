import React from 'react'

const Newsletter = () => {
    return (
        <div className='py-6 w-full text-white'>
            <div className='max-w-[1240px] mx-auto lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4 '>
                    <h1 className='md:text-4xl sm:text-4xl text-xl font-bold py-2'>Start the process immediatley</h1>
                    <p>Get in touch</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row item-center justify-between w-full'>
                        <input
                            className='flex w-full rounded-md text-black'
                            type='email'
                            placeholder='Enter Email'
                        />
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                            Notify Me
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Newsletter