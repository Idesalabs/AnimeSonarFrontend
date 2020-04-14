import React from 'react';
import Card from './Card';

interface Props {
    title: string
    children: any
}

export const RatingsCard = (props: Props) => (
    <>
        <Card borderRadius='10px'>
            <h1 style={{ marginBottom: 20, fontSize: 'calc(15px + 1.7vmin)', fontWeight: 700 }}>{props.title}</h1>
            {props.children}
        </Card>
    </>
);
