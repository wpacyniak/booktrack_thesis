from dataclasses import dataclass
from bson.objectid import ObjectId
from datetime import datetime


@dataclass
class Goal():
    id: str
    goal: int
    type: str
    start_date: datetime
    end_date: datetime
    progress: int
    time_left: int

    def to_json(self):
        return {'id': self.id, 'goal': self.goal, 'type': self.type,
                'startDate': datetime.strftime(self.start_date, "%d %b %Y"),
                'endDate': datetime.strftime(self.end_date, "%d %b %Y"), 'progress': self.progress,
                'timeLeft': self.time_left}

    def to_bson(self, user_id):
        return {'user_id': ObjectId(user_id), 'goal': self.goal, 'type': self.type,
                'start_date': datetime.strftime(self.start_date, "%d %b %Y"),
                'end_date': datetime.strftime(self.end_date, "%d %b %Y")}
