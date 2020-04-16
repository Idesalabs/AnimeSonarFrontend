import React, { useEffect } from 'react'
import { useState } from 'react'
import StarRatings from 'react-star-ratings';
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import { RatingsCard } from './../components/RatingsCard';
import SearchBox from './../components/SearchBox';
import Button from '../components/button';
import { colors } from '../styles';
import SubTags from '../components/SubTags';

interface RatingsState {
    [key: string]: number
}

interface RatingItemProps {
    rating: number
    onChangeRating: (rating: number) => any
    name: string
}

const RatingItem = ({ rating, onChangeRating, name }: RatingItemProps) => {

    return <>
        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ color: '#000', fontSize: 'calc(10px + 1.2vmin)', fontWeight: 'bold', paddingRight: '25px' }}>{name}</p>
            <StarRatings
                starRatedColor="blue"
                starDimension='calc(8px + 1.7vmin)'
                starSpacing='calc(.5px + .2vmin)'
                numberOfStars={10}
                rating={rating}
                changeRating={onChangeRating}
                name={name}
            />
        </li>
    </>
}


const SubTagItems = ({subTag}) => {
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



export default () => {
    const [ratings, setRating] = useState<RatingsState>({
        Romance: 0,
        Comedy: 0,
        SciFi: 0
    });
    const [subTags, setSubTags] = useState([
        'MC with Blue Hair',
        'Tsundere Heroine',
        'OP protagonist'
    ])

    return <>
        <Layout noSlant>


            <RatingsCard title='What was the last anime you watched?'>
                <Section padding='10px 0'>
                    <SearchBox onSelectSuggestion={(tags) => {
                        tags.forEach(tag => {
                            setRating({
                                ...ratings,
                                [tag.name]: 0
                            })
                        })
                    }} height='calc(20px + 1.5vmin)' width='calc(110px + 15vmin)' />
                </Section>

                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>

            <RatingsCard title='Ratings'>
                <Section padding='10px 0'>
                    {<ul style={{ paddingLeft: 0 }}>
                        {
                            Object.keys(ratings).map(tagName => <RatingItem
                                name={tagName}
                                onChangeRating={(value) => {
                                    setRating({
                                        ...ratings,
                                        [tagName]: value
                                    })
                                }}
                                rating={ratings[tagName]}
                                key={tagName}
                            />)
                        }
                    </ul>}
                </Section>
                <Section justifyContent='flex-end' padding='10px 0 0' margin='10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding='5px 0' width='calc(60px + 10vmin)' fontSize='calc(7px + .8vmin)' />
                </Section>
            </RatingsCard>

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