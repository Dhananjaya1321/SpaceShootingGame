document.getElementById("ship1").addEventListener("click", function () {
    let ship = document.querySelector("#ship1>img").getAttribute('src');
    hideSection();
    setSelectedShip(ship);
});
document.getElementById("ship2").addEventListener("click", function () {
    let ship = document.querySelector("#ship2>img").getAttribute('src');
    hideSection();
    setSelectedShip(ship);
});
document.getElementById("ship3").addEventListener("click", function () {
    let ship = document.querySelector("#ship3>img").getAttribute('src');
    hideSection();
    setSelectedShip(ship);
});