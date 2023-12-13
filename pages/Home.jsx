import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(234, 197, 150)";
    return () => {
      document.body.style.backgroundColor = "#FFF7ED"; 
    };
  }, []);

  return (
    <div className="home-container">
      <h1>Welkom bij Logos Schrijven en Coaching.</h1>
      <p>
        Schrijven is veel meer dan alleen het neerzetten van woorden op papier.
        Het is het vertellen van een verhaal, een uitlaatklep, een instrument
        voor introspectie, en een manier om emoties te onthullen en verwerken.
      </p>
      <Link to="information">Vind jouw cursus</Link>
    </div>
  );
}
