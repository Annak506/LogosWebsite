import React from "react";
import { Link } from "react-router-dom";
import sheWritesImage from "../images/sheWrites.jpg";
import ink from "../images/ink.png";

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
          ✎ Wil je vooral de ambachtelijke kant van het schrijversvak leren?
            Dan is <strong>‘Schrijven als ambacht’ </strong>
            iets voor jou. <br />
          </span>
          <span className="bullet-point">
          ✎ Verwacht je dat hetgeen je schrijft veel emoties op zal roepen,
            bijvoorbeeld omdat je jouw levensverhaal of familiegeschiedenis wil 
            schrijven? Denk dan eens aan de cursus{" "}
            <strong> ‘Het persoonlijk verhaal'</strong>.
          </span>
          <span className="bullet-point">
          ✎ Wil je vooral graag schrijven om te verwerken of te groeien, kijk
            dan naar de cursus
            <strong> ‘Schrijftherapie en empowerment’</strong>.
          </span>
          <span className="bullet-point">
          ✎ Ben je een expat of reiziger die zijn ervaringen in het buitenland op een creatieve manier wil vastleggen? Ontdek dan onze module <strong>‘Creatief Schrijven voor Expats en Reizigers’</strong>.
          </span>
          <br style={{ marginBottom: "5px" }} />
          Bij alle cursussen krijg je begeleiding van Hetty en Anna; soms wat
          meer Hetty, soms wat meer Anna. Samen met jou bepalen we wat voor jou
          het beste zal werken. Neem gerust contact met ons op voor informatie.
          We helpen je met het uitkiezen van de cursus die bij jou past.
        </p>

        <div className="image-container">
          <img className="pen"
            src={ink}
            width="130px"
            alt="Hand die schrijft, symboliseert creativiteit en schrijfcursussen bij Logos Schrijven en Coaching."
          />
        </div>

{/*
      <div className = "nieuws">
          <p>
            <strong> 15 september 2024 - online flitsles ‘De eerste zin’
            </strong>
            <br style = {{ marginBottom: "5px"}} />
            Heb je zin om te schrijven, maar weet je niet goed waar je moet beginnen? Of wil je meer leren over hoe je jouw teksten een krachtige start kunt geven? Dan nodigen we je van harte uit voor onze Logos online flitsles ‘De eerste zin!’
            <br style = {{ marginBottom: "5px"}} />
            <br style = {{ marginBottom: "5px"}} />
            Datum:  
            <br style = {{ marginBottom: "5px"}} />Zondag 15 september 2024  
            <br style = {{ marginBottom: "5px"}} />Tijd:  16.00 - 17.00 uur  
            <br style = {{ marginBottom: "5px"}} />Kosten:  €22,50
            <br style = {{ marginBottom: "5px"}} /> <br style = {{ marginBottom: "5px"}} />
            Tijdens deze les gaan we het hebben over:
            <br style = {{ marginBottom: "5px"}} />
•⁠  ⁠Zin hebben in schrijven: hoe vind je de motivatie om te beginnen?
<br style = {{ marginBottom: "5px"}} />
•⁠  ⁠Zin geven aan schrijven: wat wil je met je tekst bereiken? <br style = {{ marginBottom: "5px"}} />
•⁠  ⁠Het schrijven van een pakkende beginzin: hoe grijp je de aandacht van je lezers vanaf de eerste regel?
<br style = {{ marginBottom: "5px"}} />  <br style = {{ marginBottom: "5px"}} />
De les is bedoeld voor iedereen die zijn schrijfvaardigheden wil verbeteren, of je nu een beginnende schrijver bent of al wat ervaring hebt. Doe mee en laat je inspireren!
Meld je aan door een e-mail te sturen naar logos@kleinloog.eu. 
We hopen je op 15 september online te zien!
<br style = {{ marginBottom: "5px"}} /> <br style = {{ marginBottom: "5px"}} />
Met vriendelijke groet,  
Het Logos Team
          </p>
        </div> */}


        
      <div className="nieuws">
          <p>
            <strong> Online Flitsles: Sinterklaasgedichten schrijven</strong>
            <br style={{ marginBottom: "5px"}} />
            Heb jij ook elk jaar weer zo’n sinterklaasgedichten-stress en moet je vaak last minute nog iets bedenken? Of wil je nieuwe technieken leren om je dichtvaardigheden naar een hoger niveau te tillen? ✍️ Dan nodigen we je van harte uit voor onze Logos schrijfworkshop ‘Sinterklaasgedichten schrijven’!
            <br style={{ marginBottom: "5px"}} />
            <br style={{ marginBottom: "5px"}} />
            Datum:  
            <br style={{ marginBottom: "5px"}} />Maandagavond 2 december 2024  
            <br style={{ marginBottom: "5px"}} />Tijd:  20.00 tot 21.00 uur  
            <br style={{ marginBottom: "5px"}} />Kosten:  €12,50  
            <br style={{ marginBottom: "5px"}} />Locatie: online 
            <br style={{ marginBottom: "5px"}} /> <br style={{ marginBottom: "5px"}} />
            Aan het einde van de avond ga je naar huis met ten minste één afgerond Sinterklaasgedicht waar je trots op kunt zijn! 🎉
            <br style={{ marginBottom: "5px"}} /> <br style={{ marginBottom: "5px"}} />
            <strong>Aanmelden?</strong> Stuur een e-mail naar logos@kleinloog.eu
            <br style={{ marginBottom: "5px"}} /> <br style={{ marginBottom: "5px"}} />
            We hopen je op 2 december te zien! 🌟  
            <br style={{ marginBottom: "5px"}} /> <br style={{ marginBottom: "5px"}} />
            Met vriendelijke groet,  
            <br style={{ marginBottom: "5px"}} /> <br style={{ marginBottom: "5px"}} />
            Het Logos Team  🎁
          </p>
        </div>



        <div className = "ambacht">
        <p>
          <strong>Schrijven als ambacht </strong>
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
        </div>

        <div className="persoonlijk">
        <p>
          <strong> Het persoonlijk verhaal</strong> 
          <br style={{ marginBottom: "5px" }} />
          Bij 'het persoonlijk verhaal' krijg je de kans om niet alleen beter te
          schrijven, maar ook om diepgaande emoties te verkennen en te
          verwerken. Of je nu je autobiografie wilt schrijven of je
          familieverhaal wilt delen, we begrijpen dat schrijven soms veel kan oproepen.
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
        </div>

        <div className="schrijftherapie">
        <p>
          <strong> Schrijftherapie en empowerment</strong>
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

        <div className = "expats">
        <p>
          <strong>Creatief schrijven voor expats en reizigers </strong>
          <br style={{ marginBottom: "5px" }} />
          Deze module is speciaal ontworpen voor expats en reizigers die hun ervaringen in het buitenland op een creatieve manier willen vastleggen. Je leert hoe je levendige beschrijvingen maakt van nieuwe omgevingen, authentieke personages creëert gebaseerd op de mensen die je ontmoet, en hoe je culturele misverstanden en clashes kunt omzetten in boeiende verhalen.
          <details>
            <summary>Lees meer</summary>
            Daarnaast besteden we aandacht aan de unieke uitdagingen die het schrijven als expat met zich meebrengt, zoals het vertalen van culturele nuances en het vinden van je plaats in een nieuwe omgeving. Deze cursus helpt je om jouw unieke perspectieven en verhalen te verkennen en uit te drukken. <br></br> Je wordt aangemoedigd om diep in een nieuwe cultuur te duiken en de verschillende aspecten daarvan te onderzoeken en te beschrijven.

Onze schrijfcoach staat bovendien klaar om je te begeleiden bij het omgaan met de emoties die kunnen opkomen tijdens het schrijven. <br></br>Of het nu gaat om nostalgie, heimwee, of het gevoel van vervreemding, we helpen je om deze gevoelens om te zetten in krachtige verhalen die jouw lezers zullen raken.

Of je nu schrijft om herinneringen vast te leggen, anderen te inspireren met je verhalen, of om simpelweg je ervaringen te verwerken, deze cursus geeft je de tools om je reisverhalen tot leven te brengen.
          </details>
        </p>
        </div>




      </div>
      <div className="about-page-cta">
        <h2 style={{ paddingBottom: 0 }}>
          Praktische informatie 
        </h2>
        <h3>
          Elke individuele cursus bestaat uit tien online
          bijeenkomsten van een uur en kost 500 euro. Het is ook mogelijk om
          losse lessen te boeken voor 55 euro per les.
        </h3>
        <h4 class="vragen">
          Voor vragen en aanmelden, email ons en we nemen snel contact met je
          op: logos@kleinloog.eu
        </h4>
        <h4> Tot ziens bij Logos! Anna en Hetty </h4>
      </div>
    </div>
  );
}
    
