import React from "react";
import { Link } from "react-router-dom";

function VendorCard({ vendor }) {
  return (
    <div className="vendorCard">
      <figure className="vendor-img__wrapper">
        <img src={vendor.url} alt="" className="vendor-image" />
      </figure>
      <div className="vendor-text">
        <h2 className="vendor-name">{vendor.name}</h2>
        <h2 className="vendor-location">{vendor.location}</h2>
        <div className="fade">
          <p className="vendor-description">{vendor.description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            aperiam doloribus facilis fugit voluptatum porro optio iusto earum
            accusamus incidunt nemo voluptas alias ratione error maiores
            distinctio modi ut laborum facere aut adipisci dolor impedit,
            reiciendis blanditiis. A, optio ex tempora quasi suscipit dolore
            amet aperiam possimus consequuntur doloremque magnam!
          </p>
        </div>
      </div>
      <Link to={`/vendors/${vendor.id}`} className="vendor-link">
        <button className="button view-more">View More</button>
      </Link>
    </div>
  );
}

export default VendorCard;
