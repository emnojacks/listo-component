import React from 'react';
//stateless functional component shortcut sfc 
//cannot use lifecycle hooks in stateless functional components 

const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="https://www.google.com">
                Grocery Lists &nbsp;
                <span className="badge badge-pill badge-secondary"> {totalCounters}
                </span>
            </a>      
        </nav>
    );
}

export default Navbar;