import React from 'react';
import Card from './Card';

export const FeaturesCard = (props) => {
    return <>
        <Card borderRadius = '10px' lid='none'>
        <h2 className="title">{props.title}</h2>
        <img className="img-fluid" style={{marginTop: 10}} src={props.image} alt="features__image-1" />
        <p className="description">{props.description}</p>
        <style jsx>
            {`
            .title {
                text-align: center;
                font-size: calc(16px + 1.5vmin);
                font-weight: 700;
            }
            .description {
                text-align: center;
                margin-top: 15px;
                font-size: calc(10px + .6vmin);
            }
            `}
        </style>
    </Card>
    </>
};
