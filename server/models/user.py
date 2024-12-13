from flask_sqlalchemy import SQLAlchemy




metadat= MetaData
db =SQLAlchemy()


class User(db.Model):
    __tablename__="users"

    id =db.Column(db.Integer, primary_key = True)
    name= db.Column(db. String, nullable =False)
    contact = db.Column(db.Integer)
    email=db.Column(db.String)

    def to_dict(self):
        return{
        "id":self.id,
        "name":self.name,
        "contact":self.contact,
        "email":self.email,
                }
    def __repr__(self):
        return f"User<{self.name},{self.contact}, {self.email}>"






