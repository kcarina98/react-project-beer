// Bilder importieren
import regal from "../img/Landingpage1.jpg";
import bier from "../img/Landingpage2.png";
import { Link, NavLink } from "react-router-dom";

import "./Landingpage.css";

const Landingpage = () => {
  return (
    <div className="landing-page">
      <section>
        <img src={regal} alt="Bierregal" />
        <Link to="/allbeers">All Beers</Link>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere
        suscipit id autem. Numquam!
      </p>
      <section>
        <img src={bier} alt="Bier" />
        <Link to="/random">Random Beer</Link>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere
        suscipit id autem. Numquam!
      </p>
    </div>
  );
};

export default Landingpage;
