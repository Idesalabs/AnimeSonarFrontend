import { colors } from '../styles'

const SubsForm = () => (
    <div>
        <form action="">
            <label htmlFor="">Get notified once we launch</label>
            <input  type="email" className="subscription"/>
            <a href="#" className="subscription">SUBSCRIBE</a>
        </form>
        <style jsx>
            {`
            form {
                font-size: 14px;
                user-select: none;
            }
            label {
                color: ${colors.primary};
                display: block;
            }
            input {
                border: none;
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
                
            }
            .subscription {
                display: inline-block;
                padding: 4px 22px;
            }
            `}
        </style>
    </div>
)

export default SubsForm