import React from "react";
import "./Header.css";

const Header = ({ title, caption }) => {
  return (
    <div className="container  fw-normal">
      <h2 className="fw-semibold">{title}</h2>
      <h2 className="fw-medium">{caption}</h2>

      <div className="p-5 bg-dark row fromDesign text-light">
        <div className="col-sm-6">
          <h3>Send us a massage</h3>
          <br />
          <div className="row">
            <div className="col-sm-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Company name
                </label>
                <input
                  type="email"
                  class="form-control rounded-0 bg-dark text-light"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div class="mb-3">
                <label for="address" class="form-label">
                  Company Email
                </label>
                <input
                  type="email"
                  class="form-control rounded-0 bg-dark text-light"
                  id="address"
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>
          <div class=" mb-3 ">
            <label for="floatingTextarea">Comments</label>
            <textarea
              class="form-control rounded-0 bg-dark text-light "
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
          </div>
          <button
            class="btn btn-secondary rounded-0 text-light w-100"
            type="button"
          >
            Send Email
          </button>
        </div>
        <div className="col-sm-6 ps-5 ">
        <h3>Contact us</h3>
        <span className="text-secondary">Address</span>
        <p>The Office Group</p>
        <p className="text-secondary">50/2 kolkata <br/> West Bengla  <br/> india</p>
        <span className="text-secondary ">Email</span>
       <p>info@fillstudio.com</p>
        <span className="text-secondary ">Call Us</span>
       <p>7896541235</p>
        
       
        
        </div>
      </div>
    </div>
  );
};

export default Header;
