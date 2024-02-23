import React, { useState } from "react";
import { Checkbox } from "antd";

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  return (
    <div className="d-flex flex-column ms-4 mb-4">
      {categories?.map((c) => (
        <Checkbox
          key={c._id}
          onChange={(e) => handleFilter(e.target.checked, c._id)}
        >
          {c.name}
        </Checkbox>
      ))}
    </div>
  );
};

export default CategoryComponent;
