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
    {
        name: 'Horror',
        color: 'black'
    }, {
        name: 'Scifi',
        color: 'blue'
    }

]

const getPercentage = (containerWidth: number, distanceMoved: number) => {
    return (distanceMoved / containerWidth) * 100
}

const nearestN = (N: number, number: number) => Math.ceil(number / N) * N
interface TagSectionProps {
    name: string
    color: string
    noSliderButton: boolean
    width: number
    onSliderSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}



const TagSection = ({ name, color, noSliderButton, width, onSliderSelect }: TagSectionProps) => {


    return <div
        className='tag'
        style={{ ...styles.tag, backgroundColor: color, width: width + '%' }}
    >
        <span style={styles.tagText}>{name}</span>
        <span style={{ ...styles.tagText, fontSize: 12 }}>{nearestN(.001, width) + '%'}</span>
        {!noSliderButton && < div
            style={styles.sliderButton}
            onPointerDown={onSliderSelect}
        // onTouchStart={onSliderSelect}
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
                    document.body.style.cursor = 'ew-resize'


                    const startDragX = e.pageX
                    const sliderWidth = TagSliderRef.current.offsetWidth

                    const resize = (e: MouseEvent & TouchEvent) => {
                        e.preventDefault()
                        const endDragX = e.touches ? e.touches[0].pageX : e.pageX
                        const distanceMoved = endDragX - startDragX
                        const maxPercent = widths[index] + widths[index + 1]

                        const percentageMoved = nearestN(1, getPercentage(sliderWidth, distanceMoved))

                        const _widths = widths.map(w => w)

                        const prevPercentage = _widths[index]
                        const newPercentage = prevPercentage + percentageMoved
                        const currentSectionWidth = newPercentage < 0 ? 0 : newPercentage > maxPercent ? maxPercent : newPercentage
                        _widths[index] = currentSectionWidth

                        const nextSectionIndex = index + 1

                        const nextSectionNewPercentage = percentageMoved < 0 ?
                            _widths[nextSectionIndex] + Math.abs(percentageMoved) :
                            _widths[nextSectionIndex] - Math.abs(percentageMoved)

                        const nextSectionWidth = nextSectionNewPercentage < 0 ? 0 : nextSectionNewPercentage > maxPercent ? maxPercent : nextSectionNewPercentage

                        _widths[index + 1] = nextSectionWidth



                        if (tags.length > 2) {
                            if (_widths[index] === 0) {
                                _widths[nextSectionIndex] = maxPercent
                                _widths.splice(index, 1)
                                setTags(tags.filter((t, i) => i !== index))
                                removeEventListener()
                            }
                            if (_widths[index + 1] === 0) {
                                _widths[index] = maxPercent
                                _widths.splice(nextSectionIndex, 1)
                                setTags(tags.filter((t, i) => i !== index + 1))
                                removeEventListener()
                            }
                        }
                        setWidths(_widths)
                    }

                    window.addEventListener('pointermove', resize)
                    window.addEventListener('touchmove', resize)

                    const removeEventListener = () => {
                        window.removeEventListener('pointermove', resize)
                        window.removeEventListener('touchmove', resize)
                    }

                    const handleEventUp = (e: Event) => {
                        e.preventDefault()
                        document.body.style.cursor = 'initial'
                        removeEventListener()
                    }

                    window.addEventListener('touchend', handleEventUp)
                    window.addEventListener('pointerup', handleEventUp)

                }}
                color={tag.color}
            />
            )}

        </div>
        {/* <h4 style={{ textAlign: 'center', marginTop: 10 }}>Total: {(widths.reduce((p, c) => p + c, 0))}</h4> */}
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