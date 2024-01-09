import React from "react";
import { useParams } from "react-router-dom";
import { vendors } from "../data";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faInstagram,
//     faSquareFacebook,
// } from "@fortawesome/free-solid-svg-icons";

function VendorDetail() {
  const { id } = useParams();

  // Find the vendor with the matching ID
  const vendor = vendors.find((v) => v.id.toString() === id);

  return (
    <div>
      {vendor ? (
        <div>
          <div className="details__container">
            <figure className="details-img__wrapper">
              <img src={vendor.url} alt="" className="details-image" />
            </figure>
            <h2 className="section__title">{vendor.name}</h2>
            <h3 className="details-location">{vendor.location}</h3>
            <a href={vendor.website} className="website">{vendor.website}</a>
            <a href={vendor.social.instagram}>Instagram</a>
            <a href={vendor.social.facebook}>Facebook</a>
            <p className="para">{vendor.description}</p>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, neque mollitia qui incidunt atque id quam soluta nisi,
              ab eligendi maxime nobis obcaecati cumque impedit reprehenderit
              provident quo accusantium totam omnis. Iure quas harum praesentium
              atque quaerat? Aspernatur animi aliquid quidem. Molestiae,
              laudantium. Dolorem, ipsum dignissimos? Debitis, libero tenetur.
              Sequi sed pariatur laborum? Maxime voluptate corrupti eum, odit
              velit accusamus, sunt sed rerum officia temporibus totam maiores?
              Dolorem non ad cupiditate esse veniam ratione perspiciatis
              repudiandae ut assumenda adipisci! Voluptas omnis, deserunt error
              voluptatum perspiciatis, laboriosam perferendis neque provident
              nemo molestiae facilis consequuntur quos at laudantium ducimus.
              Eos, ea dolorem!
            </p>
          </div>
        </div>
      ) : (
        <p>Vendor not found.</p>
      )}
    </div>
  );
}

export default VendorDetail;
