import Layout from 'components/Layout'
import Card from 'components/Card'
import TagSlider from 'components/TagSlider'

export default () => {
    return <Layout >
        <Card showLid>
            <TagSlider />
        </Card>
    </Layout>
}