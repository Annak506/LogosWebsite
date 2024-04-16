import React from "react";
import { Link } from "react-router-dom";
import sheWritesImage from "../assets/images/sheWrites.jpg";
import ink from "../assets/images/ink.png";

export default function Information() {
  return (
    <div className="about-page-container">
      <div className="about-page-content">
        <h2>Een keuze uit diverse online cursussen</h2>
        <p>
          We bieden een breed scala aan individuele en op maat gemaakte
          schrijfcursussen.
          <br style={{ marginBottom: "5px" }} />
          <br style={{ marginBottom: "5px" }} />
          <span className="bullet-point">
            • Wil je vooral de ambachtelijke kant van het schrijversvak leren?
            Dan is <strong>‘Schrijven als ambacht’ </strong>
            iets voor jou. <br />
          </span>
          <span className="bullet-point">
            • Verwacht je dat hetgeen je schrijft veel emoties op zal roepen,
            bijvoorbeeld omdat je jouw levensverhaal of familiegeschiedenis wil
            schrijven? Denk dan eens aan de cursus{" "}
            <strong> ‘Het persoonlijk verhaal'</strong>.
          </span>
          <span className="bullet-point">
            • Wil je vooral graag schrijven om te verwerken of te groeien, kijk
            dan naar de cursus
            <strong> ‘Schrijftherapie en empowerment’</strong>.
          </span>
          <br style={{ marginBottom: "5px" }} />
          Bij alle cursussen krijg je begeleiding van Hetty en Anna; soms wat
          meer Hetty, soms wat meer Anna. Samen met jou bepalen we wat voor jou
          het beste zal werken. Neem gerust contact met ons op voor informatie.
          We helpen je met het uitkiezen van de cursus die bij jou past.
        </p>

        <div className="image-container">
          <img
            src={ink}
            width="200px"
            alt="Hand die schrijft, symboliseert creativiteit en schrijfcursussen bij Logos Schrijven en Coaching."
          />
        </div>

        <p>
          <strong>1. Schrijven als ambacht </strong>
          <br style={{ marginBottom: "5px" }} />
          Deze training is voor iedereen die van taal houdt! Wil je graag een
          verhaal op papier zetten? Of ben je nieuwsgierig naar je
          schrijfvaardigheden en wil je ontdekken welke schrijfvorm het beste
          bij je past? In deze toegankelijke cursus ga je aan de slag met het
          ontwikkelen van je schrijfvaardigheden.
          <details>
            <summary>Lees meer</summary>
            Theoretische kennis wordt gecombineerd met praktische
            schrijfopdrachten, waarbij onderwerpen zoals personageopbouw,
            structuur, tijd- en tijdsverloop, vertelperspectief en dialogen
            behandeld worden. Deze training is ideaal als je het plezier in
            schrijven wilt ontdekken en je eigen unieke schrijfstijl wilt
            ontwikkelen. Tijdens elke bijeenkomst worden inspirerende oefeningen
            geboden, en wordt jouw geschreven werk besproken. Tevens is er de
            mogelijkheid om naast het schrijven van verhalen te experimenteren
            met dialogen, monologen, gedichten, liedteksten, scenarioschrijven
            en/of strips. Hoewel de nadruk voornamelijk ligt op het
            ambachtelijke aspect van schrijven, kan naast de begeleiding van de
            schrijfdocent, gesprekken met de coach van toegevoegde waarde zijn.
            Zij biedt ondersteuning bij verschillende vraagstukken, zoals het
            overwinnen van een writers block, het stellen van prioriteiten en
            het creëren van een schrijfplanning. Daarnaast biedt ze verdiepende
            gesprekken om nieuwe onderwerpen te verkennen en helpt ze je om je
            innerlijke saboteur uit te schakelen. Samen zullen we je
            schrijfvaardigheden naar een hoger niveau brengen. Ontdek je
            schrijftalent en schrijf je in voor onze training ‘Schrijven als
            ambacht’.
          </details>
        </p>

        <p>
          <strong>2. Het persoonlijk verhaal</strong>
          <br style={{ marginBottom: "5px" }} />
          Bij 'het persoonlijk verhaal' krijg je de kans om niet alleen beter te
          schrijven, maar ook om diepgaande emoties te verkennen en te
          verwerken. Of je nu je autobiografie wilt schrijven of je
          familieverhaal wilt delen, we begrijpen dat schrijven soms heftige
          emoties kan oproepen.
          <details>
            <summary>Lees meer</summary>
            Naast het aanleren van ambachtelijke schrijftechnieken, bieden we
            daarom ook ondersteuning bij het verwerken van de emoties die het
            schrijven bij je oproept. Onze coach biedt ondersteuning en treedt
            op als klankbord. Ze kan je helpen nieuwe ideeën en inzichten te
            ontdekken door vragen te stellen en kan je begeleiden bij het omgaan
            met onder andere faalangst, onzekerheid en andere gevoelens die het
            schrijfproces teweeg kunnen brengen, zoals verdriet, vreugde, angst,
            frustratie, verwarring, nostalgie en hoop. Ons uitgangspunt bij deze
            cursus is: <em>“True stories, well told”</em>.
            <br style={{ marginBottom: "5px" }} />
          </details>
        </p>

        <p>
          <strong>3. Schrijftherapie en empowerment</strong>
          <br style={{ marginBottom: "5px" }} />
          Ontdek de kracht van schrijven als middel tot verwerking en
          persoonlijke ontwikkeling. Bij deze cursus ligt de focus op het
          gebruik van schrijven als therapeutisch instrument, waarbij het
          schrijven zelf niet het doel is, maar het middel.
          <details>
            <summary>Lees meer</summary>
            Logos hanteert een socratische therapievorm, waarbij de coach geen
            kant-en-klare adviezen geeft, maar juist vragen stelt om jouw eigen
            inzichten en antwoorden naar boven te laten komen. Je kunt
            vertrouwen op jouw ervaringskennis, als waardevolle bron bij het
            schrijven van teksten.
          </details>
        </p>
      </div>
      <div className="about-page-cta">
        <h2 style={{ paddingBottom: 0 }}>
          <strong>Praktische informatie </strong>
        </h2>
        <h3>
          Elke individuele cursus bestaat uit tien online
          bijeenkomsten van een uur en kost 400 euro. Het is ook mogelijk om
          losse lessen te boeken voor 45 euro per les.
        </h3>
        <h4 class="vragen">
          Voor vragen en aanmelden, email ons en we nemen snel contact met je
          op.
        </h4>
        <h4> Tot ziens bij Logos! Anna en Hetty </h4>
      </div>
    </div>
  );
}
    
