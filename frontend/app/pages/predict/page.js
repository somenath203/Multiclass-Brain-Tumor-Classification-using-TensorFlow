'use client';

import { useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Navbar from '@/app/components/Navbar';
import Loader from '@/app/components/Loader';

const Page = () => {
  const MySwal = withReactContent(Swal);

  const imageInputReset = useRef();

  const [loading, setLoading] = useState();

  const getTheUploadedPhoto = (e) => {
    const fileSentByUser = e?.target?.files[0];

    if (fileSentByUser) {
      sendImgToBackendAndPredict(fileSentByUser);
    }
  };

  const sendImgToBackendAndPredict = async (uploadBrinImg) => {
    try {
      const formData = new FormData();

      formData.append('fileUploadedByUser', uploadBrinImg);

      setLoading(true);

      const { data } = await axios.post(
        `http://localhost:8000/predict`,
        formData
      );

      setLoading(false);

      MySwal.fire({
        html: `
          <img src="${URL.createObjectURL(
            uploadBrinImg
          )}" style="width: 100%;" alt="leaf image" />
          <p style="font-size: 27px; margin-top: 10px;"> The uploaded image of the brain has ${
            data?.predicted_result
          } and the model made this prediction with a confidence of ${
          data?.confidence
        }</p>
          
        `,
        confirmButtonColor: '#E2641C',
      });

      imageInputReset.current.value = null;
    } catch (error) {
      imageInputReset.current.value = null;

      console.log(error);
    }
  };

  return (
    <>
      {loading && <Loader />}

      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Navbar />

          <section className="flex flex-col items-center">
            <div className="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
              <p className="mb-4 font-semibold text-orange-400 md:mb-6 md:text-lg xl:text-xl flex flex-col">
                <span>
                  Click the button below to upload the Brain MRI Image
                </span>
                <span>
                  {' '}
                  and our model will predict the type of tumor present
                </span>
              </p>

              <div className="mt-6">
                <label>
                  <div className="drop-shadow-md px-12 py-8 rounded-xl focus:outline-none resize-none text-white bg-orange-500 hover:bg-orange-600 hover:cursor-pointer">
                    <p className="text-center text-xl tracking-wider flex items-center justify-center gap-3">
                      <i className="fa-solid fa-cloud-arrow-up text-4xl"></i>{' '}
                      <span className="text-xl poppins-regular tracking-wider">
                        Upload the brain photo for prediction
                      </span>
                    </p>
                  </div>
                  <input
                    type="file"
                    ref={imageInputReset}
                    id="picName"
                    onChange={getTheUploadedPhoto}
                    hidden
                    accept=".jpg,.jpeg,.png"
                  />
                </label>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
