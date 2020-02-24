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
    </Head>;
}

export default MetaTags
