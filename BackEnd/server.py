import os
import json
from flask import Flask, jsonify, request

app = Flask(__name__)

# Define the route for handling GET requests for the root endpoint
@app.route('/', methods=['GET'])
def index():
    # List all the JSON files in the directory
    json_files = [f for f in os.listdir() if f.endswith('.json')]

    # Return a JSON object containing the list of JSON files
    return jsonify({'files': json_files})

# Define the route for handling GET requests for a specific JSON file
@app.route('/<filename>', methods=['GET'])
def get_data(filename):
    # Load the content of the JSON file into a Python object
    with open(filename, 'r') as file:
        data = json.load(file)

    # Return the content of the JSON file as a JSON object
    return jsonify(data)

# Main function to run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
