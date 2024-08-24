import React from 'react'
import video1 from "../assets/v1.mp4"
import video2 from "../assets/v2.mp4"
import video3 from "../assets/v3.mp4"
import video4 from "../assets/v4.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-15">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        GTA 
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          {" "}
           Square Mall
        </span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
      Welcome to the first South Asian indoor mall in Scarborough, Ontario, a landmark destination that has 
been enriching the community since 2008. As a pioneering hub of culture and commerce, our mall 
celebrates South Asia’s vibrant heritage through a diverse range of shops, restaurants, and services. 
From traditional clothing and jewelry to authentic cuisine and cultural artifacts, we offer a unique 
shopping experience that honors South Asian traditions while embracing modernity. Over the years, 
we’ve become a cornerstone of the community, providing a space where cultural diversity thrives, and 
connections are forged. Visit us to explore the best of South Asia, right here in Scarborough, and discover 
why our mall has been a beloved landmark for over a decade.
</p>
<p className='mt-8 text-center' >
Hours: Monday to Sunday 9AM to 9PM - 
Store hours may vary, call stores directly or contact Guest Experience for details
      </p>
      {/* <div className="flex justify-center my-10">
        <a href='#' className='bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md'>
          Start For Free
        </a>
        <a href='#' className='py-3 px-4 mx-3 rounded-md border'> 
          Documentation
        </a>
      </div> */}
      <div className='grid grid-cols-2 gap-4 mt-20 justify-center'>
    <video autoPlay loop muted className='rounded-lg border border-orange-700 shadow-orange-400'>
        <source src={video4} type="video/mp4" />
        Your browser does not support the video tag
    </video>
    <video autoPlay loop muted className='rounded-lg border border-orange-700 shadow-orange-400'>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag
    </video>
    <video autoPlay loop muted className='rounded-lg border border-orange-700 shadow-orange-400'>
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag
    </video>
    <video autoPlay loop muted className='rounded-lg border border-orange-700 shadow-orange-400'>
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag
    </video>
</div>

    </div>
  )
}

export default HeroSection