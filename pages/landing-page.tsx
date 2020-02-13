import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'

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
                font-size: 35px;
                padding-top: 10px;
            }
            
            h2 {
                font-size: 20px;
            }

            @media only screen and (max-width: 600px) {
                h1 {
                    font-size: 6vw;
                    padding-top: 0;
                }
                h2 {
                    font-size: 4vw;
                }
            }
            `}
        </style>
    </div>
);

const Features = () => (
    <div>
        <h1>Features</h1>
        <section>
            <h2>Intuitive Tag System</h2>
            <img className="img-fluid" src="https://picsum.photos/1000/600" alt="features__image-1"/>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nisi.</p>
        </section>
        <section>
            <h2>Based on mood</h2>
            <img className="img-fluid" src="https://picsum.photos/1000/600" alt="features__image-1"/>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nisi.</p>
        </section>
        <Section><p>...and more!</p></Section>
        <style jsx>
            {`
            div {
                padding: 10px;
                color: #fa6814;
            }
            h1 {
                text-align: center;
                font-size: 35px;
                color: #fff;
                padding-top: 30px;
            }
            section {
                background-color: #fff;
                padding: 20px;
                margin: 30px auto 0;
                border-radius: 10px;
                box-shadow: 2px 5px 10px #919191;
                width: 100%;
                max-width: 500px;
            }
            h2 {
                text-align: center;
                font-size: 30px;
                
            }
            img {
                display: block;
                margin: auto;
                max-height: 150px;
                max-width: 100%;
            }
            p {
                color: #fa6814;
                text-align: right;
                font-weight: 700;
            }
            .description {
                text-align: center;
            }

            @media only screen and (max-width: 600px) {
                h1 {
                    font-size: 6vw;
                    padding-top: 0;
                }
                h2 {
                    font-size: 5vw;
                }
                .description {
                    font-size: 2.8vw;
                }
            }
            `}
        </style>
    </div>
)

const SubsForm = () => (
    <div style = {{display: "flex", justifyContent: "center"}}>
        <div>
        <label>Get notified once we launch</label>
        <form action="">
            <input type="email"/>
            <button type='submit'>SUBSCRIBE</button>
        </form>
        <style jsx>
            {`
            input {
                padding: 4px 30px;
                margin: 0px;
                font-size: 13px;
                border: 1px solid orange;
                border-radius: 50px 0 0 50px;
            }

            button {
                background: linear-gradient(to bottom right, rgba(255, 217, 1), rgba(252, 25, 9));
                border: 1px solid rgba(255, 166, 0, 0.7);
                color: white;
                font-weight: 700;
                padding: 4px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 13px;
                margin: 0px;
                border-radius: 0 50px 50px 0;
            }

            button:hover {
                opacity: 0.7;
              }

            label {
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
        <BottomPadding/>
    </Layout>
)