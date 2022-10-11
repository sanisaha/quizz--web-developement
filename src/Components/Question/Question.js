import React from 'react';

const Question = (props) => {
    const { id, question, options } = props.question;
    return (
        <div className='p-5'>
            <div className='bg-slate-200'>
                <div className='border border-indigo-300 text-center p-5 font-semibold'>
                    <h2>{question}</h2>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    {
                        options.map(option => <div className='border border-indigo-300'>
                            <li className='p-5'>{option}</li>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;