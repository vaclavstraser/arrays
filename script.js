const zelenina = [
  "rajče",
  "okurka",
  "paprika",
  "mrkev",
  "brambory",
  "celer",
  "zelí",
  "květák",
  "ředkvičky",
  "brokolice",
];

const ovoce = ["jablko", "hruška", "jahody", "třešně"];

const zdravejidlo = zelenina.concat(ovoce);

const cisla = [1, 5, 300, 3, 4];

// console.log(Math.floor(Math.random() * 6) + 1);

//const kostka = document.querySelector("h3");
//const tlacitko = document.querySelector("button");
//tlacitko.onclick = () => {
  //const nahodneCislo = Math.floor(Math.random() * 6);
  //kostka.textContent = vety[nahodneCislo];
//};

const vety = [
  "Zůstaň stát",
  "Přeskoč o dvě pole dopředu",
  "Dej se doprava",
  "Dej se doleva",
  "Jdi rovně",
  "Jedno kolo stojíš",
];
//let ovecka = 1;
//while (ovecka <= 50) {
//  if (ovecka === 1) {
 //// } else if (ovecka === 2 || ovecka === 3 || ovecka === 4) {
 //   console.log(ovecka + " ovečky");
 // } else {
 //   console.log(ovecka + " ovecek");
//  }
//  ovecka++
//}
// index
// length
// push/unshift/pop/shift
// concat
// indexOf
// join
// includes
// sort
// Math.random()
fetch ("https://nameday.abalin.net/api/V1/today")
.then((response) =>
response.json().then((data) => {
  const svatek = data.nameday.cz;
  console.log(svatek)
const svatekSpan = document.querySelector(".svatek")
svatekSpan.textContent = svatek
}))
fetch("https://api.imgflip.com/get_memes").then((response) =>
  response.json().then((info) => {
    const memes = info.data.memes;
    const obrazky = document.querySelector(".obrazek-kontejner")
    let i = 0;
    while (i < 20) {
      const jmeno = memes[i].name;
      const url = memes[i].url; 
      const jmenoElement = document.createElement("h3") ;
      const obrazekElement = document.createElement("img");
      obrazekElement.setAttribute("src", url);
      jmenoElement.textContent = jmeno;
      obrazky.appendChild(jmenoElement);
      obrazky.appendChild(obrazekElement)
          i++;
    }
  })
);