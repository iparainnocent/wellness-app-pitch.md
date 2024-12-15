from server import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    contact = db.Column(db.Integer, nullable=True)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)  # Ensure password column exists

    # Relationships
    reviews = db.relationship("Review", back_populates="user")
    bookings = db.relationship("Booking", back_populates="user")

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
    bookings = db.relationship("Booking", back_populates="service")

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


class Booking(db.Model):
    __tablename__ = "bookings"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey("services.id"), nullable=False)
    date = db.Column(db.Date, nullable=False)
    status = db.Column(db.String, nullable=False)

    # Relationships
    user = db.relationship("User", back_populates="bookings")
    service = db.relationship("Service", back_populates="bookings")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "service_id": self.service_id,
            "date": self.date.strftime("%Y-%m-%d"),
            "status": self.status,
        }

    def __repr__(self):
        return f"<Booking user_id={self.user_id}, service_id={self.service_id}, date={self.date}, status={self.status}>"
