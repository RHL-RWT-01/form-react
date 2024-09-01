import React from "react";
import "./Form.css";

function Form() {
  return (
    <div>
      <div class="container">
        <h2>Sign Up</h2>
        <form id="signupForm">
          <div class="item">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter Name" />
          </div>

          <div class="item">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required placeholder="Enetr Email"/>
          </div>

          <div class="item">
            <label for="mobile">Mobile Number</label>
            <input type="text" id="mobile" name="mobile" required placeholder="Enter Mobile Number"/>
          </div>

          <div class="item">
            <label for="password">Password</label>
            <input type="text" id="password" name="password" required placeholder="Enter Password" />
          </div>
          <button type="submit" id="submit-form">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
