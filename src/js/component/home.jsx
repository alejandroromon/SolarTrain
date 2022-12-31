import React, { useState, useEffect } from "react";
import trains from "../../train_results.json";
import CustomerFormModal from './CustomerForm.jsx';
import Footer from "./footer.jsx";

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
    <div>
      <h1 className="d-flex justify-content-center text-dark m-2 mb-1">Travel as usual, take care of the planet as never before. </h1>
      <h3 className="d-flex justify-content-center text-dark mt-1 mb-4">Breakfast in Paris. Brunch in London.</h3>
    <div className="container-fluid">
      <div className="row">
        <div className="w-50 d-flex justify-content-center">
        <div className="col-5 justify-content-center rounded-3 bg-dark mt-5 mb-4 shadow-lg">
      <form className="ms-3 pb-3 mt-3 pt-3" onSubmit={handleSubmit}>
        <h2>Ready for a new Adventure?</h2>
        <label>
        <h5 className="pt-2">Where is your journey starting?</h5>
          <select className="bg-dark" defaultValue={"Select a departure"} onChange={(event) => setDeparture(event.target.value)}>
            <option disabled>Select a departure</option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
          </select>
        </label>
        <br />
        <label>
          <h5 className="pt-2">When would you like to travel?</h5>
          <input type="datetime-local" value={date} min={new Date()} onChange={(event) => setDate(event.target.value)}/>
        </label>
        <br />
          <h5 className="pt-2">How many people is travelling?</h5>
          <input type="number" value={passengers} min={1} onChange={(event) => setPassengers(event.target.value)} />
        <br />
        <button type="submit" className="btn btn-success mb-3 mt-3">
          Search my trip
        </button>
      </form>
      </div>
      </div> 

      <div className="col-6">
        <img src="img/train.png"></img>
      Aqui va una imagen de un tren
      Object fit para que no se deforme la imagen
      </div>
      </div>

{/* Once clicked on the search button will appear cards with the next 3 trains that fits with the origin, time_depart and date_time_depart */}
      <div className="col-6 d-flex justify-content-center mt-3">
        {trips.map((train, i) => (
          <div key={i} className="bg-dark m-4 col-3 rounded-3 ms-3 pb-2 mt-3 pt-3 ps-4 shadow-lg">
            <div>Date of depart: {train.date}</div>
            <div>Depart time: {train.time_depart}</div>
            <div>Arrival time: {train.time_arrival}</div>
            <div>Destination: {train.destination}</div>
            <div>Available seats: {train.available_seats} <br></br><onpopstate className="bg-dark m-3 col-3 rounded-3 ms-2 pb-2 mt-2 pt-2 ps-2 ">{ train.available_seats >= passengers ? "" : "Please try with less travellers or in a different date"}</onpopstate></div>
            <CustomerFormModal />
          </div>
        )
      )}
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default SearchingForm;

{/* Once clicked on Book now will appear a modal where we will ask for Name, Surname and email in order to add the feature of sending a confirmation number*/}
// `"Sorry, there are ${train.available_seats} free place/s. Please try with less travellers or in a different date"`