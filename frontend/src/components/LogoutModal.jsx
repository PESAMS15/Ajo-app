import React, { useState } from 'react';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  return (
    <div className={`fixed z-50 inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white md:w-1/3 w-full p-8 py-16 text-center md:text-start rounded-xl shadow-lg z-10">
        <p className="text-lg font-semibold mb-4">Are you sure you want to logout?</p>
        <div className="flex justify-center mt-5 md:justify-end">
          <button
            onClick={onLogout}
            className="px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
          >
            Logout
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
