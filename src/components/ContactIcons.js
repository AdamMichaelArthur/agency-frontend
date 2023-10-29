// ContactIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactIcons.css';

const ContactIcons = () => {
  return (
    <div className="d-flex justify-content-center d-md-none">
      <div className="contact-icons">
        <a href="https://wa.me/1234567890" className="btn btn-success btn-icon mx-1">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="sms:1234567890" className="btn btn-primary btn-icon mx-1">
          <FontAwesomeIcon icon={faCommentAlt} />
        </a>
        <a href="tel:1234567890" className="btn btn-danger btn-icon mx-1">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </a>
      </div>
    </div>
  );
}

export default ContactIcons;
