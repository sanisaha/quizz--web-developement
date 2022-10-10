import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Topics = () => {
    return (
        <div className='w-full p-10 mt-0'>
            <header className="w-full bg-no-repeat h-96 bg-cover bg-center bg-[url('/public/images/web-quizz.png')]">
                <div className='p-20'>
                    <h1 className='text-white w-2/5 font-bold text-4xl'>Learn Faster. Stay Motivated. Study Smarter</h1>
                    <div>
                        <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><FontAwesomeIcon icon={faMagnifyingGlass} /></svg>
                            </span>
                            <input className="mt-5 placeholder:italic placeholder:text-slate-400 block bg-white w-2/6 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search here" type="text" name="search" />
                        </label>
                    </div>

                </div>
                <div className='ml-20 mb-20'>
                    <button className='btn bg-violet-500'>SignUp Now</button>
                </div>


            </header>
        </div>


    );
};

export default Topics;