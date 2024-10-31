import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt=''/>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Sunrise Hospitals is dedicated to providing comprehensive healthcare services with a focus on compassion, quality, and innovation. With our expert team of doctors and state-of-the-art facilities, we aim to make healthcare accessible and personalized for every patient.</p>

        </div>
        {/* middle section */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        {/* right section */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-8688493306</li>
                <li>palakurthyvamshi00@gmail.com</li>
            </ul>
            
        </div>
       </div>
       <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
       </div>
    </div>
  )
}

export default Footer