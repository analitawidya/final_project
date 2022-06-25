import React from 'react'




function Register() {
    return (
        <div className="flex flex-col item-center justify-center min-h-screen py-2 ">
            <main className='flex flex-col items-center justify-center w-full flex-1 px-20'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-xl'>
                    <div className='w-3/5 p-5'>
                        <div className='text-left font-bold'>
                            <span className='text-violet-400'>Lala</span><b>Rent</b>
                        </div>
                        <div className='py-10'>
                            <h2 className='test-3xl font-bold text-violet-400 mb-2'>Registration</h2>
                            <div className='border-2 w-10 border-violet-400 inline-block mb-2'></div>
                            <div className='flex flex-col item-center'>
                                <form>
                                    <div class="col-span-6 sm:col-span-3">

                                        <label for="first-name" class="block text-sm font-medium text-gray-700">Username</label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium text-gray-700">Password</label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last-name" class="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                        <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email-address" class="block text-sm font-medium text-gray-700">Phone Number</label>
                                        <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md" />
                                    </div>


                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email-address" class="block text-sm font-medium text-gray-700">Address</label>
                                        <textarea type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md" />
                                    </div>
                                </form>
                                <div className='mt-3'>
                                    <button
                                        className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-1 rounded-lg transition'
                                        to='/login'
                                    >
                                        Sign up
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Register