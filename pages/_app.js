import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <div className='container mx-auto'>
      <Navbar/>
      <main className='pb-32'>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </div>
  </div>
}

export default MyApp
