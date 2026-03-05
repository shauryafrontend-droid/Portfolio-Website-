import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact({ darkMode }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9zr2no2",
        "template_dt8daky",
        form.current,
        "8kJJ2qRPSe995PeZy"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className={`contact ${darkMode ? "contact-dark" : "contact-light"}`}
    >
      <h1>Contact Me</h1>

      <p className="contact-subtitle">
        Interested in working together or offering an internship opportunity?
        Feel free to reach out!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;