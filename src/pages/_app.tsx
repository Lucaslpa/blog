import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  
  return <div>
    <Script dangerouslySetInnerHTML={{__html: `
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','GTM-5DRCMZ8');
    `}} />
    <noscript>
      <iframe
       title='Google Tag Manager (noscript)'
       src="https://www.googletagmanager.com/ns.html?id=GTM-5DRCMZ8"
       height="0" 
       width="0" 
       style={{display:'none', visibility: 'hidden'}}/>
    </noscript>
    <Component {...pageProps} />
  </div> 
     
 
}
export default MyApp
