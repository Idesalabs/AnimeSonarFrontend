import Header from './Header'
import { colors } from '../styles'
import MetaTags from 'react-meta-tags';

interface LayoutProps {
    backgroundImage?: string
    children: React.ReactNode
}

export default (props: LayoutProps) => (
    <div className="layout__body" style={{ backgroundColor: colors.background }} >
        <MetaTags>
        <title>Anime Sonar — select, express, attain</title>
        <meta name="title" content="Anime Sonar — select, express, attain"/>
        <meta name="description" content="Get suggestions by precisely expressing what you want to watch."/>
        <meta name="keywords" content="anime animeSonar recommend recommendations what to watch"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://animesonar.com/"/>
        <meta property="og:title" content="Anime Sonar — select, express, attain"/>
        <meta property="og:description" content="Get suggestions by precisely expressing what you want to watch."/>
        <meta property="og:image" content="/logo.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://animesonar.com/"/>
        <meta property="twitter:title" content="Anime Sonar — select, express, attain"/>
        <meta property="twitter:description" content={`Get suggestions by precisely expressing what you want to watch.`}/>
        <meta property="twitter:image" content="/logo.png"/>
        </MetaTags>
        <Header />
        <div className="b-image__skewer"></div>
        <div className="children">
            {props.children}
        </div>
        <style jsx>{`
        .layout__body {
            color: ${colors.primary};
        }
        
        .b-image__skewer {
            width: 100%;
            height: calc(50vh + 10vw);
            background-image: ${props.backgroundImage ?
                'linear-gradient(to bottom right, rgba(255, 85, 43, .8),rgba(255, 85, 43, 1))' :
                colors.gradient
            }, url("${props.backgroundImage}");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 100%);
            position: fixed;
          }

        .children {
            margin: auto;
            width: 100%;
            max-width: 800px;
            display:flex;
            flex-direction:column;
            align-items:center;
            position: relative;
        }
        `}</style>
    </div>
)