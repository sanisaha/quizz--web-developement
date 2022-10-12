import React from 'react';

const Option = ({ option, handleChange }) => {
    return (
        <div onClick={handleChange} className='p-5 border border-indigo-600 hover:bg-slate-600'>
            <p className='text-center break-all'>{option}</p>
        </div>
    );
};

export default Option;