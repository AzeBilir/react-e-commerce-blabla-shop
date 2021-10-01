import React, { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    messages: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleMessagesInputChange = (event) => {
    setValues({ ...values, messages: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name && values.email && values.messages) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Thanks for your message!</div>
        ) : null}
        <input
          onChange={handleNameInputChange}
          value={values.name}
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
        />
        {submitted && !values.name ? <span>Please enter a name</span> : null}

        <input
          onChange={handleEmailInputChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.name ? (
          <span>Please enter a email address</span>
        ) : null}

        <textarea
          onChange={handleMessagesInputChange}
          id="messages"
          class="form-field"
          type="text"
          placeholder="Messages"
          name="messages"
        />
        {submitted && !values.name ? <span>Please enter a message</span> : null}

        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
