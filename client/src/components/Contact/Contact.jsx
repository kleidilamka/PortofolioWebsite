import React, { useState } from "react";
import { SectionStyles, SectionTitle } from "../../styles/GlobalComponents";
import {
  ContactInput,
  ContactLeft,
  ContactRight,
  ContactStyles,
  ContactText,
  Container,
  MessageInput,
} from "./ContactStyles";
import { MdEmail, MdLocalPhone, MdPlace } from "react-icons/md";
import styles from "./Contact.module.css";
import { Button } from "../../styles/GlobalComponents";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SectionStyles id="contact" className={styles.root}>
      <SectionTitle className={styles.title}>Contact</SectionTitle>
      <ContactStyles>
        <Container>
          <ContactLeft>
            <MdLocalPhone size={30} color={"#fff"} />
            <ContactText>+355685013150</ContactText>
          </ContactLeft>
          <ContactLeft>
            <MdEmail size={30} color={"#fff"} />
            <ContactText>kleidilamka@gmail.com</ContactText>
          </ContactLeft>
          <ContactLeft>
            <MdPlace size={30} color={"#fff"} />
            <ContactText>Durres, Albania</ContactText>
          </ContactLeft>
        </Container>
        <Container>
          <ContactRight>
            <ContactText>Your Name</ContactText>
            <ContactInput
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleName}
            />
          </ContactRight>
          <ContactRight>
            <ContactText>Your Email</ContactText>
            <ContactInput
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </ContactRight>
          <ContactRight>
            <ContactText>Your Message</ContactText>
            <MessageInput
              className={styles.input}
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={handleMessage}
            />
            <Button onClick={submitForm}>Submit</Button>
          </ContactRight>
        </Container>
      </ContactStyles>
    </SectionStyles>
  );
};

export default Contact;
