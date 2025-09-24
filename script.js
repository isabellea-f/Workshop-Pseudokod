// MÅL: Räkna ut slutbetyget utifrån provresultat och inlämnade projekt.

// INPUTS: Vilka variabler som kommer till funktionen och vilken typ de har
// exam(number, integer), projects(number, integer)

// RETURN: Vad ska skickas tillbaka efter beräkning eller behandling av inputs och vilken typ har den
// number, integer

// STEG 1: Beskriv nu i tur och ordning hur koden logiskt ska fungera för att lösa uppgiften

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}
