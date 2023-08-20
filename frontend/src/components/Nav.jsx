import React from 'react'
import logo from '../Assets/Free_Sample_By_Wix__1_-removebg-preview.png';
import { FaUser, FaUsers, FaWallet, FaHistory } from "react-icons/fa";
import { MdDashboard, MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';


const Nav = ({wallet}) => {
    
    
  return (
    <div>
        <div className="flex justify-between sticky top-10 container md:pr-20  mx-auto items-start my-3">
            <div className='w-60 px-10 bg-white rounded-e-3xl'>
            <img src={logo} className='w-32 FaUserCircle '  alt="" />
            <div className='w-full mt-16 text-gray-700 '>
                <Link to=""><div className='hover:text-blue-900 transition-all ease-out  flex gap-2 font-medium my-16'>< MdDashboard className='text-xl' /> Dashboard</div></Link>
                <Link to="thrifts"><div className='hover:text-blue-900 transition-all ease-out  flex gap-2 font-medium my-16'>< FaUsers className='text-xl' />Thrifts</div></Link>
                <Link to="pay"><div className='hover:text-blue-900 transition-all ease-out  flex gap-2 font-medium my-16'>< FaWallet className='text-xl' /> Fund wallet</div></Link>
                <Link><div className='hover:text-blue-900  transition-all ease-out  flex gap-2 font-medium my-16'>< FaHistory className='text-xl' /> Track payment</div></Link>
                <Link><div className='hover:text-blue-900 transition-all ease-out  flex gap-2 font-medium my-16'>< MdLogout className='text-xl' /> Log Out</div></Link>
              
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Nav