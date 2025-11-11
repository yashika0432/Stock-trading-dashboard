import React, { PureComponent } from "react";
function Hero() {
  return (
    <section className="container-fluid mb-5" id="supportHero">
      <div className=" p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row  mx-5">
        <div className="col-6 px-5 py-5">
          <h2 className="fs-4 mb-2">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            placeholder="Eg. How do I activate F&O"
            className="mb-2"
          ></input>
          <br></br>
          <a href="">Track account opening</a> &nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;
          <a href="">Kite user manual</a>&nbsp;&nbsp;
        </div>
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current takeovers and delisting -January 2024</a>
            </li>
            <li>
              <a href="">Latest intraday leverages - MIS and CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
