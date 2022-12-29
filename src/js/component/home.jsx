import React, { useState, useEffect } from "react";
import trains from "../../train_results.json";

const SearchingForm = () => {
  const [date, setDate] = useState(new Date().toISOString());
  const [passengers, setPassengers] = useState(1);
  const [departure, setDeparture] = useState("");
  const [trips, setTrips] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();


    const filterDeparture = trains.filter((train) => train.origin === departure);

    const filterDate = filterDeparture.filter((train) => new Date(train.date_time_depart) >= new Date(date).getTime()).slice(0, 3);
    console.log(filterDate);
    setTrips(filterDate);

  };

  return (
    // Here the customer will select preferences to search for a train
    <div className="bg-dark col-3 rounded-3 text-light mx-3 my-3">
      <form className="ms-3 pb-3" onSubmit={handleSubmit}>
        <h2>Where are we going today?</h2>
        <label>
          Departure:
          <select
            className=""
            defaultValue={"Select a departure"}
            onChange={(event) => setDeparture(event.target.value)}
          >
            <option disabled>Select a departure</option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
          </select>
        </label>
        <br />
        <label>
          When would you like to travel?
          <input
            type="datetime-local"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            min={new Date()}
          />
        </label>
        <br />
        <label>
          How many people is travelling?
          <input
            type="number"
            value={passengers}
            onChange={(event) => setPassengers(event.target.value)}
            min={1}
          />
        </label>
        <br />
        <button type="submit" className="btn btn-success mb-3">
          Search my trip
        </button>
      </form>

      {/* Once clicked on the search button will appear cards with the next 3 trains that fits with the origin, time_depart and date_time_depart*/}

      {trips.map((train, i) =>
        (
          <div key={i}>
            <div>Date of depart: {train.date}</div>
            <div>Depart time: {train.time_depart}</div>
            <div>Arrival time: {train.time_arrival}</div>
            <div>Destination: {train.destination}</div>
            <div>Available seats: {train.available_seats >= passengers ? train.available_seats : window.alert(`"Sorry, there are ${train.available_seats} free places. Please try with less travellers or in a different date"`)}</div>
          </div>
        )
      )}

      {/* Once clicked on Book now will appear a modal where we will ask for Name, Surname and email in order to add the feature of sending a confirmation number*/}
    </div>
  );
};

export default SearchingForm;
