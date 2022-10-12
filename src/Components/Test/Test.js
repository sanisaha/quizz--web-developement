import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Question from '../Question/Question';

const Test = () => {
    const test = useLoaderData();
    const { data } = test;
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center font-bold mb-10'>Quiz from <span className='text-4xl'>{data.name}</span></h1>

            </div>
            <div className='mx-1 lg:mx-20'>
                {
                    data.questions.map((question, index) => <Question
                        index={index}
                        key={question.id}
                        question={question}
                    ></Question>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Test;