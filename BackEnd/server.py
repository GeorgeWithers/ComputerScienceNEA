import os
import mysql.connector
import dotenv
from dotenv import load_dotenv
import time

load_dotenv('dbCreds.env')

# mysql = mysql.connector.connect(
#     host = str(os.getenv('dbHost')),
#     user = str(os.getenv('dbUser')),
#     password = str(os.getenv('dbPassword')),
#     database = 'data'
# )

mysql = mysql.connector.connect(
    host = '127.0.0.1',
    user = 'root',
    password = 'SuperSecurePassword',
    database = 'data'
)

db = mysql.cursor()
# db.execute("CREATE TABLE table")
print("Connected!")

time.sleep(5)

db.execute("""CREATE TABLE data (
            uid integer,
            year number,
            month number,
            day number,
            hour number,
            minute number,
            second number,
            bus text,
            route text
            )""")
db.commit()