import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'PARLION',
  description: 'The Ice Cream Master',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="stylesheet" type="text/css" href="/mainbea6.css" />
      </head>
      <body>
        {children}
        <Script src="/main1bce.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
