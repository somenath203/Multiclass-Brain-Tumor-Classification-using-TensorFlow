# Multiclass Brain Tumor Classification using TensorFlow

## Introduction
This is a project which uses deep learning algorithm to classify the type of tumor present in the brain MRI image. The model is only able to detect three type of tumors as of now i.e. **glioma**, **meningioma** and **pituitary**.

## Dataset used in this project

The dataset used in this project is taken from kaggle: https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset

## Models used in this project

1) Our own CNN model
2) VGG19
3) InceptionV3
4) resnet101
5) MobileNetV3
6) Ensemble Learning Model based on our own CNN model and VGG19

**Out of the all the above models, resnet101 proved to be the most effective one with a training accuracy of around 95.99% and testing accuracy of around 92.41%**

## About the web application of the deep learning model

The deep learning model of this project is connected with a frontend webapp created with the help of NextJS via FastAPI for real time prediction. The frontend of the project is deployed on Vercel and the backend of the project is deployed on HuggingFace.

## Links

1) Live Preview: https://multiclass-brain-tumor-classification.vercel.app/
2) Backend FastAPI link of the model: https://som11-multiclass-brain-tumor-classification.hf.space/
3) Swagger documentation of the FastAPI of the deep learning model: https://som11-multiclass-brain-tumor-classification.hf.space/docs

## Warning
While the model of this project can classify brain tumors correctly, but in some cases, the model may misclassify tumors or fail to detect them altogether, therefore, it is strongly advised not to rely solely on the output of this model.
