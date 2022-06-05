import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div style={{paddingTop: '100px'}}>
                <p className='text-4xl font-bold text-pink-600'>Mes Travaux</p>
                <p className='text-gray-300 py-6'>// Voici quelques exemples de mes réalisations</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                    style={{backgroundImage: `url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl flex font-bold text-white tracking-wider'>
                            <p className='text-center'>Site Web construit avec React JS et Tailwind</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage: `url(${realEstate})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl flex font-bold text-white tracking-wider'>
                            <p className='text-center'>Site Web construit avec React JS et Tailwind</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                  {/* Grid Item */}
                  <div 
                    style={{backgroundImage: `url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl flex font-bold text-white tracking-wider'>
                            <p className='text-center'>Site Web construit avec React JS et Tailwind</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage: `url(${realEstate})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl flex font-bold text-white tracking-wider'>
                            <p className='text-center'>Site Web construit avec React JS et Tailwind</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                  {/* Grid Item */}
                  <div 
                    style={{backgroundImage: `url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl flex font-bold text-white tracking-wider'>
                            <p className='text-center'>Site Web construit avec React JS et Tailwind</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage: `url(${realEstate})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl flex font-bold text-white tracking-wider'>
                            <p className='text-center'>Site Web construit avec React JS et Tailwind</p>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center roundend-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work