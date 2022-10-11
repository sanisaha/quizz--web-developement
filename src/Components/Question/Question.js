import React from 'react';

const Question = (props) => {
    const { id, question, options } = props.question;
    return (
        <div className='p-5'>
            <div>
                <h2>{question}</h2>
            </div>
            <div className='grid grid-cols-2'>
                {
                    options.map(option => <div>
                        <li className='p-5'>{option}</li>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Question;