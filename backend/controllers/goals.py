from backend import db
from backend.db_models.Goal import Goal
from backend.db_models.Book import Book
from backend.controllers.session import user_session
from bson.objectid import ObjectId
from datetime import datetime


def add_goal(goal, type, start_date, end_date):
    db_start_date = datetime.strptime(
        start_date + "T00:00:00+00:00", '%Y-%m-%dT%H:%M:%S%z')
    db_end_date = datetime.strptime(
        end_date + "T00:00:00+00:00", '%Y-%m-%dT%H:%M:%S%z')
    goal = Goal(None, int(goal), type, db_start_date, db_end_date)
    db["goals"].insert_one(goal.to_bson(user_session.user_id))


def get_books():
    db_books = db["books"].find(
        {"user_id": ObjectId(user_session.user_id), "is_read": True})
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
            books.append(db_book)
    return books


def get_goals():
    db_goals = db["goals"].find(
        {"user_id": ObjectId(user_session.user_id)})
    goals = []
    if db_goals is not None:
        for goal in db_goals:
            time_left = (goal["end_date"] - goal["start_date"]).days
            goal = Goal(str(goal["_id"]), goal["goal"],
                        goal["type"], goal["start_date"],
                        goal["end_date"], 0, time_left)
    books = get_books()

    progresses = [0] * len(goals)
    if books is not None:
        for book in books:
            for index, goal in enumerate(goals):
                if goal.start_date <= book.read_date <= goal.end_date:
                    progresses[index] += 1
        for index, goal in enumerate(goals):
            goal.progress = progresses[index]

    json_goals = []
    if goals is not None:
        for goal in goals:
            json_goals.append(goal.to_json())
    return json_goals


def delete_goal(goal_id):
    res = db["goals"].delete_one(
        {"_id": ObjectId(goal_id)})
    return res
