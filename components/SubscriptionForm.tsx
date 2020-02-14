import { colors } from '../styles'

const SubsForm = () => (
    <div>
        <form action="">
            <label htmlFor="">Get notified once we launch</label>
            <input type="email" className="subscription"/>
            <a href="#" className="subscription">SUBSCRIBE</a>
        </form>
        <style jsx>
            {`
            form {
                font-size: 14px;
            }
            label {
                color: ${colors.primary};
                display: block;
            }
            input {
                border: none;
                border-radius: 50px 0 0 50px ;
            }
            a {
                background: ${colors.button};
                color: #fff;
                font-weight: 700;
                border-radius: 0 50px 50px 0;
            }
            .subscription {
                border: .5px solid ${colors.primary};
                display: inline-block;
                padding: 4px 22px;
            }
            `}
        </style>
    </div>
)

export default SubsForm