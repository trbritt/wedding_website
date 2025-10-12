import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <title>Anaïs & Tristan | Wedding</title>
        <meta name="description" content="Join us in celebrating our love story - Anaïs & Tristan's Wedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:title" content="Anaïs & Tristan | Wedding" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}