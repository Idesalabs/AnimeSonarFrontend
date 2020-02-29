import React from 'react';
import Card from './Card';
import Button from '../components/button';
import { colors } from '../styles';

export const RatingsCard = (props) => (
    <>
    <Card>
        <h1>{props.title}</h1>
        {props.children}
    </Card>
    </>
);
