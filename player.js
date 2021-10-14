class Player {
  constructor() {
    this.jumpOffset = 0;
    this.x = 50;
    this.state = "standing"; // standing, up, down
    this.counter = 0;
    this.breite = 50
    this.höhe = 50
    this.y = 250
  }

  draw() {
    if (this.counter % 2 == 0) {
      fill("red");
      triangle(
        75,
        this.y-30 - this.jumpOffset,
        65,
        this.y - this.jumpOffset,
        85,
        this.y - this.jumpOffset
      );
      fill("purple");
      circle(75, this.y -30 - this.jumpOffset, 10);
      fill("yellow");
    rect(this.x, this.y - this.jumpOffset, this.breite, this.höhe);
      fill("blue");
    rect(55, this.y+5 - this.jumpOffset, 12.5, 12.5);
    rect(82.5, this.y+5 - this.jumpOffset, 12.5, 12.5);
      fill("white");
    rect(55, this.y+30 - this.jumpOffset, 40, 10);
      fill("yellow")
    circle(74,this.y-15 - this.jumpOffset,4)
    circle(79,this.y-5 -this.jumpOffset,4)
    circle(71,this.y-6 -this.jumpOffset,4)
    } else {
      fill("red");
      triangle(
        75,
        this.y-40 - this.jumpOffset,
        65,
        this.y-10 - this.jumpOffset,
        85,
        this.y-10 - this.jumpOffset
      );
      fill("purple");
      circle(75, this.y-40 - this.jumpOffset, 10);
      fill("yellow");
    rect(this.x, this.y - this.jumpOffset, this.breite, this.höhe);
      fill("blue");
    rect(55, this.y-5 - this.jumpOffset, 12.5, 12.5);
    rect(82.5, this.y-5 - this.jumpOffset, 12.5, 12.5);
      fill("white");
    rect(55, this.y+25 - this.jumpOffset, 40, 10);
      fill("yellow")
    circle(74,this.y-25 - this.jumpOffset,4)
    circle(79,this.y-15 -this.jumpOffset,4)
    circle(71,this.y-16 -this.jumpOffset,4)
    }
    
    // Wird mehrmals pro Sekunde aufgerufen
    
    fill("black")
    text("jumps "+this.counter, 700, 40);
    
    fill("black");
  }

  // Aufgabe 1:
  startJump() {
    if (this.state == "standing") {
      this.state = "jumping";
    }
    // Setze den state für die Sprungphase.
  }
  
  duck(){
    this.y=270
    this.höhe=30
  }
  unduck(){
    this.y=250
    this.höhe=50
  }

  move() {
    if (this.state == "standing") {
      return;
    } else if (this.state == "jumping") {
      this.jumpOffset += 6;

      if (this.jumpOffset >= 150) {
        this.state = "falling";
      }
    } else if (this.state == "falling") {
      this.jumpOffset -= 6;

      if (this.jumpOffset <= 0) {
        this.state = "standing";
      }
      if (this.jumpOffset <= 0) {
        this.counter += 1;
      }
    }
    // Wird mehrmals pro Sekunde aufgerufen

    // Aufgabe 2:
    // Verändere this.jumpOffset je nach State
    // Bedenke den Wechsel zwischen den States (von "up" zu "down", von "down" zu "standing" ...)

    // 2.1. für state = "up"

    // 2.2. für state = "down"

    // Aufgabe 4: teste den Sprung
    // - kommt der Spieler automatisch wieder auf den Boden zurück?
    // - wenn nein: was kannst du dagegen machen?
  }
}
