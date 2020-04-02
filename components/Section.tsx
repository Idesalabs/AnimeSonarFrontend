interface Props {
    children: any
    justifyContent?: string
    padding?: string | number
    margin?: string | number
}

export default (props: Props) => (
    <section>
        {props.children}
        <style jsx>{`
        section {
            display: flex;
            justify-content: ${props.justifyContent};
            padding: ${props.padding};
            margin: ${props.margin};
        }
        `}</style>
    </section>
)