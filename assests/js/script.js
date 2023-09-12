hamburger = document.querySelector(".hamburger");
close = document.querySelector(".close");
nav = document.querySelector(".nav-menu");
head = document.querySelector(".head");
text = document.querySelector(".text");
img = document.querySelector(".image");
distance = document.querySelector(".distance");
time = document.querySelector(".time");
hamburger.addEventListener("click", () => {
  nav.classList.add("show-menu");
});
close.addEventListener("click", () => {
  nav.classList.remove("show-menu");
});
nameContainer = document.querySelector(".name-container");
data = [
  {
    id: 1,
    img: "../assests/images/image-moon.png",
    name: "MOON",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 days",
  },
  {
    id: 2,
    img: "../assests/images/image-mars.png",
    name: "MAR",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS",
  },
  {
    id: 3,
    img: "../assests/images/image-europa.png",
    name: "EUROPA",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time: "3 YEARS",
  },
  {
    id: 4,
    img: "../assests/images/image-titan.png",
    name: "TITAN",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS",
  },
];
const ul = document.createElement("ul");
data.forEach((names) => {
  const li = document.createElement("li");
  li.innerHTML = `<p onclick="check('${names.name}')">${names.name}</p>`;
  ul.appendChild(li);
});
nameContainer.appendChild(ul);

function check(name) {
  h = data.filter((item) => item.name === name);
  return h.forEach((item) => {
    img.src = item.img;
    head.innerHTML = item.name;
    text.textContent = item.text;
    distance.innerHTML = item.distance;
    time.innerHTML = item.time;
  });
}
crewData = [
  {
    img: "../assessts/images/crew/image-douglas-hurley.png",
    name: "douglas hurley",
    job: "Commander",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    img: "../assessts/images/crew/image-douglas-hurley.png",
    name: "douglas hurley",
    job: "Mission Specialist ",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
];
