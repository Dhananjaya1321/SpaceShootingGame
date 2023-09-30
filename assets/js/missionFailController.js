function missionFail() {
    document.getElementById("status").style.display = "flex";
    document.getElementById("mission-fail").style.display = "flex";
    document.getElementById("mission-pass").style.display = "none";
}
let currentLevel;

$("#mission-fail>button:nth-child(3)").click(function () {
    document.getElementById("status").style.display = "none";
    document.getElementById("level-one").style.display = "none";
    document.getElementById("home").style.display = "flex";
    currentLevel=Number($("#level-number").text());
    createChildObjects((currentLevel+1)*5);
    refreshChildShipPositions(currentLevel,true);
    value = false;
    countIds = 0;
    clickCount = 0;
});

$("#mission-fail>button:nth-child(2)").click(function () {
    document.getElementById("status").style.display = "none";
    document.getElementById("level-one").style.display = "flex";
    document.getElementById("home").style.display = "none";
    currentLevel=Number($("#level-number").text());
    createChildObjects((currentLevel+1)*5);
    refreshChildShipPositions(currentLevel,true);
    clickCount = 0;
    countIds = 0;
});
