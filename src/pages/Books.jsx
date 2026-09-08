import React from 'react';

import jacobCover from '../images/books/jacob-en-de-magische-olifant.jpg';
import moordCover from '../images/books/moord-onder-de-kersenbloesem.jpg';
import speelveldCover from '../images/books/speelveld-van-de-dood.jpg';
import moederweeldeCover from '../images/books/moederweelde.jpg';
import nachtwerkCover from '../images/books/nachtwerk.jpg';
import zusjesCover from '../images/books/de-zusjes.jpg';
import volleKrachtCover from '../images/books/volle-kracht.jpg';
import goedeKerstCover from '../images/books/een-goede-kerst.jpg';
import volleBloeiCover from '../images/books/volle-bloei.jpg';
import vuurwerkCover from '../images/books/vuurwerk.jpg';

import headerImage from '../images/books/books-header.jpg';

const books = [
  {
    title: 'Jacob en de Magische olifant',
    author: 'Anna Kleinloog',
    date: '16 oktober 2026',
    genre: 'Kinderboek',
    future: true,
    cover: jacobCover,
    description: `Jacob woont alleen met zijn vader in een oud, stoffig huis. Op een dag breekt een van de weinige dierbare voorwerpen die hij nog van zijn moeder heeft. Net wanneer het verdriet te groot lijkt, gebeurt er iets wonderlijks. Uit het wandkleed in zijn kamer stapt Bo, een kleine, merkwaardige olifant. Samen trekken ze de wereld in, op zoek naar wat verloren is. Maar in de schaduw loert gevaar: Joan, die uit is op rijkdom, heeft haar eigen plannen met Bo. Terwijl Jacob steeds verder van huis raakt, fietst zijn vader wanhopig door de stad, op zoek naar zijn zoon. Zal hij Jacob op tijd vinden, en hoe loopt het af met Bo?`,
    libris: '#',
  },

  {
    title: 'Moord onder de kersenbloesem',
    author: 'Dora Maas (pseudoniem van Hetty Kleinloog)',
    date: '5 februari 2026',
    genre: 'Detective / thriller',
    cover: moordCover,
    description: 'Hannie Huurdeman reist naar Japan, waar haar dochter bij de Nederlandse ambassade in Tokio werkt. Wat begint als een welkome afleiding na een moeilijke periode, verandert in een gevaarlijk avontuur. Hannie raakt verwikkeld in een schandaal rond een Nederlandse kunstenaar en een lid van de Japanse keizerlijke familie én in een oude, onopgeloste familiemoord. Een warme, geestige detective tegen de achtergrond van Japan en de diplomatieke wereld.',
    libris: 'https://libris.nl/a/dora-maas/moord-onder-de-kersenbloesem/501647563#paperback-9789401626170',
  },

  {
    title: 'Speelveld van de dood',
    author: 'Hetty Kleinloog',
    date: '9 september 2024',
    genre: 'Kauffmann & Kauffmann – deel 4 / thriller',
    cover: speelveldCover,
    description: 'De tweelingzussen Lisa en Kat Kauffmann zijn eigenaar van een bedrijfsrecherchebureau in hartje Amsterdam. Waar Lisa – opgeleid aan de politieacademie – de regels volgt, kleurt Kat – van origine journalist – nogal eens buiten de lijntjes. Hoewel hun gespannen relatie een soepele samenwerking in de weg staat, blijken ze juist door hun zussenband in staat om de meest ingewikkelde misdrijven op te lossen.',
    libris: 'https://libris.nl/a/hetty-kleinloog/speelveld-van-de-dood/501591418#paperback-9789460686702',
  },

  {
    title: 'Moederweelde',
    author: 'Hetty Kleinloog',
    date: '24 januari 2023',
    genre: 'Kauffmann & Kauffmann – deel 3 / thriller',
    cover: moederweeldeCover,
    description: 'De tweelingzussen Lisa en Kat Kauffmann zijn eigenaar van een bedrijfsrecherchebureau in hartje Amsterdam. Waar Lisa – opgeleid aan de politieacademie – de regels volgt, kleurt Kat – van origine journalist – nogal eens buiten de lijntjes. Hoewel hun gespannen relatie een soepele samenwerking in de weg staat, blijken ze juist door hun zussenband in staat om de meest ingewikkelde misdrijven op te lossen.',
    libris: 'https://libris.nl/a/hetty-kleinloog/moederweelde/501510103#paperback-9789460686719',
  },

  {
    title: 'Nachtwerk',
    author: 'Hetty Kleinloog',
    date: 'november 2021',
    genre: 'Kauffmann & Kauffmann – deel 2 / thriller',
    cover: nachtwerkCover,
    description: `De tweelingzussen Lisa en Kat Kauffmann zijn eigenaar van een bedrijfsrecherchebureau in hartje Amsterdam. Waar Lisa – opgeleid aan de politieacademie – de regels volgt, kleurt Kat – van origine journalist – nogal eens buiten de lijntjes. Hoewel hun gespannen relatie een soepele samenwerking in de weg staat, blijken ze juist door hun zussenband in staat om de meest ingewikkelde misdrijven op te lossen. Als verzorger Arthur Korenman 's ochtends vroeg dood in het olifantenverblijf wordt aangetroffen, schakelt de directeur van Artis Kauffmann & Kauffmann Bedrijfsrecherche in.`,
    libris: 'https://libris.nl/a/hetty-kleinloog/nachtwerk/501470770#ebook-9789460687310',
  },

  {
    title: 'De zusjes',
    author: 'Hetty Kleinloog',
    date: 'mei 2021',
    genre: 'Kauffmann & Kauffmann – deel 1 / thriller',
    cover: zusjesCover,
    description: 'De tweelingzussen Lisa en Kat Kauffmann runnen samen een bedrijfsrecherchebureau in Amsterdam. Lisa is voormalig politieagente en volgt de regels; Kat is journalist en zoekt juist graag de grenzen op. Hun moeizame zussenrelatie maakt samenwerken niet eenvoudig, maar juist hun verschillen blijken een kracht wanneer ze worden geconfronteerd met hun eerste ingewikkelde zaak.',
    libris: 'https://libris.nl/a/hetty-kleinloog/de-zusjes/500844993#paperback-9789460684647',
  },

  {
    title: 'Volle kracht',
    author: 'Hetty Kleinloog',
    date: 'oktober 2019',
    genre: 'Roman – Volle-trilogie, deel 2',
    cover: volleKrachtCover,
    description: `In Volle kracht verruilen Anneke, Wanda, Lies en Greetje hun vertrouwde Amsterdam voor Canada, waar ze op zoek gaan naar de verloren tweelingzuster van hun vriendin Danny. Het enige aanknopingspunt dat ze van deze Nel hebben, is een ansichtkaart uit 1967 met een adres in Vancouver. De vier dames reizen dwars door Canada. Ze ontmoeten bijzondere mensen, beleven spannende avonturen en ontdekken dat ze nooit te oud zijn om te leren. Onderweg raken ze geïntrigeerd door het levensverhaal van Canada's meest gevierde kunstschilder Tom Thomson en proberen ze het raadsel rond diens mysterieuze dood op te lossen. Tegelijkertijd komt hun vriendschap, in een camper van nog geen dertig vierkante meter, behoorlijk onder druk te staan.`,
    libris: 'https://libris.nl/a/hetty-kleinloog/volle-kracht/500179180#ebook-9789460687204',
  },

  {
    title: 'Een goede kerst',
    author: 'Hetty Kleinloog',
    date: '28 november 2018',
    genre: 'Kerstnovelle',
    cover: goedeKerstCover,
    description: `Voor de oudste buurtbewoonster van de Jordaan, door iedereen Krib genoemd omdat ze altijd kribbig is, kunnen de kerstdagen niet snel genoeg voorbij zijn. Maar haar buurmeisje Mia doet er alles aan om Krib een goede kerst te bezorgen. Een warm kerstverhaal over hoe de onbevangen blik van een kind de wereld van een oude vrouw op zijn kop zet.`,
    libris: 'https://libris.nl/a/hetty-kleinloog/een-goede-kerst/500152150#paperback-9789460684135',
  },

  {
    title: 'Volle bloei',
    author: 'Hetty Kleinloog',
    date: '12 juni 2018',
    genre: 'Roman',
    cover: volleBloeiCover,
    description: `Volle bloei is het verhaal van vijf vrouwen op leeftijd: Danny, Wanda, Lies, Anneke en Greetje. Ze ontmoeten elkaar op de begraafplaats, waar ze bloemen leggen op de graven van hun overleden echtgenoten. Als blijkt dat ieder van hen nog een droom te verwezenlijken heeft, nemen ze een besluit: ze zijn weer zo jong als ze zich voelen en gaan overdoen wat overgedaan moet worden. Zo wil Danny, een rasechte Amsterdamse, nog één keer een hit schrijven én zingen. Wanda, diplomatenvrouw, wil bewijzen dat ze ook in haar eentje een wereldreis kan maken. Lies verlangt naar een grote liefde. Anneke is op zoek naar haar ter adoptie afgestane zoon. En Greetje wil weten of ze de moord op haar man, waarvoor ze twaalf jaar heeft vastgezeten, wel echt heeft gepleegd.`,
    libris: 'https://libris.nl/a/hetty-kleinloog/volle-bloei/500132622#paperback-9789460683985',
  },

  {
    title: 'Vuurwerk',
    author: 'Hetty Kleinloog',
    date: 'november 2014',
    genre: 'Jeugdboek / SpangaS',
    cover: vuurwerkCover,
    description: `Het is kerstvakantie. Renée vindt in de kelder van de school een zwerver, Meral ligt opnieuw in het ziekenhuis en Raaf en Abel gaan op wintersportvakantie. Een verhaal over de leerlingen van SpangaS, waarin vriendschap, school, ziekte en de problemen van een dakloze samenkomen.`,
    libris: 'https://libris.nl/a/hetty-kleinloog/vuurwerk/100025494#ebook-9789021673745',
  },
];


function Books() {
  return (
    <main className="books-page">

      <section className="books-header">
        <img
          src={headerImage}
          alt="Boeken van onze schrijfcoaches"
        />
      </section>

      <section className="books-list">
        {books.map((book) => (
          <article className="book-card" key={book.title}>

            <div className="book-cover">
              <img
                src={book.cover}
                alt={`Omslag van ${book.title}`}
              />
            </div>

            <div className="book-info">

              <h2>{book.title}</h2>

              <div className="book-meta">
                <span>{book.author}</span>
                <span className="separator">·</span>
                <span>{book.genre}</span>
              </div>

              <p className="book-date">{book.date}</p>

              <div className="book-description">
                {book.description}
              </div>

              {book.future ? (
                <span className="book-coming-soon">
                  Verschijnt binnenkort
                </span>
              ) : (
                <a
                  className="book-button"
                  href={book.libris}
                  target="_blank"
                  rel="noreferrer"
                >
                  Bekijk bij Libris
                </a>
              )}

            </div>
          </article>
        ))}
      </section>

    </main>
  );
}

export default Books;