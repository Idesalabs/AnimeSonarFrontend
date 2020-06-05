import Layout from "../components/Layout"
import Card from "../components/Card"
import { useState } from "react"


const TagItem = ({tagName}) => {
    return <>
        <li 
        style={{ color: '#fff',
        fontSize: 'calc(6px + .8vmin)',
        fontWeight: 'bold',
        marginRight: 15,
        padding: '5px 15px',
        borderRadius: 50,
        background: 'orange'
        }}>{tagName}</li>
    </>
}
const ListOfTags = ({tags}) => {
    return <>
    {<ul style={{ display: 'flex', paddingLeft: 0}}>
        {
            tags.map(({ averageRatings, name, id }) => <TagItem tagName={name}/>)
            }
    </ul>}
    </>
}

export default () => {
    const [recommendedAnime, setRecommendedAnime] = useState(
        {
            title: "Naruto",
            id: "087a0jnawx",
            minutesPerEpisode: 24,
            episodeCount: 220,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            tags: [
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
                }
            ],
            subTags: [
                {
                    name: 'ninja',
                    id: 'ninja'
                },
                {
                    name: 'power system',
                    id: 'power-system'
                },
                {
                    name: 'fox spirit',
                    id: '#########003'
                },
                {
                    name: 'shonen jump',
                    id: '#########004'
                },
            ]
        }
    )
    return <Layout noSlant>
        <Card>
            <div>
                <div><img src="" alt=""/></div>
                <div>
                    <h1>{recommendedAnime.title}</h1>
                    <p>{`${recommendedAnime.episodeCount}` + " " + "episodes"}</p>
                    <i></i>
                    <p>{`${recommendedAnime.minutesPerEpisode}` + " " + "episodes"}</p>
                </div>
            </div>
            <div>
                <h2>Description</h2>
                <p>{recommendedAnime.description}</p>
            </div>
            <div>
                <h2>Tags</h2>
                <ListOfTags tags={recommendedAnime.tags}/>
            </div>
        </Card>
    </Layout>
}