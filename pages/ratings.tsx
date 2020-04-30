import React, { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import { RatingsCard } from './../components/RatingsCard';
import SearchBox from './../components/SearchBox';
import Button from '../components/button';
import { colors } from '../styles';
import SubTags from '../components/SubTags';
import SearchAnimeSection from 'sections/ratings/SearchAnimeSection';
import { Anime } from 'types/typings';
import RatingsSection from 'sections/ratings/RatingsSection'





const SubTagItems = ({ subTag }) => {
    return <>
        <p style={{
            backgroundColor: colors.primary,
            color: '#fff',
            margin: '6px 3px',
            padding: '5px 15px',
            borderRadius: 50,
            fontWeight: 500,
        }}>{subTag}</p>
    </>
}

interface RatingsState {
    selectedAnime?: Anime
    selectedAnimeRatings?: {
        [key: string]: number
    }
}

export default () => {

    const [ratingState, setRatingState] = useState<RatingsState>({
        selectedAnime: null
    })

    return <>
        <Layout noSlant>


            <RatingsCard title='What was the last anime you watched?'>
                <SearchAnimeSection
                    onChange={(anime) => {
                        setRatingState({

                            ...ratingState,
                            selectedAnime: anime,
                        })
                    }}
                />

                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>

            {ratingState.selectedAnime && <RatingsCard title='Ratings'> {/* if selectedAnime is true show the ratings card*/}
                <RatingsSection
                    onChange={({ tagId, tagValue, tagName }) => {
                        setRatingState({
                            ...ratingState,
                            selectedAnimeRatings: {
                                ...ratingState.selectedAnimeRatings,
                                [tagName]: tagValue
                            }
                        })
                    }}
                    tags={ratingState.selectedAnime.tags}

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