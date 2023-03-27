from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast

app = Flask(__name__)
api = Api(app)

app = Flask(__name__)

# store 
class Store(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('locationID', required=True, type=int)
        parser.add_argument('name', required=True, type=int)
        parser.add_argument('city', required=True, type=int)
        args = parser.parse_args()
        return{
            'loc': args['locationID'],
            'name': args['name'],
            'city': args['city']
        }, 200
# load       
class Load(Resource):
    def get(self):
        pass

#API paths
api.add_resource(Store, '/store/')
api.add_resource(Load, '/load/')

if __name__ == '__main__':
    app.run(debug=True)