from backend import app
from flask import request, Response, jsonify
from flask_jwt_extended import jwt_required

from backend.controllers.books import get_read_books_year


@app.route('/read_books', methods=['POST'])
@jwt_required()
def get_read_books_per_year():
    data = request.json
    year = data["year"]
    user_id = data["userId"]
    books = get_read_books_year(year, user_id)
    if books is None:
        return Response(status=400)
    else:
        return jsonify(books)
