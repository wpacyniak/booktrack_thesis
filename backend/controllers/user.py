from backend import db
from backend.db_models.Book import Book
from backend.controllers.session import user_session
from bson.objectid import ObjectId


def add_currently_reading(book_id):
    db_user = db["users"].find_one({"_id": ObjectId(user_session.user_id)})
    db_user['currently_reading'] = ObjectId(book_id)
    db_user['progress'] = 0
    db["users"].replace_one({"_id": ObjectId(user_session.user_id)}, db_user)


def get_currently_reading_book():
    db_user = db["users"].find_one({"_id": ObjectId(user_session.user_id)})
    book_id = db_user.get('currently_reading', None)
    progress = db_user.get('progress', None)
    book = {}
    if book_id:
        book_db = db["books"].find_one({"_id": ObjectId(book_id)})
        book = Book(str(book_db["_id"]), book_db["author"],
                    book_db["title"], None,
                    book_db["pages"], None,
                    None, None,
                    book_db["cover"]).to_json_plan()
    return {'progress': progress, 'book': book}


def save_book_progress(progress):
    db_user = db["users"].find_one({"_id": ObjectId(user_session.user_id)})
    db_user['progress'] = progress
    db["users"].replace_one({"_id": ObjectId(user_session.user_id)}, db_user)
