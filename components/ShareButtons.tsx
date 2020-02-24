
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'


const IconProps = {
    round: true,
    size: 35
}

const ButtonProps = {
    url: 'https://animesonar.com',
    style: {
        marginLeft: 10
    },
    title: 'Find your next anime to watch'
}

export default () => {
    return <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
        <FacebookShareButton quote='Anime Sonar' hashtag='#Anime' {...ButtonProps} >
            <FacebookIcon {...IconProps} />
        </FacebookShareButton>
        <TwitterShareButton via='AnimeSonar' {...ButtonProps} hashtags={['Anime', 'AnimeSonar', 'anitwt', 'anitwitter']}>
            <TwitterIcon {...IconProps} />
        </TwitterShareButton>
        <WhatsappShareButton separator=' ' {...ButtonProps}>
            <WhatsappIcon   {...IconProps} />
        </WhatsappShareButton>
    </div>
}