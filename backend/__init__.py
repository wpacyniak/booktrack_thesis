from flask import Flask
from dotenv import load_dotenv

load_dotenv()


def init_app():
    app = Flask(__name__)

    # db.init_app(app)

    # with app.app_context():
    #     db.create_all()
    #     return app


app = init_app()

# It's important that all routes are imported here.
# Don't let your formatter move these imports to the top of the file!
# Try Ctrl+Shift+P > File: Save without formatting

from backend.routes import (session)