from flask import Flask, request
import datetime

app = Flask(__name__)

@app.route('/create_file', methods=['POST'])
def create_file():
    # Get parameters from request
    user_id = request.form.get('user_id')
    num_plate = request.form.get('num_plate')
    fleet_num = request.form.get('fleet_num')
    operator = request.form.get('operator')
    region = request.form.get('region')
    route = request.form.get('route')
    location = request.form.get('location')

    # Print information to console
    print('create_file() function called.')
    print(f'user_id: {user_id}')
    print(f'num_plate: {num_plate}')
    print(f'fleet_num: {fleet_num}')
    print(f'operator: {operator}')
    print(f'region: {region}')
    print(f'route: {route}')
    print(f'location: {location}')

    # Generate file name
    current_time = datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
    file_name = f'{user_id}_{current_time}.txt'

    # Write parameters to file
    with open(file_name, 'w') as f:
        f.write(f'Number Plate: {num_plate}\n')
        f.write(f'Fleet Number: {fleet_num}\n')
        f.write(f'Operator: {operator}\n')
        f.write(f'Region: {region}\n')
        f.write(f'Route: {route}\n')
        f.write(f'Location: {location}\n')

    # Return success message
    return f'File {file_name} created successfully.'

if __name__ == '__main__':
    app.run(debug=True)
