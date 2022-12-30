import React, { useState, useEffect } from "react";
import trains from "../../train_results.json";
import CustomerFormModal from './CustomerForm.jsx';

const SearchingForm = () => {
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [departure, setDeparture] = useState("");
  const [trips, setTrips] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("SIUUUUU", new Date());
    console.log(date);

    // Filters to get an array of the next 3 available trips based on the customer search
    const filterDeparture = trains.filter((train) => train.origin === departure);
    const filterDate = filterDeparture.filter((train) => new Date(train.date_time_depart) >= new Date(date).getTime()).slice(0, 3);
    setTrips(filterDate);
  };

  return (
    // Here the customer will select preferences to search for a train
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 rounded-3 bg-dark text-light">
      <form className="ms-3 pb-3 mt-3 pt-3" onSubmit={handleSubmit}>
        <h2>Ready for a new Adventure?</h2>
        <label>
        <h5>Where is your journey starting?</h5>
          <select className="" defaultValue={"Select a departure"} onChange={(event) => setDeparture(event.target.value)}>
            <option disabled>Select a departure</option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
          </select>
        </label>
        <br />
        <label>
          <h5>When would you like to travel?</h5>
          <input type="datetime-local" value={date} min={new Date()} onChange={(event) => setDate(event.target.value)}/>
        </label>
        <br />
          <h5>How many people is travelling?</h5>
          <input type="number" value={passengers} min={1} onChange={(event) => setPassengers(event.target.value)} />
        <br />
        <button type="submit" className="btn btn-success mb-3 mt-3">
          Search my trip
        </button>
      </form>
      </div>

      <div className="col-6 bg-dark">
      Aqui va una imagen de una polla
      </div>
      </div>


      <div className="col-6 d-flex">
        {trips.map((train, i) => (
          <div key={i} className="bg-dark m-3 col-3 text-light rounded-3 ms-3 pb-3 mt-3 pt-3">
            <div>Date of depart: {train.date}</div>
            <div>Depart time: {train.time_depart}</div>
            <div>Arrival time: {train.time_arrival}</div>
            <div>Destination: {train.destination}</div>
            <div>Available seats: {train.available_seats >= passengers ? train.available_seats : `"Sorry, there are ${train.available_seats} free place/s. Please try with less travellers or in a different date"`}</div>
            <CustomerFormModal />
          </div>
        )
      )}
      </div>

    </div>
  );
};

export default SearchingForm;
{/* Once clicked on the search button will appear cards with the next 3 trains that fits with the origin, time_depart and date_time_depart */}
{/* Once clicked on Book now will appear a modal where we will ask for Name, Surname and email in order to add the feature of sending a confirmation number*/}