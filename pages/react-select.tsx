import Layout from '../components/Layout'
import Card from '../components/Card'
import SearchBox2 from '../components/SearchBox2'
import SubTags2 from '../components/SubTags2'

export default () => (
    <Layout>
        <Card
            showLid={false}
        >
            <h3>Search Anime</h3>
        </Card>

        <Card showLid={false}>
            <h3>Select some subtags</h3>
            <SubTags2 />
        </Card>
    </Layout>
)