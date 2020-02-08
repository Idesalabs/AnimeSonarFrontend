import Header from './Header'

export default props => (
    <div>
        <Header/>
        {props.children}
        <style jsx>{`
        div {
            margin: 20px 0;
        }
        `}</style>
    </div>
)