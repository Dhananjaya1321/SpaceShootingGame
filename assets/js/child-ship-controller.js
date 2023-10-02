setInterval(function () {
    if (gameStarted()) {
        console.log(ships.length)
        for (let i = 0; i < ships.length; i++) {
            let shipID = ships[i].getId();
            let newTopPX = $(shipID).css("top");
            let newTop = parseInt(newTopPX, 10);
            if (newTop >= heightAsNumber) {
                redAlarm(shipID);
            } else {
                newTop++;
                $(shipID).css("top", newTop + 'px');
            }
        }
    }
}, 50);/*child ship speed change*/

function redAlarm(shipID) {
    $(shipID).remove();
    for (let i = 0; i < ships.length; i++) {
        if (ships[i].getId() === shipID) {
            ships.splice(i, 1);
        }
    }
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
let levelTwoShipLeftPositions = [
    "200px",
    viewPortWidth / 2 - 100 + "px",
    viewPortWidth - 200 + "px",
    "350px",
    viewPortWidth - 350 + "px",
    "200px",
    viewPortWidth / 2 - 100 + "px",
    viewPortWidth - 200 + "px",
    viewPortWidth / 2 - 100 + "px",
    viewPortWidth / 2 - 250 + "px",
    viewPortWidth / 2 + 150 + "px",
    "100px",
    "250px",
    viewPortWidth - 100 + "px",
    viewPortWidth + 250 + "px"

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
    "-900px",
    "-900px"
];

function refreshChildShipPositions(level, oldLevel) {
    document.getElementById("selected-ship").style.left = parseInt($("#level-one").css("width"), 10) / 2 - 50 + 'px';
    document.getElementById("selected-ship").style.bottom = '0px';
    document.getElementById("level-one").style.overflow = 'hidden';
    document.getElementById("level-one").style.position = 'relative';
    document.getElementById("level-one").style.height = '100vh';
    bottomDisplay = 0;
    leftDisplay = parseInt(viewPortWidth, 10) / 2 - 50; //set to left position for bullets and move
    let shipRemoveCount;
    if (oldLevel) {
        shipRemoveCount = ships.length;
    } else {
        shipRemoveCount = ships.length - 5;
    }

    for (let i = 1; i <= shipRemoveCount; i++) {
        $("#child-ship" + i).remove();
    }

    for (let i = 1; i <= ships.length; i++) {
        let ship = document.createElement('img');
        ship.setAttribute("src", 'assets/images/child-ship.png');
        ship.id = "child-ship" + i;
        if (level === 1) {
            ship.style.top = levelOneShipTopPositions[i - 1];
            ship.style.left = levelOneShipLeftPositions[i - 1];
        } else {
            ship.style.top = levelTwoShipTopPositions[i - 1];
            ship.style.left = levelTwoShipLeftPositions[i - 1];
        }
        ship.style.width = '100px';
        ship.style.height = '100px';
        ship.style.position = 'absolute';
        ship.style.zIndex = '1';
        document.body.appendChild(ship);
    }
}