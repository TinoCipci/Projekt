import { Link } from 'react-router-dom';
import "../footer.css"

function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <div class="footer-links">
          <h3>Explore</h3>
          <nav>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div class="footer-info">
          <h3>Contact Us</h3>
          <p>123 Main Street, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Your Webshop Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;