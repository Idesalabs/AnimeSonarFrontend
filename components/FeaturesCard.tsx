import React from 'react';
import Card from './Card';
import { colors } from '../styles';

export const FeaturesCard = ({ description = '', title = '', image = '' }) => {
    return <div>
        <Card borderRadius = '10px'>
        <h2 style={{ marginBottom: 20, textAlign: 'center', fontSize: 25, fontWeight: 700 }}>{title}</h2>
        <img style={{textAlign:'center', display: 'inline', margin: 'auto', maxHeight: 300, maxWidth: '100%' }} className="img-fluid" src={image} alt="features__image-1" />
        <p style={{ color: colors.primary, textAlign: 'center', marginTop: 10, padding: '10px 0' }} className="description">{description}</p>
        <style jsx>
            {`
            div {
                
            }
            @media only screen and (max-width: 600px) {
                h1 {
                    font-size: 6vw;
                    padding-top: 0;
                }
                h2 {
                    font-size: 6vw;
                }
               p {
                font-size: calc(2vw + 5px);
                // letter-spacing: 1px;
               }
            }
            `}
        </style>
    </Card>
    </div>
};
