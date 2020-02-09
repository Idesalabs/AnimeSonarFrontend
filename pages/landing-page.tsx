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
        <Section><img style={{maxHeight: "300px"}} className="img-fluid" src="https://picsum.photos/1000/600" alt="features__image-1"/></Section>
        <div><img className="img-fluid" src="https://picsum.photos/1000" alt="features__image-2"/></div>
        <p>...and more!</p>
        <style jsx>
            {`
            div {
                padding: 10px;
            }
            `}
        </style>
    </div>
)

export default () => (
    <Layout>
        <Section>
        <IntroText/>
        </Section>
        <Features/>
    </Layout>
)