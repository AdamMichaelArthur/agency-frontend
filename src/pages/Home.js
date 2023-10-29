import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faCheck, faChartLine, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faHammer, faHardHat, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

library.add(faDraftingCompass);
library.add(faHammer, faHardHat, faDraftingCompass);




// Add icons to the library for global use
library.add(faCog, faCheck, faChartLine, faDollarSign);

const Home = () => {

  const navigate = useNavigate();

  const goToTestimonial = () => {
    navigate('/testimonial');
  }

  const goToVideo = () => {
    navigate('/video');
  }

  const gotoCalendly = () => {
     window.location.href = 'https://calendly.com/adam-943/30-minute-meeting-clone';
  }

  return (
    <div>



      <div className="container-fluid p-0 ">
        <div className="frame-1 d-flex" style={{ backgroundImage: `url(/images/bg-circles.svg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 class="fs-h1"><b>We Run Google Ads That Actually Convert</b><br /></h1><br />
          <button type="button" className="btn btn-primary w-100" onClick={gotoCalendly}>Schedule A Call</button><br />
          <p class="home-hero-paragraph paid-ads new">We get building contractors more leads, more phone calls and more quote requests.</p>
          <div className="container-fluid p-0">
  <ContactForm />
</div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col px-0">
            <div className="frame frame-2 d-flex">
              <div>
                <h2 className="fs-h2">Google Advertising should be easy</h2>
                <p className="white-text">Since we only work with contractors, we've got ads and campaigns ready to go that are proven to work in geographies all across the USA.</p>
                <button type="button" className="btn btn-primary w-100" onClick={goToTestimonial}>Watch A Testimonial</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col px-0">
            <div className="frame frame-3">
              <div>
                <h1>How We Get Qualified Leads</h1>
                <button type="button" className="btn btn-primary w-100" onClick={goToVideo}>See Our Video</button><br /><br />
<ul className="fa-ul dark-text">
    <li>
        <span className="fa-li">
            <FontAwesomeIcon icon={faCog} />
        </span>
        <p className="">We develop a marketing plan around your specific business and needs</p>
    </li>
    <li>
        <span className="fa-li">
            <FontAwesomeIcon icon={faCheck} />
        </span>
        <p className="">We use proven campaigns and strategies that are working elsewhere</p>
    </li>
    <li>
        <span className="fa-li">
            <FontAwesomeIcon icon={faDollarSign} />
        </span>
        <p className="">The Campaign and Budget is tailored to your business</p>
    </li>
    <li>
        <span className="fa-li">
            <FontAwesomeIcon icon={faChartLine} />
        </span>
        <p className="">We monitor and adjust results for continued results</p>
    </li>
</ul>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4 card">
      
        <div className="col-md-4">
          <div className="card h-100 shadow-sm p-3 rounded-custom home-card">
            <div className="card-body text-center">
              <p className="text-muted">
                <strong>Immediate Growth</strong><br /><br />
                We focus on performance campaigns that will start generating your first leads in days, not months or years.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm p-3 rounded-custom home-card">
            <div className="text-center">
              <h2 className="display-3">Certified</h2>
              <p className="text-muted">
                <strong>Google Partner</strong><br /><br />
                As a certified Google Partner, we have a track record of delivering exceptional PPC results.</p><p><b>Our expertise and commitment to excellence set us apart in the digital advertising landscape.</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm p-3 rounded-custom home-card">
            <div className="card-body text-center">
              <h2 className="display-3"><b>115</b><span className="percentage-text red-text">%</span></h2>
              <p className="text-muted">
                <strong>CTRs Excellence</strong><br /><br />
                We consistently outperform industry standards with click through rates that are 115% above average.</p><p><b>Our strategic approach ensures maximum visibility and engagement for your ads.</b>
              </p>
            </div>
          </div>
        </div>
      
        </div>
      </div>
      <section className="specialization-section bg-light p-4">
  <div className="container">
    <div className="text-center mb-4">
      <FontAwesomeIcon icon={faHardHat} size="3x" className="text-primary" />
      <h2 className="h3 mt-3 text-primary">Why Choose Us?</h2>
    </div>
    <p className="lead text-center mb-5">Specializing exclusively in construction contracts, we bring unmatched expertise to the table.</p>
    <div className="row">
      <div className="col-md-4 text-center mb-4">
        <FontAwesomeIcon icon={faDraftingCompass} size="2x" className="text-primary mb-3" />
        <h3 className="h5 text-primary">Ready-To-Go Campaigns</h3>
        <p>With pre-built campaigns that have proven their worth across the nation, we're prepared to hit the ground running for your business.</p>
      </div>
      <div className="col-md-4 text-center mb-4">
        <FontAwesomeIcon icon={faHammer} size="2x" className="text-primary mb-3" />
        <h3 className="h5 text-primary">Built For Your Industry</h3>
        <p>Our strategies and campaigns are tailor-made for the construction sector, ensuring that you get results that matter.</p>
      </div>
      <div className="col-md-4 text-center mb-4">
        <FontAwesomeIcon icon={faChartLine} size="2x" className="text-primary mb-3" />
        <h3 className="h5 text-primary">Proven Results</h3>
        <p>Specialization means efficiency. By focusing solely on construction contracts, we guarantee outstanding results and a better ROI.</p>
      </div>
    </div>
  </div>
</section>

<div className="container pricing-section">
  <h2 className="text-center mb-5">Our Pricing Plans</h2>
  <div className="row">
    <div className="col-md-4 p-3">
      <div className="pricing-plan">
        <h3 className="pricing-title">Basic</h3>
        <p className="pricing-price">$500</p>
        <p>Ad Spend up to $1250</p>
        <ul className="pricing-features">
          <li>Lead Generation</li>
          <li>Performance Tracking</li>
          <li>Email Support</li>
        </ul>
      </div>
    </div>
    <div className="col-md-4 p-3">
      <div className="pricing-plan">
        <h3 className="pricing-title">Standard</h3>
        <p className="pricing-price">$999</p>
        <p>Ad Spend up to $3,000</p>
        <ul className="pricing-features">
          <li>All Basic Features</li>
          <li>Advanced Analytics</li>
          <li>24/7 Support</li>
        </ul>
      </div>
    </div>
    <div className="col-md-4 p-3">
      <div className="pricing-plan">
        <h3 className="pricing-title">Premium</h3>
        <p className="pricing-price">$1,499</p>
        <p>Ad Spend over $4,000</p>
        <ul className="pricing-features">
          <li>All Standard Features</li>
          <li>Dedicated Manager</li>
          <li>Custom Strategies</li>
        </ul>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default Home;
