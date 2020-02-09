import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'

const IntroText = () => (
    <div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consectetur!</h2>
        <style jsx>
            {`
            h1 {
                font-size: 30px;
            }
            
            h2 {
                font-size: 20px;
            }
            `}
        </style>
    </div>
);

const Features = () => (
    <div>
        <h1>Features</h1>
        <img src="" alt=""/><img src="" alt=""/>
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