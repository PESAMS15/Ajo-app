import React, { useEffect, useState } from 'react';

function TimeAgo({ timestamp }) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const updateRelativeTime = () => {
      const now = new Date();
      
      const pastTime = new Date(timestamp);
      console.log(pastTime)
      const timeDifference = now - pastTime;
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      if (seconds < 60) {
        setTimeAgo('just now');
      } else if (minutes < 60) {
        setTimeAgo(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`);
      } else if (hours < 24) {
        setTimeAgo(`${hours} ${hours === 1 ? 'hour' : 'hours'} ago`);
      } else {
        // Display the specific time if it's more than 24 hours
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        setTimeAgo(`at ${pastTime.toLocaleTimeString(undefined, options)}`);
      }
    };

    // Update the relative time every minute
    const intervalId = setInterval(updateRelativeTime, 60000);

    // Initial update
    updateRelativeTime();

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [timestamp]);

  return <div className="time-ago">{timeAgo}</div>;
}

export default TimeAgo;