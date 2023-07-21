import React from 'react'
import img from "../Assets/img.jpeg"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingSuccessful } from '../Redux/thrifts'
import { Link } from 'react-router-dom'
const Thrifts = ({userName}) => {
  const dispatch = useDispatch();
    
    const [data, setdata] = useState(null)
    const { isFetching, user, fetchingFailed } = useSelector((state)=> state.user)
    const {  thrifts,  } = useSelector((state)=> state.thrifts)
    console.log(user)
   
    console.log(thrifts)
    
    // const token = localStorage.getItem("token")
    // const navigate = useNavigate()
    // setInterval(useEffect(() => {
    //     console.log(token)
    //     axios.get(uri, {
    //         headers: {
    //             Authorization: `bearer ${token}`
    //         }
    //     }).then((res) => {
    //         setdata(res.data.checkUser)
    //     }).catch((err) => {
    //         alert(err.response.data.message)
    //         console.log(err)
    //         navigate("/signin")
    //     })
    // }, []), 1000)
  return (
    <div>
        <div className="flex justify-between items-center">
          <div className='text-3xl font-semibold'>Thrifts</div>
          <div className='text-3xl font-semibold'>{thrifts && thrifts.length}</div>

        </div>
        <div>
        <Link className="text-center mx-auto  block text-blue-500 font-semibold" to="/create">+ Create a Thrift </Link>
          
            {thrifts && thrifts.length ===0? "Sorry You have not joined any thrifts" : thrifts.map((el)=>(
              <>
                  <Link to={`${el._id}`}>
                  <div className='p-3 my-3 flex gap-10 bg-white  shadow-md rounded-lg '>
                      <img className='w-12 h-12 rounded-full' src={img} alt="" />
                      <div>
                        <div className='text-2xl text-blue-500'>{el.thriftName}</div>
                        <div className='text-md my-1 text-gray-500'>
                        &#x20A6; {el.amountPerUser.toLocaleString('en-US')}  {el.subscriptionPlan} pack &#x20A6; {el.amount.toLocaleString('en-US')} • {el.thriftMembers.length}/ {el.maxMem} members
                        </div>
                      </div>
                  </div>
                  </Link>
              </>
            ))}
        </div>
       

    </div>
  )
}

export default Thrifts