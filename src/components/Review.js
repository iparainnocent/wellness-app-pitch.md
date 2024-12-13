import React, { useState } from 'react';

const ReviewComponent = () => {
    const [reviews, setReviews] = useState([]);
    const [currentReview, setCurrentReview] = useState({ id: null, text: '' });

    const handleInputChange = (e) => {
        setCurrentReview({ ...currentReview, text: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentReview.id) {
            // Update existing review
            setReviews(reviews.map(review => (review.id === currentReview.id ? currentReview : review)));
        } else {
            // Add new review
            setReviews([...reviews, { id: Date.now(), text: currentReview.text }]);
        }
        setCurrentReview({ id: null, text: '' }); // Reset input
    };

    const handleEdit = (review) => {
        setCurrentReview(review);
    };

    const handleDelete = (id) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    return (
        <div className="review-container">
            <h2>Reviews</h2>
            <form className="review-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={currentReview.text}
                    onChange={handleInputChange}
                    placeholder="Write your review"
                />
                <button type="submit">{currentReview.id ? 'Update' : 'Submit'}</button>
            </form>
            <ul className="review-list">
                {reviews.map(review => (
                    <li key={review.id}>
                        {review.text}
                        <div>
                            <button className="edit-btn" onClick={() => handleEdit(review)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDelete(review.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewComponent;
