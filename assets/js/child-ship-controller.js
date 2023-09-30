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
    for (let i = 0; i <ships.length; i++) {
        if (ships[i].getId()===shipID) {
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
    "650px"
];

let levelOneShipTopPositions = [
    " -100px"

];
let levelTwoShipLeftPositions = [
    "650px",
    "750px",
    "800px",
    "80px",
    viewPortWidth - 80 + "px",
    "500px",
    "250px",
    viewPortWidth - 250 + "px",
    "350px",
    viewPortWidth + 350 + "px",
    "450px",
    "350px",
    "200px",
    "8px",
    viewPortWidth - 80 + "px"
];

let levelTwoShipTopPositions = [
    "-100px",
    "-250px",
    "-350px",
    "-450px",
    "-550px",
    "-650px",
    "-750px",
    "-850px",
    "-950px",
    "-800px",
    "-700px",
    "-600px",
    "-500px",
    "-400px",
    "-300px"
];

function refreshChildShipPositions(level) {
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

    for (let i = 1; i <= level*10; i++) {
        let ship = document.createElement('img');
        ship.setAttribute("src", 'assets/images/child-ship.png');
        ship.id = "child-ship" + i;
        if (level===1){
            ship.style.top = levelOneShipTopPositions[i - 1];
            ship.style.left = levelOneShipLeftPositions[i - 1];
        }else {
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