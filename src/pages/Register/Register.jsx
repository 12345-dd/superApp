import React from 'react'
import registerImage from "../../assets/register-image.png"
import "./Register.css"
 
const Register = () => {
  return (
    <div className='register-container'>
        <div className='left-side'>
            <img 
                src={registerImage} 
                alt="Register"
                className='register-image' 
            />

            <div className='overlay-text'>
                <h1>Discover new things on</h1>
                <h1>Superapp</h1>
            </div>
        </div>

        <div className='right-side'>
            <h1 className='logo'>Super app</h1>
            <p className='subtitle'>Create your new account</p>

            <form className='register-form'>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='UserName' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Mobile' />

                <div className='checkbox-container'>
                    <input type='checkbox' />
                    <label>
                        Share my registration data with Superapp
                    </label>
                </div>

                <button type="button">SIGN UP</button>

                <p className="terms-text">
                    By clicking on Sign up, you agree to
                    Superapp <span>Terms and Conditions of Use</span>
                </p>

                <p className="privacy-text">
                    To learn more about how Superapp
                    collects, uses, shares and protects
                    your personal data please head
                    Superapp <span>Privacy Policy</span>
                </p>

            </form>
        </div>
    </div>
  )
}

export default Register