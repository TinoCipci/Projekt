import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Testimonials from './components/Testemonials';

function App() {
  return (
    <Router>

        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={Testimonials} />
        <Footer />

    </Router>
  );
}

export default App;