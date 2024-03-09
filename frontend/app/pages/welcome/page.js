import Link from 'next/link';

import Navbar from '@/app/components/Navbar';

const Page = () => {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Navbar />

          <section className="flex flex-col items-center">
            <div className="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
              <p className="mb-4 font-semibold text-orange-400 md:mb-6 md:text-lg xl:text-xl">
                Brain MRI Tumor Classification Using Deep Learning
              </p>

              <h1 className="mb-8 font-extrabold text-black text-2xl lg:text-4xl tracking-wide poppins-regular">
                A.I. tool to classify{' '}
                <span className="text-orange-500">Brain Tumor</span> from MRI
                images
              </h1>

              <div className="flex w-full flex-col gap-2.5 items-center mt-5">
                <Link
                  href="/pages/predict"
                >
                  <button className="inline-block rounded-lg bg-orange-500 py-5 px-12 text-center text-xl tracking-wide font-semibold text-white outline-none ring-orange-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700">Make Prediction</button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
