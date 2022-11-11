from backend import app
from flask import request, Response, jsonify
from flask_jwt_extended import jwt_required

from backend.controllers.user import add_currently_reading, get_currently_reading_book, save_book_progress


@app.route("/add_currently_reading", methods=['PUT'])
@jwt_required()
def save_currently_reading():
    try:
        book_id = request.json
        add_currently_reading(book_id)
    except Exception as e:
        return e.args[0], 400
    return Response(status=200)


@app.route("/get_currently_reading", methods=['GET'])
@jwt_required()
def get_currently_reading():
    book = get_currently_reading_book()
    if book is None:
        return Response(status=400)
    else:
        return jsonify(book)


@app.route("/save_progress", methods=['PUT'])
@jwt_required()
def save_progress():
    try:
        progress = request.json
        save_book_progress(progress)
    except Exception as e:
        return e.args[0], 400
    return Response(status=200)
