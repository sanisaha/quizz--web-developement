import React, { useState } from 'react';

const Question = (props) => {
    console.log(props);
    const { question, options, correctAnswer } = props.question;
    const handleChange = (e) => {
        let text = e.target.textContent;
        if (text === correctAnswer) {
            return (
                <div className="toast toast-top toast-end">
                    <div className="alert alert-info">
                        <div>
                            <span>Congrats,answer is correct</span>
                        </div>
                    </div>
                </div>
            )
        } else {
            alert('better luck next time')
        }
    }
    return (
        <div className='p-5'>
            <div className='bg-slate-200'>
                <div className='border border-indigo-300 text-center p-5 font-semibold'>
                    <h2>{question}</h2>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    {
                        options.map((option) => <div className='border border-indigo-300'>
                            <li onClick={handleChange} className='p-5 list-none hover:bg-slate-600'>{option}</li>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;