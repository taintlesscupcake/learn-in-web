import '../styles/globals.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="min-h-screen">
        <div className="main bg-neutral pb-4 border-b-4 border-carbon">
          <Header />
          <Nav />
        </div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
