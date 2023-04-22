from flask import Flask, render_template, request, Response
from flask_cors import CORS, cross_origin
# from sklearn.externals import joblib
import numpy as np
import pandas as pd
import librosa
import pickle
import os


app = Flask(__name__)
CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app, origins='localhost')


@app.route('/predict', methods=['POST'])
# @cross_origin()
def predict():
    file = open('PDfinaltest.unknown', 'rb')
    PDetect = pickle.load(file)
    print('-----')
    audio_file = request.files.get('files')
    audio_file.save('temp.mpeg')

    def extract_features():
        y, sr = librosa.load('./temp.mpeg', sr=None)
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
        harmonics = librosa.effects.harmonic
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
        return fe

    return Response(extract_features())


if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)
