import React, { PureComponent } from "react";
function Rightsection({ imageURL, productName, productDesc, learnMore }) {
  return (
    <div className="container" style={{ marginTop: "140px" }}>
      <div className="row ">
        <div className="col-4 mt-5 pt-3">
          <h4 style={{ color: "#45404c" }}>{productName}</h4>
          <p style={{ fontSize: "17px", lineHeight: "30px" }} className="mt-4">
            {productDesc}
          </p>
          <div className="mb-4">
            <a
              href={learnMore}
              style={{ marginLeft: "60px", textDecoration: "none" }}
            >
              Learn More
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <img src={imageURL} style={{}} />
        </div>
      </div>
    </div>
  );
}

export default Rightsection;
