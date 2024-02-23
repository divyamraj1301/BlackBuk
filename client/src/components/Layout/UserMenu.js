// import React, { useState } from "react";

// import { NavLink } from "react-router-dom";

// const UserMenu = () => {
//   return (
//     <>
//       <div className="text-center">
//         <div className="list-group mb-4">
//           <NavLink
//             to="/dashboard/user/profile"
//             className="list-group-item list-group-item-action"
//           >
//             Profile
//           </NavLink>
//           <NavLink
//             to="/dashboard/user/orders"
//             className="list-group-item list-group-item-action"
//           >
//             Orders
//           </NavLink>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserMenu;

import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="container p-4 d-flex justify-content-center">
      <div className="list-group d-flex flex-row align-items-center">
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action m-2"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action m-2"
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
