import Header from './Header'
import { colors } from '../styles'

interface LayoutProps {
    backgroundImage?: string
    children: React.ReactNode
}

export default (props: LayoutProps) => (
    <div className="layout__body" style={{ backgroundColor: colors.background }} >
        <Header />
        <div className="b-image__skewer"></div>
        <div className="children">
            {props.children}
        </div>
        <style jsx>{`
        div {
            color: #fff;
            width: 100%;
          }

          .b-image__skewer {
            height: calc(50vh + 10vw);
            background-image: ${colors.gradient}, url("${props.backgroundImage}");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 0% 100%);
            position: fixed;
          }

        .children {
            margin: auto;
            width: 100%;
            max-width: 800px;
            display:flex;
            flex-direction:column;
            align-items:center;
            position: relative;
          
        }
        `}</style>
    </div>
)