import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [name, setname] = useState("")
  const [id, setid] = useState("")
  const [amount, setamount] = useState("")
  const [maxmem, setmaxmem] = useState("")
  const [usname, setusname] = useState("")
  let details = {
    thriftName: name,
    subscriptionPlan: selectedPlan,
    thriftAdmin: usname,
    amount: amount,
    maxMem: maxmem
    
  }
  
  const uri = "http://localhost:6650/users/verify"
  const token = localStorage.getItem("token")
  // const navigate = useNavigate()
  setInterval(useEffect(() => {
      console.log(token)
      axios.get(uri, {
          headers: {
              Authorization: `bearer ${token}`
          }
      }).then((res) => {
          console.log(res.data)
          setusname(res.data.username)
          
      }).catch((err) => {
          alert(err.response.data.message)
          console.log(err)
          navigate("/signin")
      })
  }, []), 1000)
  console.log(usname)



 
  const navigate = useNavigate()
  

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  }
  let url = "http://localhost:6650/thrifts/create"
  const creat = ()=>{
         console.log(details)
        axios.post(url, details).then((res) => {
          console.log(res.data)
          setid(res.data.thrift._id)
          console.log(id)
          alert(res.data.message)
          

        })
        .then(setInterval(() => {
          navigate(`/thrift/${id}`)
        }, 3000))
        .catch((err)=>{
          alert(err.response.data.message)  
        })
  
  }
  return (
    <div className='py-4'>
        <h1 className='text-4xl font-bold text-center  mt-10'>Create a Thrift</h1>
        <div className='md:w-3/4 mx-auto md:mt-16 mt-3 md:shadow-lg md:p-5'>
           <div className="md:flex w-full px-3 gap-16 mt-10  md:my-5 justify-between">
                <div className='md:w-1/2 my-5 md:text-left'>
                <label htmlFor="" className='text-gray-500 block my-2'>Enter group name:</label>
                <input type="text" onChange={(e)=>setname(e.target.value)} className='bg-indigo-100 block outline-none rounded-2xl w-full  py-4 px-2 my-2 ' placeholder='eg: my Thrift' />
                </div>
                 <div className="md:w-1/2 my-5">
                <label for="" className="text-gray-500 items-start block my-2">Choose a plan:</label>
                <select value={selectedPlan} onChange={handlePlanChange} className="bg-indigo-100 block outline-none rounded-2xl w-full py-4 px-2 pr-4 my-2">
                    <option value="" disabled selected>Select a plan</option>
                    <option value="daily">Daily Plan</option>
                    <option value="monthly">Monthly Plan</option>
                    <option value="yearly">Yearly Plan</option>
                </select>
                </div>

           </div>
           <div className="md:flex w-full gap-16 px-3 md:my-5  justify-between">
                <div className='md:w-1/2 my-5  md:text-left'>
                <label htmlFor=""  className='text-gray-500 block my-2'>Amount to be paid:</label>
                <input type="text"  placeholder='eg: $10,000' onChange={(e)=> setamount(e.target.value)} className='bg-indigo-100 block outline-none rounded-2xl w-full  py-4 px-2 my-2 ' />
                </div>
                <div className='md:w-1/2 my-5   '>
                <label htmlFor="" className='text-gray-500 items-start block my-2'>Maximum number of users:</label>
                <input type="number" onChange={(e) => setmaxmem(e.target.value)}  placeholder='eg: 1-10' className='bg-indigo-100 block outline-none rounded-2xl w-full  py-4 px-2 my-2 ' />
                </div>
           </div>
           <button className='w-full bg-indigo-500 text-white rounded-xl my-2 py-3' onClick={creat}>Submit</button>

        </div>
    </div>
  )
}

export default Create