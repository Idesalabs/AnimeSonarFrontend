import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import SubsForm from '../components/SubscriptionForm'
import { colors } from '../styles'
import ShareButtons from '../components/ShareButtons'
import { FeaturesCard } from '../components/FeaturesCard'
import MetaTags from '../components/MetaTags'
import TagSlider from '../components/TagSlider'

const IntroText = () => (
    <div className='intro__text'>
        <h2 className='intro__heading'>The "Over-Powered" Anime Recommender</h2>
        <p style={{ marginTop: 10 }} className='intro__description'>
            Get anime suggestions by expressing what you want to watch.
        </p>
        <style jsx>
            {`
            .intro__text {
                color: #fff;
                padding: 10vh 0 5vh;
            }


            .intro__heading {
                // font-size: 7vmin;
                font-size: calc(18px + 3vw);
                padding-top: 15px;
                text-align: center;
                margin:auto;
                font-weight:700;
                font-family:roboto;
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
    <div style={{ padding: 10, width: '100%', maxWidth: 600, margin: 'auto' }}>
        <h1 className='features__heading' >Features</h1>
        <FeaturesCard title='Intuitive Tag System'>

            <>

                <TagSlider />

                <p
                    style={{
                        textAlign: 'center',
                        fontSize: 'calc(15px + .6vmin)',
                        marginTop: 10
                    }}

                >Prioritize focus areas you want in an anime e.g how 'romantic' or 'comedic'.</p>



            </>
        </FeaturesCard>

        <FeaturesCard title='Based on mood'>
            <>
                <img className="img-fluid" style={{ marginTop: 10 }} src='/mood__selector__logo.svg' alt="features__image-1" />
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: 'calc(15px + .6vmin)',

                    }}
                >You down in the dumps ? Find anime to cheer you up.</p>

            </>
        </FeaturesCard>

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
                font-weight:500;
            }
            `}
        </style>
    </div>
)


export default () => (
    <>
        <MetaTags />
        <Layout noSlant backgroundImage='/landing__page__background.svg'>
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