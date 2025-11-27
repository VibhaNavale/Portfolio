import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Parallax } from "react-parallax";
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import 'react-toastify/dist/ReactToastify.css';
import NavHeader from "./NavHeader";
import ContactBg from "../assets/images/ContactBg.jpg";
import PageDecorations from "./PageDecorations";

export default function Contact() {
  
  const form = useRef();
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [sendButtonClicked, setSendButtonClicked] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value.trim();
    setState(prevState => ({ ...prevState, [fieldName]: value }));
    setTouched(prevState => ({ ...prevState, [fieldName]: true }));

    // Show error on blur only if field has content but is invalid (for email format)
    if (fieldName === "email") {
      if (value.length > 0 && !isValidEmail(value)) {
        setErrors(prevState => ({ ...prevState, email: true }));
      } else {
        setErrors(prevState => ({ ...prevState, email: false }));
      }
    }
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setState(prevState => ({ ...prevState, [fieldName]: value }));

    // Clear error as user types if field becomes valid
    if (fieldName === "email") {
      if (value.trim().length === 0 || isValidEmail(value.trim())) {
        setErrors(prevState => ({ ...prevState, email: false }));
      }
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    // Validate all fields before submitting
    const nameValid = name.trim().length > 0;
    const emailValid = email.trim().length > 0 && isValidEmail(email.trim());
    const messageValid = message.trim().length > 0;

    // Set errors for display
    setErrors({
      name: !nameValid,
      email: !emailValid,
      message: !messageValid,
    });

    // Don't submit if validation fails
    if (!nameValid || !emailValid || !messageValid) {
      let errorMessage = 'Please fill in all fields correctly.';
      if (!nameValid) {
        errorMessage = 'Please enter your name.';
      } else if (!emailValid) {
        errorMessage = email.trim().length === 0 ? 'Please enter your email address.' : 'Please enter a valid email address.';
      } else if (!messageValid) {
        errorMessage = 'Please enter a message.';
      }
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
      return;
    }

    setSendButtonClicked(true);
    emailjs.sendForm('service_gfhn6u6', 'template_bhak99n', form.current, '6xeNS5je9kpM3ut4j')
      .then(() => {
          setState({ 
            name: "",
            email: "",
            message: "",
          });
          setErrors({
            name: false,
            email: false,
            message: false,
          });
          setTouched({
            name: false,
            email: false,
            message: false,
          });
          setSubmitAttempted(false);
          toast.success('Message sent successfully!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          })
      }, () => {
        toast.info('Apologies! Your message could not be sent. Please try again.', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        })
      });

      setState({
        name: "",
        email: "",
        message: "",
      });
      setErrors({
        name: false,
        email: false,
        message: false,
      });
      setTouched({
        name: false,
        email: false,
        message: false,
      });
      setSubmitAttempted(false);
    };

  const {
    name,
    email,
    message,
  } = state;

    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        <NavHeader />
        <Parallax className="parallax-image" bgImage={ContactBg} bgImageStyle={{height: '110%', width: '100%'}} strength={800} />
        <PageDecorations />
        <div className="card shadow-sm border-0 px-3 rounded-2 py-4 mx-auto" style={{ width: '75%', maxWidth: '900px' }}>
          <div className="card-header bg-transparent border-1 text-center">
            <h2 className="contact-title">Let's Get In Touch!</h2>
            <p style={{ color: '#666', fontSize: '15px', marginBottom: '5px' }}>
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and design.
            </p>
            <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>
              Feel free to reach out via the form below, or connect with me on LinkedIn or GitHub.
            </p>
          </div>
          <div className="card-body">
            <form
              ref={form}
              onSubmit={(e) => submitForm(e)}
              encType="multipart/form-data"
              autoComplete="off"
              style={{ width: "50%", margin: "auto" }}
            >
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(submitAttempted && errors.name) && (
                  <div className="alert alert-danger mt-2">
                    Name is a required field.
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {((submitAttempted && errors.email) || (touched.email && errors.email)) && (
                  <div className="alert alert-danger mt-2">
                    {email.trim().length === 0 ? "Email is a required field." : "Please enter a valid email address."}
                  </div>
                )}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  type="text"
                  className="form-control"
                  placeholder="What's on your mind? I'd love to hear from you!"
                  rows="5"
                  value={message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(submitAttempted && errors.message) && (
                  <div className="alert alert-danger mt-2">
                    Message is a required field.
                  </div>
                )}
              </div>
              <p className="text-center mb-0">
                <input
                  type="submit"
                  className="btn btn-send btn-md w-20 mb-20 text-uppercase"
                  value="Send"
                  disabled={name.trim() === "" || email.trim() === "" || message.trim() === "" || !isValidEmail(email.trim())}
                />
              </p>
            </form>
          </div>
          <div className="text-center" style={{ position: "relative", top: "20px", bottom: "10px", padding: "20px 0" }}>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
              Or connect with me on:
            </p>
            <a href="https://www.linkedin.com/in/vibha-navale/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
              <FontAwesomeIcon className="fa-icon linkedin-icon" icon={faLinkedin} color="#F19000" size="2xl" style={{ marginRight: "20px" }} />
            </a>
            <a href="https://github.com/VibhaNavale" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
              <FontAwesomeIcon className="fa-icon github-icon" icon={faGithub} color="#F19000" size="2xl" style={{ marginRight: "20px" }} />
            </a>
            <a href="mailto:vibha.navale@outlook.com" aria-label="Email">
              <FontAwesomeIcon className="fa-icon email-icon" icon={faEnvelope} color="#F19000" size="2xl" />
            </a>
        </div>
        </div>
      </>
    );
}
