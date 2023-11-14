import React from 'react'
import logo from '../Assets/Free_Sample_By_Wix__1_-removebg-preview.png';
import { FaUser, FaUsers, FaWallet, FaHistory } from "react-icons/fa";
import { MdDashboard, MdLogout } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal';
import { useState } from 'react';


const Nav = ({balance}) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen(!isMenuOpen)
    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
      
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    
      const handleLogout = () => {
        // Perform your logout logic here
        // For now, let's just close the modal
        localStorage.removeItem("token")
        navigate("/")
        
        setIsModalOpen(false);
      };
    
    
  return (
    <div className={`md:sticky top-0  `}>
        <div className="md:flex justify-between  container px-2 md:sticky absolute top-10  hidden   mx-auto items-start my-3">
            <div className='w-60 px-10 bg-white rounded-e-3xl'>
            <img src={logo} className='w-32 FaUserCircle '  alt="" />
            <div className='w-full mt-16 text-gray-700 '>
                <Link to=""><div className='hover:text-blue-900 transition-all ease-out  flex gap-2 font-medium my-16'>< MdDashboard className='text-xl' /> Dashboard</div></Link>
                <Link to="thrifts"><div className='hover:text-blue-900 transition-all ease-out  flex gap-2 font-medium my-16'>< FaUsers className='text-xl' />Thrifts</div></Link>
                <Link to="pay"><div className='hover:text-blue-900 transition-all ease-out  flex gap-2 font-medium my-16'>< FaWallet className='text-xl' /> Fund wallet</div></Link>
                <Link to="transactions"><div className='hover:text-blue-900  transition-all ease-out  flex gap-2 font-medium my-16'>< FaHistory className='text-xl' /> Track payment</div></Link>
                <Link><div   onClick={handleOpenModal} className='hover:text-blue-900 transition-all ease-out  flex gap-2 font-medium my-16'>< MdLogout className='text-xl' /> Log Out</div></Link>
             
                <LogoutModal isOpen={isModalOpen} onClose={handleCloseModal} onLogout={handleLogout} />
              
            </div>
            </div>
           
        </div>
        <div className='md:hidden '>
        <div className={`fixed inset-0 overflow-hidden z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 transition-opacity" onClick={handleToggleMenu}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="fixed inset-y-0 left-0  max-w-full flex">
          <div className="relative bg-black  max-w-md">
            <div className="h-full w-72 flex flex-col py-6 bg-white  shadow-xl ">
              <div className='w-60 px-10 bg-white rounded-e-3xl'>
                <img src={logo} className='w-32 FaUserCircle ' alt="" />
                <div className='w-full mt-16 text-gray-700 '>
                  <Link to=""><div className='hover:text-blue-900 transition-all ease-out flex gap-2 font-medium my-16'>< MdDashboard className='text-xl' /> Dashboard</div></Link>
                  <Link to="thrifts"><div className='hover:text-blue-900 transition-all ease-out flex gap-2 font-medium my-16'>< FaUsers className='text-xl' />Thrifts</div></Link>
                  <Link to="pay"><div className='hover:text-blue-900 transition-all ease-out flex gap-2 font-medium my-16'>< FaWallet className='text-xl' /> Fund wallet</div></Link>
                  <Link to="transactions"><div className='hover:text-blue-900 transition-all ease-out flex gap-2 font-medium my-16'>< FaHistory className='text-xl' /> Track payment</div></Link>
                  <Link><div onClick={handleOpenModal} className='hover:text-blue-900 transition-all ease-out flex gap-2 font-medium my-16'>< MdLogout className='text-xl' /> Log Out</div></Link>

                  <LogoutModal isOpen={isModalOpen} onClose={handleCloseModal} onLogout={handleLogout} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button to toggle the offcanvas menu */}
      <button className="fixed w-full items-center  bg-blue-900 top-0 p-3 py-2 flex justify-between left-0 text-2xl text-white" onClick={handleToggleMenu}>
      {/* <img src={logo} className='w-32 FaUserCircle ' alt="" /> */}
      <RiMenu2Fill  />
        <div className=" text-white justify-end gap-x-5 flex items-center">
                        
                            
                   <div className="border-2   items-center flex gap-x-1 p-2 px-4 cursor-pointer font-semibold rounded-lg">
                       <FaUser /><div className="hidden md:flex"> Account</div>
                   </div>
                   <div className="border-2 text-xs p-2 py-4 font-semibold cursor-pointer rounded-full">
                   &#x20A6; {balance? balance : "0.00"}
      </div>
      </div>
      </button>
        </div>
    </div>
  )
}

export default Nav