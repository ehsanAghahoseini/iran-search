import '../styles/globals.css'
import BaseLayout from '../components/BaseLayout'
import "flickity/css/flickity.css";

function MyApp({ Component, pageProps }) {
  return(

    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default MyApp
