import React, { useState } from "react";
import { Prices } from "../Prices";
import { ServerAPI } from "../..";

const FilterByPrice = ({ filters }) => {
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
        {radio ? radio.name : "Select Option"}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {Prices?.map((p) => (
          <li key={p._id}>
            <button
              className="dropdown-item"
              onClick={() => {
                filters(p.array);
              }}
            >
              {p.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByPrice;
