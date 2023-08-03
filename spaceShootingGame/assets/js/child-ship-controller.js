setInterval(function () {
    if (gameStarted()) {
        for (let i = 1; i <= 10; i++) {
            let newTopPX = $("#child-ship" + i).css("top");
            let newTop = parseInt(newTopPX, 10);
            if (newTop >= heightAsNumber) {
                redAlarm("#child-ship" + i);
            } else {
                newTop++;
                $("#child-ship" + i).css("top", newTop + 'px');
            }
        }
    }
}, 50);/*child ship speed change*/

function redAlarm(shipID) {
    $(shipID).remove();
    missionFail();
    setTimeout(function () {
        $("#level-one").css('height', '99vh');
        $("#level-one").css('boxShadow', '0px 5px 13px 6px red');
    }, 100);
    setTimeout(function () {
        $("#level-one").css('height', '100vh');
        $("#level-one").css('boxShadow', 'none');
    }, 500);
}

function missionFail() {
    document.getElementById("status").style.display = "flex";
    document.getElementById("mission-fail").style.display = "flex";
    document.getElementById("mission-pass").style.display = "none";
}

$("#mission-fail>button:nth-child(3)").click(function () {
    document.getElementById("status").style.display = "none";
    document.getElementById("level-one").style.display = "none";
    document.getElementById("home").style.display = "flex";
    refreshChildShipPositions();
});


let levelOneShipLeftPositions = [
    "650px",
    "650px",
    "800px",
    "80px",
    viewPortWidth - 80 + "px",
    "500px",
    "250px",
    viewPortWidth - 250 + "px",
    "350px",
    viewPortWidth + 350 + "px"
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

function refreshChildShipPositions() {
    value=false;
    countIds=0;
    clickCount=0;
    for (let i = 1; i <= 10; i++) {
        $("#child-ship" + i).remove();
    }
    for (let i = 1; i <= 10; i++) {
        let ship = document.createElement('img');
        ship.setAttribute("src", 'assets/images/child-ship.png');
        ship.id = "child-ship" + i;
        ship.style.top = levelOneShipTopPositions[i - 1];
        ship.style.left = levelOneShipLeftPositions[i - 1];
        ship.style.width = '100px';
        ship.style.height = '100px';
        ship.style.position = 'absolute';
        ship.style.zIndex = '1';
        document.body.appendChild(ship);
    }
}