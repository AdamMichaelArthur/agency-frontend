import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Make sure to create and link an appropriate CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBuilding, faHeart, faHandsHelping, faCode, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section bg-light p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Our Team</h2>
        </div>
        <p>We have a talented and distributed team of professionals who are committed to providing the best services to our clients. Our team includes experienced software engineers, digital marketing experts, and other specialists working together to ensure customer satisfaction and to deliver top-notch solutions.</p>
      </section>

      <section className="about-section p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faBuilding} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Our Office</h2>
        </div>
        <p>Our headquarters are located in the vibrant city of Sioux Falls, SD, where innovation meets tradition. Despite having a central hub, our team operates in a distributed manner, ensuring flexibility and a wide reach of talent.</p>
      </section>

      <section className="about-section bg-light p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faHeart} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Our Values</h2>
        </div>
        <p>We believe in integrity, commitment, and excellence. Our core values are the driving force behind everything we do, guiding us in our mission to deliver exceptional services to our clients.</p>
      </section>

      <section className="about-section p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faHandsHelping} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Community Involvement</h2>
        </div>
        <p>We are committed to giving back to the community of Sioux Falls and beyond. Through various community service initiatives, we strive to make a positive impact and contribute to the well-being of society.</p>
      </section>

      <section className="about-section bg-light p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faCode} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Adam Arthur</h2>
        </div>
        <p>Adam Arthur, one of our esteemed owners, brings years of experience as a software engineer to our team. His technical expertise and innovative mindset have been instrumental in driving our success in the digital landscape.</p>
      </section>

      <section className="about-section p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faBullhorn} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Frank Enstein</h2>
        </div>
        <p>Frank Enstein, our co-owner, has decades of experience in Digital Marketing. His profound knowledge and strategic approach to marketing have played a crucial role in establishing our company as a leader in the industry.</p>
      </section>
    </div>
  );
}

export default About;
