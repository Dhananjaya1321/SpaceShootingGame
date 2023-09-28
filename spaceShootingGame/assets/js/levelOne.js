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
