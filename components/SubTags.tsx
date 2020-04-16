import { useState } from 'react'
import ReactTags from 'react-tag-autocomplete'

export default () => {
    const [subTags, setSubTags] = useState(
        [
            { id: 1, name: "master-servant relationship" },
            { id: 2, name: "original work" }
        ]
    )


    const [suggestions, setSuggestions] = useState(
        [
            { id: 3, name: "MC with red hair" },
            { id: 4, name: "OP protagonist" },
            { id: 5, name: "jojo reference" }
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
                onDelete={onDelete}
                onAddition={onAddition}
                allowNew={true}
                placeholderText= 'Suggest subtag'
            />
        </>
    )

}