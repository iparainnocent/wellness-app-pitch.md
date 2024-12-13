from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"  

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    contact = db.Column(db.Integer, nullable=True)  
    email = db.Column(db.String, unique=True, nullable=False)

    # Relationships
    reviews = db.relationship("Review", back_populates="user")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "contact": self.contact,
            "email": self.email,
        }

    def __repr__(self):  
        return f"<User name={self.name}, contact={self.contact}, email={self.email}>"

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
