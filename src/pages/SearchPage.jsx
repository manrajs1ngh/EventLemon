import React, { useState } from "react";
import { vendors } from "../data";
import SearchBar from "../components/Searchbar.jsx";
import TypeFilter from "../components/TypeFilter.jsx";
import VendorCard from "../components/VendorCard.jsx";

function SearchPage() {
  const [filteredVendors, setFilteredVendors] = useState(vendors);
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const vendorTypes = [...new Set(vendors.map((vendor) => vendor.type))]; // Extract unique vendor types

  const handleSearch = (location) => {
    setSearchLocation(location);
    filterVendors(location, selectedType);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    filterVendors(searchLocation, type);
  };

  const filterVendors = (location, type) => {
    const filtered = vendors.filter((vendor) => {
      const matchesLocation = location
        ? vendor.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesType = type ? vendor.type === type : true;
      return matchesLocation && matchesType;
    });
    setFilteredVendors(filtered);
  };

  return (
    <div className="container">
      <div className="search__container">
        <div className="search__text">
          <h2 className="section__title">Search for vendors in your area</h2>
          <p className="para">
            Find your ideal event vendors right here! Simply enter your location
            and desired service to discover a world of top-rated professionals,
            from stunning venues to dynamic entertainers. Begin your journey to
            an unforgettable event experience now.
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="search-results">
          <TypeFilter
            vendorTypes={vendorTypes}
            onTypeChange={handleTypeChange}
          />
          <div className="results">
            {filteredVendors.length > 0 ? (
              filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))
            ) : (
              <p className="para error-message">No vendors found in your location.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
