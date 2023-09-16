person = document.querySelector(".person");
btn = document.querySelector(".btn");
pname = document.querySelector(".name");
job = document.querySelector(".job");
text = document.querySelector(".text");
crew = document.querySelector(".crew");
console.log(crew);
crewData = [
  {
    img: "../assests/images/crew/image-douglas-hurley.png",
    name: "douglas hurley",
    job: "Commander",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    img: "../assests/images/crew/image-victor-glover.png",
    name: "Victor Glover",
    job: "Mission Specialist ",
    text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    img: "../assests/images/crew/image-mark-shuttleworth.png",
    name: "MARK SHUTTLEWORTH",
    job: "Mission Specialist  ",
    text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    img: "../assests/images/crew/image-anousheh-ansari.png",
    name: "anousheh ansari",
    job: "Mission Specialist  ",
    text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];
let count = 0;
ul = document.createElement("ul");
function display() {
  current = crewData[count];

  const li = document.createElement("li");
  li.innerHTML = `<div><p>${current.name}</p> <img src=${current.img} > <p>${current.job}</p> <p>${current.text}</p> </div>`;
  ul.style.transform = `translateX(-${10 * count}%)`;
  ul.appendChild(li);
  //   person.src = `${current.img}`;
  //   pname.innerHTML = `${current.name}`;
  //   job.innerHTML = current.job;
  //   text.innerHTML = current.text;
}
crew.appendChild(ul);
// btn.addEventListener("click", () => {
function slider() {
  count++;
  if (count >= crewData.length) {
    count = 0;
  }

  display();
}
//
//
//   console.log(item);
//
//   li.innerHTML = `<div class="slider"> <div><p>${item.job}</p> <p>${item.name}</p> <img src=${item.img} <p>${item.text}</div></p></div>`;
//   console.log(li);
//
// });

//

setInterval(slider, 1000);
//
