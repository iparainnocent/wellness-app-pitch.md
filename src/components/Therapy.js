import React from 'react';
import ReviewComponent from './Review';

const Therapy = () => {
  return (
    <div className="container py-5">
      <h2>Therapy Services</h2>
      
      
      <p>
        Our therapeutic services aim to improve both your physical and mental well-being. 
        We offer personalized therapy sessions to help you overcome challenges and find balance in your life. 
        Whether you're dealing with stress, anxiety, depression, or looking to improve your emotional resilience, 
        our licensed therapists are here to support you every step of the way.
      </p>
      
      
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1011888356/photo/a-professional-child-education-therapist-having-a-meeting-with-a-kid-in-a-family-support.jpg?s=612x612&w=0&k=20&c=xYNClTa_wyZ7Mk-eIVL64RnxihF2uIe7M_o4B5GjE2c=" alt="Cognitive Behavioral Therapy" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Cognitive Behavioral Therapy (CBT)</h5>
              <p className="card-text">
                CBT helps you identify and change negative thought patterns and behaviors. 
                It is effective for treating a variety of conditions, including anxiety, depression, and stress.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1374854884/photo/young-couple-going-to-marriage-counseling.jpg?s=612x612&w=0&k=20&c=nrKevlAbQ78-EfjFoYgk7GZeqa391rak1r9c1VV6f0g=" alt="Couples Therapy" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Couples Therapy</h5>
              <p className="card-text">
                Couples therapy is designed to help partners navigate conflicts, improve communication, 
                and strengthen their relationship. Our therapists create a safe space for couples to express their feelings and find solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1218464621/photo/parkinson-disease-patient-alzheimer-elderly-senior-arthritis-person-hand-in-support-of.jpg?s=612x612&w=0&k=20&c=9Qr5qB0cKI6Blj_FYZIdbsYOsgWiaWxlV3_qA3Uq83I=" alt="Trauma Therapy" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Trauma Therapy</h5>
              <p className="card-text">
                Trauma therapy helps individuals process and heal from past trauma. Our therapists use evidence-based techniques 
                to help you reclaim your life and emotional well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mb-5">
        <h3>Benefits of Therapy</h3>
        <ul>
          <li>Improved mental and emotional well-being</li>
          <li>Better stress management</li>
          <li>Enhanced self-awareness and personal growth</li>
          <li>Stronger coping skills for life challenges</li>
          <li>Improved relationships and communication skills</li>
        </ul>
      </div>

      
      <div className="mb-5">
        <h3>How Therapy Sessions Work</h3>
        <p>
          Our therapy sessions are confidential and tailored to your specific needs. 
          Each session lasts approximately 50 minutes and can be scheduled at a time that is convenient for you. 
          We offer in-person and online sessions to ensure that you receive the support you need no matter where you are.
        </p>
        <p>
          Our therapists are licensed professionals with years of experience in providing a safe and supportive environment 
          for healing and personal growth.
        </p>
      </div>

      
      <div className="text-center">
        <button className="btn btn-primary btn-lg">Book a Therapy Session</button>
      </div>

      
      <ReviewComponent />
    </div>
  );
};

export default Therapy;
