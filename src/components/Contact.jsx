import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Parallax } from "react-parallax";
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import 'react-toastify/dist/ReactToastify.css';
import NavHeader from "./NavHeader";
import ContactBg from "../assets/images/ContactBg.jpg";

export default function Contact() {
  
  const form = useRef();
  const [state, setState] = useState({
    name: "",
    nameError: false,
    email: "",
    emailError: false,
    message: "",
    messageError: false,
  });
  const [sendButtonClicked, setSendButtonClicked] = useState(false);

  // const isValidEmail = (email) => {
  //   return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  // };

  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({ [name]: value });

    if (value.length <= 0 && name === "name") {
      setState({ nameError: true });
    } else {
      setState({ nameError: false });
    }

    if (value.length <= 0 && name === "email") {
      setState({ emailError: true });
    }
    else {
      setState({ emailError: false });
    }
  };

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSendButtonClicked(true);
    emailjs.sendForm('service_gfhn6u6', 'template_bhak99n', form.current, '6xeNS5je9kpM3ut4j')
      .then(() => {
          setState({ 
            name: "",
            nameError: false,
            email: "",
            emailError: false,
            message: "",
            messageError: false,
          });
          toast.success('Message sent successfully!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          })
      }, () => {
        toast.info('Apologies! Your message could not be sent. Please try again later.', {
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
        nameError: false,
        email: "",
        emailError: false,
        message: "",
        messageError: false,
      })
    };

  const {
    name,
    email,
    message,
    nameError,
    emailError,
    messageError,
  } = state;

    return (
      <>
        { sendButtonClicked &&
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
        }
        <NavHeader />
        <Parallax className="parallax-image" bgImage={ContactBg} bgImageStyle={{height: '110%', width: '100%'}} strength={800} />
        <div className="card shadow-sm border-0 px-3 rounded-2 py-4 mx-auto bg-light">
          <div className="card-header bg-transparent border-1 text-center text-uppercase">
            <h4 style={{ fontWeight: 700 }}>Let's get in touch!</h4>
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
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {nameError ? (
                  <div className="alert alert-danger mt-2">
                    Name is a required field.
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {emailError ? (
                  <div className="alert alert-danger mt-2">
                    Invalid email address.
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  value={message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {messageError ? (
                  <div className="alert alert-danger mt-2">
                    Message is a required field.
                  </div>
                ) : (
                  ""
                )}
              </div>
              <p className="text-center mb-0">
                <input
                  type="submit"
                  className="btn btn-send btn-md w-20 mb-20 text-uppercase"
                  value="Send"
                  disabled={name === "" || email === "" || message === ""}
                />
              </p>
            </form>
          </div>
          <div className="text-center" style={{ position: "relative", top: "20px", bottom: "10px" }}>
            <a href="https://www.linkedin.com/in/vibha-navale/" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon className="fa-icon linkedin-icon" icon={faLinkedin} color="#F19000" size="2xl" style={{ marginRight: "20px" }} />
            </a>
            <a href="https://github.com/VibhaSNavale" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon className="fa-icon github-icon" icon={faGithub} color="#F19000" size="2xl" />
            </a>
        </div>
        </div>
        
      </>
    );
}
