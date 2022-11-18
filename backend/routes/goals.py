from backend import app
from flask import request, Response, jsonify
from flask_jwt_extended import jwt_required

from backend.controllers.goals import delete_goal, get_goals, add_goal


@app.route("/add_goal", methods=['PUT'])
@jwt_required()
def save_goal():
    try:
        data = request.json
        goal = data["goal"]
        type = data["type"]
        start_date = data["start"]
        end_date = data["end"]
        add_goal(goal, type, start_date, end_date)
    except Exception as e:
        return e.args[0], 400
    return Response(status=200)


@app.route("/get_goals", methods=['GET'])
@jwt_required()
def get_all_goals():
    goals = get_goals()
    if goals is None:
        return Response(status=400)
    else:
        return jsonify(goals)


@app.route("/delete_goal", methods=['PUT'])
@jwt_required()
def remove_goal():
    try:
        data = request.json
        goal_id = data['id']
        delete_goal(goal_id)
    except Exception as e:
        return e.args[0], 400
    return Response(status=200)
