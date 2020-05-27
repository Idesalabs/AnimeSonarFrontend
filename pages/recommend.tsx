import Layout from '../components/Layout'
import { RatingsCard } from './../components/RatingsCard';
import TagSlider from '../components/TagSlider'
import SubTags2 from '../components/SubTags2';
import { useState } from 'react'

export default () => {
    const [recommendPageState, setRecommendPageState] = useState()

    return <Layout noSlant>
        <RatingsCard title='Select Tags'>
            <p>Adjust the sliders to change how much of that tag should be in the anime.</p>
            <TagSlider />

        </RatingsCard>

        <RatingsCard title='Enter SubTags'>
            
            {/* <SubTags2
                    initialTags= {ratingPageState.selectedAnime.subTags}
                    onCreate={(input) => {
                        const newSubTag = createOption(input);
                        setRatingPageState({
                            ...ratingPageState,
                            selectedAnime: {
                                ...ratingPageState.selectedAnime,
                                subTags: [
                                    ...ratingPageState.selectedAnime.subTags,
                                    newSubTag
                                ]
                            }
                        })}
                    }
                    /> */}

        </RatingsCard>

        <RatingsCard title='Blacklist Tags'>
            
            {/* <SubTags2
                    initialTags= {ratingPageState.selectedAnime.subTags}
                    onCreate={(input) => {
                        const newSubTag = createOption(input);
                        setRatingPageState({
                            ...ratingPageState,
                            selectedAnime: {
                                ...ratingPageState.selectedAnime,
                                subTags: [
                                    ...ratingPageState.selectedAnime.subTags,
                                    newSubTag
                                ]
                            }
                        })}
                    }
                    /> */}

        </RatingsCard>
    </Layout>
}