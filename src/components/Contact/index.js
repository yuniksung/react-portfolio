import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../assets/scss/contact.scss';

const ContactForm = () => {

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({
        name:'',
        email:'',
        message:''
    });
    const {name, email, message} = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage('This field is required');
            } else {
                if(!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
      }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
      
    //   console.log(formState);

    return (
        <section className="contact-container">
            <div className="contact-description">
                <div className="contact-description-img">
                </div>
            </div>
            <div className="contact-fields">
                <h1 data-testid="h1tag">Contact me</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="name-field">
                        {/* <label htmlFor="name">Name:</label> */}
                        <input 
                            type="text" 
                            defaultValue={name}
                            onBlur={handleChange}
                            placeholder="Name"
                            name="name" 
                            />
                            {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email address:</label> */}
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            defaultValue={email} 
                            onBlur={handleChange}
                        />
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        {/* <label htmlFor="message">Message:</label> */}
                        <textarea 
                            name="message" 
                            defaultValue={message}
                            onBlur={handleChange}
                            rows="6"  
                            placeholder="Message..."
                        />
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <button data-testid="button" type="submit">Submit</button>
                </form>
            </div>
            
        </section>
    );
}

export default ContactForm;