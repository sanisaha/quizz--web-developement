import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = (quiz) => {
    const { id, name, logo, total } = quiz.quiz;
    const navigate = useNavigate();
    const btnNavigate = (id) => {
        navigate(`/quiz/${id}`)
    }
    return (
        <div className="card w-96 bg-indigo-300">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body bg-indigo-100 shadow-xl">
                <h2 className="card-title">{name}</h2>
                <p>total number of quiz: {total}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => { btnNavigate(id) }} className="btn btn-primary">Participate Now</button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;