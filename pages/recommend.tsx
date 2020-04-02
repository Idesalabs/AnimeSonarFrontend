import Layout from '../components/Layout'
import Card from '../components/Card'
import TagSlider from '../components/TagSlider'

export default () => {
    return <Layout noSlant>
        <Card showLid>
            <h2>Select Tags</h2>
            <p>Adjust the sliders to change how much of that tag should be in the anime.</p>
            <TagSlider />

        </Card>
    </Layout>
}