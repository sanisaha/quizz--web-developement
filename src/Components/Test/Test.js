import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Test = () => {
    const test = useLoaderData();
    const { data } = test;
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center font-bold'>Quiz from <span className='text-4xl'>{data.name}</span></h1>
            </div>
            {
                data.questions.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }
            <div>

            </div>
        </div>
    );
};

export default Test;