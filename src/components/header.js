import { Link } from "react-router-dom";
export default function Header() {
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Stream-V</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/home' >Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Genre
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              
              <Link className="dropdown-item" to="/Action" >Action</Link>
            
            </li>
            <li>
              <Link className="dropdown-item"  to="/Adventure">Adventure</Link>
              </li>
            <li><a className="dropdown-item" href="#">Animated</a></li>
            <li><a className="dropdown-item" href="#">Historical</a></li>
            <li><a className="dropdown-item" href="#">Crime</a></li>
            <li><a className="dropdown-item" href="#">Sports</a></li>
            <li><a className="dropdown-item" href="#">Romentic</a></li>
            <li><a className="dropdown-item" href="#">Comedy</a></li>
            {/* <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="alert alert-dark" role="alert">
 Enjoy your weekend
</div>
        </div>
    )
}