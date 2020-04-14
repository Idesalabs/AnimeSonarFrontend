import { useState } from 'react'
import ReactTags from 'react-tag-autocomplete'

export default () => {
    const [subTags, setSubTags] = useState(
        [
            { id: 1, name: "Apples" },
            { id: 2, name: "Pears" }
        ]
    )


    const [suggestions, setSuggestions] = useState(
        [
            { id: 3, name: "Bananas" },
            { id: 4, name: "Mangos" },
            { id: 5, name: "Lemons" },
            { id: 6, name: "Apricots" }
        ]
    );


    function onDelete(i) {
        const subtags = subTags.slice(0);
        subtags.splice(i, 1);
        setSubTags(subtags);
    }

    function onAddition(subTag) {
        const subtags = [].concat(subTags, subTag);
        setSubTags(subtags);
    }

    return (
        <>
            <ReactTags
                tags={subTags}
                suggestions={suggestions}
                handleDelete={onDelete}
                handleAddition={onAddition}
                allowNew={true}
            />
          
        </>
    )

}