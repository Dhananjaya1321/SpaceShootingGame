let value = false;

document.getElementById("ship1").addEventListener("click", function () {
    let ship = document.querySelector("#ship1>img").getAttribute('src');
    hideSection();
    setSelectedShip(ship);
    value = true;
    createChildObjects(10);
});
document.getElementById("ship2").addEventListener("click", function () {
    let ship = document.querySelector("#ship2>img").getAttribute('src');
    hideSection();
    setSelectedShip(ship);
    value = true;
    createChildObjects(10);
});
document.getElementById("ship3").addEventListener("click", function () {
    let ship = document.querySelector("#ship3>img").getAttribute('src');
    hideSection();
    setSelectedShip(ship);
    value = true;
    createChildObjects(1);
});

function gameStarted() {
    return value;
}