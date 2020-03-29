import { useState } from 'react'

const tags = [
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

const getPercentage = (containerWidth: number, ) => {

}

interface TagSectionProps {
    name: string
    color: string
    noSliderButton: boolean
    width: number
    onMouseDrag?: (newWidth: number) => any
}


// const mouseDownHandler = (e: MouseEvent) => {

// }

const TagSection = ({ name, color, noSliderButton, width, onMouseDrag }: TagSectionProps) => {
    const [mouseDown, setMouseDown] = useState(false)
    const [startX, setStartX] = useState<number>()

    return <div
        className='tag'
        style={{ ...styles.tag, backgroundColor: color, width: width + '%' }}
    >
        <span style={styles.tagText}>{name}</span>
        {!noSliderButton && < div
            style={styles.sliderButton}

            onMouseDown={(e) => {

                setMouseDown(true)
                setStartX(e.pageX)
            }}
            onMouseUp={() => setMouseDown(false)}

            onMouseMove={(e) => {
                if (mouseDown) {
                    const distanceMoved = startX - e.pageX
                    const percentageMoved = (Math.abs(distanceMoved) / 600) * 100
                    if (distanceMoved < 0) {
                        onMouseDrag(width + percentageMoved)
                    } else {
                        onMouseDrag(width - percentageMoved)
                    }
                }
            }}
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
    const [widths, setWidths] = useState(tags.map(() => 100 / tags.length))

    return <div style={{
        width: '100%',
        display: 'flex',

    }}>
        {tags.map((tag, index) => <TagSection
            width={widths[index]}
            key={index}
            noSliderButton={index === tags.length - 1}
            name={tag.name}
            onMouseDrag={(newWidth) => {
                console.log(newWidth)
                const change = newWidth - widths[index]
                let _widths = widths.map(w => w)
                _widths[index] = newWidth
                _widths[index + 1] -= change
                console.log(_widths)
                setWidths(_widths)
            }}
            color={tag.color}
        />
        )}

    </div>
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
        userSelect: 'none'
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
        cursor: 'grab',
        userSelect: 'none'
    }
}