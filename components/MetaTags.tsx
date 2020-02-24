import React from 'react'
import Head from 'next/head'

const MetaTags = () => {
    return <Head>
        <title>Anime Sonar - Over-Engineered Anime Suggestions</title>
        <meta name="title" content="Anime Sonar - Over-Engineered Anime Suggestions" />
        <meta name="description" content="Get anime suggestions by expressing what you want to watch." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://animesonar.com/" />
        <meta property="og:title" content="Anime Sonar - Over-Engineered Anime Suggestions" />
        <meta property="og:description" content="Get anime suggestions by expressing what you want to watch." />
        <meta property="og:image" content="/logo-white.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://animesonar.com/" />
        <meta property="twitter:title" content="Anime Sonar - Over-Engineered Anime Suggestions" />
        <meta property="twitter:description" content="Get anime suggestions by expressing what you want to watch." />
        <meta property="twitter:image" content="/logo-orange.png"></meta>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
    </Head>;
}

export default MetaTags
