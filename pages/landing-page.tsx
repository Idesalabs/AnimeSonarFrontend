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
    <div>

        <h2 className='heading'>Over-Engineered Anime Randomizer</h2>

        <p style={{ marginTop: 10 }}>
            Just kidding...get anime suggestions by precisely expressing what you want to watch.
        </p>
        <style jsx>
            {`
            .heading {
                font-size: calc(20px + 3vw);
                padding-top: 15px;
                text-align: center;
                margin:auto;
                font-weight:700;
                
            }
            
            p {
                font-size: 2.5vmin;
                max-width:70%;
                margin:auto;
                text-align: center;
               
            }

            @media only screen and (max-width: 600px) {
                h1 {
                    font-size: calc(30px + 2vw);
                    letter-spacing: 2px;
                    padding-top: 0;
                    max-width:100%;
                }
                p {
                    font-size: calc(2vw + 5px);
                    letter-spacing: 1px;
                    max-width:100%;
                }
            }
            `}
        </style>
    </div>
);

const Features = () => (
    <div style={{ padding: 10, color: colors.primary, width: '100%', maxWidth: 550, margin: 'auto' }}>
        <h1 style={{ color: 'white', fontSize: 23, fontWeight: 700, textAlign: 'center', }}>Features</h1>
        <FeaturesCard
            title='Intuitive Tag System'
            image='/tag-system.svg'
            description="Prioritize focus areas you want in an anime e.g how 'romantic' or 'tragic'."
        />
        <FeaturesCard
            title='Based on mood'
            image='/mood__selector__logo.svg'
            description='You down in the dumps ? Find anime to cheer you up.'
        />

        <p style={{
            fontSize: 20,
            color: colors.primary,
            textAlign: 'right',
            fontWeight: 700,
            marginTop: 10,
            padding: '10px 0'
        }}>...subtags, blacklist and more!</p>

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
            <div style={{ width: '100%', maxWidth: 400 }}>
                <SubsForm />
            </div>
            <div style={{ padding: '10px 0 0', width: '100%', maxWidth: '500px', display: 'flex', justifyContent: 'center' }}>
                <ShareButtons />
            </div>
            <BottomPadding />
        </Layout>
    </>
)