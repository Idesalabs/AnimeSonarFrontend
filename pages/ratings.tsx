import React from 'react'
import { useState } from 'react'
import StarRatings from 'react-star-ratings';
import Layout from '../components/Layout'
import Section from '../components/Section'
import BottomPadding from '../components/BottomPadding'
import { colors } from '../styles'
import ShareButtons from '../components/ShareButtons';
import { RatingsCard } from './../components/RatingsCard';
import SearchBox from './../components/SearchBox';
import Button from '../components/button';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

export default () =>{
    const [rating, setRating] = useState(0);
    const [subTag, setSubTag] = useState('');
    const tags = ['Action', 'Romance', 'Comedy', 'Psychological'];

    return <>
        <Layout>
           <div style = {{ padding: 10, width: '100%', maxWidth: 600, margin: 'auto'}}>
                <RatingsCard title = 'What was the last anime you watched?'> 
                <Section padding= '20px 0'>
                    <SearchBox padding ='5px' width='250px'/>
                </Section>

                <Section justifyContent= 'flex-end' padding= '10px 0 0' margin= '10px 0 0'>
                    <Button text ='NEXT' borderRadius='50px' padding= '5px 0' width= '150px'/>
                </Section>
                </RatingsCard>
                <RatingsCard title= 'Ratings'>
                <Section padding= '20px 0'>
                    <ul style={{ paddingLeft: 0}}>
                        {
                            tags.map(tag => (
                                <li style={{ display: 'flex', justifyContent: 'space-between'}}>
                                    <p style={{ color: '#000', fontSize: '22px', fontWeight: 'bold', paddingRight: '25px'}}>{tag}</p>
                                    <StarRatings
                                    starRatedColor="blue"
                                    starDimension = '25px'
                                    starSpacing = '4px'
                                    numberOfStars={10}
                                    rating={rating}
                                    changeRating={setRating}
                                    name= {tag}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </Section>
                <Section justifyContent= 'flex-end' padding= '10px 0 0' margin= '10px 0 0'>
                    <Button text ='NEXT' borderRadius='50px' padding= '5px 0' width= '150px'/>
                </Section>
                </RatingsCard>
                <RatingsCard title = 'Suggest SubTags'>
                <Section justifyContent= 'start' padding= '20px 0'>
                    <>
                        <form className='form'>
                        <IconContext.Provider value={{ style: {fontSize: '18px'} }}>
                            <input name='search-box' placeholder="Enter subTag" value={subTag} onChange={event => {
                                    setSubTag(event.target.value)
                                }} className="search-input" />
                            <button type = "submit" className="search-button"><FaSearch/></button>
                        </IconContext.Provider>
                        </form>
                        <style jsx>
                        {`
                        *:focus {
                            outline: none;
                        }

                        ::placeholder {
                            color: ${colors.primary};
                            opacity: 0.7;
                        }

                        .form {
                            position: relative;
                            font-size: 15px;
                            //display: inline-block;
                        }
                        
                        .search-input {
                            width: 350px;
                            height: 40px;
                            padding-left: 15px;
                            border: 2px solid ${colors.primary};
                            border-radius: 10px;
                            font-weight: 500;
                            color: ${colors.primary};
                            transition: all 1s;
                        }

                        .search-input:focus {
                            background: ${colors.grey};
                        }

                        .search-button {
                            position: absolute;
                            top: 0;
                            right: 0;
                            height: 40px;
                            width: 40px;
                            border-radius: 50%;
                            border: none;
                            background: transparent;
                            color: ${colors.primary};
                            transition: all 0.5s;
                        }

                        .search-button:hover {
                            opacity: 0.7;
                        }
                        `}
                        </style>
                    </>
                </Section>

                <Section justifyContent= 'flex-end' padding= '10px 0 0' margin= '10px 0 0'>
                    <Button text='NEXT' borderRadius='50px' padding= '5px 0' width= '150px'/>
                </Section>
                </RatingsCard>
           </div>
        <BottomPadding/>
        </Layout>
    </>
    }