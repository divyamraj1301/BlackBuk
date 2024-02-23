import React from "react";
import { Carousel, Button } from "antd";
import Photo from "../../assets/photo-cta.png";
import Png from "../../assets/pngegg.png";
import Photo2 from "../../assets/photo-cta-2.png";

const contentStyle = {
  height: "80vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#364d79",
};

const CarouselHome = () => (
  // <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
  <Carousel
    autoplay
    style={{
      maxWidth: "100vw",
      width: "100%",
    }}
  >
    <section className="my-lg-14 mb-8" style={{ margin: "112px 0 64px" }}>
      <div
        className="container rounded-3 d-flex justify-content-center align-items-center"
        style={{ background: "", borderRadius: "0.5rem" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="d-flex justify-content-center ">
              <div className="position-relative">
                <img
                  src={Photo}
                  alt=""
                  className="img-fluid mt-n13"
                  style={{ maxWidth: "100%" }}
                />
                <div className="ms-n12 position-absolute bottom-0 start-0 mb-6">
                  <img src={Photo} alt="" style={{ maxWidth: "100%" }} />
                </div>

                <div className="me-n4 position-absolute top-0 end-0 d-none d-lg-block">
                  <img src="" alt="" style={{ maxWidth: "100%" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="text-black p-5 p-xl-0">
              <h2 className="h1 text-black" style={{ fontFamily: "cursive" }}>
                Get latest collection for women
              </h2>
              <p className="mb-0" style={{ fontFamily: "monospace" }}>
                At affordable prices, with exclusive deals
              </p>
              <a
                href="#"
                className="btn btn-primary mt-4"
                style={{
                  color: "#007bff",
                  backgroundColor: "#fff",
                  padding: "12px 24px",
                  borderRadius: "0.25rem",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                See Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="my-lg-14 mb-8" style={{ margin: "112px 0 64px" }}>
      <div className="container" style={{ maxWidth: "1140px" }}>
        <div className="row align-items-center g-0">
          <div className="col-xl-6 col-lg-6 col-md-12 order-md-2 text-center pt-6 mb-4">
            <img
              src={Png}
              alt=""
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 order-md-1">
            <div>
              <h1 className="text-black display-4 fw-bold pe-lg-8">
                Join the onset trend of fashion
              </h1>

              <p className="text-black-50 mb-4 lead">
                We believe that every person deserves to feel beautiful and
                stylish.
              </p>

              <a
                href="#"
                className="btn btn-success mt-4"
                style={{
                  color: "green",
                  backgroundColor: "#fff",
                  padding: "12px 24px",
                  borderRadius: "0.25rem",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="my-lg-14 mb-8">
      <div className="container rounded-3" style={{ maxWidth: "1140px" }}>
        <div className="row align-items-center g-0">
          <div className="col-lg-6 col-md-12">
            <div className="d-flex justify-content-center ">
              <div className="position-relative">
                <img src={Photo2} alt="" className="img-fluid mt-n13" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="text-black p-5 p-xl-0">
              <h2 className="h1 text-black">Latest in mens fashion</h2>
              <p className="mb-0">
                Style for men who want to look their best, without breaking the
                bank. Our latest collection of men's fashion
              </p>
              <a
                href="#"
                className="btn btn-dark mt-4"
                style={{
                  color: "black",
                  backgroundColor: "#fff",
                  padding: "12px 24px",
                  borderRadius: "0.25rem",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Carousel>
  // </div>
);

export default CarouselHome;
