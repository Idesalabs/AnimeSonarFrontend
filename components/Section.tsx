

export default (props) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
            background-color: #bbbaba;
            opacity: 0.7;
            padding: 10px;
            margin: 10px;
        }
        `}</style>
    </div>
)