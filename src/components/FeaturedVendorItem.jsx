import React from "react";

function FeaturedVendorItem(props) {
  return (
    <>
      <div className="featured_vendors__item">
        <p className="featured-icon">{props.emoji}</p>
        <h3 className="featured-vendors__title">{props.name}</h3>
        <p className="featured-vendors__para">{props.description}</p>
      </div>
    </>
  );
}

export default FeaturedVendorItem;
