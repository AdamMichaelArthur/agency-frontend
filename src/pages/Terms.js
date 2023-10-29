// Terms.js

import React from 'react';

const Terms = () => {
  return (
    <div className="terms-container">
      <div className="container">
        <h1 className="terms-title">Terms and Conditions</h1>
        <p className="terms-text">
          This page contains the terms and conditions that govern the use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms and conditions.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p className="terms-text">
          Please read these terms and conditions carefully before using our website. If you do not agree with any part of these terms, please do not use the website.
        </p>

        <h2>2. Use of the Website</h2>
        <p className="terms-text">
          2.1 You must be at least 18 years old to use this website. By using this website, you represent and warrant that you are at least 18 years old.
        </p>
        <p className="terms-text">
          2.2 You agree not to use the website for any unlawful purpose or in any way that may impair the proper functioning of the website or interfere with other users' use of the website.
        </p>

        <h2>3. User Accounts</h2>
        <p className="terms-text">
          3.1 You may be required to create an account to access certain features of the website. You are responsible for maintaining the confidentiality of your account information.
        </p>
        <p className="terms-text">
          3.2 You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
        </p>

        {/* Add more sections as needed */}
        
        <h2>4. Privacy Policy</h2>
        <p className="terms-text">
          Your use of this website is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated by reference into these terms and conditions.
        </p>

        <h2>5. Changes to Terms</h2>
        <p className="terms-text">
          We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the website after any such changes constitutes your acceptance of the new terms and conditions.
        </p>

        <h2>6. Contact Information</h2>
        <p className="terms-text">
          If you have any questions about these terms and conditions, please contact us at <a href="mailto:contact@hammerheadads.com">contact@hammerheadads.com</a>.
        </p>

        <p className="terms-text">
          This terms and conditions page was last updated on [Date].
        </p>
      </div>
    </div>
  );
};

export default Terms;
