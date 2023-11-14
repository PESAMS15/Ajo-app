import React from 'react';

const ShareButton = ({thriftName, id}) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Join ${thriftName}`,
          text: `Click on this link to join ${thriftName} !`,
          url: `http://localhost:3000/dashboard/join/${id}`,
        });
      } else {
        // Fallback for browsers that do not support the Web Share API
        alert('Web Share API is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <button onClick={handleShare} className=" bg-blue-500 w-12 h-12 fixed bottom-5 right-5 rounded-full block  font-medium  text-white">Share</button>
  );
};

export default ShareButton;
