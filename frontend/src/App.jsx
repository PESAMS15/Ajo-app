import logo from './Assets/Free_Sample_By_Wix__1_-removebg-preview.png';
// import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './components/Loader';
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom';


function App() {
  const navigate = useNavigate()
  const [loader, setloader] = useState(false)

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  let details = {
    userName: userName,
    password: password,
    email: email
  }
  let uri = "http://localhost:6650/users/signup"
  const signup = () => {
    setloader(true)
    console.log(details)

    axios.post(uri, details).then((res)=>{
      setloader(false)
      console.log(res)
      toast.success(res.data.message)
      // alert(res.data.message)
      setTimeout(() => {
        setloader(false)
        navigate("/signin")
      }, 3000);
    }).catch((err)=>{
      setloader(false)
      console.log(err)
      toast.error(err.response.data.message)
      // alert(err.response.data.message)
    })
  }
  return (
    <>
      <div className='mx-auto'>
      {loader? <Loader />: ""}
        <div className='mx-auto md:w-2/3 w-full md:shadow-2xl p-3  '>
          <div className='mx-auto my-3  py-4'>
          <img className='w-32 mx-auto' src={logo} alt="" />
            <h6 className='display-6 fw-bold mb-3 text-3xl font-semibold font-mono text-center'>Create account</h6>
            <label className='text-gray-500'>Username:</label>
            <input placeholder='Username' type="text" className=" mb-4 bg-indigo-100 block outline-none rounded-md w-full py-3 px-2" onChange={(e)=>setUserName(e.target.value)} />
            <label className='text-gray-500' htmlFor="">Email:</label>
            <input placeholder='Email' type="text" className="bg-indigo-100 block outline-none rounded-md w-full py-3 px-2 mb-4" onChange={(e)=>setEmail(e.target.value)} />
            <label className='text-gray-500' htmlFor="">Password</label>
            <input placeholder='Password' type="password" className="bg-indigo-100 block outline-none rounded-md w-full py-3 px-2 mb-4" onChange={(e)=>setPassword(e.target.value)} />
            <button className='w-full bg-indigo-500 text-white rounded-xl my-2 py-3' onClick={signup}>Submit</button>
            <div className="my-3 text-xs text-center text-blue-500 hover:underline">
              <Link to="/signin">Already have an account, logiin </Link>
            </div>
          </div>
        </div>
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
    </>
  );
}

export default App;
