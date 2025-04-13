"use client";

import { Formik } from 'formik';
import AppData from "@data/app.json";

const ContactForm = () => {
  return (
    <>
        {/* contact form */}

        <div className="mil-container mil-p-90-90">
            <Formik
            initialValues = {{ email: '', name: '', message: '' }}
            validate = { values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit = {( values, { setSubmitting } ) => {
                const form = document.getElementById("contactForm");
                const status = document.getElementById("contactFormStatus");
                const data = new FormData();

                data.append('name', values.name);
                data.append('email', values.email);
                data.append('message', values.message);

                fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        status.innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
                        form.reset()
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>"
                            }
                        })
                    }
                }).catch(error => {
                    status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>"
                });

                setSubmitting(false);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit} id="contactForm" action={AppData.settings.formspreeURL} className="mil-contact-form">
                <div className="row">
                    <div className="col-md-6 mil-mb60">
                        <input 
                            type="text" 
                            placeholder="What's your name"
                            name="name" 
                            id="name"
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                        />
                    </div>
                    <div className="col-md-6 mil-mb60">
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Your email"
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                        />
                    </div>
                    <div className="col-lg-12 mil-mb60">
                        <textarea 
                            placeholder="Tell us about our project"
                            name="message" 
                            id="message"
                            rows="10"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message} 
                        />
                    </div>
                    <div className="mil-jcb mil-aic">
                        <p className="mil-fs14 mil-soft" style={{"paddingRight": "15px"}}>* We promise not to disclose your personal information to third parties.</p>
                        <div className="mil-c-gone"><button type="submit" className="mil-btn">Send message</button></div>
                    </div>
                </div>
                
                <div className="form-status alert-success mil-mb-90" id="contactFormStatus" style={{"display": "none"}} />
            </form>
            )}
            </Formik>
            {/* contact form end */}
        </div>
    </>
  );
};
export default ContactForm;