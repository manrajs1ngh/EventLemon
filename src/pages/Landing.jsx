import React from "react";
import FeaturedVendorItem from "../components/FeaturedVendorItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faKitchenSet,
  faPaintBrush,
  faShieldHalved,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import AboutUs from "../assets/about-us-section.jpg";
import GetListedForm from "../components/GetListedForm";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header__left">
            <div className="header__left--content">
              <h1>Bring your dream events to life</h1>
              <p>
                Say goodbye to the hassle of hunting down vendors over a dozen
                different platforms; say hello to a stress-free, consolidated
                planning journey with Event Lemon. Find every vendor you could
                need to bring your dream event to life.
              </p>
            </div>
            <div className="header__cta">
              <Link to="/vendors">
                <button className="header__ctaButton button">
                  Find a Vendor
                </button>
              </Link>
              <Link to="/get-listed">
                <button className="header__ctaButton button">Get Listed</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section id="featured-vendors">
        <div className="container">
          <h1 className="section__title">Meet our featured vendors</h1>
          <p className="para">
            Browse through our curated selection of top-rated event specialists.
            From enchanting venues to dynamic DJs, skilled photographers to
            creative caterers, discover the perfect partner for your next big
            event. Every vendor we list is known for their professionalism,
            creativity, and dedication to making your occasion truly memorable.
          </p>
          <div className="featured_vendors__container">
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faBuilding} />}
              name="Venue"
              description="From wedding ceremonies to corporate conferences, no matter what event you’re planning, you can find the perfect venue for your event, from intimate spaces to grand halls."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faPaintBrush} />}
              name="Decorater"
              description="Your venue is the canvas of your event. Transform your venue into a work of art with our talented decorators."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faKitchenSet} />}
              name="Catering"
              description="Treat your guests to a delicious feast with our expert caterers."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faCamera} />}
              name="Photography"
              description="Capture every moment of your special day with our skilled photographers and videographers."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faShieldHalved} />}
              name="Entertainment"
              description="Our captivating performers ensure your guests are immersed in unforgettable entertainment."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faShieldHalved} />}
              name="Security"
              description="Ensure the safety of your guests with our professional security services."
            />
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="container">
          <figure className="about-us__left">
            <img src={AboutUs} alt="" />
          </figure>
          <div className="about-us__right">
            <h1 className="section__title">About Us</h1>
            <p className="para">
              Welcome to Event Lemon, the cornerstone for exceptional event
              planning. Born from a passion for bringing people together, we've
              established a platform where every significant moment finds its
              perfect match in vendors to bring your vision to life. 
              <br />
              <br />
              We're more
              than just a service; we're a collection of event enthusiasts, tech
              innovators, and customer care experts, all dedicated to making
              your special occasions both memorable and effortless. 
              <br />
              <br />
              At Event
              Lemon, our mission is simple yet profound: to streamline the event
              planning process without losing the touch of uniqueness and
              personalisation. Every vendor in our network is meticulously
              selected and renowned for their creativity, reliability, and
              commitment to excellence. 
              <br />
              <br />
              We believe in not just meeting but
              exceeding expectations, ensuring that every event is as unique and
              special as our clients. Let us be a part of your journey in
              creating experiences that last a lifetime.
            </p>
          </div>
        </div>
      </section>
      <GetListedForm />
    </>
  );
}

export default Landing;
