import { components } from 'react-select';
import Select from 'react-select/async'
import makeAnimated from 'react-select/animated';
import { FaSearch } from 'react-icons/fa';
import stall from '../functions/stall';
import { colors } from '../styles';
import { useState } from 'react'
import { Anime,SubTag,Tag }from 'types/typings';



interface Props {
    onSelectAnime: (selection: Anime) => any
    // initialData: Array<object>
}

interface nameExists {
    name: string
}

interface ReturnAnime {
    label: string
    description: string
    tags: Tag[]
    subTags: SubTag[]
    id: string
}

/* [
    {
    title: "Naruto",
    id: "087a0jnawx",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nulla lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
    tags: [
        {
            averageRatings: null,
            name: "Action",
            id: "6kzv2qvya"
        },
        {
            averageRatings: null,
            name: "Adventure",
            id: "12ozmtviz"
        },
        {
            averageRatings: null,
            name: "Comedy",
            id: "onfl84664"
        },
        {
            averageRatings: null,
            name: "Super Power",
            id: "4us0mk0n5"
        }
    ],
    subTags: [
        {
            name: ''
            id: ''
        }
    ]
},
{
    title: "Parasyte: the Maxim",
    id: "py7y3qb9nb",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nulla lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
    tags: [
        {
            averageRatings: null,
            name: "Action",
            id: "6kzv2qvya"
        },
        {
            averageRatings: null,
            name: "Sci-fi",
            id: "3fbr9kshs"
        },
        {
            averageRatings: null,
            name: "Horror",
            id: "5t6cb8z1i"
        },
        {
            averageRatings: null,
            name: "Psychological",
            id: "tqfkiqtok"
        }
    ],
    subTags: [
        {
            name: ''
            id: ''
        }
    ]
},
{
    title: "Kanokon",
    id: "nz9iii4atw",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nulla lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
    tags: [
        {
            averageRatings: null,
            name: "Comedy",
            id: "onfl84664"
        },
        {
            averageRatings: null,
            name: "Ecchi",
            id: "i6i88erx4"
        },
        {
            averageRatings: null,
            name: "Harem",
            id: "edj2jiiju"
        },
        {
            averageRatings: null,
            name: "Romance",
            id: "4u6jg6bdz"
        }
    ],
    subTags: [
        {
            name: ''
            id: ''
        }
    ]
},
{
    title: "Log Horizon",
    id: "p4h7ibnihh",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nulla lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
    tags: [
        {
            averageRatings: null,
            name: "Action",
            id: "6kzv2qvya"
        },
        {
            averageRatings: null,
            name: "Game",
            id: "o9x62echd"
        },
        {
            averageRatings: null,
            name: "Adventure",
            id: "12ozmtviz"
        },
        {
            averageRatings: null,
            name: "Magic",
            id: "er4nlzcor"
        }
    ],
    subTags: [
        {
            name: ''
            id: ''
        }
    ]
}
] */

export default ({onSelectAnime}:Props) => {
    
    const options = [
        {
        title: "Naruto",
        id: "087a0jnawx",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nulla lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
        tags: [
            {
                averageRatings: null,
                name: "Action",
                id: "6kzv2qvya"
            },
            {
                averageRatings: null,
                name: "Adventure",
                id: "12ozmtviz"
            },
            {
                averageRatings: null,
                name: "Comedy",
                id: "onfl84664"
            },
            {
                averageRatings: null,
                name: "Super Power",
                id: "4us0mk0n5"
            }
        ],
        subTags: [
            {
                name: '',
                id: ''
            }
        ]
    },
    {
        title: "Parasyte: the Maxim",
        id: "py7y3qb9nb",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nulla lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
        tags: [
            {
                averageRatings: null,
                name: "Action",
                id: "6kzv2qvya"
            },
            {
                averageRatings: null,
                name: "Sci-fi",
                id: "3fbr9kshs"
            },
            {
                averageRatings: null,
                name: "Horror",
                id: "5t6cb8z1i"
            },
            {
                averageRatings: null,
                name: "Psychological",
                id: "tqfkiqtok"
            }
        ],
        subTags: [
            {
                name: '',
                id: ''
            }
        ]
    },
    {
        title: "Kanokon",
        id: "nz9iii4atw",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nulla lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
        tags: [
            {
                averageRatings: null,
                name: "Comedy",
                id: "onfl84664"
            },
            {
                averageRatings: null,
                name: "Ecchi",
                id: "i6i88erx4"
            },
            {
                averageRatings: null,
                name: "Harem",
                id: "edj2jiiju"
            },
            {
                averageRatings: null,
                name: "Romance",
                id: "4u6jg6bdz"
            }
        ],
        subTags: [
            {
                name: '',
                id: ''
            }
        ]
    },
    {
        title: "Log Horizon",
        id: "p4h7ibnihh",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nulla lacinia, finibus diam placerat, tincidunt metus. Suspendisse potenti. Morbi eu lobortis urna. Interdum et.",
        tags: [
            {
                averageRatings: null,
                name: "Action",
                id: "6kzv2qvya"
            },
            {
                averageRatings: null,
                name: "Game",
                id: "o9x62echd"
            },
            {
                averageRatings: null,
                name: "Adventure",
                id: "12ozmtviz"
            },
            {
                averageRatings: null,
                name: "Magic",
                id: "er4nlzcor"
            }
        ],
        subTags: [
            {
                name: '',
                id: ''
            }
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
        control: (currentStyles, state) => ({
            ...currentStyles,
            border: '1.5px solid #FF552B',
            width: '100%',
            maxWidth: 400,
            transition: 'all 0.3s'
        }),
        dropdownIndicator: (currentStyles, state) => ({
            ...currentStyles,
            color: `${colors.primary}`,
            transition: 'all 0.2s',
            ':hover': {
                opacity: 0.7
            },
        }),
        placeholder: (currentStyles, state) => ({
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