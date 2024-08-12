import React from "react"
import { Link } from "react-router-dom";

export default function Reviews(){

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

      
    return(
        <div className="review-page-container">
            <div className="review-page-content">
             <h2>Een aantal (oud)cursisten aan het woord</h2>
        <p>
        Bij Logos zijn we trots op de vooruitgang en resultaten van onze cursisten, zowel op het gebied van schrijven als in hun persoonlijke ontwikkeling. Hieronder delen enkele van hen hun ervaringen met onze schrijf- en coachingstrajecten.
          <br style={{ marginBottom: "5px" }} />
          <br style={{ marginBottom: "5px" }} />
          <span className="bullet-point">
          ✎ ‘Hetty zag en waardeerde het verhaal dat al in me zat. Deskundige feedback deed de rest.’ 
            <span className="reviewName"> - Rien (64 jaar), Nij Beets </span>
          </span>
          <br></br>

          <span className="bullet-point">
          ✎ 'Voordat ik aan de cursus begon, had ik altijd het gevoel dat er een innerlijke saboteur over mijn schouder meelas, fluisterend dat mijn werk niet goed genoeg was. Zinnen werden genadeloos afgekraakt met opmerkingen als ‘die beginzin is echt niet mooi' en 'dit gaat echt nooit uitgegeven worden'. Dit blokkeerde me volledig en leidde tot een verlammend writer's block. Maar dankzij de coachingsgesprekken met Anna heb ik geleerd om deze negatieve stem te herkennen en los te laten. Ze hielp me vertrouwen op mijn eigen schrijfstem en gaf me de tools om mijn innerlijke criticus te overstijgen. Nu kan ik eindelijk vrijuit schrijven, zonder die constante zelfkritiek.'
          <span className="reviewName"> - Lisa (37 jaar), Den Haag</span>
          </span>
          <br></br>

          <span className="bullet-point">
          ✎ ‘Deze schrijfbegeleiding heeft me enorm op weg geholpen om een roman te schrijven én te voltooien.’
<span className="reviewName"> - Marieke van der Leije (27 jaar), Amsterdam.</span>

          </span>
          <br></br>
          <span className="bullet-point">
          ✎ ‘Als beginnende schrijver van een historische avonturenroman reis je in het donker. Schrijfcoach Hetty Kleinloog heeft mij met haar persoonlijke begeleiding en vakkundige feedback een enorm eind op weg geholpen. Een absolute aanrader.’
          <span className="reviewName"> - Kees de Boer (59), Driehuis </span>
          <br /><br />
          </span>
    
         
        
          <span className="bullet-point">
          ✎ 'Anna was de eerste persoon aan wie ik mijn meest persoonlijke en heftige ervaringen durfde te vertellen. Ze is er zeer zorgvuldig mee omgegaan. De gesprekken met haar hebben mij geholpen om mijn innerlijke worstelingen onder woorden te brengen en mijn angsten in de ogen te kijken en te overwinnen. Ik zou dit traject iedereen aanraden; het heeft me op zoveel manieren geholpen en ik gun iedereen deze ervaring.' <span className="reviewName">-  Julia (31 jaar), Rotterdam </span>
          </span>

          <br style={{ marginBottom: "5px" }} />
        </p>
        </div>
        </div>
    )
}