from dataclasses import dataclass
from bson.objectid import ObjectId

@dataclass
class User():
    id: str
    username: str
    password: str
    email: str
    
    def to_json(self):
        return {'username': self.username, 'id': self.id, 'email': self.email}
    
    def to_bson(self):
        return {'username': self.username, 'email': self.email, "password": self.password}

