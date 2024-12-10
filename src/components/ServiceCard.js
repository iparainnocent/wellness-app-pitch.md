import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceCard = ({ service, description, image }) => (
  <div className="col-md-4 my-3">
    <div className="card">
      {/* Added img-fluid class here */}
      <img src={image} className="card-img-top img-fluid" alt={service} />
      <div className="card-body">
        <h5 className="card-title">{service}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

export default ServiceCard;


