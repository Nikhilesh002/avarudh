from flask import Flask, request, jsonify

app = Flask(__name__)

# Define route to handle prediction requests
@app.route('/predict', methods=['POST'])

def predict_image_similarity(image_data):
    import requests
    from PIL import Image
    from io import BytesIO

    # Function to download and preprocess the image from URL
    def preprocess_image(url):
        response = requests.get(url)
        img = Image.open(BytesIO(response.content))
        img = img.resize((224, 224))  # Resize the image to match the input size of your model
        return img

    # Example usage:
    image_url = 'https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80'
    image = preprocess_image(image_url)
    prediction = predict_one(image)
    print(prediction)
    return True

def predict():
    # Get image data from request
    image_data = request.json['image']

    # Process image data (e.g., pass it through your trained model)
    # Assuming predict_image_similarity() is a function that returns the prediction
    prediction = predict_image_similarity(image_data)

    # Return prediction as JSON response
    return jsonify({'prediction': prediction})

if __name__ == '_main_':
    app.run(debug=True)