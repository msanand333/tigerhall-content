import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Tigerhall Content',
  description: 'A small SPA that can be used to search tigerhall content',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-montreal bg-[#001315]'>{children}</body>
    </html>
  );
}
