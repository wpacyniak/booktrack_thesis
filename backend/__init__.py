from backend.routes import session, books, user, goals
import os

from flask import Flask
from dotenv import load_dotenv
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from flask_jwt_extended import JWTManager

# load .env file
load_dotenv()
MONGO_URI = os.environ["MONGODB_URI"]

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
cors = CORS(app)
db = MongoClient(MONGO_URI)["bookTrack"]
jwt = JWTManager(app)

# It's important that all routes are imported here.
# Don't let your formatter move these imports to the top of the file!
# Try Ctrl+Shift+P > File: Save without formatting
