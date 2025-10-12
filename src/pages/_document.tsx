import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload local fonts for better performance */}
        <link 
          rel="preload" 
          href="/fonts/Shango.otf" 
          as="font" 
          type="font/otf"
          crossOrigin=""
        />
        <link 
          rel="preload" 
          href="/fonts/Recoleta.otf" 
          as="font" 
          type="font/otf"
          crossOrigin=""
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}