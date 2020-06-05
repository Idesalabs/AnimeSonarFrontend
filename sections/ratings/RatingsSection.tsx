import Section from '../../components/Section'
import { Anime } from '../../types/typings'
import StarRatings from 'react-star-ratings';

interface TagRating {
    tagName: string
    tagValue: number
    tagId: string
}

interface Props {
    tags: Anime['tags']
    onChange: (value: TagRating) => any
    rating: {
        [key: string]: number
    }
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


export default ({ tags, onChange, rating }: Props) => {

    return <Section padding='10px 0'>
        {<ul style={{ paddingLeft: 0 }}>
            {
                tags.map(({ averageRatings, name, id }) => <RatingItem
                    name={name}
                    onChangeRating={(value) => {
                        onChange({
                            tagName: name,
                            tagValue: value,
                            tagId: id
                        })


                    }}
                    rating={rating[name]}
                    key={name}
                />)
            }
        </ul>}
    </Section>
}