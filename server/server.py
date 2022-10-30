import cv2
import numpy as np
import urllib.request
from flask_cors import CORS
from flask import Flask, request, Response, jsonify
from ai import detect

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})

@app.route('/api/test', methods=['POST'])
def test():
    request_image_data = request.data.decode('UTF-8')
    resp = urllib.request.urlopen(request_image_data)
    image = np.asarray(bytearray(resp.read()), dtype="uint8")
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)
    detection_results = detect(image)
    return jsonify(
        status="OK",
        results=detection_results
    )

app.run()