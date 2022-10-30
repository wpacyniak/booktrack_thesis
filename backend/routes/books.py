from backend import app
from flask import request, Response, jsonify
from flask_jwt_extended import jwt_required

from backend.controllers.books import get_read_books_year, add_book, update_book, add_plan


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


@app.route('/add_book', methods=['PUT'])
@jwt_required()
def add_book_plan():
    try:
        data = request.json
        type = data["type"]
        if type == "read":
            id = data["id"]
            author = data["author"]
            title = data["title"]
            pages = data["pages"]
            cover = data["cover"]
            note = data["note"]
            quote = data["quote"]
            rate = data["rate"]
            date = data["date"]
            if id != 0:
                update_book(id, author, title, pages,
                            cover, note, quote, rate, date)
            else:
                add_book(author, title, pages, cover, note, quote, rate, date)

        elif type == "plan":
            author = data["author"]
            title = data["title"]
            pages = data["pages"]
            cover = data["cover"]
            add_plan(author, title, pages, cover)
    except Exception as e:
        return e.args[0], 400
    return Response(status=200)
