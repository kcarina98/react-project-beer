import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./AllBeers.css";
import Navbar from "../Components/Navbar";

const AllBeers = () => {
  const [beer, setBeer] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeer(data))
      .catch((err) => console.log("Fetch funktioniert nicht"));
  }, []);

  console.log(beer);

  return (
    <>
      <article>
        {beer?.map((item, index) => (
          <div key={index} className="overview">
            <img src={item.image_url} alt="Bild vom Bier" />
            <div>
              <h2>{item.name}</h2>
              <h3>{item.tagline}</h3>
              <p>Created by: {item.name}</p>
              <Link to={`/allbeers/${item._id}`}>Details</Link>
            </div>
          </div>
        ))}
      </article>
      <Navbar />
    </>
  );
};

export default AllBeers;
