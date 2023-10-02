function missionPass() {
    document.getElementById("status").style.display = "flex";
    document.getElementById("mission-fail").style.display = "none";
    document.getElementById("mission-pass").style.display = "flex";
}

function calculateScore(level) {
    $("#score").text(0);
    //10 points were added for blowing up one plane and Deduct 2 points per bullet
    let score = (100 * level) - countIds * 2;
    if (score > (100 * level) * 0.6) {
        $("#score").text(score);
        $("#level-number").text(level + 1);
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
            objectCount = 15;
            break;
        case 3:
            objectCount = 20;
            break;
        case 4:
            objectCount = 25;
            break;
        default:
            objectCount = 10;
            break;
    }

    //create ship objects for new level
    createChildObjects(objectCount);
    refreshChildShipPositions(level,false);
    removeBullets();
})


//this method use to remove all bullets
function removeBullets() {
    for (let i = 1; i <= countIds; i++) {
        $("#bullet" + i).remove();
    }
    countIds = 0;
    clickCount = 0;
}