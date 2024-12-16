import React from 'react';
import ServiceCard from './ServiceCard';
import serviceData from '../data/services.json'; 
import ServiceSearch from './Search'; 

const ServiceSection = () => (
  <div className="container my-5">
    <h2 className="text-center mb-4">Our Services</h2>

    {/* Include the search functionality here */}
    <ServiceSearch />

    <div className="row">
      {serviceData.map((service, index) => (
        <ServiceCard
          key={index}
          service={service.service}
          description={service.description}
          image={service.image}
          link={`/${service.service.toLowerCase()}`} 
        />
      ))}
    </div>
  </div>
);

export default ServiceSection;
