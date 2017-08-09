import React, { Component } from 'react';
import PassWordcontainer from '../../inputs/password.container';
import UsernameContainer from '../../inputs/username.container';
import Button from '../../inputs/button.component';
import { Link } from 'react-router';

const LoginPage = ({login, data}) => (
    <div className="col-md-8">
        <div className="card-group mb-0">
            <div className="card p-4">
                <div className="card-block">
                    <h1>Login</h1>
                    <p className="text-muted">
                        Jouw gegevens:<br/>
                        Username: {data.username}<br/>
                        Password: {data.password}<br/>
                        Token:{data.token}<br/>
                        Message: {data.errorMessage}
                    </p>
                    <UsernameContainer />
                    <PassWordcontainer />
                    <div className="row">
                        <div className="col-6">
                            <button type="button" className="primary" onClick={() => login(
                                {
                                    username: data.username,
                                    password: data.password
                                }
                            )}>
                                Login
                            </button>
                        </div>
                        <div className="col-6 text-right">
                            <button type="button" className="btn btn-link px-0">
                                <Link to="/add-account">Add account</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default LoginPage;