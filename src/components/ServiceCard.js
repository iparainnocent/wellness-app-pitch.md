import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, description, image, link }) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card h-100">
        {/* Wrap the card in a Link for navigation to the individual service */}
        <Link to={link} className="text-decoration-none text-dark">
          {/* Display the service image */}
          <img 
            src={image} 
            className="card-img-top img-fluid" 
            alt={service} 
          />
          {/* Card body content */}
          <div className="card-body">
            <h5 className="card-title">{service}</h5>
            <p className="card-text">{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;






