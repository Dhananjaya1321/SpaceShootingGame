setInterval(function () {
    if (gameStarted()) {
        console.log(levelOneShips.length)
        for (let i = 0; i < levelOneShips.length; i++) {
            let shipID = levelOneShips[i].getId();
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

function ChildShip() {
    let __id;
    let __status;
    this.setId = function (id) {
        __id = id;
    }
    this.getId = function () {
        return __id;
    }
    this.setStatus = function (status) {
        __status = status;
    }
    this.getStatus = function () {
        return __status;
    }
}

function redAlarm(shipID) {
    $(shipID).remove();
    for (let i = 0; i <levelOneShips.length; i++) {
        if (levelOneShips[i].getId()===shipID) {
            levelOneShips.splice(i, 1);
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
    value = false;
    countIds = 0;
    clickCount = 0;
});

$("#mission-fail>button:nth-child(2)").click(function () {
    document.getElementById("status").style.display = "none";
    document.getElementById("level-one").style.display = "flex";
    document.getElementById("home").style.display = "none";
    refreshChildShipPositions();
    countIds = 0;
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
    document.getElementById("selected-ship").style.left = parseInt($("#level-one").css("width"), 10) / 2 - 50 + 'px';
    document.getElementById("selected-ship").style.bottom = '0px';
    document.getElementById("level-one").style.overflow = 'hidden';
    document.getElementById("level-one").style.position = 'relative';
    document.getElementById("level-one").style.height = '100vh';
    bottomDisplay = 0;
    leftDisplay = parseInt(viewPortWidth, 10) / 2 - 50; //set to left position for bullets and move
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