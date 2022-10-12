import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

const Error = () => {
    return (
        <div className='text-center text-3xl my-10'>
            <h1 className='p-5'><FontAwesomeIcon className='text-end px-2' icon={faBug} />404</h1>
            <h1 className='mb-5'>Page Not Found!</h1>
            <p>We are sorry, the page you requested could not be found. Please, go back to the homepage or contact support.</p>
            <button className='btn btn-info m-5'>Read More</button>
        </div>
    );
};

export default Error;