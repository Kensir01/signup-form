import {useState} from 'react'
import React from 'react'
import Validations from './Validations';
import errorSvg from '../images/icon-error.svg'
import HeadDesktop from '../component/HeadDesktop';

const SignupForm = () => {

    const [values, setValues] = useState ({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues ({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validations(values));

        // cancella il form al submit
        handleChange('') 
    };

  return (
    <div className='container-desktop'>

        <div className='container-head-desktop'>
            <div className='head-desktop'>
             <HeadDesktop/>
            </div>
        </div>

        <div className='container-wrapper'>

            <div className='app-wrapper'>


                <form className='form-wrapper'>

                    
                    <div className='name'>
                        {/* <label className='label'>First Name</label> */}
                        <input
                        className={errors.firstname ? 'error-control' : 'input'}
                        type="text"
                        name='firstname'
                            value={values.firstname}
                            onChange={handleChange}
                            placeholder="First Name"
                            />
                            {errors.firstname && 
                            <div className='error'>
                                <p>{errors.firstname}</p>
                                <img src={errorSvg} alt='Error' className='error-svg'/>
                            </div>}
                    </div>

                    <div className='name'>
                        {/* <label className='label'>Last Name</label> */}
                        <input
                        className={errors.lastname ? 'error-control' : 'input'}
                        type="text"
                        name='lastname'
                            value={values.lastname}
                            onChange={handleChange}
                            placeholder="Last Name"
                            />
                            {errors.lastname && 
                            <div className='error'>
                                <p>{errors.lastname}</p>
                                <img src={errorSvg} alt='Error' className='error-svg'/>
                            </div>}
                    </div>

                    <div className='email'>
                        {/* <label className='label'>Email</label> */}
                        <input
                        className={errors.email ? 'error-control' : 'input'}
                        type="email"
                        name='email'
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            />
                            {errors.email && 
                            <div className='error'>
                                <p>{errors.email}</p>
                                <img src={errorSvg} alt='Error' className='error-svg'/>
                            </div>}
                    </div>

                    <div className='password'>
                        {/* <label className='label'>Password</label> */}
                        <input
                        className={errors.password ? 'error-control' : 'input'}
                        type="password"
                        name='password'
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Password"
                            />
                            {errors.password && 
                            <div className='error'>
                                <p>{errors.password}</p>
                                <img src={errorSvg} alt='Error' className='error-svg'/>
                            </div>}
                    </div>

                    <div>
                        <button className='submit' onClick={handleFormSubmit}>claim your free trial</button>
                    </div>

                    <div className='cont-terms'>
                        <p>By clicking the button, you are agreeing to our <span className='terms'>Terms and Services</span></p>
                    </div>

                </form>

            </div>
        </div>

    </div>
  );
};

export default SignupForm