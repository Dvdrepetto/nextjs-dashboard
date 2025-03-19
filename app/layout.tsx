import { montserrat } from './ui/fonts';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased `}>
        {children}
        <footer className='text-center text-gray-500 text-sm py-10'>
          Made with ❤️ by Vercel
        </footer>
      </body>
    </html>
  );
}
