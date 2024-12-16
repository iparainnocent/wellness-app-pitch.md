from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.ext.hybrid import hybrid_property

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"  

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    contact = db.Column(db.String, nullable=True)  
    email = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String(128), nullable=False)

    # Relationships
    reviews = db.relationship("Review", back_populates="user")

    def set_password(self, password):
        """Set the user's password."""
        self._password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Check if the provided password matches the stored hashed password."""
        return check_password_hash(self._password_hash, password)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "contact": self.contact,
            "email": self.email,
        }

    def __repr__(self):  
        return f"<User name={self.name}, contact={self.contact}, email={self.email}>"

    @hybrid_property
    def password_hash(self):
        return self._password_hash

    # setter method for the password property
    @password_hash.setter
    def password_hash(self, password):
        # Use werkzeug's generate_password_hash for secure password hashing
        self._password_hash = generate_password_hash(password)

    # authentication method using user and password
    def authenticate(self, password):
        # Use check_password_hash to verify if the password matches the stored hash
        return check_password_hash(self.password_hash, password)
    
class Service(db.Model):
    __tablename__ = "services"  

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    # Relationships
    reviews = db.relationship("Review", back_populates="service")

    def to_dict(self):
        return {"id": self.id, "name": self.name}

    def __repr__(self):  
        return f"<Service name={self.name}>"

class Review(db.Model):
    __tablename__ = "reviews"  

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey("services.id"), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String, nullable=True)

    # Relationships
    user = db.relationship("User", back_populates="reviews")
    service = db.relationship("Service", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "service_id": self.service_id,
            "rating": self.rating,
            "comment": self.comment,
        }

    def __repr__(self): 
        return f"<Review user_id={self.user_id}, service_id={self.service_id}, rating={self.rating}>"
