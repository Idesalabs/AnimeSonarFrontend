import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'

const IntroText = () => (
    <div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consectetur!</h2>
        <style jsx>
            {`
            div {
                margin: 10% 0 0 15%;
                width: 70%;
                text-align: justify;
            }
            h1 {
                font-size: 25px;
            }
            
            h2 {
                font-size: 15px;
            }
            `}
        </style>
    </div>
);

const Features = () => (
    <div>
        <h1>Features</h1>
        <Section><img src="" alt=""/></Section>
        <Section><img src="" alt=""/></Section>
        <p>...and more!</p>
    </div>
)

export default () => (
    <Layout>
        <Section>
        <IntroText/>
        </Section>
    </Layout>
)