import React, { Component } from 'react';

const Username = ({ setUsername, username}) => (
  <div className="input-group mb-3">
      <span className="input-group-addon"><i className="icon-user"></i>
      </span>
      <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e)}/>
  </div>
);

export default Username;