import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,  } from 'react-router-dom'

function ThriftDetails({ oke }) {
    const route = useParams();
    const id = route.id 
    console.log(id)
  const [thrift, setThrift] = useState(null);

  useEffect(() => {

    axios.get(`http://localhost:6650/thrifts/thrift/${id}`)
    .then((res)=> setThrift(res.data.thrift))
   
   
  }, []);
  function oke(params) {
    
  }
  console.log(thrift)

  if (!thrift) {
    return <div className="text-center">Loading thrift...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{thrift.thriftName}</h2>
      <p className="mb-2">Thrift Admin: {thrift.thriftAdmin}</p>
      {/* Display other thrift details as needed */}
    </div>
  );
}

export default ThriftDetails;
