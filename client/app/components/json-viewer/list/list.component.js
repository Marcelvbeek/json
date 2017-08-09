import React, { Component } from 'react';

const List = ({questions, setActiveQuestion}) => (
    <div>
        {questions.map((question, i) =>
            <a className="list-group-item" key={i} onClick={() => setActiveQuestion(question.id)}>
                {question.titel}
                <span className="badge badge-default badge-pill">{question.id}</span>
            </a>
        )}
    </div>
)

export default List;