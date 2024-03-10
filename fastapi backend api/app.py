from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from keras.models import load_model
from keras.utils import load_img, img_to_array
from io import BytesIO
from keras.applications.resnet import preprocess_input


app = FastAPI()


origins = ["*"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


model = load_model('resnet101_model.h5')


class_names = ['glioma', 'meningioma', 'no tumor', 'pituitary']


@app.get('/')
def welcome():
    return {
        'success': True,
        'message': 'server of "brain tumor classification using 4 classes" is up and running successfully.'
    }


@app.post('/predict')
async def predict_disease(fileUploadedByUser: UploadFile = File(...)):

    contents = await fileUploadedByUser.read()

    imageOfUser = load_img(BytesIO(contents), target_size=(224, 224, 3))

    image_to_arr = img_to_array(imageOfUser)

    image_to_arr_preprocess_input = preprocess_input(image_to_arr)

    image_to_arr_preprocess_input_expand_dims = np.expand_dims(
        image_to_arr_preprocess_input, axis=0)

    prediction = model.predict(image_to_arr_preprocess_input_expand_dims)[0]

    prediction_argmax = np.argmax(prediction)

    prediction_final_result = class_names[prediction_argmax]

    confidence = np.max(prediction) * 100

    return {
        'success': True,
        'predicted_result': prediction_final_result,
        'confidence': f'{confidence:.2f}%',
        'message': f'Status of the Brain Image: {prediction_final_result} with a confidence of {confidence:.2f}%'
    }