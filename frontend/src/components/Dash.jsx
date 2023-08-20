import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



const Dash = () => {
  const { isFetching, user, fetchingFailed } = useSelector((state)=> state.user)

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
  return (
    <div>
      <h1 className=" text-end text-3xl text-gray-700 font-semibold">
      Good {timeOfDay}, {user.userName}!
      </h1>
    </div>
  )
}

export default Dash