

export default (props) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
            display: flex;
            justify-content: ${props.justifyContent};
            padding: ${props.padding};
            margin: ${props.margin};
        }
        `}</style>
    </div>
)