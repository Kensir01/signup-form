import {useState} from 'react'
import React from 'react'

const SignupForm = () => {

    const [values, setValues] = useState ({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setValues ({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

  return (
    <div className='container-wrapper'>

        <div className='app-wrapper'>


            <form className='form-wrapper'>

                
                <div className='name'>
                    {/* <label className='label'>First Name</label> */}
                    <input className='input' type="text" name='firstname' value={values.firstname} onChange={handleChange} placeholder="First Name"/>
                </div>

                <div className='name'>
                    {/* <label className='label'>Last Name</label> */}
                    <input className='input' type="text" name='lastname' value={values.lastname} onChange={handleChange} placeholder="Last Name"/>
                </div>

                <div className='email'>
                    {/* <label className='label'>Email</label> */}
                    <input className='input' type="email" name='email' value={values.email} onChange={handleChange} placeholder="Email Address"/>
                </div>

                <div className='password'>
                    {/* <label className='label'>Password</label> */}
                    <input className='input' type="password" name='password' value={values.password} onChange={handleChange} placeholder="Password"/>
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
  );
};

export default SignupForm