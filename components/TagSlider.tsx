import { useState, useRef } from 'react'

const _tags = [
    {
        name: 'Action',
        color: 'red'
    },
    {
        name: 'Romance',
        color: 'purple'
    },
    {
        name: 'Comedy',
        color: 'orange'
    },

]

const getPercentage = (containerWidth: number, distanceMoved: number) => {
    return (distanceMoved / containerWidth) * 100
}

interface TagSectionProps {
    name: string
    color: string
    noSliderButton: boolean
    width: number
    onSliderSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}


// const mouseDownHandler = (e: MouseEvent) => {

// }

const TagSection = ({ name, color, noSliderButton, width, onSliderSelect }: TagSectionProps) => {


    return <div
        className='tag'
        style={{ ...styles.tag, backgroundColor: color, width: width + '%' }}
    >
        <span style={styles.tagText}>{name}</span>
        <span style={{ ...styles.tagText, fontSize: 12 }}>{width + '%'}</span>
        {!noSliderButton && < div
            style={styles.sliderButton}
            onMouseDown={onSliderSelect}
        >
            <img src='/slider-arrows.svg' height={'30%'} />
        </div>
        }
        <style jsx>
            {`
            .tag:first-of-type{
                border-radius: 50px 0px 0px 50px;
            }
            .tag:last-of-type {
                border-radius: 0px 50px 50px 0px;
            }
            `}
        </style>
    </div >
}

export default () => {
    const [widths, setWidths] = useState<number[]>((new Array(_tags.length).fill(100 / _tags.length)))
    const [tags, setTags] = useState(_tags)
    const TagSliderRef = useRef<HTMLDivElement>()


    return <>

        <div
            ref={TagSliderRef}
            style={{
                width: '100%',
                display: 'flex',

            }}>
            {tags.map((tag, index) => <TagSection
                width={widths[index]}
                key={index}
                noSliderButton={index === tags.length - 1}
                name={tag.name}
                onSliderSelect={(e) => {
                    e.preventDefault()
                    const startDragX = e.pageX
                    const sliderWidth = TagSliderRef.current.offsetWidth

                    const resize = (e: MouseEvent) => {
                        const endDragX = e.pageX
                        const distanceMoved = endDragX - startDragX
                        const maxPercent = widths[index] + widths[index + 1]

                        const percentageMoved = getPercentage(sliderWidth, distanceMoved)

                        const _widths = widths.map(w => w)

                        const prevPercentage = _widths[index] //previous width of this tag section
                        const newPercentage = prevPercentage + percentageMoved
                        const currentSectionWidth = newPercentage < 0 ? 0 : newPercentage > maxPercent ? maxPercent : newPercentage
                        _widths[index] = currentSectionWidth


                        const nextSectionNewPercentage = percentageMoved < 0 ?
                            _widths[index + 1] + Math.abs(percentageMoved) :
                            _widths[index + 1] - Math.abs(percentageMoved)


                        _widths[index + 1] = nextSectionNewPercentage < 0 ? 0 : nextSectionNewPercentage > maxPercent ? maxPercent : nextSectionNewPercentage



                        if (tags.length > 2) {
                            if (_widths[index] === 0) {
                                _widths[index + 1] = maxPercent
                                _widths.splice(index, 1)
                                setTags(tags.filter((t, i) => i !== index))
                            }
                            if (_widths[index + 1] === 0) {
                                _widths[index] = maxPercent
                                _widths.splice(index + 1, 1)
                                setTags(tags.filter((t, i) => i !== index + 1))
                            }
                        }

                        setWidths(_widths)
                        console.log('100%: ' + (_widths.reduce((p, c) => p + c, 0) === 100))
                        console.log(_widths)
                    }

                    window.addEventListener('mousemove', resize)

                    window.addEventListener('mouseup', (e) => {
                        window.removeEventListener('mousemove', resize)
                    })

                }}
                color={tag.color}
            />
            )}

        </div>
        <h4 style={{ textAlign: 'center', marginTop: 10 }}>Total: {(widths.reduce((p, c) => p + c, 0))}</h4>
    </>
}

type StylesType = { [key: string]: React.CSSProperties }

const styles: StylesType = {
    tag: {

        padding: 20,
        textAlign: 'center',
        position: 'relative',
        borderRightWidth: '.1em',
        borderRightStyle: 'solid',
        borderRightColor: 'white',
        boxSizing: 'border-box',
        borderLeftWidth: '.1em',
        borderLeftStyle: 'solid',
        borderLeftColor: 'white',
    },
    tagText: {
        color: 'white',
        fontWeight: 700,
        userSelect: 'none',
        display: 'block'
    },
    sliderButton: {
        width: '2em',
        height: '2em',
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: '2em',
        right: 'calc(-1.1em)',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        margin: 'auto',
        zIndex: 10,
        cursor: 'ew-resize',
        userSelect: 'none',

    }
}