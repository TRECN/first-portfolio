import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Section</h2>
      
    </section>
  );
}

export default Contact;
