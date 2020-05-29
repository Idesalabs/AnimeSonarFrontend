import Layout from '../components/Layout'
import { RatingsCard } from './../components/RatingsCard';
import TagSlider from '../components/TagSlider'
import BlacklistTags from '../components/BlacklistTags';
import SubTags from '../components/SubTags';
import { useState } from 'react'
import { SubTag,Tag,ReturnTag,ReturnSubTag } from '../types/typings';

interface RecommendState {
    selectedTags: Tag[]
    selectedSubTags: SubTag[]
    blacklistedTags: Tag[]
}

export default () => {
    const [recommendPageState, setRecommendPageState] = useState<RecommendState>({
        selectedTags: [
            {
                averageRatings: null,
                name: "",
                id: ""
            }
        ],
        selectedSubTags: [
            {
                name: "",
                id: ""
            }
        ],
        blacklistedTags: [
            {
                averageRatings: null,
                name: "",
                id: ""
            }
        ]
    })

    const options = {
        Tags: [
            {
                averageRatings: 0,
                name: "Action",
                id: "6kzv2qvya"
            },
            {
                averageRatings: 0,
                name: "Adventure",
                id: "12ozmtviz"
            },
            {
                averageRatings: 0,
                name: "Comedy",
                id: "onfl84664"
            },
            {
                averageRatings: 0,
                name: "Super Power",
                id: "4us0mk0n5"
            },
            {
                averageRatings: 0,
                name: "Sci-fi",
                id: "3fbr9kshs"
            },
            {
                averageRatings: 0,
                name: "Horror",
                id: "5t6cb8z1i"
            },
            {
                averageRatings: 0,
                name: "Psychological",
                id: "tqfkiqtok"
            }
        ],
        SubTags: [
            {
                name: 'fox-spirit',
                id: '#########008'
            },
            {
                name: 'youkai',
                id: '#########009'
            },
            {
                name: 'light-novel adaptation',
                id: '#########010'
            },
            {
                name: 'trapped in a game',
                id: '#########011'
            },
            {
                name: 'MC with glasses',
                id: '#########012'
            }
        ]
    }

    const renameTags = (input: Array<ReturnTag>): Array<Tag> => {
        return input.map(({label, value, averageRatings, ...obj})=> ({
            name: label,
            id: value,
            averageRatings,
            ...obj
        }))
    }

    const renameSubTags = (input: Array<ReturnSubTag>): Array<SubTag> => {
        return input.map(({label, value, ...obj})=> ({
            name: label,
            id: value,
            ...obj
        }))

    }

    return <Layout noSlant>
        <RatingsCard title='Select Tags'>
            <p>Adjust the sliders to change how much of that tag should be in the anime.</p>
            <TagSlider />

        </RatingsCard>

        <RatingsCard title='Enter SubTags'>
            
            <SubTags
                    initialTags= {options.SubTags}
                    onChange={(input) => {
                        setRecommendPageState({
                            ...recommendPageState,
                            selectedSubTags: [
                                ...recommendPageState.selectedSubTags,
                                ...renameSubTags(input)
                            ]
                        })}
                    }
                    />

        </RatingsCard>

        <RatingsCard title='Blacklist Tags'>
            
            <BlacklistTags
                    initialTags= {options.Tags}
                    onChange={(input) => {
                        setRecommendPageState({
                            ...recommendPageState,
                            blacklistedTags: [
                                ...recommendPageState.blacklistedTags,
                                ...renameTags(input)
                            ]
                        })}
                    }
                    />

        </RatingsCard>
    </Layout>
}