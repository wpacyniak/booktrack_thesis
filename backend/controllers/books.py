from backend import db
from backend.db_models.Book import Book
from backend.controllers.session import user_session
from backend import db
from bson.objectid import ObjectId


def get_read_books_year(year, user_id):
    db_books = db["books"].find(
        {"user_id": ObjectId(user_id), "is_read": True})
    if db_books is not None:
        books = []
        for book in db_books:
            if "quote" in book.keys():
                db_book = Book(str(book["_id"]), book["author"],
                               book["title"], book["note"],
                               book["pages"], book["quote"],
                               book["rate"], book["read_date"],
                               book["cover"])
            else:
                db_book = Book(str(book["_id"]), book["author"],
                               book["title"], book["note"],
                               book["pages"], "",
                               book["rate"], book["read_date"],
                               book["cover"])
            if db_book.read_date.year == int(year):
                books.append(db_book.to_json())
    return books
