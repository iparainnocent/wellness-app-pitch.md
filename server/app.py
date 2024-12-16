from flask import Flask, make_response, jsonify, request, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, User, Service, Review
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from werkzeug.security import generate_password_hash


app = Flask(__name__)
app.secret_key = b'\x98v\x01\xe3\x96\xc4^\x14\x8cb\xbb\x03\x97R\xaa\xc2'
CORS(app)
bcrypt = Bcrypt(app)
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

class Users(Resource):
    def get(self):
        response_dict_list = [user.to_dict() for user in User.query.all()]
        return response_dict_list, 200  
    
api.add_resource(Users, '/users')

class PostUsers(Resource):
    def post(self):
        data = request.get_json()

        # Check for required fields including password
        if not all(field in data for field in ["name", "contact", "email", "password"]):
            return {"message": "Missing required fields: name, contact, email, password"}, 400
        
        # Check if user already exists
        existing_user = User.query.filter((User.contact == data["contact"]) | (User.email == data["email"])).first()
        if existing_user:
            return {"message": "User with this contact or email already exists."}, 400
        
        # Create a new user with hashed password
        new_user = User(
            name=data["name"],
            contact=data["contact"],
            email=data["email"]
        )
        
        new_user.set_password(data["password"])  # Hashing the password using set_password method

        try:
            db.session.add(new_user)
            db.session.commit()
            return {"message": "User created successfully", "user": new_user.to_dict()}, 201
        except Exception as e:
            db.session.rollback()
            return {"message": str(e)}, 500

# Add resource to API
api.add_resource(PostUsers, '/users')


class Login(Resource):

    def post(self):
        # Get the email and password from the request
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        # Check if the user exists
        user = User.query.filter_by(email=email).first()

        if not user:
            return {'error': 'Invalid email address'}, 404  # User not found

        if user.check_password(password):  # Check if the password matches
            session['user_id'] = user.id
            return user.to_dict(), 200  # Return the user data if login is successful

        return {'error': 'Incorrect password'}, 401  # Password does not match

api.add_resource(Login, '/login')



class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {'message': '204: No Content'}, 204
    
class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict(), 200
        else:
            return {}, 401

api.add_resource(CheckSession, '/check_session')
api.add_resource(Logout, '/logout')




if __name__ == '__main__':
    app.run(port=5555, debug=True)
