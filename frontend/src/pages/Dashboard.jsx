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



const Dashboard = () => {
     const dispatch = useDispatch()
  const { isFetching, user, fetchingFailed } = useSelector((state)=> state.user)
    const uri = "http://localhost:6650/users/verify"
    const [data, setdata] = useState(null)
    const [wallet, setwallet] = useState(0)
    const token = localStorage.getItem("token")
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
            axios.post("http://localhost:6650/thrifts//allthrifts", {userName: res.data.checkUser.userName}).then((res) => {
                // console.log(res.data)
                dispatch(fetchingSuccess(res.data.userThrifts))
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
    
        function thrift() { 
          
        }

    // console.log(data)
    // setwallet(user.wallet)
    const balance = Number(user.wallet).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,

    })
    
    
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
          <div className='flex justify-between bg-slate-50 pr-16 pt-5'>
                 <Nav />
                 <div className='w-full'>
                     <div className='flex sticky top-0 bg-slate-50 justify-end gap-x-5 it'>
           
                    <div className="border-2 mt-5  items-center flex gap-x-1 p-2 px-4 cursor-pointer font-semibold rounded-lg">
                        <FaUser /><div className="hidden md:flex"> Account</div>
                    </div>
                    <div className="border-2 mt-5 p-3 py-6 font-semibold cursor-pointer rounded-full">
                    &#x20A6; {balance && balance}
                    </div>
                    </div>
                    <div className='mt-20'>
                        <Outlet />
                    </div>
                  </div>

          </div>
           
        </>
    )
}

export default Dashboard