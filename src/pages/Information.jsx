import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import sheWritesImage from "../images/sheWrites.jpg";
import ink from "../images/ink.png";

export default function Information() {

  const location = useLocation();

useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        // Scrollen
        element.scrollIntoView({ behavior: "smooth" });

        // Highlight verwijderen van alle blokken
        document.querySelectorAll('.light-blue-block, .white-block').forEach(el =>
          el.classList.remove('highlight')
        );

        // Highlight toevoegen aan het geklikte blok
        element.classList.add('highlight');

       
      }
    }
    else {
    // Geen hash: verwijder alle highlights
    document.querySelectorAll('.light-blue-block, .white-block').forEach(el =>
      el.classList.remove('highlight')
    );
  }
  }, [location]);

  

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
          <span className="bullet-point">
          ✎ Wil je verhalen creëren voor alles van babyboek tot jeugdroman en leren hoe je elke leeftijdsgroep weet te raken? Kies dan voor <strong>  ‘Kinderverhalen Schrijven’ </strong>.
          </span>
          <span classname="bullet-point">
            ✎ Wil je leren hoe je spanning opbouwt, onverwachte plotwendingen creëert en verhalen schrijft die je lezers tot het einde op het puntje van hun stoel houden? Kies dan voor <strong> ‘Thriller schrijven’ </strong>.
          </span>
          <span className="bullet-point">
          ✎ Droom je ervan om theaterstukken te schrijven en wil je leren hoe je jouw creativiteit vertaalt naar het theater? Meld je aan voor <strong>‘Schrijf je eigen toneelstuk’ </strong>
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
Meld je aan door een e-mail te sturen naar schrijvenencoaching@gmail.com 
We hopen je op 15 september online te zien!
<br style = {{ marginBottom: "5px"}} /> <br style = {{ marginBottom: "5px"}} />
Met vriendelijke groet,  
Het Logos Team
          </p>
        </div> */}


        
        <div className="nieuws">
  <p> <strong>
    🎉Schrijf je in voor de maandelijkse masterclasses van Logos Schrijven en Coaching! ✍️
    </strong> </p>
  <p>
    Elke maand bieden wij een nieuwe, inspirerende online masterclass aan voor slechts €22,50 per les (1 uur via Zoom). Meld je aan voor losse lessen of kies voor 5 lessen en betaal slechts voor 4! 🖋️
  </p>
  <p>
    📅 Je kunt je op elk moment van het jaar aanmelden!
  </p>

    <details>
  <summary>Lees meer</summary>
  <p>
    Deze masterclasses zijn voor alle niveaus – of je nu net begint met schrijven of al een manuscript hebt klaarliggen, er is altijd ruimte om te groeien!
  </p>

  <p> <strong>
    Wat je kunt verwachten:</strong>
    <ul>
      <li>Personages (<em>januari</em>): Creëer onvergetelijke personages die de lezer niet loslaten! 🌟</li>
      <li>Liefdesverhalen (<em>februari</em>): Schrijf de mooiste liefdesverhalen die je hart doen smelten. 💖</li>
      <li>Thrillers en detectives schrijven (<em>maart</em>): Bouw spanning op en laat je lezers sidderen! 🔍</li>
      <li>Scenario schrijven (<em>april</em>): Maak je verhaal visueel met krachtige scripts. 🎬</li>
      <li>Poëzie (<em>mei</em>): Verwoord jouw emoties en gedachten in poëtische taal. ✨</li>
      <li>Kinderverhalen schrijven (<em>juni</em>): Schrijf voor de jonge lezers. 🧸</li>
      <li>Reisverhalen schrijven (<em>juli</em>): Deel je avonturen en breng de magie van verre landen tot leven. 🌍</li>
      <li>Polarsteps (ultrakort schrijven) (<em>augustus</em>): De kunst van het schrijven in een paar krachtige zinnen. ✈️</li>
      <li>Humor (<em>september</em>): Schrijven met humor om je lezers aan het lachen te maken! 😂</li>
      <li>Schrijven over rouw (<em>oktober</em>): Schrijf naar je toe, schrijf van je af en verwerk verlies. 💔</li>
      <li>Dialogen (<em>november</em>): Leer hoe je een goede, geloofwaardige dialoog schrijft! 🗣️</li>
      <li>Redigeren van je eigen verhaal (<em>december</em>): Maak je verhaal af met onze redigeer- en tipsessie! ✍️</li>
    </ul>
  </p>

  <p>
    Aanmelden: Stuur een mail naar <a href="mailto:schrijvenencoaching@gmail.com">schrijvenencoaching@gmail.com</a> om je plek te reserveren! 🌟
  </p>
  
  <p>
    Geef je schrijfvaardigheden een boost en hopelijk tot snel!
  </p>
  <p>
    <strong>Data op een rijtje (tussen 16.00-17.00):</strong>
    <ul>
      <li>26 januari: Personages</li>
      <li>23 februari: Liefdesverhalen</li>
      <li>30 maart: Thrillers en detectives schrijven</li>
      <li>27 april: Scenario schrijven</li>
      <li>25 mei: Poëzie</li>
      <li>29 juni: Kinderverhalen schrijven</li>
      <li>27 juli: Reisverhalen schrijven</li>
      <li>24 augustus: Polarsteps (ultrakort schrijven)</li>
      <li>28 september: Humor</li>
      <li>26 oktober: Schrijven over rouw</li>
      <li>30 november: Dialogen</li>
      <li>28 december: Redigeren van je eigen verhaal</li>
    </ul>

    Elke les is ook als online, individuele les te boeken.
  </p>
  </details>
</div>




        <div id="ambacht" className = "ambacht white-block">
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

        <div id="persoonlijk" className="persoonlijk light-blue-block" >
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

        <div id="schrijftherapie" className="schrijftherapie white-block ">
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

        <div id="expats" className = "expats light-blue-block">
        <p>
          <strong>Creatief schrijven voor expats en reizigers </strong>
          <br style={{ marginBottom: "5px" }} />
          Deze online cursus is speciaal ontworpen voor expats en reizigers die hun ervaringen in het buitenland op een creatieve manier willen vastleggen. Je leert hoe je levendige beschrijvingen maakt van nieuwe omgevingen, authentieke personages creëert gebaseerd op de mensen die je ontmoet, en hoe je culturele misverstanden en clashes kunt omzetten in boeiende verhalen.
          <details>
            <summary>Lees meer</summary>
            Daarnaast besteden we aandacht aan de unieke uitdagingen die het schrijven als expat met zich meebrengt, zoals het vertalen van culturele nuances en het vinden van je plaats in een nieuwe omgeving. Deze cursus helpt je om jouw unieke perspectieven en verhalen te verkennen en uit te drukken. <br></br> Je wordt aangemoedigd om diep in een nieuwe cultuur te duiken en de verschillende aspecten daarvan te onderzoeken en te beschrijven.

Onze schrijfcoach staat bovendien klaar om je te begeleiden bij het omgaan met de emoties die kunnen opkomen tijdens het schrijven. <br></br>Of het nu gaat om nostalgie, heimwee, of het gevoel van vervreemding, we helpen je om deze gevoelens om te zetten in krachtige verhalen die jouw lezers zullen raken.

Of je nu schrijft om herinneringen vast te leggen, anderen te inspireren met je verhalen, of om simpelweg je ervaringen te verwerken, deze cursus geeft je de tools om je reisverhalen tot leven te brengen.
          </details>
        </p>
        </div>

           <div id="kinderen" className = "kinderen white-block">
        <p>
          <strong>Kinderverhalen schrijven </strong>
          <br style={{ marginBottom: "5px" }} />
          Wil je leren hoe je kinderen kunt betoveren met fantasierijke en aansprekende verhalen? In deze cursus ontdek je de bouwstenen van het schrijven van kinderverhalen en ontwikkel je jouw eigen schrijfstem voor alles van vrolijke baby- en peuterboeken tot sprankelende kleuterverhalen en meeslepende jeugdromans.
          <details>
            <summary>Lees meer</summary>
            In de online cursus Kinderverhalen Schrijven verdiep je je in het schrijven voor jonge lezers. Je ontdekt wat klank, ritme en rijm doen met een tekst, leert hoe je onvergetelijke jeugdromanpersonages creëert en duikt in de magische en fantasierijke wereld van het kind.
In deze lessen maak je kennis met verschillende leeftijdscategorieën en onderzoek je welke soorten verhalen voor elke doelgroep aantrekkelijk zijn. Zo ontwikkel je stap voor stap jouw eigen manier van schrijven voor deze jonge doelgroep.
          </details>
        </p>
        </div>


          <div id="thrillers" className = "thrillers light-blue-block ">
        <p>
          <strong>Thrillers schrijven </strong>
          <br style={{ marginBottom: "5px" }} />
          In de online cursus Thriller schrijven maak je kennis met de basisvaardigheden van het schrijversvak, met natuurlijk het accent op… spanning!
Leer hoe je een geloofwaardig en meeslepend plot opbouwt, hoe cliffs, timing en tijd bijdragen aan een spannend verhaal, en hoe je levensechte karakters tot leven brengt. Ook duik je in de verschillende thrillergenres.
          <details>
            <summary>Lees meer</summary>
           Tijdens de cursus ontdek je het verschil tussen thrillers en detectives, leer je hoe je de lezer tot het einde geboeid houdt en hoe je een echte pageturner schrijft. Je oefent met plotwendingen, spanning opbouwen en het slim doseren van informatie, zodat jouw verhaal van begin tot eind de lezer op het puntje van de stoel houdt.
          </details>
        </p>
        </div>




        <div id="theater" className="theater white-block">
  
    <strong>Schrijf je eigen toneelstuk</strong>
    <br style={{ marginBottom: "5px" }} />
    Bij Logos Schrijven & Training geloven we dat schrijven een ambacht is: een vaardigheid die je kunt ontwikkelen, verfijnen en eigen maken. Onze populaire module Schrijven als Ambacht heeft nu een gloednieuwe variant: Schrijven als Ambacht - Theater.

    In deze cursus duiken we samen in de wereld van het theater. Je leert stap voor stap hoe je een theaterstuk kunt schrijven, waarbij de ambachtelijke aspecten van dit bijzondere genre centraal staan.
  <details>
    <summary>Lees meer</summary>
    <p>Onder begeleiding van onze ervaren trainers werk je aan:</p>
    <ul>
      <li>Structuur: Hoe bouw je een theaterstuk op dat het publiek van begin tot eind boeit?</li>
      <li>Personages: Hoe creëer je gelaagde, geloofwaardige personages die het verhaal dragen?</li>
      <li>Dialogen: Hoe schrijf je krachtige dialogen die levensecht klinken en emoties oproepen?</li>
      <li>Treatment: Hoe vertaal je jouw ideeën naar een heldere, gestructureerde blauwdruk?</li>
    </ul>
    <p>
      Maar dat is nog niet alles. Tijdens de cursus onderzoeken we ook wat jíj met jouw theatertekst wilt vertellen. Welke boodschap wil je overbrengen? Wat wil je het publiek laten voelen, denken of ervaren? Samen zoeken we naar jouw unieke stem als theaterauteur.
    </p>
    <p>
      <strong>Voor wie?</strong><br />
      Deze cursus is perfect voor iedereen die de ambitie heeft om theaterteksten te schrijven, of je nu al ervaring hebt of net begint. Of je nu droomt van een intiem kamerstuk of een grootse productie, bij ons leg je de basis voor een theatertekst die impact maakt.
    </p>
    <p>
      Ben jij klaar om jouw verhaal op het toneel tot leven te brengen? Meld je aan voor Schrijven als Ambacht - Theater en ontdek de kunst van het theaterschrijven.
    </p>
  </details>
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
          op: schrijvenencoaching@gmail.com
        </h4>
        <h4> Tot ziens bij Logos! Anna en Hetty </h4>
      </div>
    </div>
  );
}
    
