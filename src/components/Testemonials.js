import React from 'react';
import "../testemonials.css"

class Testimonials extends React.Component {
  render() {
    const testimonialsData = [
        {
            id: 1,
            name: 'John Doe',
            testimonial: 'I absolutely love this webshop! The selection of products is amazing, and the prices are unbeatable. Highly recommended!',
          },
          {
            id: 2,
            name: 'Jane Smith',
            testimonial: 'Shopping on this website has been a great experience. The products are of excellent quality, and the customer service is top-notch.',
          },
          {
            id: 3,
            name: 'David Johnson',
            testimonial: 'I have been a loyal customer of this webshop for years. They consistently deliver exceptional products with fast shipping. A trusted online store!',
          },
          {
            id: 4,
            name: 'Emily Davis',
            testimonial: 'I couldn nott be happier with my recent purchase from this webshop. The product arrived in perfect condition, and it exceeded my expectations.',
          },
          {
            id: 5,
            name: 'Michael Wilson',
            testimonial: 'I have had a fantastic experience shopping here. The website is user-friendly, and the checkout process is seamless. Great job!',
          },
          {
            id: 6,
            name: 'Sarah Thompson',
            testimonial: 'This webshop has become my go-to place for all my shopping needs. The product selection is extensive, and the prices are unbeatable. Highly recommended!',
          },
          {
            id: 7,
            name: 'Christopher Lee',
            testimonial: 'I recently ordered a product from this webshop, and I am extremely satisfied with my purchase. The delivery was prompt, and the product quality is excellent.',
          },
          {
            id: 8,
            name: 'Olivia Brown',
            testimonial: 'I love the variety of products available on this website. From fashion to electronics, there is something for everyone. I will definitely be back for more!',
          },
    ];

    return (
      <div className="testimonials">
        <h2>Customer Reviews</h2>
        <div className="testimonial-list">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <p className="testimonial-text">{testimonial.testimonial}</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Testimonials;