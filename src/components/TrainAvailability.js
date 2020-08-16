import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function TrianAvailability() {
  return (
    <div>
      <div className="seat-header">
        <div className="seat-text">
          <h2>Seat availability</h2>
        </div>
      </div>
      <div className="container">
        <div className="seat-selection">
          <div className="row">
            <div className="col-sm-9">
              <div className="pick-seat ">
                <div className="seat-container flex-container">
                  <div className="flex-container-seat">1</div>
                  <div className="flex-container-seat">2</div>
                  <div className="flex-container-seat">3</div>
                  <div className="flex-container-seat">4</div>
                  <div className="flex-container-seat">5</div>
                  <div className="flex-container-seat">6</div>
                  <div className="flex-container-seat">7</div>
                  <div className="flex-container-seat">8</div>
                  <div className="flex-container-seat">9</div>
                  <div className="flex-container-seat">10</div>
                </div>

                <div style={{ marginTop: "60px" }}></div>

                <div className="seat-container flex-container">
                  <div className="flex-container-seat">11</div>
                  <div className="flex-container-seat">12</div>
                  <div className="flex-container-seat">12</div>
                  <div className="flex-container-seat">14</div>
                  <div className="flex-container-seat">15</div>
                  <div className="flex-container-seat">16</div>
                  <div className="flex-container-seat">17</div>
                  <div className="flex-container-seat">18</div>
                  <div className="flex-container-seat">19</div>
                  <div className="flex-container-seat">20</div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="row">
                <div className="flex-container2">
                  <div>1</div>
                </div>
                <div className="flex-container3">
                  <div>Available Seat</div>
                </div>{" "}
              </div>

              <div className="row">
                <div className=" selected-seat">
                  <div>1</div>
                </div>
                <div className="flex-container3">
                  <div>Selected Seat</div>
                </div>{" "}
              </div>
              <div className="row">
                <div className="booked-seat">
                  <div>1</div>
                </div>
                <div className="flex-container3">
                  <div>Booked Seat</div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4"></div>
          <Link to="/passenger/details" className="col-sm-4 book-now">
            BOOK NOW
          </Link>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}

export default TrianAvailability;
