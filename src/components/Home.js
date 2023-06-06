import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import "../home.css"
import komp1 from "../slike/komp1.jpg"
import komp2 from "../slike/komp2.jpg"
import komp3 from "../slike/komp3.jpg"
import komp4 from "../slike/komp4.jpg"
import komp5 from "../slike/komp5.jpg"
import komp6 from "../slike/komp6.jpg"
import komp7 from "../slike/komp7.jpg"
import komp8 from "../slike/komp8.jpg"
import komp9 from "../slike/komp9.jpg"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  handleAddToCart = (product) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product],
    }));
  }

  render() {
    return (
      <div className="home">
        <div className="home-banner">
          <h1>Welcome to Our Webshop</h1>
        </div>

        <div className="home-product-list">
          <div className="home-product">
            <img src={komp1} alt="Product 1" />
            <h3>PCplus Storm</h3>
            <p>Price: 1.180 €</p>
            <a href="https://www.mall.hr/racunala-i-serveri/pcplus-storm-gaming-stolno-racunalo-143196" target="_blank" rel="noopener noreferrer">More about this product</a>
            <br /><br />
            <button onClick={() => this.handleAddToCart('PCplus Storm')}>Add to Cart</button>
          </div>
          <div className="home-product">
            <img src={komp2} alt="Product 2" />
            <h3>PCX Extian</h3>
            <p>Price: 1.298,24 € </p>
            <a href='https://www.mall.hr/stolna-racunala/pcx-extian-stolno-gaming-racunalo-pcx-extian-gy7-6-' target="_blank">More about this product</a>
            <br /> <br />
            <button>Add to Cart</button>
          </div>
          <div className="home-product">
            <img src={komp3} alt="Product 2" />
            <h3>PCplus (141359)</h3>
            <p>Price: 1.433,39 €</p>
            <a href='https://www.mall.hr/stolna-racunala/pcplus-gamer-stolno-racunalo-141359-?src=sug&s=PcPlus%28141359%29' target="_blank">More about this product</a>
            <br /> <br />
            <button>Add to Cart</button>
          </div>
          <div className="home-product">
            <img src={komp4} alt="Product 2" />
            <h3>Anni (ATPII-GX7-7289)</h3>
            <p>Price: 1.105,58 €</p>
            <a href='https://www.mall.hr/racunala-i-serveri/anni-gamer-stolno-gaming-racunalo-atpii-gx7-7289' target="_blank">More about this product</a>
            <br /> <br />
            <button>Add to Cart</button>
          </div>
          <div className="home-product">
            <img src={komp5} alt="Product 2" />
            <h3>Lenovo Legion T7 </h3>
            <p>Price: 4.825,54 €  </p>
            <a href='https://www.mall.hr/racunala-i-serveri/lenovo-legion-t7-stolno-gaming-racunalo-i9-12900kf-64gb-ssd3tb-rtx3080ti-dos-crno-90s2005yrm' target="_blank">More about this product</a>
            <br /> <br />
            <button>Add to Cart</button>
          </div>
          <div className="home-product">
            <img src={komp6} alt="Product 2" />
            <h3>ASUS ROG Strix</h3>
            <p>Price: 1.527,78 € </p>
            <a href='https://www.mall.hr/racunala-i-serveri/asus-rog-strix-ga15-g15dk-wb7420w-stolno-gaming-racunalo-90pf02q1-m00xd0-' target="_blank">More about this product</a>
            <br /> <br />
            <button>Add to Cart</button>
          </div>
          <div className="home-product">
            <img src={komp7} alt="Product 2" />
            <h3>Lenovo IdeaCentre 5 </h3>
            <p>Price: 509,85 € </p>
            <a href='https://www.mall.hr/racunala-i-serveri/lenovo-ideacentre-5-stolno-racunalo-r3-5300g-8gb-ssd256gb-uma-dos-tower-siva-90rx007asc' target="_blank">More about this product</a>
            <br /> <br />
            <button>Add to Cart</button>
          </div>
          <div className="home-product">
            <img src={komp8} alt="Product 2" />
            <h3>Lenovo IdeaPad 3</h3>
            <p>Price: 284 €</p>
            <a href='https://www.mall.hr/prijenosna-racunala/lenovo-ideapad-3-prijenosno-racunalo-n4020-4gb-ssd128gb-15-6hd-w11h-81wq00kssc' target="_blank">More about this product</a>
            <br /> <br />
            <button>Add to Cart</button>
          </div>
          <div className="home-product">
            <img src={komp9} alt="Product 2" />
            <h3>Chuwi HeroBook Pro</h3>
            <p>Price: 297 €</p>
            <a href='https://www.mall.hr/prijenosna-racunala/chuwi-herobook-pro-prijenosno-racunalo' target="_blank">More about this product</a>
            <br /> <br />
            <button>Add to Cart</button>
          </div>

        </div>
      </div>
        
    );
  }
}

export default Home;

