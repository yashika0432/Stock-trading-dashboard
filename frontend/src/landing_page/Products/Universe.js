import React, { PureComponent } from "react";
function Universe() {
  return (
    <div className="container mb-5" style={{ color: "#45404c" }}>
      <div className=" text-center p-5 m-5">
        <h3>Zerodha Universe</h3>

        <p className="mt-4 ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mt-5 " style={{ alignItems: "baseline" }}>
          <div className="col-4 p-3">
            <img
              src="media\images\zerodhaFundhouse.png"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-4" style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-4" style={{ fontSize: "12px" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/images/goldenpiLogo.png" style={{ width: "60%" }} />
            <p className="text-muted mt-4" style={{ fontSize: "12px" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row mt-5 " style={{ alignItems: "baseline" }}>
          <div className="col-4 p-3">
            <img src="media\images\streakLogo.png" style={{ width: "60%" }} />
            <p className="text-muted mt-4" style={{ fontSize: "12px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-4" style={{ fontSize: "12px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/images/dittoLogo.png" style={{ width: "60%" }} />
            <p className="text-muted mt-4" style={{ fontSize: "12px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp For free
        </button>
      </div>
    </div>
  );
}

export default Universe;
