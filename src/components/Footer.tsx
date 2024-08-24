import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='flex flex-col items-center gap-6 lg:flex-row lg:justify-between'>
          
          <div className='flex gap-4'>
            <a href='https://youtu.be/vFdxYhqcHSs?si=idfJkkKZLDpb21WT' className='text-neutral-400 hover:text-red-500'>
              <FontAwesomeIcon icon={faYoutube} size='2x' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=61563630493176&mibextid=LQQJ4d' className='text-neutral-400 hover:text-blue-500'>
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>
            <a href='https://www.instagram.com/invites/contact/?igsh=rw5o8xixpfb0&utm_content=vasckxr' className='text-neutral-400 hover:text-pink-500'>
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
          </div>

          <div className='text-center'>
            <p className='text-neutral-800 mb-2 flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='text-neutral-800' />
              <a 
                href='https://www.google.com/maps/place/5215+Finch+Ave+E,+Scarborough,+ON+M1S+0C2' 
                target='_blank' 
                rel='noopener noreferrer' 
                className='hover:underline'
              >
                5215 Finch Ave E, Scarborough, ON M1S 0C2
              </a>
            </p>
            <p className='text-neutral-800 flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faPhoneAlt} className='text-neutral-800' />
              <a 
                href='tel:+14162924400'
                className='hover:underline'
              >
                (416) 292-4400
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
