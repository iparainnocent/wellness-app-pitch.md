import React from 'react';
import ReviewComponent from './Review';

const Yoga = () => {
  return (
    <div className="container py-5">
      <h2>Yoga Classes</h2>
      
      
      <p>
        Join our Yoga classes to enhance flexibility, mindfulness, and overall well-being. 
        Our expert instructors will guide you through various yoga poses to help you relax 
        and strengthen your body. Whether you're a beginner or an experienced yogi, we offer 
        classes suitable for all levels. Let us help you connect with your body and mind, 
        and find peace through movement.
      </p>
      
      
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1133155626/photo/young-man-practicing-upward-facing-dog-pose.jpg?s=612x612&w=0&k=20&c=OurrPhYAyU2B2TkhHaspwoZmjGC91LR_l9DxF7pULCc=" alt="Yoga Poses" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Improve Flexibility</h5>
              <p className="card-text">
                Our classes focus on improving flexibility by incorporating a variety of poses 
                designed to stretch and strengthen your muscles. Start your journey to a more 
                flexible body today!
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1459345882/photo/relaxing-the-mind-and-finding-inner-peace-with-yoga-senior-woman-meditating-at-home.jpg?s=612x612&w=0&k=20&c=xRNv-XxpuKE5O5-SNtosKgavb5oNv-n0uV_vnsUzDgQ=" alt="Yoga Meditation" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mindfulness and Relaxation</h5>
              <p className="card-text">
                Yoga is not only about physical postures. It also teaches mindfulness and breath control, 
                helping you to relax, de-stress, and focus your mind. Join us to find inner peace and calm.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/637772706/photo/burning-calories-and-strengthening-her-core-with-a-kettlebell.jpg?s=612x612&w=0&k=20&c=t053Km7mFW2GHuT2QB8fPSypXHdrwRmoiE4lcMl7P-4=" alt="Yoga Class" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Build Strength</h5>
              <p className="card-text">
                Regular yoga practice can help to build strength in both the body and mind. Through 
                holding poses and engaging the core, you'll develop the muscle tone and endurance 
                needed for overall well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mb-5">
        <h3>Class Schedule</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>6:00 PM - 7:30 PM</td>
              <td>Jane Doe</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>8:00 AM - 9:30 AM</td>
              <td>John Smith</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>5:00 PM - 6:30 PM</td>
              <td>Emily White</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <div className="text-center">
        <button className="btn btn-primary btn-lg">Make a Booking</button>
      </div>

      <ReviewComponent />
    </div>
  );
};

export default Yoga;
