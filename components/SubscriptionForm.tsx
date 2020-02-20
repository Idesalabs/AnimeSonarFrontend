import { colors } from '../styles'
import { useState } from 'react'
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
                <p style={{
                    backgroundColor: colors.primaryTransparent,
                    color: '#fff',
                    width: '100%',
                    padding: '10px 10px',
                    fontSize: 15,
                    fontWeight: 500,
                    borderRadius: '2em',
                    textAlign: 'center'
                }}>Thanks!</p> :
                loading ?
                    <p style={{ color: colors.primary, fontSize: 15, textAlign: 'center' }}>...Sending</p> :
                    <>
                        <form action="">
                            <label htmlFor="email-input">Get notified once we launch</label>
                            <input name='email-input' placeholder="Email address" value={email} onChange={event => {
                                setEmail(event.target.value)
                            }} className="email-input" />
                            <a href="#" className="email-button" onClick={e => {
                                e.preventDefault()
                                handleButtonPress()
                            }}>SUBSCRIBE</a>
                        </form>
                        <style jsx>
                            {`
            form {
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