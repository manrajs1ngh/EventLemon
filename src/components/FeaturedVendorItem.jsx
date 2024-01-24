import React from "react";
import { useNavigate } from "react-router-dom";

function FeaturedVendorItem(props) {
  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate(`/vendors?type=${props.name}`);
  };

  return (
    <>
      <div className="featured_vendors__item" onClick={navigateToSearch}>
        <p className="featured-icon">{props.emoji}</p>
        <h3 className="featured-vendors__title">{props.name}</h3>
        <p className="featured-vendors__para">{props.description}</p>
      </div>
    </>
  );
}

export default FeaturedVendorItem;
