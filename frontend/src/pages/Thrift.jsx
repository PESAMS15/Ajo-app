import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,  } from 'react-router-dom'
import Loader from '../components/Loader';
import { ToastContainer, toast } from 'react-toastify'
import ShareButton from '../components/ShareButton';

function ThriftDetails({ oke }) {
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

  // if (!thrift) {
  //   return <div className="text-center">Loading thrift...</div>;
  // }

  return (
    <div className="container text-center mx-auto mt-8">
      {loader? <Loader /> :
      <>
      <h2 className="text-4xl md:text-center font-bold mb-4">{thrift.thriftName}</h2>
      <div className="my-4 md:flex font-semibold justify-between">
      <p className="my-2">Thrift Admin: {thrift.thriftAdmin}</p>
      <p className='my-2'>Thrift status: {thrift.thriftStatus}</p>
      </div>
      <div className='text-start'>
       <h4 className='text-2xl my-3 font-semibold'> thrift members: </h4>{thrift && thrift.thriftMembers.map((member, index)=>(
          <p key={index}>{index + 1}. {member}</p>
        ))}
      </div>
      <ShareButton id={thrift._id} thriftName={thrift.thriftName} />
      {/* Display other thrift details as needed */}
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

export default ThriftDetails;
