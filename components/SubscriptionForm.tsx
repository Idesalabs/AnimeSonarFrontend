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

    return <div>
        {
            submitted ?
                <p style={{
                    backgroundColor: colors.primaryTransparent,
                    color: '#fff',
                    width: '100%',
                    padding: '10px 0px',
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
            }
    
            .email-input {
                border: none;
                border-radius: 50px 0 0 50px;
                border: 1px solid #ff552b36;
                border-right-style:none;
                display: inline-block;
                padding: 6px 27px;
                color: grey;
            }
    
            .email-button {
                background: ${colors.gradient};
                color: #fff;
                font-weight: 500;
                border-radius: 0 50px 50px 0;
                border: 1px solid #ff552b36;
                border-left-style:none; 
                text-decoration: none;
                cursor:pointer;
                display: inline-block;
                padding: 6px 27px;
                transition: all 0.3s ease-in-out; 
            }
    
            .email-button:hover {
                box-shadow: inset 0px 0px 0px 2px ${colors.primary};
                //border: 1.5px solid ${colors.primary};
                border-left-style:none;
                background: #fff;
                color: ${colors.primary};
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