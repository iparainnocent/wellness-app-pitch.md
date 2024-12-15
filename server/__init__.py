from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

# Initialize extensions
db = SQLAlchemy()
bcrypt = Bcrypt()
migrate = Migrate()
jwt = JWTManager()


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///wellness.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = "your_secret_key"

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # Create database tables within app context
    with app.app_context():
        from server.models import User, Service, Review, Booking

        db.create_all()

    # Import and register routes
    from server.routes import init_routes

    init_routes(app)

    return app
