import './navbar.css'

import { Link } from 'react-router-dom';
function Navbar()
{

    
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/body">Body </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feature">Features</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="/">Pricing</Link>
        </li>
        
      </ul>
    </div>
  </nav>);
}

export default Navbar;