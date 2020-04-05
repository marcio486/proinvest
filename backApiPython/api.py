import pandas as pd
from flask_cors import CORS
from flask_restful import Resource, Api
from flask import Flask, redirect, url_for, request

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

df = pd.read_csv('info.csv').drop(columns = ['Unnamed: 0'])


@app.route('/ativos', methods = ['GET'])
def cities():
    return df.to_json(orient = 'index')

if __name__ == '__main__':
    app.run(port = 5002,host='0.0.0.0',threaded = True)
    
