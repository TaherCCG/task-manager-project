import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
if os.path.exists("env.py"):
    import env  # noqa


app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")

if os.environ.get("DEVELOPMENT") == "True":
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")
else:
     uri = os.environ.get("postgres://ualm3umnfkx:Fdz2NohKT6cR@ep-gentle-mountain-a23bxz6h.eu-central-1.aws.neon.tech/mousy_crank_city_24158")
     if uri.startswith("postgres://"):
         uri = uri.replace("postgres://", "postgresql://", 1)
     app.config["SQLALCHEMY_DATABASE_URI"] = uri


db = SQLAlchemy(app)

from taskmanager import routes  # noqa