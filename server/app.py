from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, User, Service, Review
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///wellness.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

@app.route('/')
def index():
    return "Wellness API"

class Reviews(Resource):
    def get(self):
        response_dict_list = [review.to_dict() for review in Review.query.all()]
        return response_dict_list, 200  
    
    
api.add_resource(Reviews, '/reviews')

class ReviewsByID(Resource):
    def get(self, review_id):
        review = Review.query.get(review_id)
        
        if not review:
            return {"message": "Review not found"}, 404
        
        return {"review": review.to_dict()}, 200
    
api.add_resource(ReviewsByID, '/reviews/<int:review_id>')  

class PostReviews(Resource):
    def post(self):
        data = request.get_json()

        if not all(field in data for field in ["user_id", "service_id", "rating"]):
            return {"message": "Missing required fields: user_id, service_id, rating"}, 400
        
        new_review = Review(
            user_id=data["user_id"],
            service_id=data["service_id"],
            rating=data["rating"],
            comment=data.get("comment", "")
        )

        try:
            db.session.add(new_review)
            db.session.commit()
            return {"message": "Review added successfully", "review": new_review.to_dict()}, 201
        except Exception as e:
            db.session.rollback()
            return {"message": str(e)}, 500

api.add_resource(PostReviews, '/reviews')

class UpdateReview(Resource):
    def patch(self, review_id):
        data = request.get_json()
        review = Review.query.get(review_id)
        
        if not review:
            return {"message": "Review not found"}, 404

        if "rating" in data:
            review.rating = data["rating"]
        if "comment" in data:
            review.comment = data["comment"]
        
        try:
            db.session.commit()
            return {"message": "Review updated successfully", "review": review.to_dict()}, 200
        except Exception as e:
            db.session.rollback()
            return {"message": str(e)}, 500
    
api.add_resource(UpdateReview, '/reviews/<int:review_id>')  
class DeleteReview(Resource):
    def delete(self, review_id):
        review = Review.query.get(review_id)
        
        if not review:
            return {"message": "Review not found"}, 404
        
        try:
            db.session.delete(review)
            db.session.commit()
            return {"message": "Review deleted successfully"}, 200
        except Exception as e:
            db.session.rollback()
            return {"message": str(e)}, 500

api.add_resource(DeleteReview, '/reviews/<int:review_id>')  
if __name__ == '__main__':
    app.run(port=5555, debug=True)
