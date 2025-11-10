import React, { PureComponent } from "react";
function Hero() {
  return (
    <div className="container mb-5" style={{ color: "#45404c" }}>
      <div className=" text-center p-5 m-5 ">
        <h3>Charges</h3>
        <h5 style={{ fontWeight: "400" }} className="mt-3 text-muted">
          List of all charges and taxes
        </h5>
      </div>
      <div className="row text-center " style={{ marginTop: "145px" }}>
        <div className="col-4 p-3 ">
          <img
            className="mb-3"
            src="media/images/pricingEquity.svg"
            style={{ width: "70%" }}
          ></img>
          <h3>Free equity delivery</h3>
          <p className="mt-4 fs-6 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            className="mb-3"
            src="media/images/intradayTrades.svg"
            style={{ width: "70%" }}
          ></img>
          <h3>Intraday and F&O trades</h3>
          <p className="mt-4 fs-6 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            className="mb-3 "
            src="media/images/pricingEquity.svg"
            style={{ width: "70%" }}
          ></img>
          <h3>Free direct MF</h3>
          <p className="mt-4 fs-6 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
