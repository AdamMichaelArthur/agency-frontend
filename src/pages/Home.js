import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faCheck, faChartLine, faDollarSign } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library for global use
library.add(faCog, faCheck, faChartLine, faDollarSign);

const Home = () => {
  return (
    <div>



      <div className="container-fluid p-0 ">
        <div className="frame-1 d-flex" style={{ backgroundImage: `url(/images/bg-circles.svg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 class="fs-h1"><b>We Run Google Ads That Actually Convert</b><br /></h1><br />
          <p class="home-hero-paragraph paid-ads new">We get building contractors more leads, more phone calls and more quote requests.</p>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col px-0">
            <div className="frame frame-2 d-flex">
              <div>
                <h2 className="fs-h2">Google Advertising should be easy</h2>
                <p className="white-text">Since we only work with contractors, we've got ads and campaigns ready to go that are proven to work in geographies all across the USA.</p>
                <button type="button" className="btn btn-primary w-100">Watch A Testimonial</button>
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
    </div>
  );
}

export default Home;
