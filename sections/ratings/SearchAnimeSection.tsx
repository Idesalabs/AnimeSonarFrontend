import { Anime } from 'types/typings';
import SearchBox2 from '../../components/SearchBox2';

interface Props {
    onChange: (value: Anime) => any
}


export default (props: Props) => {
    return (
    <SearchBox2
        onSelectAnime={(anime) => {
            props.onChange(anime)
        }}
    />);

}