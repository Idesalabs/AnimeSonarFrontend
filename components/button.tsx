import { colors } from '../styles'

const Button = (props) => (
    <>
    <a href='#' className="button" onClick={e => {
        e.preventDefault()
        props.handleClick()
        }}>{props.text}</a>
    <style jsx>
        {`
        .button {
            font-weight: 500;
            border-radius: ${props.borderRadius};
            border: 1.5px solid ${colors.primary};
            background: #fff;
            color: ${colors.primary};
            text-decoration: none;
            text-align: center;
            cursor:pointer;
            padding: ${props.padding};
            transition: all 0.2s;
            width: ${props.width};
        }
        
        .button:hover {
            /*box-shadow: inset 0px 0px 0px 2px ${colors.primary};*/
            background: ${colors.gradient};
            color: #fff;
        }
        `}
    </style>
    </>
)

export default Button