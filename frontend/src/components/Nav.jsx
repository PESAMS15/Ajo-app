import React from 'react'
import logo from '../Assets/Free_Sample_By_Wix__1_-removebg-preview.png';
import { FaUser } from "react-icons/fa";


const Nav = ({wallet}) => {
    const balance = Number(wallet)  .toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,

    })
    
  return (
    <div>
        <div className="flex justify-between container px-16 py-2 mx-auto items-center">
            <img src={logo} className='w-32 FaUserCircle '  alt="" />
            <div className='flex gap-x-5'>
            <div className="border-2 p-5 px-4 font-semibold rounded-full">
                {balance}
            </div>
            <div className="border-2 flex gap-x-1 p-2 px-4 font-semibold rounded-sm">
                <FaUser /> Account
            </div>
            </div>
        </div>
    </div>
  )
}

export default Nav