from flask import jsonify, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from server.models import User, Service, Booking, db
from datetime import datetime
from server import bcrypt


def init_routes(app):

    @app.route("/signup", methods=["POST"])
    def signup():
        data = request.json

        # Check if the email is already registered
        existing_user = User.query.filter_by(email=data["email"]).first()
        if existing_user:
            return jsonify(message="Email already registered"), 400

        # Hash the password securely
        hashed_password = bcrypt.generate_password_hash(data["password"]).decode(
            "utf-8"
        )

        # Create a new User instance
        user = User(name=data["name"], email=data["email"], password=hashed_password)

        # Add the user to the database
        db.session.add(user)
        db.session.commit()

        # Return a success message
        return jsonify(message="User created successfully"), 201

    @app.route("/login", methods=["POST"])
    def login():
        data = request.json
        user = User.query.filter_by(email=data["email"]).first()
        if user and bcrypt.check_password_hash(user.password, data["password"]):
            token = create_access_token(identity=user.id)
            return jsonify(token=token), 200
        return jsonify(message="Invalid credentials"), 401

    @app.route("/services", methods=["GET"])
    def get_services():
        services = Service.query.all()
        return jsonify([service.to_dict() for service in services]), 200

    @app.route("/bookings", methods=["POST"])
    @jwt_required()
    def book_service():
        data = request.json
        user_id = get_jwt_identity()
        booking = Booking(
            user_id=user_id,
            service_id=data["service_id"],
            date=datetime.strptime(data["date"], "%Y-%m-%d"),
            status="Pending",
        )
        db.session.add(booking)
        db.session.commit()
        return jsonify(message="Booking successful"), 201

    @app.route("/bookings", methods=["GET"])
    @jwt_required()
    def get_user_bookings():
        user_id = get_jwt_identity()
        bookings = Booking.query.filter_by(user_id=user_id).all()
        return jsonify([booking.to_dict() for booking in bookings]), 200
