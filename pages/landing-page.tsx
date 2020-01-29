import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../components/landing-page.module.css'

const IntroSection = () => {
    return <div>
        <section>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, repellendus! Tenetur, illum nulla.</p>
        </section>
        </div>
}

const Features = () => {
    return <div>
        <section>
            <h1>Features</h1>
            <div>
                <img src="https://picsum.photos/500/300?random=2" alt="Intuitive-tag-system" />
            </div>
            <div>
                <img src="https://picsum.photos/500/300" alt="Based-on-Mood" />
            </div>
        </section>
    </div>
}

const Footer = () => {
    return <div>
    <section>
        <p>...and more features!</p>
    </section>
    <section>
        <p>Get notified once we launch</p>
        <div>
            <input type="email" name="" id=""/>
            <Button>SUBSCRIBE</Button>
        </div>
    </section>
</div>
}

const LandingPage = () => {
    return <div className = "MyContainer">
            <Row>
                <Col>
                <IntroSection/>
                </Col>
            </Row>
        
        <Features/>
        <Footer/>
    </div>

}


export default LandingPage