from backend import app
from flask import request, Response, jsonify
from flask_jwt_extended import jwt_required

from backend.controllers.user import add_currently_reading, get_currently_reading_book, save_book_progress


@app.route("/add_curently_reading", methods=['POST'])
@jwt_required()
def save_currently_reading():
    try:
        data = request.json
        book_id = data["bookId"]
        add_currently_reading(book_id)
    except Exception as e:
        return e.args[0], 400
    return Response(status=200)


@app.route("/get_curently_reading", methods=['GET'])
@jwt_required()
def get_currently_reading():
    book = get_currently_reading_book()
    if book is None:
        return Response(status=400)
    else:
        return jsonify(book)


@app.route("/save_progress", methods=['POST'])
@jwt_required()
def save_progress():
    try:
        data = request.json
        progress = data["progress"]
        save_book_progress(progress)
    except Exception as e:
        return e.args[0], 400
    return Response(status=200)
