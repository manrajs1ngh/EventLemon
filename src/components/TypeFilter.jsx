import React from "react";

const TypeFilter = ({ vendorTypes, onTypeChange, value }) => {
  return (
    <select
      className="type-filter"
      onChange={(e) => onTypeChange(e.target.value)}
      value={value}
    >
      <option value="">All Types</option>
      {vendorTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default TypeFilter;
