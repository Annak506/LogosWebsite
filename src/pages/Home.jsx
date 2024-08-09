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
    <div>
    <div className="home-container">
      <h1>Welkom bij Logos Schrijven en Coaching.</h1>
      <p>
        Schrijven is veel meer dan alleen het neerzetten van woorden op papier.
        Het is het vertellen van een verhaal, een uitlaatklep, een instrument
        voor introspectie, en een manier om emoties te onthullen en verwerken.
      </p>
      <Link to="information" title="Ontdek onze diverse schrijfcursussen en coachingstrajecten, online en in Amsterdam">
        Vind jouw cursus
      </Link>
    </div>

    <div className="quote-container">
      <div className="quote">  <p> De lessen hebben me zowel als schrijver en als persoon laten groeien. Mijn schrijfvaardigheden zijn naar een hoger niveau getild, terwijl het proces tegelijkertijd ruimte gaf voor zelfreflectie en persoonlijke groei. Een unieke combinatie van schrijfkunst en coaching. <p className="names"> - Joyce, 43, Gouda</p> </p> </div>
     <div className = "quote"> <p> Ik kwam hier om beter te leren schrijven, maar vertrok met zoveel meer. De lessen hielpen me niet alleen om mijn schrijfstijl te verfijnen, maar ook om mijn innerlijke wereld te verkennen en te verwerken. Het was een plek waar techniek en therapie naadloos samenkwamen. Heel inspirerend! <p className="names"> - Annemette, 32, Sint-Maarten </p> </p> </div>
    </div>

    </div>
  );
}
