import React, { useState, useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const formRef = useRef();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = "service_8ci3hr2"; // Replace with your EmailJS Service ID
  const EMAILJS_TEMPLATE_ID = "template_fztn7xx"; // Replace with your EmailJS Template ID
  const EMAILJS_PUBLIC_KEY = "keSWjCyV8Ukh04FSC"; // Replace with your EmailJS Public Key

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, address, message } = userData;

    if (firstName && lastName && email && address && message) {
      setLoading(true);

      try {
        // Initialize EmailJS with public key
        emailjs.init(EMAILJS_PUBLIC_KEY);

        // Prepare template parameters
        const templateParams = {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          from_address: address,
          message: message,
          to_name: "Portfolio Owner",
          reply_to: email,
        };

        console.log("Sending with params:", templateParams);

        // Send email using EmailJS
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams
        );

        console.log("Email sent successfully:", result);

        // Clear form
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          message: "",
        });

        toast.success(
          "🎉 Thank you! Your message has been sent successfully. I'll get back to you soon!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      } catch (error) {
        console.error("EmailJS Error Details:", error);
        console.error("Error Text:", error.text);
        toast.error(
          `❌ Oops! ${error.text || "Something went wrong"}. Please try again.`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      } finally {
        setLoading(false);
      }
    } else {
      toast.warning("⚠️ Please fill in all fields!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  return (
    <Wrapper>
      <section className="card-inner contacts" id="contacts-card">
        <div className="card-wrap">
          <div className="content contacts">
            <div className="title">
              <span className="first-word">Contact </span>
              Form
            </div>
            <div className="row">
              <div className="col col-12 border-line-v">
                <div className="contact_form">
                  <form
                    id="cform"
                    ref={formRef}
                    method="post"
                    noValidate="novalidate"
                  >
                    <div className="row">
                      <div className="col col-6">
                        <div className="group-val">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={userData.firstName}
                            onChange={postUserData}
                          ></input>
                        </div>
                      </div>
                      <div className="col col-6 ">
                        <div className="group-val">
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={userData.lastName}
                            onChange={postUserData}
                          ></input>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="group-val">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            value={userData.email}
                            onChange={postUserData}
                          ></input>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="group-val">
                          <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={userData.address}
                            onChange={postUserData}
                          ></input>
                        </div>
                      </div>
                      <div className="col col-12">
                        <div className="group-val">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={userData.message}
                            onChange={postUserData}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="align-left">
                      <button
                        className="button"
                        onClick={submitData}
                        disabled={loading}
                        style={{ opacity: loading ? 0.7 : 1 }}
                      >
                        <span className="text">
                          {loading ? "Sending..." : "Send Message"}
                        </span>
                        <span className="icon">
                          <FaTelegramPlane />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.section`
  .content {
    position: relative;
    margin: 0 0 40px 0;

    &:last-child {
      margin-bottom: 30px;
    }
    input,
    textarea,
    button {
      transition: all 0.3s ease 0s;
      box-shadow: 5px 5px 10px
        rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
    }
    .title {
      color: rgb(${({ theme }) => theme.title.primary});

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        left: -30px;
        right: 0;
        bottom: 0;
        width: auto;
        background: ${({ theme }) => theme.border.gradient2};
      }
    }

    .alert-success {
      display: none;
    }

    .contacts .row {
      .col {
        flex: none;

        textarea {
          padding: 15px;
          height: 94px;
        }
      }
      .icon {
        font-size: 1.2rem;
        margin: 0 6px;
      }

      button {
        box-shadow: 5px 5px 10px
          rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
        &:hover {
          background: ${({ theme }) => theme.highlight.primary};
          border: none;
          .icon {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
