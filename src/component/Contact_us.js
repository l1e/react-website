import React from 'react';
import '../style/Contact_us.css';

function Contact_us() {
    return (
        <div className="Contact-us">
            <h1 className="contact_us-title"> Contact us</h1>
            <p className="contact-us_desc">Let’s Talk about Your IT Needs!</p>
            <form className="contact-us_from">
                <label className="contact-us_label">
                    Name: <br/>
                    <input className="contact-us_input" type="text" name="name" />
                </label>
                <label className="contact-us_label">
                    Email: <br/>
                    <input className="contact-us_input" type="text" name="name" />
                </label>
                <label className="contact-us_label">
                    Company URL: <br/>
                    <input className="contact-us_input" type="text" name="name" />
                </label>

                <label className="contact-us_label">
                    Tell us how we can help:<br/>
                    <textarea className="contact-us_input"  />
                </label>
                <input className="contact-us_send" type="submit" value="get help" />
            </form>
        </div>
    );
}

export default Contact_us;
