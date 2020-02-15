import { colors } from '../styles'
import { useState } from 'react'

const SubsForm = () => {
const [email,setEmail] = useState('')

    return  <div>
    <form action="">
        <label htmlFor="email-input">Get notified once we launch</label>
        <input name='email-input'  value={email} onChange={event=>{
            setEmail(event.target.value)
        }} className="subscription"/>
        <a href="#" className="subscription">SUBSCRIBE</a>
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
        input {
            border: none;
            font-weight: 700;
            border-radius: 50px 0 0 50px;
            border: 1px solid #ff552b80;
           border-right-style:none;
        }
        a {
            background: ${colors.button};
            color: #fff;
            font-weight: 700;
            border-radius: 0 50px 50px 0;
            border: 1px solid #ff552b80;
            border-left-style:none; 
            text-decoration: none;
            cursor:pointer;
        }
        .subscription {
            display: inline-block;
            padding: 4px 25px;
        }

        *:focus {
            outline: none;
        }
        `}
    </style>
</div>
}

export default SubsForm