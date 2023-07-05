import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="topnav">
            <Link to="/">Početna strana</Link>
            <Link to="/proteini">Proteini</Link>
            <Link to="/kontakt">Kontakt strana</Link>
        </div>
    );
}

export default Navbar;