import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { ServerAPI } from "../..";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(`${ServerAPI}/api/v1/auth/orders`);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders - Ecommerce"}>
      <div className="container-fluid p-4">
        <div className="col">
          <div className="col-md-3" style={{ width: "100%" }}>
            <UserMenu />
          </div>
          <div className="row" style={{ justifyContent: "space-evenly" }}>
            <div className="col-md-9">
              {orders?.map((o, i) => (
                <div key={i} className="border shadow mb-4">
                  <table className="table">
                    <thead className="p-2">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>

                      </tr>
                    </thead>
                    <tbody className="p-2">
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createdAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                        
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    <div className="row">
                      {o.products?.map((p, j) => (
                        <div key={j} className="col-md-6 mb-3">
                          <div className="card flex-row h-100">
                            <img
                              src={`${ServerAPI}/api/v1/product/product-photo/${p._id}`}
                              className="card-img-top"
                              alt={p.name}
                              style={{
                                objectFit: "cover",
                                width: "200px",
                                height: "200px",
                              }}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{p.name}</h5>
                              <p className="card-text">
                                {p.description.substring(0, 30)}
                              </p>
                              <p className="card-text">Price: ₹ {p.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
