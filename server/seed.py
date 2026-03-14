from app import app
from config import db
from models import Property, Tenant

with app.app_context():

    db.drop_all()
    db.create_all()

    p1 = Property(name="Sunset Apartments", location="Nairobi")
    p2 = Property(name="Green Villas", location="Westlands")

    t1 = Tenant(name="John Doe", email="john@email.com")
    t2 = Tenant(name="Mary Jane", email="mary@email.com")

    db.session.add_all([p1,p2,t1,t2])
    db.session.commit()

    print("Database seeded!")
