from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, Property, Tenant, Payment

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)
migrate = Migrate(app, db)
CORS(app)

# ---------- Property Routes ----------
@app.route("/properties", methods=["GET"])
def get_properties():
    properties = Property.query.all()
    return jsonify([{"id": p.id, "name": p.name, "address": p.address} for p in properties])

@app.route("/properties", methods=["POST"])
def add_property():
    data = request.json
    new_property = Property(name=data["name"], address=data["address"])
    db.session.add(new_property)
    db.session.commit()
    return jsonify({"id": new_property.id, "name": new_property.name, "address": new_property.address})

@app.route("/properties/<int:id>", methods=["DELETE"])
def delete_property(id):
    prop = Property.query.get_or_404(id)
    db.session.delete(prop)
    db.session.commit()
    return jsonify({"message": "Property deleted"})

# ---------- Tenant Routes ----------
@app.route("/tenants", methods=["GET"])
def get_tenants():
    tenants = Tenant.query.all()
    return jsonify([{"id": t.id, "name": t.name, "email": t.email, "property_id": t.property_id} for t in tenants])

@app.route("/tenants", methods=["POST"])
def add_tenant():
    data = request.json
    tenant = Tenant(name=data["name"], email=data["email"], property_id=data["property_id"])
    db.session.add(tenant)
    db.session.commit()
    return jsonify({"id": tenant.id, "name": tenant.name})

@app.route("/tenants/<int:id>", methods=["DELETE"])
def delete_tenant(id):
    tenant = Tenant.query.get_or_404(id)
    db.session.delete(tenant)
    db.session.commit()
    return jsonify({"message": "Tenant deleted"})

# ---------- Payment Routes ----------
@app.route("/payments", methods=["GET"])
def get_payments():
    payments = Payment.query.all()
    return jsonify([
        {"id": p.id, "amount": p.amount, "date": p.date, "tenant_id": p.tenant_id, "property_id": p.property_id}
        for p in payments
    ])

@app.route("/payments", methods=["POST"])
def add_payment():
    data = request.json
    payment = Payment(
        amount=data["amount"],
        date=data["date"],
        tenant_id=data["tenant_id"],
        property_id=data["property_id"]
    )
    db.session.add(payment)
    db.session.commit()
    return jsonify({"id": payment.id, "amount": payment.amount})

@app.route("/payments/<int:id>", methods=["DELETE"])
def delete_payment(id):
    payment = Payment.query.get_or_404(id)
    db.session.delete(payment)
    db.session.commit()
    return jsonify({"message": "Payment deleted"})

if __name__ == "__main__":
    app.run(debug=True)