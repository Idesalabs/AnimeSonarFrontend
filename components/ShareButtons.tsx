
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
    title: 'Let Anime Sonar make that choice for you.'
}

export default () => {
    return <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
        <FacebookShareButton quote='' hashtag='#AnimeSonar' {...ButtonProps} >
            <FacebookIcon {...IconProps} />
        </FacebookShareButton>
        <TwitterShareButton {...ButtonProps} hashtags={['AnimeSonar']} >
            <TwitterIcon {...IconProps} />
        </TwitterShareButton>
        <WhatsappShareButton separator=' ' {...ButtonProps}>
            <WhatsappIcon   {...IconProps} />
        </WhatsappShareButton>
    </div>
}