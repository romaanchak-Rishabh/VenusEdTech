import React, {useState} from 'react';

import './LoginPopup.css';

function LoginPopup({closeModal}) {
    return (
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='titleCloseBtn'>
                    <button onClick={()=> {closeModal(false)}}>X</button>
                </div>
                <div className='title'>
                    <h1>Login</h1>
                </div>
                <div className='body'>
                    <form>
                        <input type='email' placeholder='Email' required='true'></input>
                        <input type='password' placeholder='Password' required='true'></input>
                        <div className='footer'>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
                {/* <div className='switch'>
                    <p>Not a member yet? <button>SignUp</button></p>
                </div> */}
                
            </div>
        </div>
    )
}

export default LoginPopup
