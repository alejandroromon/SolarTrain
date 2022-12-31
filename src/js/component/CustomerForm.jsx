import React from "react";
import PaymentButton from "./stripe.jsx";

function CustomerForm() {

  
  function handleBookJourney(event) {
    // show the alert message
    alert("Your journey has been booked successfully!");

    // close the modal after 3 seconds
    setTimeout(function () {
      // find the modal element and trigger the "hide" event
      let modal = document.querySelector("#exampleModal");
      let event = new Event("hide");
      modal.dispatchEvent(event);
    }, 3000);
  }

  return (
    <div className="text-dark rounded-3">
      <button
        type="button"
        className="btn btn-success mb-3 mt-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        {" "}
        I want to go!{" "}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Let's make your boarding faster
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="recipient-surname" className="col-form-label">
                    Surname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-surname"
                  />
                </div>
                <div className="mb-3">
                  <label for="recipient-email" className="col-form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-email"
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    I would like travel in business class{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    I would like to have a menu on board
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    I would like to sit in a quiet wagon
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success mb-3 mt-3"
                onClick={handleBookJourney}
              >
                Book journey
              </button>
              {/* <PaymentButton /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
