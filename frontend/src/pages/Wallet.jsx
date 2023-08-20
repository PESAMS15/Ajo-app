import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import { useSelector } from "react-redux"
import axios from "axios"
// import "./App.css"

const Wallet = () => {
  const publicKey = "pk_test_8f21e3991c1fd9d8ec2c4ebed601bb60552d08e3"
  const [amount, setamount] = useState(0)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const { isFetching, user, fetchingFailed } = useSelector((state)=> state.user)

  console.log(user)

  const componentProps = {
    email: user.email,
    amount: amount *100,
    metadata: {
      name: user.userName,
      phone: phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (response) =>{
      let url = "http://localhost:6650/thrifts/add"
      let data = {
        amount,
        userName: user.userName
      }

      //  alert("Transaction successfully")
       console.log(response)
       axios.post(url, {amount: amount, userName: user.userName}).then((res)=>{
          console.log(res.data)
          window.location.reload();
       }).catch((err)=>{
          console.log(err.response.data.message)
       })


    },
    onClose: () => alert("Transaction Failed"),
  }

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img />
          <div className="item-details">
            <p className="text-4xl mb-10 font-semibold">Fund your wallet</p>
            {/* <p>{amount}</p> */}
          </div>
        </div>
        <div className="  ">
          <form>
          <div className="flex mb-4 justify-between">
            <div className="w-1/2 ">
            <label className="font-semibold block text-left" htmlFor="">First name:</label>
            <input type="text" placeholder="eg: John"  className="outline block w-full my-2  px-3  py-2 outline-1 rounded-xl" />
            </div>
            <div className="w-1/2 mx-3">
            <label className="font-semibold block text-left" htmlFor="">Last  name:</label>
            <input type="text"  placeholder="eg: Doe " className="outline block w-full  my-2  px-3 py-2 outline-1 rounded-xl" />
            </div>
            

          </div>
          <label className="font-semibold block text-left">Amount:</label>
            <input
              className="w-full block px-3 my-4 outline outline-1  py-3 rounded-full"
              type="number"
              placeholder="eg: $1,000"
              id="amount"
              onChange={(e) => setamount(e.target.value)}
            />
          
          
            <label className="font-semibold block  text-left my-4">Phone:</label>
            <input
              type="number"
              id="phone"
              placeholder="eg: +2349123456789"
              className="outline block outline-1 px-3 w-full py-3 rounded-full"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton  className="bg-blue-950 mt-7 w-1/2 md:w-full text-white py-4 font-semibold  rounded-lg" {...componentProps} />
        </div>
      </div>
    </div>
  )
}

export default Wallet