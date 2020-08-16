import React from "react";
import "../App.css";

function PassengerDetails() {
  return (
    <div className="main-bg-color">
      <div className="seat-header">
        <div className="seat-text">
          <h2>Payment Details</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <div className="container">
            <div className="passenger-details">
              <h4>Passenger Details</h4>
              <h5>Adult</h5>
              <div className="row">
                <div className="col-sm-6">
                  <label for="checkin">Full Name:</label>
                  <input
                    type="name"
                    id="checkin"
                    name="checkin"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <div className="form-group ">
                    <label>Gender*</label>
                    <select name="gender" id="gender" className="form-control">
                      <option value=""> Select</option>
                      <option value="0">Male</option>
                      <option value="1"> Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <h4>Contact details and Payment method</h4>
              <h5>Contact details</h5>
              <div className="row">
                <div className="col-sm-4">
                  <label for="checkin">Email adress:</label>
                  <input
                    type="name"
                    id="checkin"
                    name="checkin"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-4">
                  <div className="form-group ">
                    <label>Country*</label>
                    <select
                      name="country"
                      id="country"
                      className="form-control"
                    >
                      <option value=""> Select</option>
                      <option value="0">Nigeria</option>
                      <option value="1"> Ghana</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <label for="checkin">Mobile Number:</label>
                  <input
                    type="mobile"
                    id="mobile"
                    name="mobile"
                    className="form-control"
                  />
                </div>
              </div>
              <h4>Select Payment method</h4>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="container">
            <div className="passenger-details">
              <h4>Trip Summary</h4>
              <h5>Lagos => Kaduna</h5>
              <p>August 10, 2020, At 7:00pm</p>
              <div className="row">
                <div className="col-sm-6">1 X adults</div>
                <div className="col-sm-6">#20,000</div>
              </div>
              <div className="row">
                <div className="col-sm-6">Discount</div>
                <div className="col-sm-6">#0.00</div>
              </div>
            </div>
            <div className="container">
              <div className="row seat-header">
                <div className="col-sm-6 seat-text">
                  <h2>Total to pay</h2>
                </div>
                <div className="col-sm-6 seat-text">
                  <h2>#20,000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassengerDetails;
