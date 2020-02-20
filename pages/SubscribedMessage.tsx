import React from 'react'
import { colors } from 'styles'

export default () => (
    <p style={{
        background: colors.gradient,
        color: '#fff',
        width: '100%',
        padding: '10px 10px',
        fontSize: 15,
        fontWeight: 500,
        borderRadius: '2em',
        textAlign: 'center'
    }}>Subscribed!</p>
)