import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='container p-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a><Link to={'/'}>Topics</Link></a></li>
                            <li><a><Link to={'/statistics'}>Statistics</Link></a></li>
                            <li><a><Link to={'/blog'}>Blog</Link></a></li>
                        </ul>
                    </div>

                    <a className="font-bold normal-case text-3xl"> <FontAwesomeIcon className='text-5xl' icon={faClipboard} /> Web Quizz</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold text-2xl">
                        <li><Link to={'/'}>Topics</Link></li>
                        <li><Link to={'/statistics'}>Statistics</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Register Now</a>
                </div>
            </div>
            {/* <Link to={'/'}>Topics</Link>
            <Link to={'/statistics'}>Statistics</Link>
            <Link to={'/blog'}>Blog</Link> */}
        </div>
    );
};

export default Header;