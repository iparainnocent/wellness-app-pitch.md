from flask import Blueprint

# Define the Blueprint
user_routes = Blueprint('user_routes', __name__)

# Example route
@user_routes.route('/users', methods=['GET'])
def get_users():
    return {"message": "User routes working"}

