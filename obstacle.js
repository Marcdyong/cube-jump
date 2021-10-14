class Obstacle {
  constructor(startX, speedX, y, farbe) {
    this.x = startX;
    this.y = y;
    this.speedX = speedX;
    this.breite = 50;
    this.höhe = 50;
    this.farbe = farbe;
  }

  draw() {
    fill(this.farbe);
    rect(this.x, this.y, this.breite, this.höhe, 5);
  }

  move() {
    this.x = this.x - 5 - score / 20;
    // Aufgabe 5: bewege das Hindernis auf den Spieler zu
    // denke daran, die Bewegungsgeschwindigkeit mit "speedX" zu berechnen.
  }

  collide(player) {
   
    let playerY = player.y - player.jumpOffset;
    return (
      player.x < this.x + this.breite &&
      player.x + player.breite > this.x &&
      playerY < this.y + this.höhe &&
      playerY + player.höhe > this.y
    );
  }

  /*
  A.X1 < B.X2:	
A.X2 > B.X1:	
A.Y1 < B.Y2:	
A.Y2 > B.Y1:	
*/
  isOutsideCanvas() {
    if (obstacle.x <= 0) {
      return true;
    } else {
      return false;
    }
    // Aufgabe 7:
    // berechne, ob sich das Hindernis aktuell noch
    // auf dem Canvas befindet (return false) oder schon nach links verschwunden ist (return true).
    // Wir brauchen das, um neue Hindernisse zu erstellen und den Score hochzuzählen.

    return false;
  }
}
