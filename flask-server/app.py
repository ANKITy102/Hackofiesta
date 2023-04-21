from flask import Flask, render_template, request
from sklearn.externals import joblib
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    audio_file = request.files['audio']
    model = joblib.load('model.pkl')
    prediction = model.predict(audio_file)
    
