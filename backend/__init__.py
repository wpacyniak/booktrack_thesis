import os

# from backend.routes import (session)
from flask import Flask
from dotenv import load_dotenv
from pymongo import MongoClient

# load .env file
load_dotenv()
MONGO_URI = os.environ["MONGODB_URI"]

app = Flask(__name__)
db = MongoClient(MONGO_URI)["bookTrack"]

# It's important that all routes are imported here.
# Don't let your formatter move these imports to the top of the file!
# Try Ctrl+Shift+P > File: Save without formatting
