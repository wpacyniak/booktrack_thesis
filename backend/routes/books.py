from backend import app
from flask import request, Response, jsonify
from flask_jwt_extended import jwt_required

from backend.controllers.books import get_read_books_year, add_book, update_book, add_plan, get_plans, delete_book, update_plan, get_years, get_read_books


@app.route('/read_books', methods=['POST'])
@jwt_required()
def get_read_books_per_year():
    data = request.json
    year = data["year"]
    books = get_read_books_year(year)
    if books is None:
        return Response(status=400)
    else:
        return jsonify(books)


@app.route('/read_all_books', methods=['GET'])
@jwt_required()
def get_read_all_books():
    books = get_read_books()
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
        if type == "read" or type == "updateBook":
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
        elif type == "plan" or type == "updatePlan":
            id = data["id"]
            author = data["author"]
            title = data["title"]
            pages = data["pages"]
            cover = data["cover"]
            if id != 0:
                update_plan(id, author, title, pages, cover)
            else:
                add_plan(author, title, pages, cover)
    except Exception as e:
        return e.args[0], 400
    return Response(status=200)


@app.route('/book_plans', methods=['GET'])
@jwt_required()
def get_book_plans():
    plans = get_plans()
    if plans is None:
        return Response(status=400)
    else:
        return jsonify(plans)


@app.route('/delete_book', methods=['PUT'])
@jwt_required()
def delete_book_plan():
    data = request.json
    book_id = data["bookId"]
    res = delete_book(book_id)
    if res:
        return Response(status=200)
    else:
        return Response(status=400)


@app.route('/get_years', methods=['GET'])
@jwt_required()
def get_list_years():
    years = get_years()
    if years:
        return jsonify(years)
    else:
        return Response(status=400)
