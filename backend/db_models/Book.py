from dataclasses import dataclass
from bson.objectid import ObjectId
from datetime import datetime


@dataclass
class Book():
    id: str
    author: str
    title: str
    note: str
    pages: int
    quote: int
    rate: int
    read_date: datetime
    cover: str

    def to_json(self):
        return {'id': self.id, 'author': self.author, 'title': self.title,
                'note': self.note, 'pages': self.pages, 'quote': self.quote,
                'rate': self.rate, 'readDate': datetime.strftime(self.read_date, "%d %b %Y"), 'cover': self.cover}

    def to_json_plan(self):
        return {'id': self.id, 'author': self.author, 'title': self.title,
                'pages': self.pages, 'cover': self.cover}

    def to_bson_update(self, user_id):
        return {'id': ObjectId(self.id), 'author': self.author, 'title': self.title,
                'note': self.note, 'pages': self.pages, 'quote': self.quote,
                'rate': self.rate, 'read_date': self.read_date, 'cover': self.cover, 'is_read': True, 'user_id': ObjectId(user_id)}

    def to_bson(self, user_id, is_read):
        return {'author': self.author, 'title': self.title, 'is_read': True,
                'note': self.note, 'pages': self.pages, 'quote': self.quote,
                'rate': self.rate, 'read_date': self.read_date, 'cover': self.cover, 'is_read': is_read, 'user_id': ObjectId(user_id)}
