import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";

const FilterByPrice = ({ filters, categories }) => {
  const [radio, setRadio] = useState(null);

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {radio ? radio.name : "Filter by category"}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {categories?.map((c) => (
          <Checkbox
            key={c._id}
            onClick={() => {
              filters(c.array);
            }}
            // onChange={(e) => handleFilter(e.target.checked, c._id)}
          >
            {c.name}
          </Checkbox>
        ))}
      </ul>
    </div>
  );
};

export default FilterByPrice;
