let ships;
function createChildObjects() {
    ships = [];
    for (let i = 1; i <= 10; i++) {
        let ship = new ChildShip();
        ship.setStatus(1);
        ship.setId("#child-ship" + i);
        ships.push(ship);
    }
}
