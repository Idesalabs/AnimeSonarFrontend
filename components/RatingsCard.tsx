import React from 'react';
import Card from './Card';
import Button from '../components/button';
import { colors } from '../styles';

export const RatingsCard = (props) => (
    <>
    <Card borderRadius = '10px'>
        <h1 style={{ marginBottom: 20, fontSize: 32, fontWeight: 700 }}>{props.title}</h1>
        {props.children}
    </Card>
    </>
);
