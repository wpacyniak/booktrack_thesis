from backend import db
from backend.db_models.User import User
from werkzeug.security import generate_password_hash, check_password_hash


class current_user:
    def __init__(self):
        self.user_id = None

    def set_current_user_id(self, id):
        self.user_id = id


user_session = current_user()


def sign_in(login, password):
    # db - get the user with the proper login
    # if user found ( is not None) check password - check_password_hash(found_user.password, password)
    # True: current_user.set_current_user_id , return True
    # Else: return False
    pass


def sign_up(login, password):
    # check if that login already exists
    # if already exists is None and login/password is not ""
    # True: new_user in database- password -> generate_password_hash(password) return true
    # else: return false
    pass


def sign_out():
    user_session.set_current_user_id(None)
