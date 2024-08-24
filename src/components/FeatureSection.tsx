import React from 'react'
import { features } from '../constants'

const FeatureSection = () => {
  return (
<div className='relative mt-20 border-b bg-neutral-1000 min-h-[800px]'>
        <div className="text-center">
            <span className='bg-neutral-100 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                Features
            </span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
            Explore the <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>range of services</span>
            </h2>
        </div>
        
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap mt-10 lg:mt-20'>
                {features.map((feature, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                        <div className='flex items-start'>
                            {/* Icon */}
                            <div className='mr-4 flex-shrink-0 text-orange-500'>
                                {feature.icon}
                            </div>
                            {/* Text */}
                            <div>
                                <h3 className='text-lg font-semibold'>
                                    {feature.text}
                                </h3>
                                <p className='mt-2 text-neutral-400'>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeatureSection