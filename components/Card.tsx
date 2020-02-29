import React from 'react';
import { colors } from '../styles'

export default (props) => (
    <div className = "card__body">
    <div style={{height: '10px',
                width: '100%',
                background: colors.gradient,
                display: props.lid}}></div>
        <div className="card__content">
        {props.children}
        </div>
        <style jsx>
            {`
            .card__body {
                background-color: #fff;
                border-radius: ${props.borderRadius};
                margin-top: 30px;
                box-shadow: 2px 5px 10px #91919152;
            }
            .card__content {
                padding: 30px;  
            }
            `}
        </style>
    </div>
)