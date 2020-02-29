

export default (props) => (
    <div>
        {props.children}
        <style jsx>
            {`
            div {
                background-color: #fff;
                padding: 30px;
                margin-top: 30px;
                border-radius: ${props.borderRadius};
                box-shadow: 2px 5px 10px #91919152;
            }
            `}
        </style>
    </div>
)