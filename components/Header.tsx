import { Styles } from 'types/global'


const styles: Styles = {
    container: {
        backgroundColor: 'white',
        padding: '10px 40px 10px',
        position: 'sticky',
        top: 0,
        zIndex: 10000,
        boxShadow: '0 8px 10px -5px #696969'
    },
    innerContainer: {
        maxWidth: 800,
        width: '100%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
    }
}

export default () => (
    <nav style={styles.container}>
        <div style={styles.innerContainer}>
            {/* <img src='/logo.svg' height={50} /> */}
            <img src='/logo-with-text.svg' height={40} />
        </div>

    </nav>
)

