import { colors } from '../styles'

export default (props) => (
    <>
    <a href='#' className="button" onClick={e => {
        e.preventDefault()
        {props.handleClick}
        }}>{props.title}</a>
    <style jsx>
        {`
        .button {
            font-weight: 500;
            border-radius: ${props.borderRadius};
            border: 1.5px solid ${colors.primary};
            background: #fff;
            color: ${colors.primary};
            text-decoration: none;
            cursor:pointer;
            display: inline-block;
            padding: 6px 27px;
            transition: all 0.2s; 
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