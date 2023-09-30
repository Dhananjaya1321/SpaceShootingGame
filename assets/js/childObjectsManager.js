let ships;
function createChildObjects(count) {
    ships = [];
    for (let i = 1; i <= count; i++) {
        let ship = new ChildShip();
        ship.setStatus(1);
        ship.setId("#child-ship" + i);
        ships.push(ship);
    }
}

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
