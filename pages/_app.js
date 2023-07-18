import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import {useEffect} from 'react'
import Script from "next/script";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    if (window.magicpulseinit) {
      try {
        window.magicpulseinit("YOUR_APP_ID");
      } catch (error) {
        console.error("Failed to load the Magic Pulse package", error);
      }
    }
  }, []);
  return (
    <SessionProvider session={session}>
     <Script
        src="https://cdn.jsdelivr.net/npm/crunchit@latest/crunchit.min.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
