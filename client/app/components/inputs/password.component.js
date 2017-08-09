import React, { Component } from 'react';

const Password = ({ setPassword, password}) => (  
  <div className="input-group mb-4">
      <span className="input-group-addon"><i className="icon-lock"></i>
      </span>
      <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e)}/>
  </div>
);

export default Password;