function missionPass() {
    document.getElementById("status").style.display = "flex";
    document.getElementById("mission-fail").style.display = "none";
    document.getElementById("mission-pass").style.display = "flex";
}

function calculateScore(level) {
    //10 points were added for blowing up one plane and Deduct 2 points per bullet
    let currentLevel =Number($("#level-number").text());
    let score = 100 * currentLevel - countIds * 2;
    if (score > (100 * currentLevel) * (6.0 / 10.0)) {
        $("#score").text(score);
        $("#level-number").text(currentLevel + 1);
        return true;
    } else {
        return false;
    }
}

$("#continue-btn").click(function () {
    document.getElementById("status").style.display = "none";
    document.getElementById("mission-fail").style.display = "none";
    document.getElementById("mission-pass").style.display = "none";
    let level = Number($("#level-number").text());
    let objectCount;
    switch (level) {
        case 2:
            objectCount = 20;
            break;
        case 3:
            objectCount = 30;
            break;
        case 4:
            objectCount = 40;
            break;
        default:
            objectCount = 10;
            break;
    }

    refreshChildShipPositions(level);
    createChildObjects(objectCount);//create ship objects for level new level
    removeBullets();
})

function removeBullets() {
    for (let i = 1; i <= countIds; i++) {
        $("#bullet" + i).remove();
    }
    countIds = 0;
    clickCount = 0;
}//this method use to remove all bullets