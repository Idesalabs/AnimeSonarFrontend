import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import SubsForm from '../components/SubscriptionForm'
import Card from '../components/Card'
import { colors } from '../styles'
import ShareButtons from '../components/ShareButtons'

const IntroText = () => (
    <div>
        <h1>Coming Soon</h1>
        <p style={{ marginTop: 10 }}>Making your mind up on what show to watch doesn't have to be difficult. Let Anime Sonar make that choice for you.</p>
        <style jsx>
            {`
            h1 {
                font-size: calc(30px + 3vw);
                padding-top: 15px;
                text-align: center;
                margin:auto;
                font-weight:700;
                letter-spacing: 4px;
            }
            
            p {
                font-size: 2.5vmin;
                max-width:70%;
                margin:auto;
                text-align: center;
                letter-spacing: 2px;
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
    <div>
        <h1 style={{ fontSize: 23, fontWeight: 700 }}>Features</h1>
        <Card>
            <h2 style={{ marginBottom: 20 }}>Intuitive Tag System</h2>
            <img className="img-fluid" src="/tags__system__logo.svg" alt="features__image-1" />
            <p style={{}} className="description">You can select how much a tag is actually demonstrated in the anime e.g how "romantic" or "comedic".</p>
        </Card>
        <Card>
            <h2 style={{ marginBottom: 20 }}>Based on mood</h2>
            <img className="img-fluid" src="/mood__selector__logo.svg" alt="features__image-1" />
            <p style={{}} className="description">You down in the dumps ? find anime to cheer you up.</p>
        </Card>
        <p style={{ fontSize: 20 }}>...and more features !</p>
        <style jsx>
            {`
            div {
                padding: 10px;
                color: ${colors.primary};
                width: 100%;
                max-width: 500px;
                margin: auto;
            }
            h1 {
                text-align: center;
                color: #fff;
                padding-top: 30px;
            }
            h2 {
                text-align: center;
                font-size: 25px;
                font-weight:700;
            }
            img {
                display: block;
                margin: auto;
                max-height: 300px;
                max-width: 100%;
            }
            p {
                color: ${colors.primary};
                text-align: right;
                font-weight: 700;
                margin-top: 10px;
                padding: 10px 0;
            }
            .description {
                text-align: center;
                font-weight: 400;
                max-width:80%;
                margin: auto;
            }

            @media only screen and (max-width: 600px) {
                h1 {
                    font-size: 6vw;
                    padding-top: 0;
                }
                h2 {
                    font-size: 6vw;
                }
               p {
                font-size: calc(2vw + 5px);
                letter-spacing: 1px;
               }
            }
            `}
        </style>
    </div>
)


export default () => (
    <Layout backgroundImage='/landing__page__background.svg'>
        <Section>
            <IntroText />
        </Section>
        <Features />
        <div style={{ width: '100%', maxWidth: 400 }}>
            <SubsForm />
        </div>
        <div style={{ padding: '10px 0 0', width: '100%', maxWidth: '500px', display: 'flex', justifyContent: 'flex-end' }}>
            <ShareButtons />
        </div>
        <BottomPadding />
    </Layout>
)