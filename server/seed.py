from faker import Fake
import random
from models import db, User, Review, Booking, Service
from app import app
fake = Faker()

#Generate user data
def generate_user_data(num_entries=10):
  with app.app-context():#Establish application context(num_entries):
    for _ in range(num_entries):
        user= User(
            name=
            contact=
            email=

    )
        db.session.add(user)
    db.session.commit()
    print(f'{num_entries} user record have been sucessfuly added!')

#Generate service data
def generate_service_data(num_entries=3):
    with app.app_context()
    for _inrange(num_entries):
        service = Service(
            name =(Msassage, Yoga, Therapy)
      )
        db.session.add(service)
    db session.commit()
    print(f'{num_entries} servic record hvebeen sucessfully seeded!')


#Generate booking data

#Generate review data

