import { Outlet, Link } from "react-router-dom";
import logo from './logocon/perfume.png'
import searchbar from './logocon/search (1).png'
import shopping from './logocon/shopping-bag (3).png'



const Layout = () => {
  

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo-container">
                      <img src={logo} alt={logo} />
                      <h3>Scenty</h3>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/account">My Acount</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="searchbox">
            <li>
              <img className="searchbar" src={searchbar} />
            </li>
            <li>
              <img className="shopping" src={shopping} />
            </li>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
