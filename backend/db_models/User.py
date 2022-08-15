from backend import db
from dataclasses import dataclass


@dataclass
class User(db.Model):
    id: int
    username: str
    password: str

    def __repr__(self) -> str:
        return super().__repr__()
    
    def get_string(self):
        return {'username': self.username, 'id': self.id}
