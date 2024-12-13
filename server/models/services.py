class Service(db. Model)
    _tablename__ = "services"

    id=db.Column(db.Integer, primary_key = True)
    name=db.Column(db.String)

    def to_dict(self):
        return{
            "name":self.name

    }

    def __repr__(self):
        return f"Service<{ self.name}>"
