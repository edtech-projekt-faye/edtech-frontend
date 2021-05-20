import React, { useRef } from 'react'
import './style.css'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <div className="register">
            <div className="register-card">
                <form action="" class="field register-form">
                    <input type="email" name="" id="email" className="field email-field" ref={emailRef} required placeholder="Email Address" />
                    <input type="password" name="" id="password" required className="field password-field" ref={passwordRef} required placeholder="Your Password" />
                    <input type="password" name="" id="passwordConfirm" required className="field password-field" ref={passwordConfirmRef} required placeholder="Confirm Password" />
                    <button type="submit" className="button button-white">Register</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
