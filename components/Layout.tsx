

export default props => (
    <div>
        {props.children}
        <style jsx>{`
        div {
            margin: 20px;
            border-style: solid;
            border-width: 5px;
        }
        `}</style>
    </div>
)