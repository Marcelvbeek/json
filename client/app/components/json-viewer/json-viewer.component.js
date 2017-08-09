import React, { Component } from 'react';
import ListContainer from './list/list.container';
import SearchBoxContainer from './searchQuestion/search-box.container';

const jsonViewer = ({questions, activeQuestion, setActiveQuestion}) => (
    <div className="col-md-12">
        <div className="row">
            <div className="col-md-3">
                <div className="list-group">
                    <SearchBoxContainer>
                    </SearchBoxContainer>
                    <ListContainer>
                    </ListContainer>
                </div>
            </div>
            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                        {activeQuestion.titel}
                    </div>
                    <div className="card-block">
                        <form>
                            {activeQuestion.fields.map((field, i) =>
                                {
                                    if(field.controller == 'text') {
                                        return <div className="form-group" key={i}>
                                            <label htmlFor={field.key}>{field.title}</label>
                                            <input type="text" className="form-control" id={field.key} aria-describedby="help" placeholder={field.toelichting}/>
                                            <small id="help" className="form-text text-muted">{field.toelichting}</small>
                                        </div>
                                    }
                                    else if(field.controller == 'radio') {
                                        return <div className="form-check" key={i}>
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"/>
                                                {field.title}
                                            </label>
                                        </div>
                                    }
                                    else if(field.controller == 'dropdown') {
                                        return <div className="form-group" key={i}>
                                            <label htmlFor="exampleSelect1">{field.titel}</label>
                                            <select className="form-control" id={field.key}>
                                                {field.values.map((value, i) => {
                                                    return <option key={i}>{value}</option>
                                                })}
                                            </select>
                                        </div>
                                    }
                                }
                                
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>    
)

export default jsonViewer;