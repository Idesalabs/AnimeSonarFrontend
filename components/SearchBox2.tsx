import { components } from 'react-select';
import Select from 'react-select/async'
import makeAnimated from 'react-select/animated';
import { FaSearch } from 'react-icons/fa';
import stall from '../functions/stall';
import { colors } from '../styles';
import { Anime,SubTag,Tag }from 'types/typings';



interface Props {
    onSelectAnime: (selection: Anime) => any
    // initialData: Array<object>
}


interface ReturnAnime {
    label: string
    description: string
    tags: Tag[]
    subTags: SubTag[]
    id: string
}


export default ({onSelectAnime}:Props) => {
    
    const options = [
        {
        title: "Naruto",
        id: "087a0jnawx",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum 0a lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
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
    },
    {
        title: "Parasyte: the Maxim",
        id: "py7y3qb9nb",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum 0a lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
        tags: [
            {
                averageRatings: 0,
                name: "Action",
                id: "6kzv2qvya"
            },
            {
                averageRatings: 0,
                name: "Sci-fi",
                id: "3fbr9kshs"
            },
            {
                averageRatings: 0,
                name: "Horror",
                id: "5t6cb8z1i"
            },
            {
                averageRatings: 0,
                name: "Psychological",
                id: "tqfkiqtok"
            }
        ],
        subTags: [
            {
                name: 'body snatcher',
                id: '#########005'
            },
            {
                name: 'morphing',
                id: '#########006'
            },
            {
                name: 'airhead MC',
                id: '#########007'
            },
        ]
    },
    {
        title: "Kanokon",
        id: "nz9iii4atw",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum 0a lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
        tags: [
            {
                averageRatings: 0,
                name: "Comedy",
                id: "onfl84664"
            },
            {
                averageRatings: 0,
                name: "Ecchi",
                id: "i6i88erx4"
            },
            {
                averageRatings: 0,
                name: "Harem",
                id: "edj2jiiju"
            },
            {
                averageRatings: 0,
                name: "Romance",
                id: "4u6jg6bdz"
            }
        ],
        subTags: [
            {
                name: 'fox-spirit',
                id: '#########008'
            },
            {
                name: 'youkai',
                id: '#########009'
            },
            {
                name: 'light-novel adaptation',
                id: '#########010'
            },
        ]
    },
    {
        title: "Log Horizon",
        id: "p4h7ibnihh",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum 0a lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
        tags: [
            {
                averageRatings: 0,
                name: "Action",
                id: "6kzv2qvya"
            },
            {
                averageRatings: 0,
                name: "Game",
                id: "o9x62echd"
            },
            {
                averageRatings: 0,
                name: "Adventure",
                id: "12ozmtviz"
            },
            {
                averageRatings: 0,
                name: "Magic",
                id: "er4nlzcor"
            }
        ],
        subTags: [
            {
                name: 'trapped in a game',
                id: '#########011'
            },
            {
                name: 'MC with glasses',
                id: '#########012'
            },
        ]
    }
    ];


    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <FaSearch />
            </components.DropdownIndicator>
        );
    };

    const animated = makeAnimated();

    const styles = {
        control: (currentStyles) => ({
            ...currentStyles,
            border: '1.5px solid #FF552B',
            width: '100%',
            maxWidth: 400,
            transition: 'all 0.3s'
        }),
        dropdownIndicator: (currentStyles) => ({
            ...currentStyles,
            color: `${colors.primary}`,
            transition: 'all 0.2s',
            ':hover': {
                opacity: 0.7
            },
        }),
        placeholder: (currentStyles) => ({
            ...currentStyles,
            color: `${colors.primary}`,
            opacity: 0.7,
            fontWeight: 500,
        }),
    }

    const renameOptions = (option: Array<Anime>): Array<ReturnAnime> => {

        return option.map(({title, ...obj})=> ({
            label: title,
            ...obj
        }))
      } 

    return (
        <>
            <Select
                default
                loadOptions={async (inputValue, callback) => {
                    await stall()
                    return callback(renameOptions(options))
                }}
                name='sweets'
                onChange={onSelectAnime}
                components={{
                    ...animated,
                    DropdownIndicator,
                }}
                placeholder={'Search...'}
                styles={styles} />
        </>
    )
}