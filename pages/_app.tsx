import 'bootstrap/dist/css/bootstrap.min.css';
import App from 'next/app'
import Head from 'next/head'
class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props

        return (
            <div>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-158925809-1"></script>
                    <script dangerouslySetInnerHTML={googleAnalyticsCode}></script>
                </Head>
                <Component {...pageProps} />
            </div>
        )
    }
}

const googleAnalyticsCode = {
    __html: `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-158925809-1')
    `
}

export default MyApp

