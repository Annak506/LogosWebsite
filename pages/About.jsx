import React from "react"
import hettyImage from "../assets/images/hetty.jpg";
import annaImage from "../assets/images/anna.jpg";

import { Link } from "react-router-dom"

export default function About() {
    return (
      <div className="about-page-container">
        <img src={hettyImage} className="about-hetty-image with-border" />
        <img src={annaImage} className="about-anna-image with-border" />
        <div className="about-page-content">
          <h2>Over ons</h2>
          <p>
            Achter Logos Schrijven & Coaching schuilt een duo dat zich richt op
            het bevorderen van welzijn door middel van schrijven.{" "}
            <strong> Hetty Kleinloog </strong> (1958) met meer dan 15 jaar
            ervaring als schrijver en schrijfdocent bij o.a. de
            Schrijversacademie, de Volksuniversiteit en diverse
            (theater)opleidingen, heeft vanuit haar rol als begeleider van
            talloze cursisten kunnen ervaren dat creatief schijven iets is dat
            iedereen kan leren. In de schrijfbegeleiding die zij geeft richt zij
            zich op de ambachtelijke kant van het schrijversvak en ondersteunt
            zij de cursisten in het vormgeven van verhalen die raken.
          </p>
          <p>
            Naast Hetty staat <strong> Anna Kleinloog </strong> (1993), opgeleid
            als psycholoog en orthopedagoog, die haar expertise heeft ingezet in
            o.a. de ggz en de verslavingszorg, waar schrijven werd gebruikt als
            een vorm van behandeling. Anna’s achtergrond in zowel de klinische
            psychologie als de Schrijversacademie stelt haar in staat om de
            therapeutische aspecten van het schrijven te begrijpen en te
            integreren in de aanpak van Schrijfcoaching. Schrijven kan een
            krachtig middel zijn om emoties te uiten, trauma’s te verwerken en
            een nieuw perspectief op het leven te creëren.
          </p>
        </div>
        <div className="about-page-cta">
          <h2>
            We bieden een breed scala aan individuele en op maat gemaakte online
            schrijfcursussen.
          </h2>
          <Link className="link-button" to="/information">
            Vind jouw cursus
          </Link>
        </div>
      </div>
    );
}