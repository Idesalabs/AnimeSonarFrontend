import Header from './Header'

export default props => (
    <div>
        <Header/>
        <div className="b-image__skewer"></div>
        {props.children}
        <style jsx>{`
        div {
            color: #fff;
            margin: auto;
            position: relative;
            z-index: -2;
            width: 100%;
            max-width: 700px;
        }
        .b-image__skewer {
            height: 50vh;
            background-image: linear-gradient(to bottom right, rgba(250, 74, 20, 0.7), rgba(250, 104, 20, 0.7)), url("https://picsum.photos/1000");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%);
            position: absolute;
            z-index: -1;
        }
        `}</style>
    </div>
)