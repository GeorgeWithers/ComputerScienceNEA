import time
from flask import Flask, request

app = Flask(__name__)

@app.route('/store', methods=['GET'])
def store():
    print("Hellp")
    print(request.json.get('data'))
    # timestamp = int(time.time())
    # filename = f"data_{timestamp}.txt"
    # with open(filename, 'w') as f:
    #     f.write(data)
    return('Data stored successfully in hello')


if __name__ == '__main__':
    app.run()
