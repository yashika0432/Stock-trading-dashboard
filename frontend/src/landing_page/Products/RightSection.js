import React, { PureComponent } from "react";
function Rightsection({ imageURL, productName, productDesc, learnMore }) {
  return (
    <div className="container" style={{ marginTop: "140px" }}>
      <div className="row ">
        <div className="col-4 " style={{ marginTop: "200px" }}>
          <h4 style={{ color: "#45404c" }}>{productName}</h4>
          <p style={{ fontSize: "17px", lineHeight: "30px" }} className="mt-4">
            {productDesc}
          </p>
          <div className="mb-4">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7">
          <img src={imageURL} style={{ width: "95%" }} />
        </div>
      </div>
    </div>
  );
}

export default Rightsection;
