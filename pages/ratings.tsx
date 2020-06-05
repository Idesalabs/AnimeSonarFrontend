import React, { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import { RatingsCard } from './../components/RatingsCard';
import Button from '../components/button';
import { colors } from '../styles';
import SubTags2 from '../components/SubTags2';
import SearchAnimeSection from '../sections/ratings/SearchAnimeSection';
import { Anime } from '../types/typings';
import RatingsSection from '../sections/ratings/RatingsSection';
import EpisodeCount from '../components/EpisodeCount'


interface RatingsState {
    selectedAnime: Anime
    selectedAnimeRatings: {
        [key: string]: number
    }
}

export default () => {
    const [ratingPageState, setRatingPageState] = useState<RatingsState>({
        selectedAnime: {
            description:'',
            id:'',
            subTags:[],
            tags:[],
            title:''
        },
        selectedAnimeRatings:{
            
        }
    })

    const createOption = (name: string) => ({
        name,
        id: name.toLowerCase().replace(/\s+/g, '-')
    })

    return <>
        <Layout noSlant>


            <RatingsCard title='What was the last anime you watched?'>
                <SearchAnimeSection
                    onChange={(anime) => {
                        setRatingPageState({
                            ...ratingPageState,
                            selectedAnime: anime,

                        })
                    }}
                />
            </RatingsCard>

            {!!ratingPageState.selectedAnime.tags.length && <RatingsCard title='How many episodes did you watch?'>
            <Section padding='10px 0 0' margin='10px 0 0'>
                <EpisodeCount/>
            </Section> 
            </RatingsCard>}

            {!!ratingPageState.selectedAnime.tags.length && <RatingsCard title='Ratings'> {/* if selectedAnime is true show the ratings card*/}
                <RatingsSection
                    onChange={({ tagId, tagValue, tagName }) => {
                        setRatingPageState({
                            ...ratingPageState,
                            selectedAnimeRatings: {
                                ...ratingPageState.selectedAnimeRatings,
                                [tagName]: tagValue
                            }
                        })
                    }}
                    tags={ratingPageState.selectedAnime.tags}
                    rating={ratingPageState.selectedAnimeRatings}

                />
            </RatingsCard>
            }

            {!!ratingPageState.selectedAnime.tags.length && <RatingsCard title='Suggest SubTags'>
                    <SubTags2
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
                    />

                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>
            }

            <BottomPadding />
        </Layout>
    </>
}