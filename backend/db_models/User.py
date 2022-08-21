from backend import db
from dataclasses import dataclass


@dataclass
class User(db.Model):
    id: int
    username: str
    password: str
    email: str

    def __repr__(self) -> str:
        return super().__repr__()
    
    def to_json(self):
        return {'username': self.username, 'id': self.id, 'email': self.email}
    
    def to_bson(self):
        pass
