import React, { Component } from 'react';

import{
  Link
} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav className= 'navigationSection'>
          <ul className= 'ulcomponent'>
            <li className= "first"><Link to="/">Home</Link></li>
            <li><Link to="/Connect">Connect</Link></li>
            <li className= "last"><Link to="/AboutVirat">About Virat</Link></li>
          </ul>


        </nav>
    );
  }
}

export default Nav;
