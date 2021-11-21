import '../styles/globals.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
