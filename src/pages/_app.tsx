import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  
  return <Component {...pageProps}/> 
     
 
}
export default MyApp
