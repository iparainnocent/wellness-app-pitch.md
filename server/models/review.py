class Review(db.Model)
    __tablename__= reviews

    id=db.Column(db.Integer, primary_key = True)
    review=db.Column(db.String)
    rating =db.Column(db.Integer)
    user_id=db.Column(Integer, db.ForeignKey="users.id")
    service_id=db.Column(Integer, db.ForeignKey"services.id")

    def to_dict(self):
        return f "Review<{self.review}, {self.rating}>"