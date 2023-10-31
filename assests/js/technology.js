data = [
  {
    img: "../assests/images/technology/image-launch-vehicle-landscape.jpg",
    name: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    img: "../assests/images/technology/image-space-capsule-landscape.jpg",
    name: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    img: "../assests/images/technology/image-spaceport-landscape.jpg",
    name: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
let count = 0;
term = document.querySelector(".name");
text = document.querySelector(".text");
flider = document.querySelector(".slider");
//   ".slider-div"
// ).style.transform = `"translateX(-${10 * count}%)"`;
// console.log(flider);

// function slider() {
//   count++;
//   if (count >= data.length) {
//     count = 0;
//   }
//   current = data[count];

//   flider.src = current.img;
// }

function check(name) {
  h = data.filter((item) => item.name === name);
  return h.forEach((item) => {
    flider.src = item.img;
    term.innerHTML = item.name;
    text.innerHTML = item.text;
  });
}
// slider();
// setInterval(slider, 1000);
