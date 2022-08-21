import os

# from backend.routes import (session)
from flask import Flask
from dotenv import load_dotenv
from pymongo import MongoClient

# load .env file
load_dotenv()
MONGO_URI = os.environ["MONGODB_URI"]


def init_app():
    app = Flask(__name__)

    client = MongoClient(MONGO_URI)

    for db_info in client.list_database_names():
        print(db_info)
    # db.init_app(app)

    # with app.app_context():
    #     db.create_all()
    #     return app


app = init_app()

# It's important that all routes are imported here.
# Don't let your formatter move these imports to the top of the file!
# Try Ctrl+Shift+P > File: Save without formatting
