function missionFail() {
    document.getElementById("status").style.display = "flex";
    document.getElementById("mission-fail").style.display = "flex";
    document.getElementById("mission-pass").style.display = "none";
}

$("#mission-fail>button:nth-child(3)").click(function () {
    document.getElementById("status").style.display = "none";
    document.getElementById("level-one").style.display = "none";
    document.getElementById("home").style.display = "flex";
    createChildObjects(10);
    refreshChildShipPositions(1,true);
    value = false;
    countIds = 0;
    clickCount = 0;
});

$("#mission-fail>button:nth-child(2)").click(function () {
    document.getElementById("status").style.display = "none";
    document.getElementById("level-one").style.display = "flex";
    document.getElementById("home").style.display = "none";
    createChildObjects(10);
    refreshChildShipPositions(1,true);
    clickCount = 0;
    countIds = 0;
});
