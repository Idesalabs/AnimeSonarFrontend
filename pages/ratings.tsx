import React from 'react'
import { useState } from 'react'
import StarRatings from 'react-star-ratings';
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import { RatingsCard } from './../components/RatingsCard';
import SearchBox from './../components/SearchBox';
import Button from '../components/button';

export default () => {
    //const [rating, setRating] = useState({ tagName: '', tagRating: 0 });
    const currentAnimeRatings = [];
    const tags = ['Action', 'Romance', 'Comedy', 'Psychological'];

    return <>
        <Layout noSlant>


            <RatingsCard title='What was the last anime you watched?'>
                <Section padding='10px 0'>
                    <SearchBox height='calc(20px + 1.5vmin)' width='calc(110px + 15vmin)' />
                </Section>

                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>

            <RatingsCard title='Ratings'>
                <Section padding='10px 0'>
                    <ul style={{ paddingLeft: 0 }}>
                        {
                            tags.map(tag => {
                                const [rating, setRating] = useState({ tagName: '', tagRating: 0 });

                                function handleRatings (e) {
                                    setRating({
                                        tagName: `${tag}`,
                                        tagRating: e
                                    })
                                    currentAnimeRatings.push(rating);
                                }

                                return (<li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p style={{ color: '#000', fontSize: 'calc(10px + 1.2vmin)', fontWeight: 'bold', paddingRight: '25px' }}>{tag}</p>
                                    <StarRatings
                                        starRatedColor="blue"
                                        starDimension='calc(8px + 1.7vmin)'
                                        starSpacing='calc(.5px + .2vmin)'
                                        numberOfStars={10}
                                        rating={rating.tagRating}
                                        changeRating={handleRatings}
                                        name={tag}
                                    />
                                </li>)
                            })
                        }
                    </ul>
                </Section>
                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>

            <RatingsCard title='Suggest SubTags'>
                <Section padding='10px 0'>
                    <SearchBox height='calc(20px + 1.5vmin)' width='calc(180px + 15vmin)' />
                </Section>

                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>

            <BottomPadding />
        </Layout>
    </>
}