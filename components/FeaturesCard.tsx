import React from 'react';
import Card from './Card';

interface Props {
    title: string
    children: JSX.Element

}

export const FeaturesCard = ({ children, title }: Props) => {
    return <>
        <Card borderRadius='10px' showLid={false}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: 15,
                fontWeight: 700,
                fontSize: 'calc(14px + 1.5vmin)'
            }}>{title}</h2>
            {children}
        </Card>
    </>
}
