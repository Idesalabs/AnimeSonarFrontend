import { RiEmotionUnhappyLine,RiAliensLine,RiEmotionNormalLine,RiEmotionHappyLine } from "react-icons/ri";
import Section from '../components/Section'

export default () => {

    return <Section>
            <div className="mood__answer">
                <input type="radio" id="moodchoice__1" name="mood" value="happy"/>
                <label htmlFor="moodchoice__1">
                    <RiEmotionHappyLine/>
                    <title>Happy</title>
                </label>
            </div>
            <div className="mood__answer">
                <input type="radio" id="moodchoice__2" name="mood" value="unhappy"/>
                <label htmlFor="moodchoice__2">
                    <RiEmotionUnhappyLine/>
                    <title>Unhappy</title>
                </label>
            </div>
            <div className="mood__answer">
                <input type="radio" id="moodchoice__3" name="mood" value="normal"/>
                <label htmlFor="moodchoice__3">
                    <RiEmotionNormalLine/>
                    <title>Normal</title>
                </label>
            </div>
            <div className="mood__answer">
                <input type="radio" id="moodchoice__4" name="mood" value="alien"/>
                <label htmlFor="moodchoice__4">
                    <RiAliensLine/>
                    <title>Alien</title>
                </label>
            </div>
        
        <style jsx>{`
        .mood__answer {
            vertical-align: top;
            font-size: calc(20px + 2.5vmin);
            text-align: center;
            margin: 2.5px;
            padding: 2.5px;
        }
        label {
            height: 100%;
            width: 100%;
            cursor: pointer;
            opacity: .5;
            transition: all .5s ease-in-out;
        }
        input[type="radio"] {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        input[type="radio"]:active ~ label {
          opacity: 1;
        }
        
        input[type="radio"]:checked ~ label {
          opacity: 1;
        }
        `}</style>
    </Section>

}