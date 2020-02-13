
const SubsForm = () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: '100%' }}>
            <label>Get notified once we launch</label>
            <div className='form-container' style={{}} >
                <input style={{ borderRightStyle: 'none' }} type="email" />
                <div className='button' >
                    <span style={{ textAlign: 'center' }}>
                        SUBSCRIBE
                    </span>
                </div>
            </div>
            <style jsx>
                {`


    .form-container {
        width:100%;
        border: 1px solid purple;
        border-radius: 20px;
        height:40px;
    }
            input {
                height:100%;
                margin: 0px;
                font-size: 13px;
                width:70%;
                border:none;
                color:orange;
                background-color:transparent;
            }

            .button {
                background: ${colors.primary};
             border:none;
                color: white;
                font-weight: 700;
               display:inline;
               height:100%;    
                width:30%;
               
            }

            button:hover {
                opacity: 0.7;
              }

            label {
                color: #FF552B;
             
            }
            `}
            </style>
        </div>
    </div>
)

export default SubsForm