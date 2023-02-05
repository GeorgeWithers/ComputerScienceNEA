import os
import json
from flask import Flask, jsonify, request

app = Flask(__name__)

# Define the route for handling GET requests for the root endpoint
@app.route('/', methods=['GET'])
def index():
    # List all the JSON files in the directory
    json_files = [f for f in os.listdir("/var/www/html/ComputerScienceNEA/FrontEnd/operatorsJson/") if f.endswith('.json')]

    # Return a JSON object containing the list of JSON files
    return jsonify({'files': json_files})

# Define the route for handling GET requests for a specific JSON file
@app.route('/<filename>', methods=['GET'])
def get_data(filename):
    # Load the content of the JSON file into a Python object
    with open("/var/www/html/ComputerScienceNEA/FrontEnd/operatorsJson." + filename, 'r') as file:
        data = json.load(file)

    # Return the content of the JSON file as a JSON object
    return jsonify(data)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://127.0.0.1')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

# Main function to run the Flask app
if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, make_response

app = Flask(__name__)

@app.after_request
def set_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    return response

@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()
