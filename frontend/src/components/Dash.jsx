import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



const Dash = () => {
  const { isFetching, user, fetchingFailed } = useSelector((state)=> state.user)

 
  return (
    <div>
      <h1 className=" text-center text-3xl text-gray-700 font-semibold">
        hello {user &&  user.userName}!!!

      </h1>
    </div>
  )
}

export default Dash