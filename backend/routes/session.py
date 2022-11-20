from backend import app
from flask import request, Response, jsonify
from flask_jwt_extended import create_access_token

from backend.controllers.session import sign_in, sign_up, sign_out


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
        token = create_access_token(user)
        return jsonify({'user': user, 'token': token}), 200


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
        token = create_access_token(user)
        return jsonify({'user': user, 'token': token}), 200


@app.route('/sign_out', methods=['GET'])
def sign_out_user():
    try:
        sign_out()
    except Exception as e:
        return e.args[0], 400
    return Response(status=200)
