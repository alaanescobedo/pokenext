import Head from 'next/head'
import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'

interface AppLayoutProps {
  children: React.ReactNode
  pageTitle: string
  pageDescription?: string
}

export const AppLayout = ({ children, pageTitle, pageDescription }: AppLayoutProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{
        maxWidth: '1200px',
        width: '95%',
        margin: '80px auto'
      }}>
        {children}
      </main>
    </>
  )
}
