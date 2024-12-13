class Booking(db.Model)
    __tablename__ ="bookings"

    id=db.Column(db.Integer, primary_key = True)
    booking_number=db.Column(db.Integer, nullable =False)
    user_id=db.Column(Integer, ForeignKey"user.id")
    service_id=db.Column(Integer, db.ForeignKey"services.id")

    def to_dict(self):
        return{
            "booking_number":self.booking_number
            
        }

    def __repr__(self):
        return f"Booking<{self.booking_number}>, User<{self.user.id}>, Service<{self.service.id}>"
    