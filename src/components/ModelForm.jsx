import React from "react";
import BluePhotoContainer from "./BluePhotoContainer";

const ModelForm = () => (
  <main>
    <BluePhotoContainer container="become-a-model" header="model-form">
      <p>INTERFACE AESTHETICS</p>
      <p>BECOME A MODEL PATIENT</p>
      <div className="model-form-container">
        <h3>Fill out the form below and we’ll be in touch shortly</h3>
        <form>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="Phone number" />
            <div>
              <div className="select-container">
                <select>
                  <option selected>
                    What treatment are you interested in?
                  </option>
                  <option key="treatment1">treatment1</option>
                  <option key="treatment2">treatment2</option>
                  <option key="treatment3">treatment3</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit">SEND</button>
        </form>
      </div>
    </BluePhotoContainer>
  </main>
);

export default ModelForm;
