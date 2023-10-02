let ships;

//This function is used to create a level object
function createChildObjects(count) {
    ships = [];
    for (let i = 1; i <= count; i++) {
        let ship = new ChildShip();
        ship.setId("#child-ship" + i);
        ships.push(ship);
    }
}

//This function is a fully encapsulated class used to set and get ship IDs
function ChildShip() {
    let __id;
    this.setId = function (id) {
        __id = id;
    }
    this.getId = function () {
        return __id;
    }
}
