from backend import db
from backend.db_models.User import User
from werkzeug.security import generate_password_hash, check_password_hash
from backend import db


class current_user:
    def __init__(self):
        self.user_id = None

    def set_current_user_id(self, id):
        self.user_id = id


user_session = current_user()

# check saving to a user
def sign_in(login, password):
    db_user = db["users"].find_one({"username": login})
    if db_user is not None and check_password_hash(db_user.password, password):
        user_session.set_current_user_id(db_user._id)
        return User(**db_user).to_json()
    else:
        return None


def sign_up(login, password, email):
    db_login = db["users"].find_one({"username": login})
    if db_login is None and login != "" and password != "" and email != "":
        new_user = User(login, password, email)
        db["users"].insert_one(new_user.to_bson())
        return new_user.to_json()
    else:
        return None


def sign_out():
    user_session.set_current_user_id(None)
