from dataclasses import dataclass
from bson.objectid import ObjectId
from datetime import datetime


@dataclass
class Book():
    id: str
    author: str
    title: str
    is_read: bool
    note: str
    pages: int
    quote: int
    rate: int
    read_date: datetime
    cover: str

    def to_json(self):
        return {'id': self.id, 'author': self.author, 'title': self.title, 'is_read': self.is_read,
                'note': self.note, 'pages': self.pages, 'quote': self.quote,
                'rate': self.rate, 'read_date': self.read_date, 'cover': self.cover}

    def to_bson_update(self):
        return {'id': ObjectId(self.id), 'author': self.author, 'title': self.title, 'is_read': self.is_read,
                'note': self.note, 'pages': self.pages, 'quote': self.quote,
                'rate': self.rate, 'read_date': self.read_date, 'cover': self.cover}

    def to_bson(self):
        return {'author': self.author, 'title': self.title, 'is_read': self.is_read,
                'note': self.note, 'pages': self.pages, 'quote': self.quote,
                'rate': self.rate, 'read_date': self.read_date, 'cover': self.cover}
