import '../css/Contact.css'
import coding2 from '../images/coding2.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Typewriter from 'typewriter-effect';



function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID=process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID=process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY=process.env.REACT_APP_PUBLIC_KEY;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current,PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id="contact" className="section-cont">
      <div className="left">
        <img src={coding2} alt="coding" className='coding2' />
      </div>
      <div className="right">
      <div className="heading typewriter ">
                            <Typewriter

                                options={{
                                    strings: [
                                        "CONTACT ME",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
