import { colors } from '../styles'
import { useState } from 'react'
import { IconContext } from "react-icons";
import { FaCheckCircle } from 'react-icons/fa';
import sendEmail from '../functions/sendEmail'
import validateEmail from '../functions/validateEmail';
import Button from '../components/button';

const EmailForm = (props) => (
    <>
        <form className='email-form'>
            <label htmlFor="email-input">Get notified once we launch</label>
            <div style={{ display: 'flex'}}>
                <input name='email-input' placeholder="Email address" value={props.value} onChange={event => {
                    props.setValue(event.target.value)
                }} className="email-input" />
                <Button text='SUBSCRIBE' borderRadius='0 50px 50px 0' padding = '6px 24px' handleClick={props.handleClick} />
            </div>
        </form>
        <style jsx>
            {`
            *:focus {
                outline: none;
            }

            .email-form {
                font-size: calc(7px + .8vmin);
            }

            label {
                font-size: calc(9px + .8vmin);
            }

            .email-input {
                border: none;
                padding: 6px 24px;
                border: 1px solid #ff552b36;
                border-right-style:none;
                border-radius: 50px 0 0 50px;
                color: grey;
                transition: all 0.5s;
            }

            .email-input:focus {
            border: 1.5px solid ${colors.primary};
            border-right-style:none;
            }
            `}
        </style>
    </>
)

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
                <IconContext.Provider value={{ style: { verticalAlign: 'baseline', fontSize: 25, } }}>
                <p style={{
                    color: colors.success,
                    width: '100%',
                    padding: '10px 10px',
                    fontSize: 15,
                    opacity: 0.8,
                    fontWeight: 500,
                    textAlign: 'center'
                }}><FaCheckCircle /> Subscribed!</p>
                </IconContext.Provider> :
                loading ?
                    <p style={{ color: colors.primary, fontSize: 15, textAlign: 'center' }}>
                         Sending <img className="img-fluid" src="/Dual Ring-1s-30px.svg" alt="loading-icon" />
                    </p> :
                    <EmailForm value= {email} setValue= {setEmail} handleClick={handleButtonPress}/>
        }
    </div>
}

export default SubsForm