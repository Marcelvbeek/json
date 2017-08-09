import React, { Component } from 'react';
import PassWordcontainer from '../../inputs/password.container';
import UsernameContainer from '../../inputs/username.container';
import Button from '../../inputs/button.component';

const AddAccountPage = ({ setToken, addAccount, data}) => (
    <div className="col-md-8">
        <div className="card-group mb-0">
            <div className="card p-4">
                <div className="card-block">
                    <h1>Maak een account aan</h1>
                    <p className="text-muted">
                        Jouw gegevens:<br/>
                        Token:{data.token}<br/>
                        Message: {data.errorMessage}
                    </p>
                    <UsernameContainer />
                    <PassWordcontainer />
                    <div className="row">
                        <div className="col-6">
                            <button type="button" className="primary" onClick={() => addAccount(
                                {
                                    username: data.username,
                                    password: data.password
                                }
                            )}>
                                Add account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default AddAccountPage;