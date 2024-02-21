import React from 'react';
import "./Contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react"; // Import Lottie once
import doneAnimation from '../../../public/animation/done.json'
import contactAnimation from '../../../public/animation/contact.json'

const Contact = () => {
  const [state, handleSubmit] = useForm("mgegkpow");

  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='envelop'><i className="fa-regular fa-envelope"></i></span> CONTACT US
      </h1>
      <p className='subtitle'>Contact us for more information and get notified when I publish something new</p>
      <div style={{justifyContent:'space-between'}} className='flex'>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email Address:</label>
            <input type='email' name='email' id='email' />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor='text'>Your message:</label>
            <textarea required name="message" id="text"></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting...." : "Submit"}
          </button>
          <p className='flex'>  {state.succeeded && (
            <>
              <Lottie style={{height:55}} animationData={doneAnimation} />
              <h1>Your message has been sent successfully👍</h1>
            </>
          )}</p>
        </form>
        <div className="animation">
        <Lottie  className:contactAnimation style={{height:355}} animationData={contactAnimation} />

        </div>
      </div>

    </section>
  );
}

export default Contact;
