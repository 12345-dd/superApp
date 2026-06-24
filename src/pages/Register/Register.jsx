import React from 'react'
import registerImage from "../../assets/register-image.png"
import "./Register.css"
import { useForm } from 'react-hook-form';
 
const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const submitHandler = (data) => {
        console.log(data)
    }

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

            <form className='register-form' onSubmit={handleSubmit(submitHandler)}>

                <input 
                    type="text" 
                    placeholder='Name' 
                    className={errors.name ? "error-input" : ""}
                    {...register("name",{required: "Field is required"})}
                />

                {errors.name && (
                    <p className='error-text'>{errors.name.message}</p>
                )}

                <input 
                    type="text" 
                    placeholder='UserName'
                    className={errors.username ? "error-input" : ""}
                    {...register("username",{required: "Field is required"})}
                />

                {errors.username && (
                    <p className='error-text'>{errors.username.message}</p>
                )}

                <input 
                    type="email" 
                    placeholder='Email'
                    className={errors.email ? "error-input" : ""}
                    {...register("email",{
                        required: "Field is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email"
                        }
                    })} 
                />

                {errors.email && (
                    <p className='error-text'>{errors.email.message}</p>
                )}

                <input 
                    type="text" 
                    placeholder='Mobile' 
                    className={errors.mobile ? "error-input" : ""}
                    {...register("mobile",{
                        required: "Field is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Mobile number must be 10 digits"
                        }
                    })}
                />

                {errors.mobile && (
                    <p className='error-text'>{errors.mobile.message}</p>
                )}

                <div className='checkbox-container'>
                    <input 
                        type='checkbox' 
                        {...register("terms",{
                            required:"Check this box if you want to proceed"
                        })}
                    />

                    <label>
                        Share my registration data with Superapp
                    </label>
                </div>

                {errors.terms && (
                    <p className='error-text'>{errors.terms.message}</p>
                )}

                <button type="submit">SIGN UP</button>

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