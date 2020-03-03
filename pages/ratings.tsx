import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import { colors } from '../styles'
import ShareButtons from '../components/ShareButtons';
import { RatingsCard } from './../components/RatingsCard';
import SearchBox from './../components/SearchBox';
import Button from '../components/button'

export default () => (
    <>
        <Layout>
           <div style = {{ maxWidth: '600px'}}>
                <RatingsCard title = 'What was the last anime you watched?'>

                <Section justifyContent= 'start' padding= '20px 0'>
                    <SearchBox height ='40px'/>
                </Section>

                <Section justifyContent= 'flex-end' padding= '10px 0 0' margin= '10px 0 0'>
                    <Button title ='NEXT' borderRadius='50px' padding= '5px 0' width= '150px'/>
                </Section>
                </RatingsCard>
           </div>
        <BottomPadding/>
        </Layout>
    </>
)