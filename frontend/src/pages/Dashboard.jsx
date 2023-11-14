import React, { useEffect, useState, } from 'react'
import axios from 'axios'
// import { Outlet } from 'react-router-dom';
import { useNavigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FaUser, FaUsers, FaWallet, FaHistory } from "react-icons/fa";

import Nav from '../components/Nav'
import Thrifts from '../components/Thrifts';
import { fetchingError, fetchingProduct, fetchingSuccessful } from '../Redux/user'
import { fetchingSuccess } from '../Redux/thrifts';
import Loader from '../components/Loader';
import { fetchSuccess } from '../Redux/transactions';



const Dashboard = () => {
    
     const dispatch = useDispatch()
  const { isFetching, user, fetchingFailed } = useSelector((state)=> state.user)
    const uri = "https://persy-grow-investment.onrender.com/users/verify"
    const [data, setdata] = useState(null)
    const [loader, setloader] = useState(true)
    
    // const [wallet, setwallet] = useState(0)
    const token = localStorage.getItem("token")
    // console.log(user)
   
    const navigate = useNavigate()
    setInterval(useEffect(() => {
        dispatch(fetchingProduct)
        // console.log(token)
        axios.get(uri, {
            headers: {
                Authorization: `bearer ${token}`
            }
        }).then((res) => {
            dispatch(fetchingSuccessful(res.data.checkUser))
            // thrift()
            axios.post("https://persy-grow-investment.onrender.com/thrifts//allthrifts", {userName: res.data.checkUser.userName}).then((res) => {
                // console.log(res.data)
                dispatch(fetchingSuccess(res.data.userThrifts))
              })
            axios.post("https://persy-grow-investment.onrender.com/thrifts/transactions", {userName: res.data.checkUser.userName}).then((res)=>{
                setloader(false)
                dispatch(fetchSuccess(res.data.transactions))
            })

        }).then((res)=>{
            
        })
        .catch((err) => {
            dispatch(fetchingError(err.message))
            alert(err.response.data.message)
            console.log(err)
            navigate("/signin")
        })
    }, []), 1000)
    
       
    // console.log(data)
    // setwallet(user.wallet)
    const balance = Number(user.wallet).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,

    })
    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
    
      if (currentHour >= 5 && currentHour < 12) {
        setTimeOfDay('Morning');
      } else if (currentHour >= 12 && currentHour < 18) {
        setTimeOfDay('Afternoon');
      } else {
        setTimeOfDay('Evening');
      }
    }, []);
    
    
    // console.log(wallet)

    // const [files, setFiles] = useState("")
    // const [imageURL, setImageURL] = useState("")
    // const pickFile = (e) => {
    //     const file = e.target.files[0]
    //     const reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onload = () => {
    //         const result = reader.result
    //         setFiles(result)
    //     }
    // }


    // const postImage = () => {
    //     console.log(files)
    //     let url = "http://localhost:6660/users/upload"
    //     axios.post(url, {files:files}).then((result)=>{
    //         console.log(result)
    //         setImageURL(result.data.secure_url)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }


    return (
        <>
            {
                loader? <Loader /> :
                <div className='md:flex  max-w-full justify-between bg-slate-50 md:pr-16 md:pt-5'>
                <Nav balance={balance} />
                {/* <div className="text-gray-700 text-2xl min-w-fit bg-blac z-10 mt-10 font-semibold h-fit ">
                Good {timeOfDay}, {user.userName}!
                </div> */}
                <div className='md:w-full   '>
                    <div className=' px-2  it'>
                        <div className="  justify-end gap-x-5 flex items-center">
                        
                            
                   <div className="border-2 mt-5  items-center flex gap-x-1 p-2 px-4 cursor-pointer font-semibold rounded-lg">
                       <FaUser /><div className="hidden md:flex"> Account</div>
                   </div>
                   <div className="border-2 md:text- mt-5 p-3 py-6 font-semibold cursor-pointer rounded-full">
                   &#x20A6; {balance? balance : "0.00"}
                   </div>
                        </div>
                   </div>
                   <div className='md:mt-20 mt-8 p-2'>
                       <Outlet />
                   </div>
                 </div>

         </div>
          
            }
         
        </>
    )
}

export default Dashboard