import { Inter } from 'next/font/google';
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
      <body className={inter.className}>
        {children}
        <script
          src="https://kit.fontawesome.com/1b20c7f767.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
