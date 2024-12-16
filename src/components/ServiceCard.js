import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard = ({ service, description, image, link }) => (
  <div className="col-md-4 my-3">
    <div className="card">
      <Link to={link}> {/* Wrap the entire card in a Link */}
        <img src={image} className="card-img-top img-fluid" alt={service} />
        <div className="card-body">
          <h5 className="card-title">{service}</h5>
          <p className="card-text">{description}</p>
        </div>
      </Link>
    </div>
  </div>
);

export default ServiceCard;


