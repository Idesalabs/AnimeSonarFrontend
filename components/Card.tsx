import React, { ReactChildren } from 'react';
import { colors } from '../styles'

interface Props {
    borderRadius?: number | string
    children: JSX.Element[]
    showLid?: boolean
}

export default ({ borderRadius = 20, children, showLid = true }: Props) => (
    <div className="card__body">
        <div style={{
            height: '10px',
            width: '100%',
            background: colors.gradient,
            display: !showLid && 'none',
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius
        }}></div>
        <div className="card__content">
            {children}
        </div>
        <style jsx>
            {`
            .card__body {
                background-color: #fff;
                border-radius: ${borderRadius};
                margin-top: 30px;
                width:100%;
                box-shadow: 2px 5px 10px #91919152;
            }
            .card__content {
                padding: 25px;  
            }
            `}
        </style>
    </div>
)