import os

from flask import Flask
from dotenv import load_dotenv
from pymongo import MongoClient
from flask_cors import CORS, cross_origin

# load .env file
load_dotenv()
MONGO_URI = os.environ["MONGODB_URI"]

app = Flask(__name__)
cors = CORS(app)
db = MongoClient(MONGO_URI)["bookTrack"]

# It's important that all routes are imported here.
# Don't let your formatter move these imports to the top of the file!
# Try Ctrl+Shift+P > File: Save without formatting
from backend.routes import session

if __name__ != "__main__":
    app.run(debug=True)