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
                margin: 7% 0 0 7%;
                width: 70%;
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
        <Section><img className="img-fluid" src="https://picsum.photos/1000/600" alt="features__image-1"/></Section>
        <Section><img className="img-fluid" src="https://picsum.photos/1000/600" alt="features__image-2"/></Section>
        <Section><p>...and more!</p></Section>
        <style jsx>
            {`
            div {
                padding: 10px;
            }
            h1 {
                text-align: center;
                font-size: 25px;
            }
            img {
                display: block;
                margin: auto;
                max-height: 300px;
                max-width: 100%
            }
            p {
                color: #fa6814;
                text-align: right;
                font-weight: 700;
            }
            `}
        </style>
    </div>
)

const SubsForm = () => (
    <div style = {{display: "flex", justifyContent: "center"}}>
        <div>
        <p>Get notified once we launch</p>
        <form action="">
            <input type="email"/>
            <button type='submit'>SUBSCRIBE</button>
        </form>
        <style jsx>
            {`
            input {
                padding: 5px 26px;
                font-size: 15px;
                border-radius: 50px 0 0 50px;
            }
            button {
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 5px 26px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 15px;
                margin: 0px;
                cursor: pointer;
                border-radius: 0 50px 50px 0;
            }
            p {
                color: #fa6814;
                font-size: 13px;
            }
            `}
        </style>
        </div>
    </div>
)

export default () => (
    <Layout>
        <Section>
        <IntroText/>
        </Section>
        <Features/>
        <Section>
            <SubsForm/>
        </Section>
    </Layout>
)