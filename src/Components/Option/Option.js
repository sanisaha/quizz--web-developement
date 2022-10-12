import React from 'react';

const Option = ({ option, handleChange, index }) => {
    return (
        <div className='border border-indigo-300'>
            <li onClick={handleChange} className='p-5 list-none hover:bg-slate-600'>{option}</li>
        </div>
    );
};

export default Option;