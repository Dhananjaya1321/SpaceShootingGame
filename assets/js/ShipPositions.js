//Ship positions at relevant levels

//==================================================== level one ======================================================
let levelOneShipLeftPositions = [
    "650px",
    "650px",
    "800px",
    "80px",
    widthAsNumber - 80 + "px",
    "500px",
    "250px",
    widthAsNumber - 250 + "px",
    "350px",
    widthAsNumber + 350 + "px"
];

let levelOneShipTopPositions = [
    " -100px",
    " -550px",
    " -350px",
    " -800px",
    " -800px",
    " -350px",
    " -700px",
    " -700px",
    " -950px",
    " -950px"
];

//==================================================== level two ======================================================
let levelTwoShipLeftPositions = [
    "200px",
    "700px",
    "1100px",
    "500px",
    "900px",
    "200px",
    "500px",
    "800px",
    "400px",
    "700px",
    "1000px",
    "100px",
    "300px",
    "800px",
    "1000px",

];

let levelTwoShipTopPositions = [
    "-100px",
    "-100px",
    "-100px",
    "-300px",
    "-300px",
    "-500px",
    "-500px",
    "-500px",
    "-700px",
    "-700px",
    "-700px",
    "-800px",
    "-800px",
    "-800px",
    "-800px"
];

//==================================================== level two ======================================================

let levelThreeShipLeftPositions = [];

let levelThreeShipTopPositions = [
    "-100px",
    "-100px",
    "-100px",
    "-300px",
    "-300px",
    "-500px",
    "-500px",
    "-500px",
    "-700px",
    "-700px",
    "-700px",
    "-800px",
    "-800px",
    "-800px",
    "-800px"
];


// To generate a random decimal between 0 and 1
//Generated value multiply in the range I want to positions
for (let i = 0; i <20; i++) {
    levelThreeShipLeftPositions.push(parseInt(Math.random() * 1200));
}