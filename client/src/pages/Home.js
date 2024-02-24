import React, { useEffect, useState } from "react";
import { Card, Skeleton } from "antd";
import { Button, Flex } from "antd";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { message, Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import Loader from "../components/Loader";
import CategorySelection from "../components/Layout/CategorySelection";
import CarouselHome from "../components/Layout/CarouselHome";
import { ServerAPI } from "..";
import FilterByPrice from "../components/Layout/FilterByPrice";
import FilterByCategory from "../components/Layout/FilterByCategory";

const { Meta } = Card;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isData, setIsData] = useState(true);
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${ServerAPI}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${ServerAPI}/api/v1/product/product-list/${page}`
      );
      if (data) {
        setTimeout(() => {
          setIsData(false);
        }, 1500);
      }
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getAllProductsByCat = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${ServerAPI}/api/v1/product/product-by-category/?id=${id}`
      );

      if (data) {
        setTimeout(() => {
          setIsData(false);
        }, 1500);
      }
      setLoading(false);

      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${ServerAPI}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${ServerAPI}/api/v1/product/product-list/${page}`
      );
      if (data) {
        setTimeout(() => {
          setIsData(false);
        }, 1500);
      }

      setLoading(false);

      setProducts([...products, ...data.products]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // filtered products
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${ServerAPI}/api/v1/product/product-filters`,
        {
          checked,
          radio,
        }
      );
      // console.log(checked, radio);
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const filters = async (radios) => {
    try {
      const { data } = await axios.post(
        `${ServerAPI}/api/v1/product/product-filters`,
        {
          checked,
          radio: radios,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  // --------------------------------------------------------------------------

  return (
    <Layout title={"Best Offers - Ecommerce"}>
      <div className="row m-2">
        <div className="col-md-2">
          {/* category filter */}
          <div className="text-center">
            <h4 className="ms-4">Filter by category</h4>
            <div
              className="d-flex ms-4 m-4"
              style={{ justifyContent: "space-evenly" }}
            >
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
          </div>
        </div>

        {/* price filter */}
        <h4 className="ms-4 mt-4">Filter by price</h4>
        <div className="d-flex flex-column ms-4">
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {Prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
        </div>
        <div className="d-flex flex-column mt-4 ms-4">
          <button
            className="btn btn-danger"
            onClick={() => window.location.reload()}
          >
            Reset Filters
          </button>
        </div>

        <CarouselHome />

        <CategorySelection
          categories={categories}
          getAllProductsByCat={getAllProductsByCat}
        />

        <div className="col-md-9 m-2 w-100">
          <h1 className="text-center">All Products</h1>

          <div
            className="d-flex"
            style={{
              justifyContent: "space-around",
              flexDirection: "flex",
              display: "flex",
            }}
          >
            <FilterByPrice filters={filters} />
            <FilterByCategory filters={filters} />
            {/* <div className="d-flex flex-column mt-4 ms-4"> */}
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              Reset Filters
            </button>
            {/* </div> */}
          </div>

          <div
            className="d-flex flex-wrap"
            style={{ justifyContent: "space-between" }}
          >
            {products?.map((p, index) => (
              <Card
                key={index}
                loading={isData}
                hoverable
                style={{
                  width: 300,
                  margin: "20px",
                }}
                // cover={<img alt="example" src={p.photo} />}
                cover={
                  isData ? (
                    <Skeleton.Image style={{ height: 200, width: 300 }} />
                  ) : (
                    <img alt="example" src={p.photo} />
                  )
                }
              >
                <Meta
                  className="p-1"
                  title={p.name}
                  description={p.description.substring(0, 30)}
                />
                <div className="p-2 d-flex">
                  Rs. <Meta title={p.price} description={""} />
                </div>

                <Flex
                  wrap="wrap"
                  gap="small"
                  className="site-button-ghost-wrapper"
                >
                  <div className="p-1">
                    <Button
                      type="primary"
                      ghost
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </Button>
                  </div>
                  <div className="p-1">
                    <Button
                      type="primary"
                      danger
                      ghost
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        message.success("Item added to cart");
                      }}
                    >
                      Add to cart
                    </Button>
                  </div>
                </Flex>
              </Card>
            ))}
          </div>

          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? <Loader /> : <Skeleton active />}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
