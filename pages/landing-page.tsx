import Button from 'react-bootstrap/Button';

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
            <button>SUBSCRIBE</button>
        </div>
    </section>
</div>
}

const LandingPage = () => {
    return <div>
        <IntroSection/>
        <Features/>
        <Footer/>
        <Button>Hello</Button>
    </div>

}


export default LandingPage