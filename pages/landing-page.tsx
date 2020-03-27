import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import SubsForm from '../components/SubscriptionForm'
import { colors } from '../styles'
import ShareButtons from '../components/ShareButtons'
import { FeaturesCard } from '../components/FeaturesCard'
import MetaTags from '../components/MetaTags'

const IntroText = () => (
    <div className='intro__text'>
        <h2 className='intro__heading'>Welcome to AnimeSonar</h2>
        <p style={{ marginTop: 10 }} className='intro__description'>
            An over-engineered anime recommendation site
        </p>
        <style jsx>
            {`
            .intro__text {
                color: #fff;
                padding: 10vh 0 5vh;
            }

            .intro__heading {
                font-size: 7vmin;
                padding-top: 15px;
                text-align: center;
                margin:auto;
                font-weight:700;   
            }
            
            .intro__description {
                font-size:calc(10px + 1vmin);
                max-width:80%;
                margin:auto;
                text-align: center;
                letter-spacing: 1.5px;      
            }

            @media only screen and (max-width: 600px) {
                .intro__text {
                    padding: 2.5vh 0 2.5vh;
                }
                .intro__heading {
                    font-size: calc(15px + 4vw);
                }
                .intro__description {
                    max-width:100%;
                }
            }
            `}
        </style>
    </div>
);

const Features = () => (
    <div style={{ padding: 10, width: '100%', maxWidth: 550, margin: 'auto' }}>
        <h1 className='features__heading'>Features</h1>
        <FeaturesCard
            title='Intuitive Tag System'
            image='/tag-system.svg'
            description="Prioritize focus areas of the anime you want. E.g how 'romantic' or 'tragic'."
        />
        <FeaturesCard
            title='Based on mood'
            image='/mood__selector__logo.svg'
            description='You down in the dumps ? find anime to cheer you up.'
        />

        <p className='features__footer'>...subtags, blacklist and more!</p>
        <style jsx>
            {`
            .features__heading {
                color: #fff;
                font-size: calc(12.5px + 1.5vmin);
                font-weight: 700;
                text-align: center;
            }
            .features__footer {
                font-size: calc(10px + 1vmin);
                text-align: right;
                padding: 15px 0;
            }
            `}
        </style>
    </div>
)


export default () => (
    <>
        <MetaTags />
        <Layout backgroundImage='/landing__page__background.svg'>
            <Section>
                <IntroText />
            </Section>
            <Features />
            <div style={{ width: '100%', maxWidth: 300 }}>
                <SubsForm />
            </div>
            <div style={{ padding: '10px 0 0', width: '100%', maxWidth: '500px', display: 'flex', justifyContent: 'center' }}>
                <ShareButtons />
            </div>
            <BottomPadding />
        </Layout>
    </>
)