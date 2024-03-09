import { Inter } from 'next/font/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Multiclass Brain Tumor Classification',
  description:
    'This is an application with the help of which you can detect the type of tumor in a brain mri image',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
        <ToastContainer />
        <script
          src="https://kit.fontawesome.com/1b20c7f767.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
