import React, { Component } from 'react';

class Select extends Component {    
  render() {
    return (
      <div className="row">
        <ul id="dropdown2" className="dropdown-content">
          <li><a href="#!">one<span className="badge">1</span></a></li>
          <li><a href="#!">two<span className="new badge">1</span></a></li>
          <li><a href="#!">three</a></li>
        </ul>
            
      </div>
    );
  }
}

export default Select;
