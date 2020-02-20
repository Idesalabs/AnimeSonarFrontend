import { colors } from '../styles'
import { useState } from 'react'
import { IconContext } from "react-icons";
import { FaCheckCircle } from 'react-icons/fa';
import sendEmail from '../functions/sendEmail'
import validateEmail from '../functions/validateEmail';

const SubsForm = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false)

    const handleButtonPress = async () => {
        if (validateEmail(email)) {
            setLoading(true)
            await sendEmail(email)
            setSubmitted(true)
            setLoading(false)
        }
    }

    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        {
            submitted ?
                <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: 25, } }}>
                <p style={{
                    background: '#39DB80',
                    color: '#fff',
                    width: '100%',
                    padding: '10px 10px',
                    fontSize: 15,
                    opacity: '0.6',
                    fontWeight: 500,
                    borderRadius: '2em',
                    textAlign: 'center'
                }}><FaCheckCircle/> Subscribed!</p>
                </IconContext.Provider> :
                loading ?
                    <p style={{ color: colors.primary, fontSize: 15, textAlign: 'center' }}>
                        <img className="img-fluid" src="/Dual Ring-1s-30px.svg" alt="loading-icon" /> ...Sending
                    </p> :
                    <>
                        <div className='form'>
                            <label htmlFor="email-input">Get notified once we launch</label>
                            <input name='email-input' placeholder="Email address" value={email} onChange={event => {
                                setEmail(event.target.value)
                            }} className="email-input" />
                            <a href='#' className="email-button" onClick={e => {
                                e.preventDefault()
                                handleButtonPress()
                            }}>SUBSCRIBE</a>
                        </div>
                        <style jsx>
                            {`
            .form {
                font-size: 13px;
                user-select: none;
                
            }
    
            label {
                color: ${colors.primary};
                display: block;
                mix-blend-mode: darken;
                font-size:15px;
            }
    
            .email-input {
                border: none;
                border-radius: 50px 0 0 50px;
                border: 1px solid #ff552b36;
                border-right-style:none;
                display: inline-block;
                padding: 6px 27px;
                color: grey;
                transition: all 0.5s; 

            }

            .email-input:focus {
                border: 1.5px solid ${colors.primary};
                border-right-style:none;
            }
    
            .email-button {
                font-weight: 500;
                border-radius: 0 50px 50px 0;
                border: 1.5px solid ${colors.primary};
                background: #fff;
                color: ${colors.primary};
                text-decoration: none;
                cursor:pointer;
                display: inline-block;
                padding: 6px 27px;
                transition: all 0.2s; 
            }
            
            .email-button:hover {
                /*box-shadow: inset 0px 0px 0px 2px ${colors.primary};*/
                background: ${colors.gradient};
                color: #fff;
            }
    
            *:focus {
                outline: none;
            }
            `}
                        </style>
                    </>
        }
    </div>
}

export default SubsForm