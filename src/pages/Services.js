import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'; // You can create a separate CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Our Services</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="service-card">
            <h2>Google Adwords</h2>
            <p>
              We specialize in Google Adwords advertising for building contractors. Our services include:
            </p>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Proven ad campaigns tailored to your business.
              </li>
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Customized budgeting for your needs.
              </li>
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Continuous monitoring and optimization.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <h2>Local SEO</h2>
            <p>
              Our Local SEO services are designed to boost your online presence in local search results. We offer:
            </p>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Local keyword optimization.
              </li>
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Google My Business management.
              </li>
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Review and reputation management.
              </li>
              <li>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Local backlink building.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
