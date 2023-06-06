import cart from "../slike/cart.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://www.mall.hr/racunala-i-serveri" target="_blank" rel="noopener noreferrer">Find more</a>
          </li>
          
          <li>
            <Link to="/cart"><img src={cart} id="cart"></img></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;