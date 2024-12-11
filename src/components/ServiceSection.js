import React from "react";
import ServiceCard from "./ServiceCard";
import serviceData from "../data/services.json"; // Assuming JSON file is stored in `src/data`

const ServiceSection = () => (
  <div className="container my-5">
    <h2 className="text-center mb-4">Our Services</h2>
    <div className="row">
      {serviceData.map((service, index) => (
        <ServiceCard
          key={index}
          service={service.service}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  </div>
);

export default ServiceSection;
