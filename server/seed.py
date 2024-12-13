from models import db, User, Service, Review
from app import app

# Predefined real data for users, services, and reviews
user_data = [
    {"name": "Alice Johnson", "contact": "123-456-7890", "email": "alice@example.com"},
    {"name": "Bob Smith", "contact": "234-567-8901", "email": "bob@example.com"},
    {"name": "Catherine Lee", "contact": "345-678-9012", "email": "catherine@example.com"},
    {"name": "David Brown", "contact": "456-789-0123", "email": "david@example.com"},
    {"name": "Eva Williams", "contact": "567-890-1234", "email": "eva@example.com"},
    {"name": "Frank Harris", "contact": "678-901-2345", "email": "frank@example.com"},
    {"name": "Grace Miller", "contact": "789-012-3456", "email": "grace@example.com"},
    {"name": "Henry Taylor", "contact": "890-123-4567", "email": "henry@example.com"},
    {"name": "Irene Martinez", "contact": "901-234-5678", "email": "irene@example.com"},
    {"name": "John Davis", "contact": "012-345-6789", "email": "john@example.com"}
]

service_data = [
    {"name": "Yoga Classes"},
    {"name": "Deep Tissue Massage"},
    {"name": "Therapeutic Massage"},
    {"name": "Yoga Therapy"},
    {"name": "Sports Massage"}
]

review_data = [
    {"user_id": 1, "service_id": 1, "rating": 5, "comment": "Amazing yoga class, very relaxing!"},
    {"user_id": 2, "service_id": 2, "rating": 4, "comment": "The massage was good, but a bit intense."},
    {"user_id": 3, "service_id": 3, "rating": 5, "comment": "Best therapeutic massage I've ever had."},
    {"user_id": 4, "service_id": 4, "rating": 4, "comment": "Enjoyed the yoga therapy, but I wanted more time."},
    {"user_id": 5, "service_id": 5, "rating": 5, "comment": "Sports massage helped my muscles recover perfectly."},
    {"user_id": 6, "service_id": 1, "rating": 3, "comment": "The class was too basic for my level."},
    {"user_id": 7, "service_id": 2, "rating": 4, "comment": "Relaxing, but a little too much pressure for me."},
    {"user_id": 8, "service_id": 3, "rating": 5, "comment": "Wonderful experience, I felt rejuvenated."},
    {"user_id": 9, "service_id": 4, "rating": 4, "comment": "Good session, but I wanted a bit more guidance."},
    {"user_id": 10, "service_id": 5, "rating": 5, "comment": "Excellent deep tissue massage, highly recommend!"}
]

def generate_user_data():
    with app.app_context():  
        for user in user_data:
            user_record = User(
                name=user["name"],
                contact=user["contact"],
                email=user["email"]
            )
            db.session.add(user_record)
        db.session.commit()
        print(f'{len(user_data)} user records have been successfully added!')

def generate_service_data():
    with app.app_context():  
        for service in service_data:
            service_record = Service(
                name=service["name"]
            )
            db.session.add(service_record)
        db.session.commit()
        print(f'{len(service_data)} service records have been successfully added!')

def generate_review_data():
    with app.app_context():  
        for review in review_data:
            review_record = Review(
                user_id=review["user_id"],
                service_id=review["service_id"],
                rating=review["rating"],
                comment=review["comment"]
            )
            db.session.add(review_record)
        db.session.commit()
        print(f'{len(review_data)} review records have been successfully added!')

# Run the functions to generate data
def run_seed():
    generate_user_data()   
    generate_service_data()  
    generate_review_data()  

if __name__ == '__main__':
    run_seed()
