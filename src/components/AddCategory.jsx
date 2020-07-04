import React, { useState } from "react";
import PropTypes from "prop-types";
import Search from "antd/lib/input/Search";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (value) => {
    setinputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" value={inputValue} onChange={handleInputChange} /> */}
      <Search
        placeholder="Buscar..."
        onSearch={handleInputChange}
        enterButton
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
