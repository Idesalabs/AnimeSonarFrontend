import Header from './Header'
import { colors } from '../styles'

export default props => (
    <div style={{ backgroundColor: colors.background }} >
        <Header />
        <div className="b-image__skewer"></div>
        <div className="children">
            {props.children}
        </div>
        <style jsx>{`
        div {
            color: #fff;
            position: relative;
            z-index: -2;
            width: 100vw;
          }

          .b-image__skewer {
            height: 75vh;
            background-image: linear-gradient(to bottom right, rgba(250, 74, 20, 0.7), rgba(250, 47, 20, 0.7)), url("https://picsum.photos/1000");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 100%);
            position: absolute;
            z-index: -5;
          }

        .children {
            margin: auto;
            width: 100%;
            max-width: 800px;
            display:flex;
            flex-direction:column;
            align-items:center;
        }
        `}</style>
    </div>
)