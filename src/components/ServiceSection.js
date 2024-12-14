import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSection = ({ filteredServices }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service.service}
              description={service.description}
              image={service.image}
              link={`/${service.service.toLowerCase()}`} // Dynamic link for individual service
            />
          ))
        ) : (
          <p className="text-center">No services found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceSection;





