from backend import db
from backend.db_models.Book import Book
from backend.controllers.session import user_session
from backend import db
from bson.objectid import ObjectId
from datetime import datetime
import sys


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


def add_book(author, title, pages, cover, note, quote, rate, date):
    read_date = datetime.strptime(
        date + "T00:00:00+00:00", '%Y-%m-%dT%H:%M:%S%z')
    book = Book(None, author, title, note, int(pages),
                quote, int(rate), read_date, cover)
    db["books"].insert_one(book.to_bson(
        user_session.user_id))


def update_book(id, author, title, pages, cover, note, quote, rate, date):
    read_date = datetime.strptime(date, '%y-%m-%d')
    db["books"].replace_one({"_id": ObjectId(user_session)}, Book(id, author, title, note, int(
        pages), quote, int(rate), read_date, cover).to_bson_update(user_session))


def add_plan(author, title, pages, cover):
    pass
