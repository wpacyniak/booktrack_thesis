from backend import app
from flask import request, Response

from backend.controllers.session import sign_in, sign_up


@app.route("/")
def home():
    return 'Hello!'


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']
    user = sign_in(username, password)
    if user is None:
        return Response(status=400)
    else:
        return user, 200


@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    password = data['password']
    email = data['email']
    user = sign_up(username, password, email)
    if user is None:
        return Response(status=400)
    else:
        return user, 200
