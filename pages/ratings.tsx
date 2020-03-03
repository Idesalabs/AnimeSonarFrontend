import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import { colors } from '../styles'
import ShareButtons from '../components/ShareButtons';
import { RatingsCard } from './../components/RatingsCard';
import SearchBox from './../components/SearchBox';

export default () => (
    <>
        <Layout>
           <div style = {{ maxWidth: '600px'}}>
                <RatingsCard title = 'What was the last anime you watched?'>
                <p>Hello World</p>
                <SearchBox borderRadius='10px' padding = '15px'/>
                </RatingsCard>
           </div>
        </Layout>
    </>
)