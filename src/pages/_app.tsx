import { useEffect } from 'react'
import '../styles/globals.css'
import { AxeAccessibilityReporter } from '../utils/AxeAccessibilityReporter'

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   AxeAccessibilityReporter()
  // }, [])

  return <Component {...pageProps} />
}
