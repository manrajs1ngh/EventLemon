import React from "react";
import FeaturedVendorItem from "../components/FeaturedVendorItem";
import ProcessStep from "../components/ProcessStep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faKitchenSet,
  faPaintBrush,
  faShieldHalved,
  faCamera,
  faMagnifyingGlass,
  faCheckSquare,
  faClipboardList,
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
                Discover the perfect venue, decorators, entertainers and more
                for your special occasion
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
              description="Find the perfect venue for your event, from intimate spaces to grand halls."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faPaintBrush} />}
              name="Decorators"
              description="Transform your venue into a work of art with our talented decorators."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faKitchenSet} />}
              name="Catering"
              description="Treat your guests to a delicious feast with our expert caterers."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faCamera} />}
              name="Photographers"
              description="Capture every moment of your special day with our skilled photographers."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faShieldHalved} />}
              name="Entertainment"
              description="Keep your guests entertained with our dynamic performers."
            />
            <FeaturedVendorItem
              emoji={<FontAwesomeIcon icon={faShieldHalved} />}
              name="Security"
              description="Ensure the safety of your guests with our professional security guards."
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
              perfect match in venues, photographers, DJs, and more. We're more
              than just a service; we're a collection of event enthusiasts, tech
              innovators, and customer care experts, all dedicated to making
              your special occasions both memorable and effortless.
              <br />
              <br />
              At Event Lemon, our mission is simple yet profound: to streamline
              the event planning process without losing the touch of uniqueness
              and personalization. Every vendor in our network is meticulously
              selected for their creativity, reliability, and commitment to
              excellence. We believe in not just meeting but exceeding
              expectations, ensuring that every event is as unique and special
              as our clients. Let us be a part of your journey in creating
              experiences that last a lifetime.
            </p>
          </div>
        </div>
      </section>
      <GetListedForm />
    </>
  );
}

export default Landing;
