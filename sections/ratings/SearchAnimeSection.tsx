import { Anime } from 'types/typings';
import Section from '@components/Section';
import SearchBox from '@components/SearchBox';
import SearchBox2 from '@components/SearchBox2';

interface Props {
    onChange: (value: Anime) => any
}


export default (props: Props) => {
    return <Section padding='10px 0'>
        <SearchBox2
            onSelectAnime={(anime) => {
                props.onChange(anime)
            }}
        />
    </Section>

}