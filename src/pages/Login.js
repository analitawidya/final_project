import React from 'react'
import { BsFillPersonFill, BsFillShieldLockFill } from 'react-icons/bs'
import { Link  } from 'react-router-dom'



function Login() {
  return (
    <div className="flex flex-col item-center justify-center min-h-screen py-2 ">
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center '>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-xl'>
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-violet-400'>Lala</span><b>Rent</b>
            </div>
            <div className='py-10'>
              <h2 className='test-3xl font-bold text-violet-400 mb-2'>Login Section</h2>
              <div className='border-2 w-10 border-violet-400 inline-block mb-2'></div>
              <div className='flex flex-col item-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mr-2'><BsFillPersonFill className='text-violet-400 m-2 ' />
                  <input type='text' name="username" placeholder='Username' className='bg-gray-200 outline-none text-sm flex-1'></input>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mr-2'><BsFillShieldLockFill className='text-violet-400 m-2 ' />
                  <input type='password' name="password" placeholder='Password' className='bg-gray-200 outline-none text-sm flex-1'></input>
                </div>
                <div className='mt-3'>
                  <Link
                    className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-1 rounded-lg transition'
                    to='/'
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl py-36 px-12'>
            <p>Get Ready</ p>
            <p>To</p>
            <p>Advertise Your Property</p>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>
            <div className='mb-1'>
                  <Link
                    className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-1 rounded-lg transition'
                    to='/register'
                  >
                    Sign Up
                  </Link>
                </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Login