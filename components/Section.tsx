

export default (props) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
            padding: 10px;
            margin: 10px;
        }
        `}</style>
    </div>
)