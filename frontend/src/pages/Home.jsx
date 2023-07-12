import React from 'react'
import logo from "../Assets/pgi-white.png"
import { Link } from 'react-router-dom'
import LandingPage from '../components/landing'

const Home = () => {
  return (
   <div className="div">
         <div className="bg-cus bg-cover bg-center  h-fit w-full">
        <div className="container mx-auto xl:px-16 flex justify-between items-center">
            <div>
                <img className="w-32" src={logo} alt="" />

            </div>
            <div className="flex gap-x-10">
                <button><Link  className=" border-2 text-xl rounded-3xl p-2 px-9 shadow-sm text-white no-underline" to="/signin">Log In</Link></button>
                <button ><Link to="/signup" className=" border-2 text-xl rounded-3xl p-2 px-4 text-black  bg-white no-underline"  >Create an account</Link></button>
            </div>
        </div>
       <div className="md:p-16">
       <h1 className="lg:text-6xl md:w-5/12 font-semibold space-y-40 leading-tight md:text-5xl text-5xl text-center md:text-left mx-auto md:mx-0 w-full  mt-20   text-white">
                Unlock the Power 
        of Thrift and Achieve 
        Your Financial Goals.
        </h1>
        <button className="my-3 px-10 text-white py-2 text-xl rounded-3xl bg-gray-700 border-2 border-slate-50">Create a Thrift  </button>
       </div>
       
    </div>
    <LandingPage />
   </div>
  )
}

export default Home