import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,  } from 'react-router-dom'
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify'

function Join({ oke }) {
  const { isFetching, user, fetchingFailed } = useSelector((state)=> state.user)

  const [loader, setloader] = useState(true)

    const route = useParams();
    const id = route.id 
    console.log(id)
  const [thrift, setThrift] = useState(null);

  useEffect(() => {

    axios.get(`https://persy-grow-investment.onrender.com/thrifts/thrift/${id}`)
    .then((res)=> {
      setloader(false)
    setThrift(res.data.thrift)
  
    }).catch((err)=>{
        setloader(false)
        toast.error(err.response.data.message)
    })
   
   
  }, []);
  // function oke(params) {
    
  // }
  console.log(thrift)
  
  const joinTh =()=>{
    setloader(true)
    axios.post(`https://persy-grow-investment.onrender.com/thrifts/join`, {memberName: user.userName, thriftId: id})
    .then((res)=> {
      setloader(false)
      toast.success(res.data.message)
  
    }).catch((err)=>{
      setloader(false)
      toast.error(err.response.data.message)
  })


  }
  // if (!thrift) {
  //   return <div className="text-center">Loading thrift...</div>;
  // }

  return (
    <div className="container mx-auto mt-8">
      {loader? <Loader /> :
      <>
      <h2 className="text-3xl text-center font-bold mb-4">Are you sure you want to join  {thrift && thrift.thriftName}?</h2>
      {/* <p className="mb-2">Thrift Admin: {thrift.thriftAdmin}</p> */}
      <button onClick={joinTh} className='py-3 my-2 txt-center mx-auto p-2 bg-blue-900 rounded  block text-white '>Join Thrift</button>
      {/* Display other thrift details as needed */}
      <h1>About Thrift</h1>
      <h3>Thrift Admin: {thrift && thrift.thriftAdmin}</h3>
      <h3>{thrift && thrift.thriftMembers.length}  {thrift && thrift.thriftMembers ===1? "memebr is" : "members are"} already in {thrift && thrift.thriftName} </h3>
      </> 
      }
      <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
    </div>
  );
}

export default Join;
