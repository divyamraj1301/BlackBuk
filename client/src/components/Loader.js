// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Loader = ({ path = "login" }) => {
//   const [count, setCount] = useState(2);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prev) => --prev);
//     }, 1000);
//     count === 0 &&
//       navigate(`/${path}`, {
//         state: location.pathname,
//       });
//     return () => clearInterval(interval);
//   }, [count, navigate, location, path]);

//   return (
//     <div
//       className="d-flex flex-column justify-content-center align-items-center"
//       style={{ height: "100vh" }}
//     >
//       <h1 className="text-center">Redirecting in {count} seconds</h1>
//       <br />
//       <div className="spinner-grow" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>
//     </div>
//   );
// };

// export default Loader;

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Avatar, Card, Skeleton, Switch } from "antd";
const { Meta } = Card;
const Loader = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} /> */}
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={loading}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
      {/* <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card> */}
    </>
  );
};
export default Loader;
