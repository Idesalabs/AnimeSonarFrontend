import React, { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import { RatingsCard } from './../components/RatingsCard';
import Button from '../components/button';
import { colors } from '../styles';
import SubTags from '../components/SubTags';
import SearchAnimeSection from '../sections/ratings/SearchAnimeSection';
import { Anime } from '../types/typings';
import RatingsSection from '../sections/ratings/RatingsSection'


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

                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>

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
                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>
            }

            <RatingsCard title='Suggest SubTags'>
                <Section padding='10px 0'>
                    <SubTags />
                </Section>

                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>

            <BottomPadding />
        </Layout>
    </>
}