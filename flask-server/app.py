from flask import Flask, render_template, request, Response, jsonify
from flask_cors import CORS, cross_origin
# from sklearn.externals import joblib
import numpy as np
import pandas as pd
import librosa
import pickle
import os
import json


app = Flask(__name__)
CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app, origins='localhost')

file = open('PDmodel.pkl', 'rb')
PDetect = pickle.load(file)


@app.route('/')
def outcom():
    return {"members": ["member1", "member2"]}


def extract_features(audio_file):
    y, sr = librosa.load(audio_file, sr=None)
    print('---')
    pitches, magnitudes = librosa.piptrack(y=y, sr=sr)
    features = []
    # Feature Extraction
    # 1. MDVP average fundamental frequency
    avg_f0 = np.mean(librosa.hz_to_midi(pitches[pitches > 0]))
    features.append(np.mean(librosa.hz_to_midi(pitches[pitches > 0])))
    # print(np.array([avg_f0]))

    # 2. Maximum fundamental frequency
    max_f0 = np.max(librosa.hz_to_midi(pitches[pitches > 0]))
    features.append(np.max(librosa.hz_to_midi(pitches[pitches > 0])))
    # 3. Minimum fundamental frequency
    min_f0 = np.min(librosa.hz_to_midi(pitches[pitches > 0]))
    features.append(np.min(librosa.hz_to_midi(pitches[pitches > 0])))

    # 4. Jitter
    diff = np.diff(pitches[pitches > 0])
    jitter = (np.mean(np.abs(diff)))/1000
    features.append((np.mean(np.abs(diff)))/1000)
    # 5. Jitter_abs
    jitter_abs = (np.mean(diff))/10000
    features.append((np.mean(np.abs(diff)))/1000)
    # 6. RAP
    rap = (np.sum(np.abs(diff)))/10000000
    features.append((np.sum(np.abs(diff)))/10000000)
    # features.append(np.array([rap]))

    # 7. PPQ
    ppq = (np.sum(diff ** 2))/100000000
    features.append((np.sum(diff ** 2))/100000000)
    # 8. DDP
    ddp = (np.sum(np.abs(np.diff(diff))))/1000000
    features.append((np.sum(np.abs(np.diff(diff))))/1000000)
    # 9. Shimmer
    magnitudes[magnitudes == 0] = 1e-10  # avoid dividing by zero
    db = librosa.amplitude_to_db(magnitudes)
    diff_db = np.diff(db)
    shimmer = (np.mean(np.abs(diff_db)))/10
    features.append((np.mean(np.abs(diff_db)))/10)
    # 10. Shimmer in dB
    shimmer_db = np.mean(np.abs(db[:, 1:] - db[:, :-1]))
    features.append(np.mean(np.abs(db[:, 1:] - db[:, :-1])))
    # 11. Shimmer (APQ3)
    shimmer_apq3 = (np.mean(np.abs(diff_db[:, 1:-1])))/10
    features.append((np.mean(np.abs(diff_db[:, 1:-1])))/10)
    # 12. Shimmer (APQ5)
    shimmer_apq5 = (np.mean(np.abs(diff_db[:, 2:-2])))/10
    features.append((np.mean(np.abs(diff_db[:, 2:-2])))/10)
   # 13. APQ
    apq = (np.sum(diff_db ** 2))/1000000000
    features.append((np.sum(diff_db ** 2))/1000000000)
    # 14. DDA
    dda = (np.sum(np.abs(diff_db[:, 1:])))/10000000
    features.append((np.sum(np.abs(diff_db[:, 1:])))/10000000)
    # 15. NHR
    harmonics = librosa.effects.harmonic(y)
    # print(harmonics)
    harmonics_db = librosa.amplitude_to_db(np.abs(librosa.stft(harmonics)))
    noise = y - harmonics
    noise_db = librosa.amplitude_to_db(np.abs(librosa.stft(noise)))
    nhr = (np.mean(
        np.sum(harmonics_db[:, 1:], axis=1) / np.sum(noise_db[:, 1:], axis=1)))/100
    features.append((np.mean(
        np.sum(harmonics_db[:, 1:], axis=1) / np.sum(noise_db[:, 1:], axis=1)))/100)
    # 16. HNR
    hnr = (np.mean(harmonics_db[:, 1:]) - np.mean(noise_db[:, 1:]))*10
    features.append(
        (np.mean(harmonics_db[:, 1:]) - np.mean(noise_db[:, 1:]))*10)
    # 17. RPDE
    rpde = (np.mean(librosa.feature.delta(
        librosa.feature.spectral_rolloff(y=y, sr=sr))))/10
    features.append((np.mean(librosa.feature.delta(
        librosa.feature.spectral_rolloff(y=y, sr=sr))))/10)
    fea = np.array(features)
    fe = fea.reshape(1, 17)
    dff = pd.DataFrame(fe, columns=['MDVP:Fo(Hz)', 'MDVP:Fhi(Hz)', 'MDVP:Flo(Hz)', 'MDVP:Jitter(%)',
                                    'MDVP:Jitter(Abs)', 'MDVP:RAP', 'MDVP:PPQ', 'Jitter:DDP',
                                    'MDVP:Shimmer', 'MDVP:Shimmer(dB)', 'Shimmer:APQ3', 'Shimmer:APQ5',
                                    'MDVP:APQ', 'Shimmer:DDA', 'NHR', 'HNR', 'RPDE'])
    fe = fe[0]
    result = PDetect.predict(dff)
    resp = {'MDVP:Fo(Hz)': fe[0], 'MDVP:Fhi(Hz)': fe[1], 'MDVP:Flo(Hz)':fe[2], 'MDVP:Jitter(%)': fe[3],
                                    'MDVP:Jitter(Abs)': fe[4], 'MDVP:RAP':fe[5], 'MDVP:PPQ':fe[6], 'Jitter:DDP':fe[7],}
    print(type (resp))
    # print("====", str(resp))
    # fe_json = json.dumps({"features": fe})
    # res = {"features": fe_json}
    # print(res)

    return str(result)


@app.route('/predict')
# @cross_origin()
def predict():

    # print('-----')
    # audio_file = request.files.get('files')
    # audio_file.save('temp.mpeg')
    # print(os.listdir())
    print("--------------")
    return Response(extract_features('temp.mpeg'))
    # return Response('0k')
    # return respo
    # print(respo)
    # return respo


if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)



# i=1
# on saving that file
# file.save(f"audio{i}")

# audio(3).mpeg

# import re
# try to to identufy (/d), replace it with ""
# audio.mpeg
# and the old file will get re[laced
#                              ]