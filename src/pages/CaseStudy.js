import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CaseStudy.css'; // Make sure your CSS file has appropriate styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faLightbulb, faChartLine, faSmileBeam, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CaseStudy = () => {

  const navigate = useNavigate();

  const goToTestimonial = () => {
    navigate('/testimonial');
  }

  return (
    <div className="case-study-container">


      <section className="case-study-section bg-light p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faLightbulb} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Introduction</h2>
        </div>
        <p>In a quaint neighborhood of Chula Vista, a small family-owned stucco business was grappling with uncertainty. Scarce job opportunities and relentless competition had them clinging to any work they could get — even if it meant being the lowest bidder. Their story, however, was about to change.</p>
      </section>
               <div className="testimonial">
                <button type="button" className="btn btn-primary w-100" onClick={goToTestimonial}>Watch The Testimonial</button>
              </div>

      <section className="case-study-section p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faTrophy} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Challenge</h2>
        </div>
        <p>Their main challenge was visibility. Phone calls and bids were rare, and they found themselves in a constant battle with competitors, often having to travel long distances for work. They were stuck in a cycle of underbidding just to keep the lights on.</p>
      </section>
              <div className="testimonial">
                <button type="button" className="btn btn-primary w-100" onClick={goToTestimonial}>Watch The Testimonial</button>
              </div>
      <section className="case-study-section bg-light p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faChartLine} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Solution</h2>
        </div>
        <p>We crafted a comprehensive digital marketing strategy, tailored to increase their online presence and generate consistent leads. Targeted advertising campaigns and optimized visibility ensured that their phone began to ring off the hook with potential clients.</p>
      </section>
               <div className="testimonial">
                <button type="button" className="btn btn-primary w-100" onClick={goToTestimonial}>Watch The Testimonial</button>
              </div>
      <section className="case-study-section p-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faSmileBeam} size="3x" className="text-primary" />
          <h2 className="h3 mt-3 text-primary">Results</h2>
        </div>
        <p>On an average monthly ad spend of $2,500, the results were nothing short of spectacular. The influx of leads allowed them to be selective with their projects, eliminating the need to be the lowest bidder and no longer requiring them to take jobs out of their preferred area. They started netting an impressive $20,000 in jobs every month — an 8x return on their investment.</p>
      </section>
               <div className="testimonial">
                <button type="button" className="btn btn-primary w-100" onClick={goToTestimonial}>Watch The Testimonial</button>
              </div>
      <section className="case-study-section bg-light p-4">
        <div className="text-center mb-4">
          <h2 className="h3 mt-3 text-primary">Conclusion</h2>
        </div>
        <p>Today, the business stands transformed — from uncertainty to abundance, from compromise to choice. Their journey with us has not just been about getting more leads, but about creating a sustainable, thriving local business ready for the future.</p>
      </section>
                     <div className="testimonial">
                <button type="button" className="btn btn-primary w-100" onClick={goToTestimonial}>Watch The Testimonial</button>
              </div>
    </div>
  );
}

export default CaseStudy;
