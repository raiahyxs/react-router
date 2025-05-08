import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../contact/contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_user_id"
      )
      .then(
        () => {
          setMessage("Message Sent Successfully!");
          setIsSent(true);
          setButtonText("Sent");
          e.target.reset();
          setTimeout(() => {
            setMessage("");
            setIsSent(false);
            setButtonText("Send");
          }, 3000);
        },
        () => {
          setMessage("Failed to send message. Try again.");
        }
      );
  };
  

  return (
    <div className="contact-container">
      <h2 className="contact-heading">My Contact</h2>

      <div className="map-info-container">
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.8720385479025!2d122.1408483148682!3d13.94679129182963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb4fc3f624f9bf%3A0x4c4d4e05ca423c77!2sLucena%20City%2C%20Quezon%20Province%2C%20Philippines!5e0!3m2!1sen!2sin!4v1738767502159!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-info-text">
              <h4>Address</h4>
              <p>Lucena City, Philippines</p>
              <p>Purok Bagong Sinag, Tanke-District, 3013</p>
            </div>
          </div>
          <div className="contact-info-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-info-text">
              <h4>Email</h4>
              <p>raiayxs@gmail.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <FaPhoneAlt className="contact-icon" />
            <div className="contact-info-text">
              <h4>Phone</h4>
              <p>09XXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="connect-form">
        <h3 className="contact-heading">Let's Connect</h3>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <div className="button-container">
              <button type="submit">
                {buttonText}
                {isSent && <FaPaperPlane className="button-icon" />}
              </button>
            </div>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>

      <div className="contact-social-icons">
        <a
          href="https://www.facebook.com/raiayxs"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
          aria-label="Facebook profile"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://github.com/raiahyxs"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
          aria-label="GitHub profile"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://instagram.com/raiayxs"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          aria-label="Instagram profile"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
