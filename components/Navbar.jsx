import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import SpaIcon from '@material-ui/icons/Spa';

export default function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed navbar-transparent">
        <div className="container-fluid">
          <a className="navbar-brand navimage" href="/" style={{color: "black", fontFamily: "Quicksand"}}><SpaIcon /> CBD France</a>
        </div>
      </nav>
    )
}
