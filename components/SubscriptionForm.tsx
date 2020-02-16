import { colors } from '../styles'
import { useState } from 'react'

const SubsForm = () => {
    const [email, setEmail] = useState('')

    return <div>
        <form action="">
            <label htmlFor="email-input">Get notified once we launch</label>
            <input name='email-input' value={email} onChange={event => {
                setEmail(event.target.value)
            }} className="email-input" />
            <a href="#" className="email-button">SUBSCRIBE</a>
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
            border: 1px solid #ff552b80;
           border-right-style:none;
            display: inline-block;
            padding: 4px 25px;
            color:${colors.primary}
        }

        .email-button {
            background: ${colors.button};
            color: #fff;
            font-weight: 500;
            border-radius: 0 50px 50px 0;
            border: 1px solid #ff552b80;
            border-left-style:none; 
            text-decoration: none;
            cursor:pointer;
            display: inline-block;
            padding: 4px 25px;
            transition: all 0.3s; 
        }

        .email-button:hover {
            padding: 6px 27px;
            box-shadow: 6px 2px 10px 3px #ff552b5e;
        }

        *:focus {
            outline: none;
        }
        `}
        </style>
    </div>
}

export default SubsForm