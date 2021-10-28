import React, {useState} from 'react';

import './SignupPopup.css';

function SignupPopup({closeModal}) {
    return (
        <div className='modal-background signup-modal-background'>
            <div className='signup-modal-container'>
                <div className='titleCloseBtn'>
                    <button onClick={()=> {closeModal(false)}}>X</button>
                </div>
                <div className='title'>
                    <h1>Signup</h1>
                </div>
                <div className='body'>
                    <form>
                        <input type='text' placeholder='First Name' required='true'></input>
                        <input type='text' placeholder='Last Name' required='true'></input>
                        <input type='tel' placeholder='Contact Number' required='true'></input>
                        <input type='email' placeholder='Email' required='true'></input>
                        <input type='password' placeholder='Password' required='true'></input>
                        <input type='password' placeholder='Confirm Password' required='true'></input>
                        <div className='footer'>
                            <button type='submit'>Login</button>
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

export default SignupPopup
