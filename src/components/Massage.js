import React from 'react';
import ReviewComponent from './Review';

const Massage = () => {
  return (
    <div className="container py-5">
      <h2>Massage Therapy</h2>

      {/* Introduction Section */}
      <p>
        Relax and rejuvenate with our specialized massage therapy. Our certified therapists will help relieve stress, reduce muscle tension, and improve circulation, offering a truly calming experience. Whether you're looking to relax, recover from an injury, or just enjoy some self-care, we have the right massage treatment for you.
      </p>

      
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1138186021/photo/young-massage-therapist-massaging-a-woman.jpg?s=612x612&w=0&k=20&c=F1fenaIF6lzXGdzHC_PKjmM75uAhTlw3XTz_SoIWFNw=" alt="Swedish Massage" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Swedish Massage</h5>
              <p className="card-text">
                A classic massage designed to relax and energize you. This gentle technique uses long, flowing strokes to improve circulation and promote relaxation.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/521665601/photo/deep-tissue-massage.jpg?s=612x612&w=0&k=20&c=vM9eX493ZbRbi1FXafUeKLuCAHixxXE8Wex4_brXMR4=" alt="Deep Tissue Massage" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Deep Tissue Massage</h5>
              <p className="card-text">
                Ideal for relieving chronic muscle tension and knots. This massage uses slower, more intense pressure to target deeper layers of muscle and connective tissue.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/184857385/photo/hot-stone-massage-therapy.jpg?s=612x612&w=0&k=20&c=2EtO2FFRwk1HqEzamqaWpBnN07lWDqX3Pbeu43IjFRk=" alt="Hot Stone Massage" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Hot Stone Massage</h5>
              <p className="card-text">
                Experience the soothing warmth of heated stones combined with a therapeutic massage. This technique helps to relax tight muscles and ease tension.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mb-5">
        <h3>Benefits of Massage Therapy</h3>
        <ul>
          <li>Relieves muscle tension and pain</li>
          <li>Promotes relaxation and reduces stress</li>
          <li>Improves circulation and flexibility</li>
          <li>Reduces anxiety and boosts mood</li>
          <li>Enhances overall well-being and recovery</li>
        </ul>
      </div>

      
      <div className="mb-5">
        <h3>How Our Massage Sessions Work</h3>
        <p>
          Our massage therapy sessions are customized to meet your needs and preferences. Each session typically lasts 60 minutes, with the option to extend if desired. Whether you prefer a gentle Swedish massage or a more intense deep tissue massage, we tailor our techniques to ensure you get the best possible experience.
        </p>
        <p>
          All of our therapists are fully certified and experienced in a range of therapeutic massage techniques. We offer both in-person and virtual consultations to discuss your needs and goals.
        </p>
      </div>

      {/* Booking Button */}
      <div className="text-center">
        <button className="btn btn-primary btn-lg">Book a Massage Session</button>
      </div>

      {/* Review Section */}
      <ReviewComponent />
    </div>
  );
};

export default Massage;
