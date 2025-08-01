/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
/* tar inn et number og returnerer en string som sier om tallet er et partall eller oddetall
 * @param {number} numb
 * @returns {string}
 */
function odd_number(numb) {
  // bruk av ternary for å returnere om number delt på 2 gir igjen 0 eller ikke.
  // Om det er 0 igjen etter deling så vil det si Partall, ellers Oddetall
  return numb % 2 == 0 ? "Partall" : "Oddetall";
}

// console.log(odd_number(5));
// console.log(odd_number(4));

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
/*
 * Tar inn en string og konverterer stringen til UPPER CASE og legger til en ! på slutten
 * @param {string} msg
 * @returns {string}
 */
const returnAsUpper = (msg) => {
  // bruk av template literals og .toUpperCase() method for å konvertere stringen til store bokstaver samt legge på ! uten å måtte bruke +
  return `${msg.toUpperCase()}!`;
};

// console.log(returnAsUpper("testing the function"));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
/*
 * Tar inn navn og et nummer for å returnere en melding eller feilkode utifra nummeret
 * @param {string} name
 * @param {number} hour
 * @returns {string}
 */
function timeOfDayGreeting(name, hour) {
  if (!name) {
    // SyntaxError om name parameter ikke har blitt gitt
    throw SyntaxError("Please provide a name as a string");
  }
  if (!hour) {
    // SyntaxError om hour parameter ikke har blitt gitt
    throw SyntaxError("Please provide a hour as a number");
  }

  if (hour < 0) {
    return "Ugyldig tid"; // ugyldig tid om hour er mindre enn 0
  } else if (hour >= 0 && hour <= 5) {
    return `God Natt ${name}!`; // God natt om tid er mellom 0 og 5
  } else if (hour >= 6 && hour <= 11) {
    return `God Morgen ${name}!`; // God Morgen om tid er mellom 6 og 11
  } else if (hour >= 12 && hour <= 17) {
    return `God Ettermiddag ${name}!`; // God ettermiddag om tid er mellom 12 og 17
  } else if (hour >= 18 && hour <= 23) {
    return `God Kveld ${name}!`; // God kveld om tid er mellom 18 og 23
  } else {
    return "Ugyldig tid"; // som enn fallback - ugyldig tid.
  }
}

// console.log(timeOfDayGreeting("test", 24));

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
/*
 * Funksjon som tar inn en array og returnerer arrayen med først og siste indeks fjernet
 * @param {array} arr
 * @returns {array}
 */
function firstAndLastRemoved(arr) {
  return arr.slice(1, -1); // slicing av array - starter på plass nr 2 og avsluttes på nest-siste element
}

// console.log(firstAndLastRemoved(["En", "To", "Tre", "Fire", "Fem", "Seks"]));

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her
/*
 * Funksjon som erstatter vanskelig med gøy og fjerner white-space fra starten og slutten.
 * @param {string} msg
 * @returns {string}
 */
convertString = (msg) => {
  // bruk av veldig simpel regex med global og case insensitive flagg for å bytte ut vanskelig med gøy, samt trimme bort all white-space på start og slutt av string.
  return msg.replaceAll(/vanskelig/gi, "gøy").trim();
};

// console.log(convertString("  Javascript er vanskelig  "));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her
/*
 * Funksjon som tar inn en array, fjerner første index, erstatter noe spesifikt, fjerner noe annet spesifikt og kombinerer alt
 * i en string med | som separator
 * @param {array} arr
 * returns {string}
 */
function arrayManipulation(arr) {
  // Fjerning av første index
  arr.shift();
  // Finn Viskelær og bytt det ut med linjal
  const arrIndex = arr.findIndex((el) => el == "Viskelær");
  arr[arrIndex] = "Linjal";
  // Ta utgangspunkt i at Penn og Notatbok nå er indeks 0 og 1 iom vi har allerede tatt bort første indeks
  const replacementWord = "Markeringspenn"; // bare for å lagre ordet i en variable istedenfor hard coding
  arr.splice(0, 2, replacementWord); // splicer på indeks 2, som burde starte arrayen etter notatbok. (linjal, blyant, markør) - Legg til ordet
  return arr.join(" | ");
}

// console.log(arrayManipulation(items));

const extraChallenge = (element) => {
  // ta utgangspunkt i at funksjonen får en array -> benytt forrige funksjon til å manipulere arrayen.
  if (!Array.isArray(element)) {
    return "Please provide an array to this function";
  }
  // kan egentlig hoppe over å sende arrayen til funksjonen, dog da må .split fjernes fra return statement
  arr = arrayManipulation(element);
  return arr.split(" | ").filter((e) => e.includes("e"));
};

console.log(extraChallenge(items));

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her
/*
 * Funksjon som tar inn enn array og en string, ser om array inneholder stringen. Om den gjør, fjern element og returner
 * hvis ikke, legg til string på slutten av arrayen.
 * @param {array} arr
 * @param {string} str
 * @returns {array}
 */
function challengeOne(arr, str) {
  if (arr.includes(str)) {
    // splice(index, 1) skal bare fjerne et element og gi resten av arrayen tilbake
    arr.splice(arr.indexOf(str), 1);
    return arr;
  } else {
    // push legger til ett element på slutten av en array
    arr.push(str);
    return arr;
  }
}

// console.log(challengeOne(["En", "To", "Tre"], "To"));

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
/*
 * Funksjon som legger til emoji og gjør annet basert på hvilken data-type som blir gitt til funksjonen
 * @returns {string}
 */

function challengeTwo(flexParam) {
  //   console.log(typeof flexParam);
  // Switch statement med typeof for å se hva for en data-type parameter er.
  switch (typeof flexParam) {
    case "string":
      return flexParam + " 😎";
    case "number":
      return (flexParam * 2).toString() + " 😎";
    case "boolean":
      return flexParam ? "😎Ja😎" : "😎Slapp av😎";
    default:
      return "😎Kun primitive verdier😎";
  }
}

// console.log(challengeTwo(challengeOne));
