import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option';

const Question = (props) => {
    const { question, options, correctAnswer } = props.question;
    const handleChange = (event) => {
        let text = event.target.innerText;
        if (text === correctAnswer) {
            toast.success('This is correct answer', {
                position: "bottom-right",
                theme: "colored",
                toastId: "success"
            })
        } else {
            toast.error('Incorrect answer', {
                position: "bottom-right",
                theme: "colored",
                toastId: "error"
            })
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
                        options.map((option, index) => <Option
                            key={index}
                            index={index}
                            option={option}
                            handleChange={handleChange}
                        ></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;