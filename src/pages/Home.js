import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>

<div class="">
<h1 class="fs-h1">We Run Google Ads That Actually Convert</h1>
    <h1>Get More Leads Than You Ever Thought Possible</h1>
    <h2>Advanced, Profitable strategies</h2>
    <p>We specialize in Google Ads for small subcontractors</p>
</div>



      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="">
            <div className="frame frame-1 d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(/images/mobile-bk.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div>
                 <div >



        
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col px-0">
            <div className="frame frame-2 d-flex align-items-center justify-content-center">
              <div>
                <h1>Frame 2</h1>
                <p>This is the content for the second frame.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col px-0">
            <div className="frame frame-3 d-flex align-items-center justify-content-center">
              <div>
                <h1>Frame 3</h1>
                <p>This is the content for the third frame.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
      
        <div className="col-md-4">
          <div className="card h-100 shadow-sm p-3 rounded home-card">
            <div className="card-body text-center">
              <h2 className="display-3">320<span className="percentage-text red-text">%</span></h2>
              <p className="text-muted">
                <strong>Annual Growth</strong><br />
                Our relentless focus on performance marketing ensures that your business thrives. We turn challenges into opportunities and scale your campaigns to new heights, year over year.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm p-3 rounded home-card">
            <div className="card-body text-center">
              <h2 className="display-3">Certified</h2>
              <p className="text-muted">
                <strong>Google Partner</strong><br />
                As a certified Google Partner, we have a track record of delivering exceptional PPC results. Our expertise and commitment to excellence set us apart in the digital advertising landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm p-3 rounded home-card">
            <div className="card-body text-center">
              <h2 className="display-3">115<span className="percentage-text yellow-text">%</span></h2>
              <p className="text-muted">
                <strong>CTRs Excellence</strong><br />
                We consistently outperform industry standards with click through rates that are 115% above average. Our strategic approach ensures maximum visibility and engagement for your ads.
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
