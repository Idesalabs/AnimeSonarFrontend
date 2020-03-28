import Header from './Header'
import { colors } from '../styles'

interface LayoutProps {
    backgroundImage?: string
    children: React.ReactNode
}

export default (props: LayoutProps) => (
    <div className="layout__body">
        <Header />
        <div className="b-image__skewer"></div>
        <div className="children">
            {props.children}
        </div>
        <style jsx>{`
        .layout__body {
            color: ${colors.primary};
            background-color: ${colors.background};
        }
        
        .b-image__skewer {
            width: 100%;
            height: calc(50vh + 15vmin);
            background-image: ${props.backgroundImage ?
                'linear-gradient(to bottom right, rgba(255, 85, 43, .8),rgba(255, 85, 43, 1))' :
                colors.gradient
            }, url("${props.backgroundImage}");
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