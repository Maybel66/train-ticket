import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function CheckIn() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-body-left ">
          <div>
            <div className="login-form">
              <form>
                <h2 className="Body-Title">Book your Train</h2>
                <div className="form-group">
                  <div className="row field-text">
                    <div className="col-sm-4">
                      <input
                        type="radio"
                        id="trip1"
                        name="triptype"
                        value="oneway"
                      />
                      <label for="age1">&nbsp; One way</label>
                      <br />
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <input
                        type="radio"
                        id="trip2"
                        name="triptype"
                        value="Round Trip"
                      />
                      <label for="age1">&nbsp; Round Trip</label>
                      <br />
                    </div>
                    <div className="col-sm-4">
                      <input
                        type="radio"
                        id="trip3"
                        name="triptype"
                        value="Multiple Trip"
                      />
                      <label for="age1"> &nbsp; Multiple </label>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <input
                      type="tripFrom"
                      className="form-control"
                      id="pwd"
                      name="tripFrom"
                      placeholder="Trip from.."
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <input
                    type="tripTo"
                    className="form-control"
                    name="tripTo"
                    placeholder="Trip to.."
                    required
                  />
                </div>
                <div className="row field-text">
                  <div className="col-sm-6">
                    <label for="checkin">Check-in:</label>
                    <input type="date" id="checkin" name="checkin" />
                  </div>
                  <div className="col-sm-6">
                    <label for="checkin">Check-Out:</label>
                    <input type="date" id="checkin" name="checkin" />
                  </div>
                </div>
                <div className="row field-text">
                  <div className="col-sm-4">
                    <label for="cars">Travel Class:</label>
                    <br></br>
                    <select name="cars" id="cars">
                      <option value="volvo">First class</option>
                      <option value="saab">Premium</option>
                      <option value="opel">Economy</option>
                    </select>
                    <br></br>
                  </div>
                  <div className="col-sm-4">
                    <label for="cars">adult </label>
                    <br></br>
                    <select name="cars" id="cars">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                    <br></br>
                  </div>

                  <div className="col-sm-4">
                    <label for="children"> Children:</label> <br></br>
                    <select name="cars" id="cars">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                    <br></br>
                  </div>
                </div>
                <div className="seat-available">
                  <span type="submit" className="login-button">
                    <Link to="/trainselection">Check seat availability</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default CheckIn;
