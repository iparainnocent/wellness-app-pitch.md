import React from 'react';

function ServiceCard({ title, description, image }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
