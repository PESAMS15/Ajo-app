import axios from 'axios'
import React from 'react'
import img from "../Assets/OIP.jpg"
import { useSelector } from 'react-redux'
import TimeAgo from '../components/TimeAgo'

const Transactions = () => {
    const {  transactions  } = useSelector((state)=> state.transactions)
    const reversedTransactions = [...transactions].reverse();
    console.log(reversedTransactions);
    function formatDate(dateString) {
        const today = new Date();
        const inputDate = new Date(dateString);
      
        // Check if the date is today
        if (
          inputDate.getDate() === today.getDate() &&
          inputDate.getMonth() === today.getMonth() &&
          inputDate.getFullYear() === today.getFullYear()
        ) {
          return 'Today';
        }
      
        // Check if the date is yesterday
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        if (
          inputDate.getDate() === yesterday.getDate() &&
          inputDate.getMonth() === yesterday.getMonth() &&
          inputDate.getFullYear() === yesterday.getFullYear()
        ) {
          return 'Yesterday';
        }
      
        // If the date is neither today nor yesterday, you can format it in a different way
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return inputDate.toLocaleDateString(undefined, options);
      }

    
  return (
    <div >
        <h1 className='text-3xl my-3 font-semibold'>Transactions</h1>
        <div className="flex md:px-6 sticky top-20 md:static bg-white justify-between items-center">
        <h5 className='text-gray-600 font-semibold md:w-1/3 md:ps-10   flex items-center'> <span className='bg-gray-600 w-2 me-1 p-1 block  rounded-full'></span> Status</h5>
        <h5 className='text-gray-600 font-semibold md:w-1/2 md:pe-10 justify-center   flex items-center'> <span className='bg-gray-600 w-2 me-1 p-1 block  rounded-full'></span>Amount</h5>
        <h5 className='text-gray-600 font-semibold md:w-1/2 justify-center  flex items-center'> <span className='bg-gray-600 w-2 me-1 p-1 block  rounded-full'></span>Description</h5>
        <h5 className='text-gray-600 font-semibold md:w-1/2 justify-end  md:pe-5 flex items-center'> <span className='bg-gray-600 w-2 me-1 p-1 block  rounded-full'></span>Date</h5>



        </div>
        <div>
            {!transactions? <h1 className='text-center'>Sorry you haven't made any transaction yet</h1> : reversedTransactions.map((el)=>(
                <>
                    <div className='md:p-3    my-3 flex justify-between items-center gap-2 bg-white  md:shadow-md rounded-lg'>
                      <img className='md:w-12 w-7 md:h-12 h-7 md:inline hidden rounded-full' src={img} alt="" />
                      <div className="flex   md:pe-5 items-center text-sm  w-full">
                        <div className='w-1/2 truncate'>
                            <h6 className={` font-medium my-1 capitalize ${el.status=== "failed"? "text-red-500" : "text-green-500" }`}>{ el.status}</h6>
                        </div>
                        <div className='w-1/2 truncate'>
                            <h6 className={` font-medium my-1 capitalize ${el.type=== "debit"? "text-red-500" : "text-green-500" }`}> &#x20A6;{ el.amount.toLocaleString('en-US')}</h6>
                        </div>
                        <div className='w-1/2 text-xs md:text-sm truncate'>
                            <h6 className={` font-medium my-1 capitalize b }`}>{ el.description}</h6>
                        </div>
                        <div className='w-1/2  text-end text-gray-700 md:pe-5'>
                            <h6 className={` font-normal my-1 capitalize`}>{formatDate(el.date)}</h6>
                            <h6 className={` font-normal my-1 `}><TimeAgo timestamp={el.date}  /></h6>
                        </div>
                        </div>


                    </div>
                </>
            ))}
        </div>


    </div>
  )
}

export default Transactions