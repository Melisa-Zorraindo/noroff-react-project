import { StyledContactForm } from "./styles";
import PrimaryButton from "../PrimaryButton";
import React, { useState } from "react";

export default function ContactForm() {
  /*  
      THIS IS THE SCRIMBA WAY
      const [formData, setFormData] = useState({
    fullname: "",
    subject: "",
    email: "",
    body: "",

  }); */

  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  function handleChange(event) {
    event.target.name === "full-name" && setFullName(event.target.value);

    event.target.name === "subject" && setSubject(event.target.value);

    event.target.name === "email" && setEmail(event.target.value);

    event.target.name === "body" && setBody(event.target.value);
  }

  function handleSubmission(event) {
    event.preventDefault();

    const formData = {
      fullName,
      subject,
      email,
      body,
    };

    console.log(formData);
  }

  return (
    <StyledContactForm onSubmit={handleSubmission}>
      <fieldset>
        <legend>All fields are required</legend>
        <label htmlFor="full-name">Full name</label>
        <input
          name="full-name"
          placeholder="Full name"
          value={fullName}
          onChange={handleChange}
        ></input>

        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={handleChange}
        ></input>

        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        ></input>

        <label htmlFor="body">Message</label>
        <textarea
          name="body"
          placeholder="Write your message here"
          value={body}
          onChange={handleChange}
        ></textarea>

        <div className="button-container">
          <PrimaryButton text={"Submit"} />
        </div>
      </fieldset>
    </StyledContactForm>
  );
}
